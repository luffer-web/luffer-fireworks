<script>
	import { _ } from 'svelte-i18n';
	import bg from '$lib/images/bg.jpg';
	import fw1 from '$lib/images/firework1.jpg';
	import fw2 from '$lib/images/firework2.jpg';
	import fw3 from '$lib/images/firework3.jpg';
	import fw5 from '$lib/images/firework5.jpg';
	import fw6 from '$lib/images/firework6.jpg';
	import { register } from 'swiper/element/bundle';

	register();
</script>

<section>
	<h2>{$_('gallery_title')}</h2>
	<swiper-container
		class="swiper-container"
		pagination="true"
		pagination-clickable="true"
		navigation="true"
		loop="true"
		bulletClass=".bullet"
	>
		<swiper-slide><img src={bg} alt="firework" /></swiper-slide>
		<swiper-slide><img src={fw1} alt="firework" /></swiper-slide>
		<swiper-slide><img src={fw2} alt="firework" /></swiper-slide>
		<swiper-slide><img src={fw3} alt="firework" /></swiper-slide>
		<swiper-slide><img src={fw5} alt="firework" /></swiper-slide>
		<swiper-slide><img src={fw6} alt="firework" /></swiper-slide>
	</swiper-container>
	<div class="swiper-pagination"></div>
</section>

<style>
	section {
		color: var(--light-100);
	}

	h2 {
		margin-top: 8rem;
		font-size: var(--fs-big);
		text-align: center;
		color: var(--light-100);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.swiper-container {
		margin-top: 2rem;
		margin-right: auto;
		margin-left: auto;
		width: 90%;
		height: 75vh;
		border-radius: 2rem;
		overflow: hidden;
	}

	swiper-container::part(bullet-active) {
		background-color: var(--light-100);
	}

	swiper-container::part(bullet) {
		background-color: var(--light-100);
		opacity: 50%;
	}

	swiper-container::part(button-prev),
	swiper-container::part(button-next) {
		padding: 0.25rem;
		width: 20px;
		height: 20px;
		border-radius: 100%;
		color: var(--dark-100);
		background-color: var(--light-50);
	}

	@media screen and (min-width: 768px) {
		h2 {
			font-size: var(--fs-very-big);
		}
	}

	@media screen and (min-width: 1024px) {
		section {
			width: 50%;
		}

		h2 {
			margin-top: 0;
		}

		.swiper-container {
			place-self: center;
		}
	}
</style>
