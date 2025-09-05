
<script setup>
import { ref, onMounted } from 'vue'
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3'

const photos = ref([]);

onMounted(async () => {
  const s3Client = new S3Client({
    region: import.meta.env.VITE_AWS_REGION,
    credentials: {
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY
    }
  })
  
  try {
    const folderPath = 'gallery'
    const listObjectsParams = {
      Bucket: 'oompah-brass-gallery',
      Prefix: folderPath,
    };

    const data = await s3Client.send(new ListObjectsV2Command(listObjectsParams));

    photos.value = data.Contents
      .filter((obj) => obj.Size > 0)
      .map((obj) => ({
      url: `https://${listObjectsParams.Bucket}.s3.amazonaws.com/${obj.Key}`,
      lastModified: obj.LastModified,
      name: obj.Key
      }));

      photos.value.sort((a, b) => b.lastModified - a.lastModified);
  } catch (error) {
    console.error('Error listing objects:', error);
  }
})

</script>

<template>
    <div class="container mx-auto text-center px-4 py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <img
          v-for="photo in photos"
          :key="photo.name" 
          :data-src="photo.url" 
          alt="Gallery" 
          class="rounded-xl shadow-sm shadow-gray-700 w-full object-cover 
          h-80 mx-auto border border-gray-800 lazyload"
        >
      </div>
    </div>
</template>
