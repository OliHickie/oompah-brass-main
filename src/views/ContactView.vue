<script setup>
import { ref } from 'vue'
import InputField from '@/components/form/InputField.vue'
import Label from '@/components/form/Label.vue'
import FormGroup from '@/components/form/FormGroup.vue'
import Button from '@/components/PinkButton.vue'
import Error from '@/components/form/Error.vue'
import emailjs from '@emailjs/browser'
import CheckIcon from '@/components/icons/CheckIcon.vue'
import ContactLinks from '@/components/ContactLinks.vue'

const errors = ref({
  contactError: false,
  nameError: false,
  messageError: false
})
const form = ref({
  name: null,
  email: null,
  number: null,
  date: null,
  message: null
})
const emailSent = ref(false)
const isSubmitting = ref(false)
const sendError = ref(false)

const checkForm = () => {
  if (isSubmitting.value) return

  if (!form.value.email && !form.value.number) {
    errors.value.contactError = true;
  } else {
    errors.value.contactError = false;
  }
  if (!form.value.name) {
    errors.value.nameError = true;
  } else {
    errors.value.nameError = false;
  }
  if (!form.value.message) {
    errors.value.messageError = true;
  } else {
    errors.value.messageError = false;
  }
  if (!errors.value.contactError && !errors.value.nameError && !errors.value.messageError) {
    sendMessage()
  }
}

const sendMessage = () => {
  if (isSubmitting.value) return

  const formData = document.getElementById('form')
  isSubmitting.value = true
  sendError.value = false

  emailjs
    .sendForm(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_KEY, formData, {
      publicKey: import.meta.env.VITE_PUBLIC_KEY,
    })
    .then(
      () => {
        emailSent.value = true;
        console.log('SUCCESS!');
      },
      (error) => {
        isSubmitting.value = false
        sendError.value = true
        console.log('FAILED...', import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_KEY, formData, {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        });
        console.log('FAILED...', error.text);
      },
    );
}

const resetForm = () => {
  form.value.name = null
  form.value.email = null
  form.value.number = null
  form.value.date = null
  form.value.message = null
}

</script>

<template>
  <div class=" lg:py-16 lg:flex">
    <div class="lg:w-1/2 p-8">
      <img 
        src="../assets/images/oompah-brass-durham-group.jpg" 
        alt="Oompah Brass performing with a bride at a wedding" 
        class="object-cover w-full lg:w-auto lg:h-full lazyload"
      >
    </div>
    <div v-if="!emailSent" class="lg:w-1/2 p-4 lg:p-12">
      <div class="text-center mb-4">
        <h1 class="font-header text-2xl lg:text-4xl uppercase">Get in touch</h1>
        <p class="text-md lg:text-xl my-4">We'd love to hear from you!</p>
        <ContactLinks />
      </div>
      <form id="form" class="max-w-lg mx-auto" @submit.prevent="checkForm">
        <FormGroup>
          <Label for="contactName" required>Name</Label>
          <Error v-if="errors.nameError">Please provide a contact name</Error>
          <InputField type="text" id="contactName" name="contactName" v-model="form.name" />
        </FormGroup>
        <FormGroup>
          <Label for="contactEmail">Email</Label>
          <InputField type="email" id="contactEmail" name="contactEmail" v-model="form.email" />
        </FormGroup>
        <FormGroup>
          <Label for="contactNumber">Contact number</Label>
          <InputField id="contactNumber" name="contactNumber" v-model="form.number" />
        </FormGroup>
        <FormGroup>
          <Label for="contactDate">Date of event</Label>
          <InputField type="date" id="contactDate" name="contactDate" v-model="form.date" />
        </FormGroup>
        <FormGroup>
          <Label for="contactMessage" required>Message</Label>
          <Error v-if="errors.messageError">Please provide a message</Error>
          <textarea v-model="form.message" id="contactMessage" name="contactMessage" class="h-32 rounded px-4 py-1 text-black w-full" placeholder="If requesting a quote, please provide as much information as you can including timings, venue and any special requests"></textarea>
        </FormGroup>
        <div class="text-center mt-8">
          <Error v-if="errors.contactError">Please provide either an email or phone number so we may contact you</Error>
          <Error v-if="sendError">Something went wrong sending your message. Please try again.</Error>
          <Button type="submit" :disabled="isSubmitting">
            <span class="inline-flex items-center justify-center gap-2">
              <svg v-if="isSubmitting" class="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? 'Sending...' : 'Submit' }}
            </span>
          </Button>
        </div>
      </form>
    </div>
    <div v-else class="lg:w-1/2 p-4 lg:p-12 space-y-4 text-center">
      <CheckIcon class="mx-auto w-12 aspect-square text-pink" />
      <h1 class="font-header text-4xl uppercase">Thank you!</h1>
      <p class="text-xl my-4">We'll be in touch soon</p>
      <ContactLinks />
    </div>
  </div>
</template>
