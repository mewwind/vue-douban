<template>
	<div>
		<mu-appbar title="关于">
			<mu-icon-button icon="arrow_back" slot="left" @click="back"/>
		</mu-appbar>
		<description></description>
    <mu-divider />
    <mu-paper>
    	
    </mu-paper>
	</div>
</template>
<script>
	import description from "../../components/Description"
	export default{
		name: 'About',
		components: {description},
	}
</script>
<style lang="css">
	
</style>