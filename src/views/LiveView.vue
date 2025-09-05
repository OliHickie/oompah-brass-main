<script setup>
import { ref, onMounted } from 'vue';

const events = ref([]);
const calendarId = import.meta.env.VITE_CALENDAR_ID;
const apiKey = import.meta.env.VITE_CALENDAR_KEY;

const fetchEvents = async () => {
  const timeMin = new Date().toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${timeMin}&singleEvents=true&orderBy=startTime`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    events.value = data.items.splice(0, 20) || [];
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

const formatTime = (eventTime) => {
  if (!eventTime?.dateTime) return "";

  const date = new Date(eventTime.dateTime);
  return date.toLocaleString("en-GB", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
};

const formatDate = (eventDate) => {
  if (!eventDate?.dateTime) return "TBA";

  const date = new Date(eventDate.dateTime);
  const weekday = date.toLocaleString("en-GB", {weekday: "short"});
  const day = date.toLocaleString("en-GB", {day: "2-digit"});
  const month = date.toLocaleString("en-GB", {month: "short"});
  return {weekday, day, month};
}


const getMapsLink = (location) => {
  return `https://www.google.com/maps/search/${encodeURIComponent(location)}`;
};

onMounted(fetchEvents);
</script>

<template>
  <div class="relative">
    <!-- Sticky Wrapper -->
    <div class="absolute  top-0 left-0 w-full h-full">
      <div class="sticky -mt-40 top-0 h-screen">
        <div class="h-20"></div>
        <img 
          src="../assets/images/oompah-brass-patrick-stage.jpg" 
          alt="Background" 
          class="h-full w-full object-cover"
        />
      </div>
    </div>

    <!-- Content Section -->
    <div class="relative z-10 py-16 max-w-2xl mx-auto px-4">
      <h2 class="text-2xl font-bold mb-4 text-white">Upcoming Gigs</h2>
      <ul v-if="events.length" class="space-y-4">
        <li 
          v-for="event in events" 
          :key="event.id" 
          class="p-4 border border-gray-300 rounded-lg flex space-x-4 bg-black bg-opacity-80 backdrop-blur-sm"
        >
          <div class="w-16 flex flex-col items-center justify-center font-header text-pink">
            <p class="text-lg uppercase tracking-widest">
              {{ formatDate(event.start).weekday }}
            </p>
            <p class="text-5xl font-bold leading-8">
              {{ formatDate(event.start).day }}
            </p>
            <p class="text-lg uppercase">
              {{ formatDate(event.start).month }}
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold">{{ event.summary }}</h3>
            <p class="text-gray-300">{{ formatTime(event.start) }} - {{ formatTime(event.end) }}</p>
            <a 
              v-if="event.location"
              :href="getMapsLink(event.location)"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-300 hover:text-pink"
            >
              📍 {{ event.location }}
            </a>
          </div>
        </li>
        
      </ul>

      <p class="mt-8 bg-black bg-opacity-80 backdrop-blur-sm p-4 rounded-lg text-gray-300 text-lg text-center">
          For future gigs, or to enquire about a date, please <router-link to="/contact" class="text-pink underline">get in touch</router-link>.
        </p>
    </div>
  </div>
</template>

