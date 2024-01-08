<script lang="ts">
	export let img: string;
	export let user: string;
	export let testimony: string;
</script>

<div>
	<img src={img} alt="user profile" width="75" height="75" />
	<h3>{user}</h3>
	<p>{testimony}</p>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-width: 200px;
		margin-left: 2rem;
		text-align: center;
	}

	img {
		min-width: 75px;
		min-height: 75px;
		border-radius: 100%;
		object-fit: cover;
		object-position: center;
	}

	h3,
	p {
		color: var(--light-100);
		width: 100%;
	}

	h3 {
		margin-top: 1rem;
	}

	p {
		margin-top: 2rem;
	}

	@media screen and (min-width: 768px) {
		div {
			min-width: 300px;
		}

		h3,
		p {
			font-size: var(--fs-medium);
		}
	}

	@media screen and (min-width: 1024px) {
		div {
			margin-left: 0;
			margin-top: 3rem;
		}

		p {
			margin-top: 1rem;
		}
	}
</style>
