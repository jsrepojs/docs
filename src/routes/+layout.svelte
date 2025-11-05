<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/oxanium';
	import '@fontsource-variable/jetbrains-mono';
	import { UmamiAnalytics } from '@lukulent/svelte-umami';
	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/components/site/header.svelte';
	import { dev } from '$app/environment';
	import Footer from '$lib/components/site/footer.svelte';
	import { commandContext, setupV3Banner } from '$lib/context';
	import { UseBoolean } from '$lib/hooks/use-boolean.svelte';

	let { data, children } = $props();

	commandContext.set(new UseBoolean(false));

	const bannerContext = setupV3Banner();
</script>

<!-- only inject analytics in production -->
{#if !dev}
	<UmamiAnalytics
		srcURL="https://cloud.umami.is/script.js"
		websiteID="ffe1e15d-153b-47ab-99c7-9defc1302c9f"
	/>
{/if}
<ModeWatcher />

<div style="--header-height: {bannerContext.isDismissed ? '64px' : 'calc(64px + 3rem)'}; --aside-width: 14rem; --sidebar-width: 14rem;">
	{@render children()}

	<Footer />

	<!-- fun markup ordering sh*t -->
	<Header stars={data.stars} />
</div>
