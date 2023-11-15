<script>
	import { PAGES } from '$lib/ROUTES';
	import { IconArrowUpLeft } from 'ui/icons';
	import { navigationOpen } from '$lib/stores/common';
	import HeaderMenuButton from './HeaderMenuButton.svelte';
	import HeaderSocials from './HeaderSocials.svelte';
	import { Button } from '$lib/components/ui/button';
	import HeaderLink from './HeaderLink.svelte';
</script>

<header>
	<div
		class="container flex items-center justify-between gap-4 lg:my-6 lg:grid lg:grid-cols-[auto,1fr,auto,auto] lg:gap-16"
		style="view-transition-name: header;"
	>
		<a class="font-title text-2xl lg:border-r lg:py-2 lg:pr-12" href={PAGES.lang_lg()}>Header</a>
		<div
			class="bg-card lg:0 fixed inset-0 flex flex-col justify-between gap-12 p-4 transition-transform duration-500 lg:relative lg:flex-row {$navigationOpen
				? 'translate-x-0'
				: '-translate-x-full'} lg:translate-x-0 lg:bg-transparent"
		>
			<div
				class="lg:justfiy-start flex flex-grow flex-col items-center justify-center gap-12 lg:flex-grow-0 lg:flex-row"
			>
				<HeaderLink href={PAGES.lang_lg_features()}>Features</HeaderLink>
				<HeaderLink href={PAGES.lang_lg_pricing()}>Pricing</HeaderLink>
				<HeaderLink href={PAGES.lang_lg_about()}>About</HeaderLink>
			</div>
			<HeaderSocials />
		</div>
		<div class="ml-auto flex items-center gap-2 lg:ml-0">
			<Button class="flex gap-1 text-xs lg:gap-2 lg:rounded-full lg:text-sm">
				Join Waitlist
				<div class="h-4 w-4">
					<IconArrowUpLeft />
				</div>
			</Button>
			<HeaderMenuButton />
		</div>
	</div>
</header>
