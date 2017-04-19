<template>
	<div id="tab">
		<mu-drawer class="drawer" :open="open" :docked="docked" @close="toggle()">
			<div class="drawer-pic">
				<div class="title" style="font-size: 32px;">Web Doub</div>
				<div class="description" style="font-size: 16px;color:#e0e0e0;">一个移动端豆瓣 Web 应用</div>
			</div>
			<mu-list value="movie" @itemClick="docked ? '' : toggle()" @change="change">
				<mu-list-item value="movie" title="电影"/>
					<mu-icon value="movie"/>
				</mu-list-item>
				<mu-list-item value="book" title="图书"/>
					<mu-icon value="book"/>
				</mu-list-item>
				<mu-list-item value="music" title="音乐"/>
					<mu-icon value="music_note"/>
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
	background: gray;
	padding: 70px;
	text-align: center;
	color: white;
}
.mu-icon {
  margin-right: 12px;
  margin-bottom: 12px;
}
</style>