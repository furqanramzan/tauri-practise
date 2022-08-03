<script lang="ts">
	import {
		Button,
		ButtonGroup,
		ButtonGroupItem,
		ProgressCircular,
		MaterialApp
	} from 'svelte-materialify';
	import { softwareOptions } from '@/data';
	import { createFile } from '@/utils/nixFile';

	let loading = false;
	let softwaresSelected: number[] = softwareOptions.map((_x, index) => index);

	$: softwares = softwareOptions
		.filter((_x, index) => softwaresSelected.includes(index))
		.map((x) => x.value);

	const onSubmit = async () => {
		loading = true;
		const nixPath = await createFile(softwares);
		console.log({nixPath});
		
		loading = false;
	};
</script>

<MaterialApp>
	<form on:submit|preventDefault={onSubmit}>
		<ButtonGroup
			class="flex flex-wrap mb-3"
			multiple
			mandatory
			activeClass="primary-color white-text"
			bind:value={softwaresSelected}
		>
			{#each softwareOptions as option}
				<ButtonGroupItem>{option.label}</ButtonGroupItem>
			{/each}
		</ButtonGroup>
		<Button class="primary-color" type="submit" disabled={loading}>
			{#if loading}
				<ProgressCircular indeterminate color="success" />
			{:else}
				Install
			{/if}
		</Button>
	</form>
</MaterialApp>
