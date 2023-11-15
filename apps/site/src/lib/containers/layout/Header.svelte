<script>
	import { PAGES } from '$lib/ROUTES';
	import { Button } from '$lib/components/ui/button';
	import { ArrowUpLeft } from '$lib/icons';
	import { navigationOpen } from '$lib/stores/common';
	import HeaderMenuButton from './HeaderMenuButton.svelte';
	import HeaderSocials from './HeaderSocials.svelte';
</script>

<header>
	<div
		class="container flex items-center justify-between gap-4 lg:my-6 lg:grid lg:grid-cols-[auto,1fr,auto,auto] lg:gap-16"
	>
		<a class="font-title text-2xl lg:border-r lg:py-2 lg:pr-12" href={PAGES.lang_lg()}>Header</a>
		<div
			class="fixed inset-0 flex flex-col justify-between gap-12 bg-card transition-transform duration-500 lg:relative lg:flex-row {$navigationOpen
				? 'translate-x-0'
				: '-translate-x-full'} lg:translate-x-0 lg:bg-transparent"
		>
			<div class="flex flex-col items-center gap-12 lg:flex-row">
				<a href="">Features</a>
				<a href="">Features</a>
				<a href="">Pricing</a>
			</div>
			<HeaderSocials />
		</div>
		<div class="ml-auto flex items-center gap-2 lg:ml-0">
			<Button class="flex gap-1 text-xs lg:gap-2 lg:rounded-full lg:text-sm">
				Join Waitlist
				<div class="h-4 w-4">
					<ArrowUpLeft />
				</div>
			</Button>
			<HeaderMenuButton />
		</div>
	</div>
</header>
