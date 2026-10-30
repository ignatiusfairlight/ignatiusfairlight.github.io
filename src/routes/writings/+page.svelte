<script lang="ts">
    let { data } = $props();

    const tableData = $derived(data.tableData);
</script>

<div class="card p-4 table-wrap">
    <table class="table caption-bottom">
        <tbody class="[&>tr]:hover:preset-tonal-brand">
            {#each tableData as row (row.title)}
                <tr>
                    <td>{row.title}</td>
                    <td class="text-right">{row.date}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
