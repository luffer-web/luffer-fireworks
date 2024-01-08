<script>
	import { _ } from 'svelte-i18n';
	import Testimony from '../../components/Testimony/Testimony.svelte';
	import { testimonies } from '$lib/data/testimonies';

	const aux = testimonies.slice(0);
</script>

<section>
	<h2>{$_('testimonies_title')}</h2>
	<div>
		{#each testimonies as _testimony, i}
			<Testimony img={aux[i].img} user={aux[i].name} testimony={aux[i].testimony} />
		{/each}
	</div>
</section>

<style>
	h2 {
		margin-top: 8rem;
		font-size: var(--fs-big);
		text-align: center;
		color: var(--light-100);
	}

	div {
		display: flex;
		margin-top: 2rem;
		overflow: scroll;
	}

	@media screen and (min-width: 768px) {
		h2 {
			font-size: var(--fs-very-big);
		}
	}

	@media screen and (min-width: 1024px) {
		h2 {
			font-size: var(--fs-very-big);
		}

		div {
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			margin-top: 4rem;
			margin-left: auto;
			margin-right: auto;
			width: 90%;
			overflow: initial;
		}
	}
</style>
