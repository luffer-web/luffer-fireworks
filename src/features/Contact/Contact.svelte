<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faLocationDot, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
	import {
		faFacebook,
		faTwitter,
		faInstagram,
		faLinkedin
	} from '@fortawesome/free-brands-svg-icons';
	import { form, field } from 'svelte-forms';
	import { required, email } from 'svelte-forms/validators';

	const name = field('name', '', [required()]);
	const mail = field('mail', '', [required(), email()]);
	const subject = field('subject', '', []);
	const message = field('message', '', [required()]);
	const myForm = form(name, mail, subject, message);

	const handleSubmit = (e: SubmitEvent) => {
		e.preventDefault();
		name.validate();
		mail.validate();
		subject.validate();
		message.validate();
	};
</script>

<section>
	<h2>{$_('contact_title')}</h2>
	<form on:submit={handleSubmit}>
		<input type="text" placeholder={$_('form_name')} bind:value={$name.value} />
		{#if $myForm.hasError('name.required')}
			<p class="error">{$_('error_name_required')}</p>
		{/if}
		<input placeholder="Email" bind:value={$mail.value} />
		{#if $myForm.hasError('mail.required')}
			<p class="error">{$_('error_email_required')}</p>
		{/if}
		{#if $myForm.hasError('mail.not_an_email')}
			<p class="error">{$_('error_email_incorrect')}</p>
		{/if}
		<input type="text" placeholder={$_('form_subject')} bind:value={$subject.value} />
		<textarea rows="5" placeholder={$_('form_message')} bind:value={$message.value}></textarea>
		{#if $myForm.hasError('message.required')}
			<p class="error">{$_('error_message_required')}</p>
		{/if}
		<button>{$_('form_button')}</button>
	</form>
	<div class="info-container">
		<div class="info">
			<Fa icon={faLocationDot} style="font-size: 2rem; width: 2rem" />
			<p>False Building, 123, 1st floor False Street 1234, False City</p>
		</div>
		<div class="info">
			<Fa icon={faEnvelope} style="font-size: 2rem; width: 2rem" />
			<p>luffer@fireworks.com</p>
		</div>
		<div class="info">
			<Fa icon={faPhone} style="font-size: 2rem; width: 2rem" />
			<p>111-2222-333</p>
		</div>
		<div class="info">
			<Fa icon={faClock} style="font-size: 2rem; width: 2rem" />
			<p>{$_('days')}: 10:00AM - 07:00PM hs</p>
		</div>
	</div>
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1485.6002381552198!2d-87.651038!3d41.867033!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s
0x880e2ce522ef1a63%3A0x8c72492ba7108a09!2s999%20Roosevelt%20Rd%2C%20Chicago%2C%20IL%2060608%2C%20USA!5e0!3m2!1sen!2sar!4v1686930305340!5m2!1sen!2sar"
		loading="lazy"
		title="google map"
	></iframe>
	<div class="social">
		<div><Fa icon={faFacebook} /></div>
		<div><Fa icon={faLinkedin} /></div>
		<div><Fa icon={faTwitter} /></div>
		<div><Fa icon={faInstagram} /></div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--light-100);
	}

	h2 {
		margin-top: 8rem;
		font-size: var(--fs-big);
		text-align: center;
		color: var(--light-100);
	}

	form {
		margin-top: 2rem;
		margin-right: auto;
		margin-left: auto;
		margin-bottom: 2rem;
		text-align: center;
		width: 90%;
	}

	input,
	textarea,
	button {
		margin-top: 2rem;
		width: 100%;
		height: 48px;
		border: none;
		border-radius: 1rem;
		font-size: var(--fs-normal);
	}

	button {
		transition: background-color 0.25s ease-in;
	}

	p {
		margin: 0 auto;
		width: 90%;
		font-weight: bold;
		color: var(--light-100);
	}

	textarea {
		height: auto;
	}

	iframe {
		margin-top: 3rem;
		height: 300px;
		border-radius: 2rem;
	}

	button:hover {
		background: var(--primary-100);
	}

	.info-container {
		display: flex;
		flex-direction: column;
		margin-top: 2rem;
		width: 90%;
	}

	.info {
		display: flex;
		align-items: center;
		gap: 2rem;
		margin-top: 2rem;
		width: 100%;
	}

	.error {
		font-weight: bold;
		color: var(--error-100);
	}

	.social {
		display: flex;
		justify-content: center;
		margin-top: 2rem;
		font-size: 2rem;
		gap: 2rem;
	}

	.social div:hover {
		color: var(--primary-100) !important;
	}

	::placeholder {
		padding-left: 1rem;
		padding-top: 1rem;
	}

	@media screen and (min-width: 768px) {
		button {
			width: 20%;
		}

		h2 {
			font-size: var(--fs-very-big);
		}

		iframe {
			width: 75%;
		}

		.social {
			font-size: 3rem;
		}
	}

	@media screen and (min-width: 1280px) {
		section {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
		}

		h2 {
			width: 100%;
		}

		form {
			width: 90%;
		}

		p {
			font-size: var(--fs-normal);
		}

		iframe {
			width: 50%;
		}

		.info-container {
			display: flex;
			align-items: center;
			margin-top: 2rem;
			width: 40%;
		}

		.info {
			font-size: var(--fs-normal);
		}

		.social {
			gap: 2rem;
			margin-top: 4rem;
		}
	}
</style>
