import { Context, PersistedState } from 'runed';
import type { UseBoolean } from '$lib/hooks/use-boolean.svelte';

export const commandContext = new Context<UseBoolean>('command-menu-context');

export class V3BannerContext {
	dismissed: PersistedState<boolean>;
	constructor() {
		this.dismissed = new PersistedState('v3-banner-dismissed', false);
	}

	dismiss() {
		this.dismissed.current = true;
	}

	get isDismissed() {
		return this.dismissed.current;
	}
}

export const V3BannerCtx = new Context<V3BannerContext>('v3-banner-context');

export function setupV3Banner() {
	return V3BannerCtx.set(new V3BannerContext());
}
