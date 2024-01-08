<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section>
	<h1>{$_('title_first')}<br />{$_('title_second')}<br />{$_('title_third')}</h1>
</section>

<style>
	section {
		height: 100vh;
		display: flex;
		align-items: center;
	}

	h1 {
		margin: 0 auto;
		width: fit-content;
		font-size: var(--fs-very-big);
		color: var(--light-100);
	}

	@media screen and (min-width: 768px) {
		h1 {
			font-size: var(--fs-xs);
		}
	}

	@media screen and (min-width: 1024px) {
		h1 {
			text-shadow: 0px 0px 15px var(--light-100);
		}
	}

	@media screen and (min-width: 1536px) {
		h1 {
			font-size: var(--fs-xxs);
		}
	}
</style>
