<script lang="ts">
	import { locale, getLocaleFromNavigator } from 'svelte-i18n';
	import icon from '$lib/images/icon.svg';
	import { onMount } from 'svelte';

	let language: string;

	const handleLocale = (lang: string) => {
		locale.set(lang);
		language = lang;
	};

	onMount(() => {
		language = getLocaleFromNavigator()!.slice(0, 2);
	});
</script>

<header>
	<div class="logo">
		<img src={icon} alt="webpage icon" width="50px" />
		<h2>Fireworks</h2>
	</div>
	<div>
		<button class={language === 'en' ? 'selected' : ''} on:click={() => handleLocale('en')}
			>EN</button
		>
		&nbsp;
		<button>|</button>
		&nbsp;
		<button class={language === 'es' ? 'selected' : ''} on:click={() => handleLocale('es')}
			>ES</button
		>
	</div>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: absolute;
		width: 100%;
		padding: 1rem;
	}

	h2 {
		color: var(--primary-100);
		font-size: var(--fs-small);
	}

	button {
		border: none;
		color: var(--light-100);
		background-color: transparent;
		font-size: var(--fs-small);
	}

	button:hover {
		color: var(--primary-100);
		cursor: pointer;
	}

	.logo {
		display: flex;
		align-items: center;
	}

	.selected {
		color: var(--primary-100);
	}
</style>
