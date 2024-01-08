<script lang="ts">
	import loader from '$lib/images/loader.svg';
	import { onMount } from 'svelte';

	let section: HTMLElement;

	onMount(() => {
		setTimeout(() => (section.style.top = '-100%'), 2000);
	});
</script>

<section bind:this={section}>
	<span>Luffer's Fireworks</span>
	<img src={loader} alt="loader" />
	<span>Loading...</span>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100svh;
		background-image: linear-gradient(var(--dark-50), var(--dark-50));
		backdrop-filter: blur(1rem);
		transition: top 1s ease-in-out;
	}

	span {
		font-size: 2rem;
		font-weight: bold;
		color: var(--light-100);
	}
</style>
