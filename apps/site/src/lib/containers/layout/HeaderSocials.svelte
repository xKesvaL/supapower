<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { IconBrandInstagram, IconBrandTiktok, IconBrandTwitter } from 'ui/icons';
</script>

<div class="flex justify-center gap-4">
	<Button
		size="icon"
		class="lg:text-muted-foreground/75 hover:text-foreground bg-transparent p-2 transition-colors hover:bg-transparent"
	>
		<IconBrandInstagram />
	</Button>
	<Button
		size="icon"
		class="lg:text-muted-foreground/75 hover:text-foreground bg-transparent p-2 transition-colors hover:bg-transparent"
	>
		<IconBrandTiktok />
	</Button>
	<Button
		size="icon"
		class="lg:text-muted-foreground/75 hover:text-foreground bg-transparent p-2 transition-colors hover:bg-transparent"
	>
		<IconBrandTwitter />
	</Button>
</div>
