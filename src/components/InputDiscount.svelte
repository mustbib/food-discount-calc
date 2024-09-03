<script lang="ts">
    export let discount:number;
    export let fee:number;
</script>

<div class="flex flex-col md:flex-row w-full md:space-x-2">
    <div class="flex flex-col flex-auto text-left space-y-2">
        <label for="" class="font-semibold">Total Amount of Discount</label>
        <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-lg">
            <div class="input-group-shim">🤑</div>
            <input type="number" placeholder="Total amount of discount" bind:value={discount} />
        </div>
    </div>

    <div class="flex flex-col flex-auto text-left space-y-2">
        <label for="" class="font-semibold">Total Services Fee</label>
        <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-lg">
            <div class="input-group-shim">💸</div>
            <input type="number" placeholder="Total amount of Services Fee" bind:value={fee} />
        </div>
    </div>
</div>