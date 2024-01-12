<script setup>
import { ref } from 'vue'

const responseText = ref('')

const form = ref({
	name: '',
	email: '',
	phone: '',
	message: '',
})

const submitContact = async () => {
	const formData = new FormData()
	formData.append('entry.2005620554', form.value.name)
	formData.append('entry.1045781291', form.value.email)
	formData.append('entry.1166974658', form.value.phone)
	formData.append('entry.839337160', form.value.message)

	try {
		const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSepLXmHGb43R6Jdql8bMTnFocnV8sxzj0VwSn86ROuXdeLk3w/formResponse', {
			method: 'POST',
			mode: 'no-cors',
			body: formData,
		})

		form.value = {
			name: '',
			email: '',
			phone: '',
			message: '',
		}

		responseText.value = `<div class="px-4 py-2 bg-red-200 ring-2 ring-offset-2 ring-offset-gray-950 ring-red-700 border border-red-500 text-red-700 mb-4">Thank you for your response...</div>`
	} catch (e) {
		console.log(e)
	}
}
</script>
<template>
	<div>
		<div id="responsemessage" v-html="responseText"></div>
		<form id="contactForm" @submit.prevent="submitContact">
			<div class="w-full md:w-1/2">
				<label for="name" class="block text-white">Name <span class="text-red-400">*</span></label>
				<input type="text" id="name" v-model="form.name" class="mt-2 w-full bg-gray-800 text-white ring-2 ring-gray-700 ring-offset-2 ring-offset-gray-950 focus:border-gray-600 focus:ring focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-950" autocomplete="name" required />
			</div>
			<div class="mt-6 w-full md:w-1/2">
				<label for="email" class="block text-white">Email <span class="text-red-400">*</span></label>
				<input type="email" id="email" v-model="form.email" class="mt-2 w-full bg-gray-800 text-white ring-2 ring-gray-700 ring-offset-2 ring-offset-gray-950 focus:border-gray-600 focus:ring focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-950" autocomplete="email" required />
			</div>
			<div class="mt-6 w-full md:w-1/2">
				<label for="phone" class="block text-white">Phone</label>
				<input type="text" id="phone" v-model="form.phone" class="mt-2 w-full bg-gray-800 text-white ring-2 ring-gray-700 ring-offset-2 ring-offset-gray-950 focus:border-gray-600 focus:ring focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-950" autocomplete="phone" />
			</div>
			<div class="mt-6">
				<label for="message" class="block text-white">Message</label>
				<textarea id="message" v-model="form.message" rows="5" class="mt-2 w-full bg-gray-800 text-white ring-2 ring-gray-700 ring-offset-2 ring-offset-gray-950 focus:border-gray-600 focus:ring focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-950"></textarea>
			</div>
			<div class="mt-6">
				<button type="submit" class="bg-gray-800 px-20 py-2 text-sm font-bold uppercase text-white ring-2 ring-gray-700 ring-offset-2 ring-offset-gray-950 hover:bg-gray-700">Send Message</button>
			</div>
		</form>
	</div>
</template>
