<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	let {
		value = $bindable(''),
		ref = $bindable(null),
		class: className,
		...restProps
	}: CommandPrimitive.RootProps = $props();
</script>

<CommandPrimitive.Root
	class={cn('flex h-full w-full flex-col rounded-md bg-popover text-popover-foreground', className)}
	bind:ref
	bind:value
	{...restProps}
/>
