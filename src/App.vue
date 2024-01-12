<script setup></script>
<template>
	<div class="min-h-screen bg-gray-950">
		<div class="bg-blur bg-gray-900">
			<div class="container mx-auto flex items-center">
				<router-link class="p-6 text-white hover:bg-gray-950" to="/">Home</router-link>
				<router-link class="p-6 text-white hover:bg-gray-950" to="/about">About</router-link>
				<router-link class="p-6 text-white hover:bg-gray-950" to="/contact">Contact</router-link>
			</div>
		</div>
		<div class="container mx-auto px-4 py-6 md:px-6">
			<router-view></router-view>
		</div>
	</div>
</template>
