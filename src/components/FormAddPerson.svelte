<script lang="ts">
    import { v4 as uuidv4 } from 'uuid';   
    import type { personItem } from '../type';
    import { fade } from 'svelte/transition';

    let inputs: personItem[] = [];

    export let participants: personItem[] = [];

    export let amountPerson:number;
    export let sumBill:number;

    function addInput() {
        inputs = [...inputs, { id: uuidv4(), name: '', bill: 0 }];
    }

    function removeInput(id: any) {
        inputs = inputs.filter(input => input.id !== id);
    }

    $: {
        participants = inputs;
        amountPerson = inputs.length;
        sumBill= inputs.reduce((sum, input) => sum + input.bill || 0, 0);
    }

  
</script>

<div class="flex w-full flex-col space-y-4 mt-2">
    <div class="w-full flex justify-end">
        <button on:click={addInput}>➕ <span class="underline underline-offset-2">Add Participant</span></button>
    </div>

    {#each inputs as input (input.id)}
    <div class="flex flex-col md:flex-row space-x-2 space-y-2 items-end" in:fade={{ duration: 100 }}>
        <div class="flex flex-col flex-auto text-left space-y-2 w-full">
            <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-lg">
                <div class="input-group-shim">😎</div>
                <input type="text" placeholder="Name" bind:value={input.name} />
            </div>
        </div>
        <div class="flex flex-col flex-auto text-left space-y-2 w-full">
            <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-lg">
                <div class="input-group-shim">💲Bill</div>
                <input type="number" placeholder="Bill" bind:value={input.bill} />
            </div>
        </div>
        <button on:click={() => removeInput(input.id)} class="">🗑️ <span class="underline underline-offset-2">Delete</span></button>
    </div>
    {/each}
</div>