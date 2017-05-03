<template>
  <div id="search">
    <mu-appbar>
      <mu-icon-button class='bar-icon' icon='arrow_back' slot="left" @click="gotoTab()"/>
      <input v-model.trim="q" :value="text" @keyup.enter="searchq" autofocus=true :underlineShow='false' class="bar-text" hintText="请输入关键字"/>
      <mu-icon-button icon="close" slot="right"/>
    </mu-appbar>
    <div class="search-result">
      <movie-card :subject="subject" v-for="subject in subjects" :key="subject.id">
      </movie-card>
      <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {mapState} from 'vuex';
  import * as type from '../../store/mutation-types'
  import MovieCard from '../../components/MovieCard'
  export default {
    data() {
      return {
        q: ''
      }
    },
    components: {
      'movie-card': MovieCard
    },
    watch: {
      '$route': 'queryMovie'
    },
    computed: mapState({
      subjects: state => state.movie.query.subjects,
      text: state => state.movie.query.text
    }),
    methods: {
      gotoTab() {
        this.$router.go(-1);
      },
      searchq() {
        console.log('aaa');
        this.$router.push({name: 'SearchMovie', query: {name: this.q}});
      },
      queryMovie() {
        this.$store.dispatch(type.QUERY_MOVIES, {name: this.$route.query.name});
      }
    }
  }
</script>
<style lang="less">
.bar-text{
    font-size: 16px;
    height: 100%;
    position: relative;
    margin-bottom: 0px;
    border: none;
    background-color: transparent;
    -moz-appearance: none;
    -webkit-appearance: none;
    &:focus{
      border: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      outline: none;
    }
}
.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
  .mu-icon {
    color: #FFF;
  }
}
</style>
