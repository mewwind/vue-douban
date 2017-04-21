<template>
<div id="tab">
  <mu-drawer class="drawer" :open="open" :docked="docked" @close="toggle()">
    <description></description>
    <mu-list :value="value" @itemClick="docked ? '' : toggle()" @change="change">
      <mu-list-item value="movie" title="电影">
        <mu-icon slot="left" value="movie" />
      </mu-list-item>
      <mu-list-item value="book" title="图书">
        <mu-icon slot="left" value="book" />
      </mu-list-item>
      <mu-list-item value="music" title="音乐">
        <mu-icon slot="left" value="music_note" />
      </mu-list-item>
      <mu-divider shallowInset/>
      <mu-list-item value="about" title="关于">
        <mu-icon slot='left' value="info" />
      </mu-list-item>
    </mu-list>
  </mu-drawer>
  <mu-paper :class="{'main-container': true, 'nav-hide': !open}" :zDepth="2">
    <mu-appbar title="电影">
      <mu-icon-button slot="left" icon="menu" @click="toggle(true)"></mu-icon-button>
      <mu-icon-button slot="right" icon="search" @click="gotoSearch()"></mu-icon-button>
    </mu-appbar>
    <mu-tabs :lineClass="lineClass" :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" icon="movie" title="正在上映"/>
      <mu-tab value="tab2" icon="lightbulb_outline" title="即将上映..."/>
    </mu-tabs>
		</mu-paper>
	</div>
</template>

<script>
import description from '../../components/Description'
export default {
  data() {
    return {
      value: 'movie',
      open: false,
      docked: true,
      activeTab: 'tab1',
      lineClass: '#706f77'
    }
  },
  components: {description},
  methods: {
    toggle(flag) {
      this.open = !this.open;
      this.docked = !!flag;
    },
    change(value) {
      this.value = value;
      switch(value) {
        case 'movie':
          break;
        case 'book':
          break;
        case 'music':
          break;
        case 'about':
          this.$router.push({name: 'About'});
          break;
      }
    },
    handleTabChange(val) {
      this.activeTab = val
    }
  }
}
</script>
<style lang="css">
#tab{
	width:100%;
	height: 100%;
  transition: all .45s cubic-bezier(.23,1,.32,1);
}
.drawer{
	color: #212121;
  background:#f5f5f5;
}
.main-container{
  left: 256px;
  position: relative;
}
.main-container.nav-hide{
  left: 0px;
}
@media (max-width: 993px) {
  .main-container{
    left: 0;
  }
}
</style>
