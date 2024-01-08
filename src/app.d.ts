// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module 'Fa';

declare module 'svelte-fa/src/fa.svelte' {
	export * from 'svelte-fa/src';
}

declare module '@fortawesome/free-solid-svg-icons/index' {
	export * from '@fortawesome/free-solid-svg-icons';
}
