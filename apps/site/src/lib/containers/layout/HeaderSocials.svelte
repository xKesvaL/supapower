<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { BrandInstagram, BrandTiktok, BrandTwitter } from '$lib/icons/';
</script>

<div class="flex gap-4">
	<Button
		size="icon"
		class="bg-transparent p-2 text-muted-foreground/75 hover:bg-transparent hover:text-foreground"
	>
		<BrandInstagram />
	</Button>
	<Button
		size="icon"
		class="bg-transparent p-2 text-muted-foreground/75 hover:bg-transparent hover:text-foreground"
	>
		<BrandTiktok />
	</Button>
	<Button
		size="icon"
		class="bg-transparent p-2 text-muted-foreground/75 hover:bg-transparent hover:text-foreground"
	>
		<BrandTwitter />
	</Button>
</div>
