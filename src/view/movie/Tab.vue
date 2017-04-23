<template>
<div id="tab">
  <mu-drawer class="drawer" :open="open" :docked="docked" @close="toggle()">
    <description></description>
    <mu-list :value="value" @itemClick="docked ? '' : toggle()" @change="itemChange">
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
  <mu-paper :zDepth="2">
    <mu-appbar title="电影">
      <mu-icon-button slot="left" icon="menu" @click="toggle(true)"></mu-icon-button>
      <mu-icon-button slot="right" icon="search" @click="gotoSearch()"></mu-icon-button>
    </mu-appbar>
    <mu-tabs :value="activeTab" @change="tabChange">
      <mu-tab value="in_theaters" icon="movie" title="正在上映"/>
      <mu-tab value="comming_soon" icon="lightbulb_outline" title="即将上映..."/>
    </mu-tabs>
	</mu-paper>
  <movie-list :tab-name="activeTab"></movie-list>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import description from '../../components/Description'
import MovieList from './MovieList'
import * as type from '../../store/mutation-types'

export default {
  data() {
    return {
      value: 'movie',
      open: false,
      docked: true
    }
  },
  computed: mapState({
    activeTab : state=>state.movie.tab
  }),
  components: {
    description,
    "movie-list": MovieList,
  },
  methods: {
    toggle(flag) {
      this.open = !this.open;
      this.docked = !flag;
    },
    itemChange(value) {
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
    tabChange(val) {
      this.$store.dispatch(type.CHANGE_MOVIES_TAB, val)
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
@media (max-width: 993px) {
  .main-container{
    left: 0;
  }
}
</style>
