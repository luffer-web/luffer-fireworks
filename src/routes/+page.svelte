<script>
	import About from '../features/About/About.svelte';
	import Contact from '../features/Contact/Contact.svelte';
	import Copyright from '../features/Copyright/Copyright.svelte';
	import Gallery from '../features/Gallery/Gallery.svelte';
	import Header from '../features/Header/Header.svelte';
	import Home from '../features/Home/Home.svelte';
	import Loader from '../features/Loader/Loader.svelte';
	import Testimonies from '../features/Testimonies/Testimonies.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Loader />
<Header />
<Home />
<div>
	<About />
	<Gallery />
</div>
<Testimonies />
<Contact />
<Copyright />

<style>
	@media screen and (min-width: 1024px) {
		div {
			display: flex;
			height: 100vh;
		}
	}
</style>
