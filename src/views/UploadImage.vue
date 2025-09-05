<script setup>
import { ref } from 'vue'
import Label from '@/components/form/Label.vue'
import Input from '@/components/form/InputField.vue'
import Button from '../components/PinkButton.vue'
import Error from '@/components/form/Error.vue'
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const passwordEntered = ref(false)
const showError = ref(false)
const password = ref('')

const checkPassword = () => {
  if (password.value === import.meta.env.VITE_UPLOAD_IMAGE_PASSWORD) {
    passwordEntered.value = true
    showError.value = false
  } else {
    showError.value = true
  }
}

const name = ref('')
const file = ref(null)

const handleFileChange = (event) => {
  // Capture the file object when the file input changes
  file.value = event.target.files[0];
};

const uploadImage = async () => {
  // Check if a file is selected
  if (!file.value) {
    console.error("No file selected.");
    return;
  }

  const s3Client = new S3Client({
    region: import.meta.env.VITE_AWS_REGION,
    credentials: {
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY
    }
  });

  try {
    const fileName = name.value || file.value.name; // Get the file name
    const fileContent = await file.value.arrayBuffer(); // Read the file content

    // Specify bucket name and folder (key prefix) where you want to upload the file
    const params = {
      Bucket: 'oompah-brass-gallery',
      Key: "gallery/" + fileName, // Specify the folder path and file name
      Body: fileContent, // Use file content as Body
      ContentType: 'application/octet-stream',
    };

    // Upload file to S3
    const uploadResult = await s3Client.send(new PutObjectCommand(params));
    console.log("Successfully uploaded file:", uploadResult);
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};



</script>

<template>
  <div class="h-screen pt-40">
    <div class="container mx-auto">
      <form v-if="!passwordEntered" class="text-center flex flex-col items-center space-y-6">
        <Label for="password">Enter the password to upload images</Label>
        <Error v-if="showError">Incorrect password</Error>
        <Input type="password" id="password" v-model="password" />
        <Button @click.prevent="checkPassword()">Submit</Button>
      </form>
      <form v-else class="text-center flex flex-col items-center space-y-6">
        <Label for="name">Name <small class="block italic">Remember to add number at beginning for ordering</small></Label>
        <Input type="text" id="name" v-model="name" placeholder="e.g. 2-oompah-brass-NAME" />

        <Label for="file">Select an image to upload</Label>
        <div class="p-2 bg-white">
          <Input type="file" id="file" @change="handleFileChange" />
        </div>
        <Button @click.prevent="uploadImage" :class="{ 'opacity-50 hover:opacity-70' : !file}">Upload</Button>
      </form>
    </div>
  </div>
</template>