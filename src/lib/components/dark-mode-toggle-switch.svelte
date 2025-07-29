<script lang="ts">
    import { Switch } from "$lib/components/ui/switch/index.js";
    import { toggleMode } from 'mode-watcher';
</script>

<Switch onclick={toggleMode} />