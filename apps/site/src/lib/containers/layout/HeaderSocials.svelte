<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { BrandInstagram, BrandTiktok, BrandTwitter } from 'ui/icons';
</script>

<div class="flex gap-4">
	<Button
		size="icon"
		class="text-muted-foreground/75 hover:text-foreground bg-transparent p-2 transition-colors hover:bg-transparent"
	>
		<BrandInstagram />
	</Button>
	<Button
		size="icon"
		class="text-muted-foreground/75 hover:text-foreground bg-transparent p-2 transition-colors hover:bg-transparent"
	>
		<BrandTiktok />
	</Button>
	<Button
		size="icon"
		class="text-muted-foreground/75 hover:text-foreground bg-transparent p-2 transition-colors hover:bg-transparent"
	>
		<BrandTwitter />
	</Button>
</div>
