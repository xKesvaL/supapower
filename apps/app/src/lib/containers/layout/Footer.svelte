<script>
  import FooterBar from "./FooterBar.svelte";
  import FooterContent from "./FooterContent.svelte";
</script>

<footer class="relative -z-10 flex flex-col">
  <div class="border-t border-t-border/40">
    <FooterContent />
  </div>
  <FooterBar />
</footer>
