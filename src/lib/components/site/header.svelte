<script lang="ts">
	import { LightSwitch } from '$lib/components/ui/light-switch';
	import NavMenu from './docs/nav-menu.svelte';
	import StarButton from './star-button.svelte';
	import { Button } from '$lib/components/ui/button';
	import { ArrowUpRight, Menu, X } from '@lucide/svelte';
	import { Dialog } from 'bits-ui';
	import { active } from '$lib/actions/active.svelte';
	import { commandContext, V3BannerCtx } from '$lib/context';
	import { shortcut } from '$lib/actions/shortcut.svelte';
	import Search from './docs/search/search.svelte';
	import { Kbd } from '../ui/kbd';
	import { page } from '$app/state';
	import { cn } from '$lib/utils/utils';

	let { stars }: { stars: Promise<number> } = $props();

	let menuOpen = $state(false);

	const commandState = commandContext.get();

	const bannerContext = V3BannerCtx.get();
</script>

<svelte:window use:shortcut={{ key: 'k', ctrl: true, callback: commandState.setTrue }} />

<Search />

{#if !bannerContext.isDismissed}
	<div
		class="fixed left-0 top-0 z-[100] flex h-12 w-full items-center justify-center gap-1 bg-primary text-center text-primary-foreground"
	>
		jsrepo v3 is in beta!
		<a href="https://v3.jsrepo.dev" class="text-primary-foreground underline">
			Check out the new docs <ArrowUpRight class="inline size-4" />
		</a>
		<Button class="right-2 absolute" variant="ghost" size="icon" onclick={() => bannerContext.dismiss()}>
			<X class="size-4" />
		</Button>
	</div>
{/if}

<header
	class={cn(
		'fixed left-0 top-0 z-10 flex h-[--header-height] w-full items-center border-b bg-background',
		{
			'h-[calc(var(--header-height)-3rem)] top-12': !bannerContext.isDismissed
		}
	)}
>
	<div class="container flex items-center justify-between">
		<div class="flex place-items-center gap-6">
			<a
				href="/"
				class="flex h-9 w-fit place-items-center justify-center bg-primary p-1 font-mono font-bold text-primary-foreground"
			>
				jsrepo
			</a>
			<div class="hidden place-content-center gap-4 md:flex">
				<a
					href="/docs"
					class="text-sm text-muted-foreground transition-all hover:text-foreground data-[active=true]:text-foreground"
					use:active={{ activeForSubdirectories: true }}
				>
					Docs
				</a>
				<a
					href="/registries"
					class="text-sm text-muted-foreground transition-all hover:text-foreground data-[active=true]:text-foreground"
					use:active={{ activeForSubdirectories: true }}
				>
					Registries
				</a>
				<a
					href="/demos"
					class="text-sm text-muted-foreground transition-all hover:text-foreground data-[active=true]:text-foreground"
					use:active={{ activeForSubdirectories: true }}
				>
					Demos
				</a>
				<a
					href="https://jsrepo.com"
					class="text-sm text-muted-foreground transition-all hover:text-foreground data-[active=true]:text-foreground"
				>
					jsrepo.com
					<ArrowUpRight class="inline size-4" />
				</a>
			</div>
		</div>

		{#if page.url.pathname.startsWith('/docs')}
			<div class="hidden lg:block">
				<Button
					variant="outline"
					class="flex place-items-center gap-8 bg-popover px-2 text-muted-foreground"
					size="sm"
					onclick={commandState.setTrue}
				>
					Search documentation... <Kbd size="xs" class="bg-popover">⌘ K</Kbd>
				</Button>
			</div>
		{/if}

		<div class="flex place-items-center gap-2">
			<StarButton {stars} class="hidden h-9 md:flex" />
			<LightSwitch class="hidden size-9 md:flex" />
			<Dialog.Root bind:open={menuOpen}>
				<Dialog.Trigger>
					{#snippet child({ props })}
						<Button {...props} class="md:hidden" size="icon" variant="ghost">
							{#if menuOpen}
								<X />
							{:else}
								<Menu />
							{/if}
						</Button>
					{/snippet}
				</Dialog.Trigger>
				<NavMenu bind:open={menuOpen} />
			</Dialog.Root>
		</div>
	</div>
</header>
