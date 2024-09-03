<script lang="ts">
	
	import Discount from "../components/InputDiscount.svelte";
	import Participant from "../components/FormAddPerson.svelte";
	import Result from "../components/resultCount.svelte";
	import type { personItem } from "../type";

	let participants: personItem[] = [];

	let resultDiscount:number = 0;
	let discount:number;
	let fee:number;

	let amountPerson:number;
	let sumBill:number;

	$: resultDiscount = discount - fee;

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-6 w-full text-center flex flex-col items-center p-4 md:p-0">
		<h2 class="h2">Welcome to <br><span class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone">Food Delivery Discount Calculator</span> 🍕</h2>

		<div class="w-full flex flex-col md:flex-row space-y-4 md:space-x-6">
			<div class="basis-1/2">
				<Discount bind:discount bind:fee />
				<Participant bind:amountPerson bind:participants bind:sumBill />
			</div>

			<div class="basis-1/2 space-y-2">
				<Result bind:amountPerson bind:resultDiscount bind:participants bind:sumBill />
			</div>
		</div>
		
		<div class="space-y-2">
			<p>🤖 Follow github :</p>
			<a href="https://github.com/habibmstf" target="_blank"><code class="code">https://github.com/habibmstf</code></a>
		</div>
	</div>
</div>
