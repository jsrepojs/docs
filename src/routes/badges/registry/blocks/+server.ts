import { getProviderState, getProviderToken } from '$lib/ts/registry';
import { error } from '@sveltejs/kit';
import { fetchManifest, selectProvider } from 'jsrepo';
import { makeBadge } from 'badge-maker';

export const GET = async ({ url }) => {
	const registryUrl = url.searchParams.get('url');

	if (registryUrl == null) throw error(400, 'Expected `url` search param');

	const provider = selectProvider(registryUrl);

	if (!provider) throw error(400, 'Invalid registry url');

	const state = await getProviderState(registryUrl, provider, { cache: true });

	const manifest = (await fetchManifest(state, { token: getProviderToken(state.provider) })).match(
		(v) => v,
		(err) => {
			throw error(400, `Error fetching manifest: ${err}`);
		}
	);

	const svg = makeBadge({
		label: 'jsrepo',
		labelColor: '#f7df1e',
		message: `${manifest.categories.flatMap((c) => c.blocks).length} blocks`
	});

	return new Response(svg, {
		headers: {
			'Content-Type': 'image/svg+xml'
		}
	});
};
