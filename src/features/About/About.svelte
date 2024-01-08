<script>
	import { _ } from 'svelte-i18n';
</script>

<section>
	<h2>{$_('about_title')}</h2>
	<p>{$_('about_description')}</p>
</section>

<style>
	h2 {
		text-align: center;
		font-size: var(--fs-big);
		color: var(--light-100);
	}

	p {
		margin-top: 4rem;
		margin-right: auto;
		margin-left: auto;
		width: 90%;
		text-align: center;
		font-size: var(--fs-normal);
		color: var(--light-100);
	}

	@media screen and (min-width: 768px) {
		h2 {
			font-size: var(--fs-very-big);
		}

		p {
			font-size: var(--fs-medium);
		}
	}

	@media screen and (min-width: 1024px) {
		section {
			width: 50%;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			height: 100%;
		}

		h2 {
			width: 100%;
		}

		p {
			align-self: start;
			margin-top: 0;
			width: 75%;
		}
	}

	@media screen and (min-width: 1280px) {
		p {
			font-size: var(--fs-big);
		}
	}
</style>
