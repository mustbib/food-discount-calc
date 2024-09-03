<script lang="ts">
    import { getToastStore } from '@skeletonlabs/skeleton';
    import type { ToastSettings } from '@skeletonlabs/skeleton';
    const toastStore = getToastStore();
	
    import type { personItem } from "../type";
    export let amountPerson:number;
    export let resultDiscount:number;
    export let sumBill:number;

    export let participants: personItem[];

    let discount: number;

    function countDiscount(bill:number) {
        discount = (resultDiscount * ((bill * 100) / sumBill)) / 100;
		discount = isNaN(discount) ? 0 : discount;
		return Math.ceil(bill - discount);
    }

    import html2canvas from "html2canvas";

	async function captureImage() {
        let message:string;
		let imageDataURL:string;
        const elementToCapture:any = document.getElementById("captureElement");

        try {
            const canvas = await html2canvas(elementToCapture);
            imageDataURL = canvas.toDataURL();
            console.log('success capture');

			let utc = new Date().toLocaleDateString().slice(0,10).replace(/-/g,'/');
            const a = document.createElement("a");
            a.href = imageDataURL;
            a.download = "foodisc-"+utc+"-"+Date.now()+".png";
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            message = "Image downloaded."
            console.log(message);

            const t: ToastSettings = {
                message: message,
                timeout: 2000
            };
            toastStore.trigger(t);
        } catch (error) {
            message = "Error capturing image.";
            console.error(message, error);

            const t: ToastSettings = {
                message: message,
                timeout: 2000
            };
            toastStore.trigger(t);
        }
    }
    
</script>
<div class="card p-4 w-full flex flex-row">
    <div class="basis-1/3 p-2">
        <span class="font-bold text-xl">{amountPerson}</span><br>
        <span>Person</span>
    </div>
    <div class="basis-1/3 p-2 divider-vertical">
        <span class="font-bold text-xl">Rp. {resultDiscount = isNaN(resultDiscount) ? 0 : resultDiscount}</span><br>
        <span>Total Discount</span>
    </div>
    <div class="basis-1/3 p-2 divider-vertical">
        <span class="font-bold text-xl">Rp. {sumBill}</span><br>
        <span>Total Payment</span>
    </div>
</div>

{#if participants.length !== 0}
<div class="card w-full flex flex-col">
    <div id="captureElement" class="dark:bg-slate-800">
        <div class="card-header p-4">
            <h1 class="text-xl underline decoration-2 decoration-sky-500">Receipt</h1>
        </div>
        <div class="card-body w-full flex flex-col p-8">
            {#each participants as item (item)}
            {#if item.name !== ''}
            <div class="flex flex-row py-2 justify-between items-center">
                <div class="text-left">
                    <h2>{item.name}</h2>
                    <p class="text-slate-400">Tagihan asal Rp. {item.bill}</p>
                </div>
                <div>
                    <span class="font-bold">Rp. {countDiscount(item.bill)}</span>
                </div>
            </div>
            {/if}
            {/each}
        </div>
    </div>
    <div class="card-footer p-4 dark:bg-slate-800">
        <button on:click={captureImage} class="btn btn-sm variant-filled">
            <span>🖼️</span>
            <span>Save as PNG</span>
        </button>
    </div>
</div>
{/if}