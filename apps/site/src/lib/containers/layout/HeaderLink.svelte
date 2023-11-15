<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;

	let pathWithoutLang = $page.url.pathname.replace(`/${$page.params.lang}`, '') || '/';
	$: pathWithoutLang = $page.url.pathname.replace(`/${$page.params.lang}`, '') || '/';
</script>

<a
	class="after:bg-primary relative after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:origin-right after:scale-x-0 after:rounded-full after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-left hover:after:scale-x-100 {pathWithoutLang.startsWith(
		href
	)
		? 'after:scale-x-100'
		: ''}"
	{href}
>
	<slot />
</a>
