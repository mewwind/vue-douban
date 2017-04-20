<template>
	<div id="tab">
		<mu-drawer class="drawer" :open="open" :docked="docked" @close="toggle()">
			<div class="drawer-pic">
				<div class="title" style="font-size: 28px;">Web Douban</div>
				<div class="description" style="font-size: 16px;color:white;">一个移动端豆瓣 Web 应用</div>
			</div>
			<mu-list :value="value" @itemClick="docked ? '' : toggle()" @change="change">
				<mu-list-item :value="movie" title="电影">
					<mu-icon slot="left" value="movie"/>
				</mu-list-item>
				<mu-list-item :value="book" title="图书">
					<mu-icon slot="left" value="book"/>
				</mu-list-item>
				<mu-list-item :value="music" title="音乐">
					<mu-icon slot="left" value="music_note"/>
				</mu-list-item>
				<mu-divider shallowInset/>
				<mu-list-item :value="about" title="关于">
					<mu-icon slot='left' value="info" />
				</mu-list-item>
	      	</mu-list>
		</mu-drawer>
		<mu-paper :zDepth="2">
			<mu-appbar title="电影">
				<mu-icon-button slot="left" icon="menu" @click="toggle(true)"></mu-icon-button>
			</mu-appbar>
		</mu-paper>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: "movie",
				open: false,
				docked: true
			}
		},
		methods: {
			toggle(flag) {
				this.open = !this.open;
				this.docked = !flag;
			},
			change(value) {
				this.value = value;
			}
		}
	}
</script>
<style lang="css">
#tab{
	width:100%;
	height: 100%;
}
.drawer{
	color: #212121;
    background:#f5f5f5;
}
.drawer-pic{
	background: #4fbfb5;
	padding: 70px 0;
	text-align: center;
	color: white;
}
</style>