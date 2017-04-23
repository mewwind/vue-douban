<template>
  <div class="wrapper">
    <mu-row>
      <mu-col width="33" tablet="25" desktip="20" v-for="subject in subjects">
        <mu-card>
          <mu-card-media>
            <img :src="subject.images.large"/>
          </mu-card-media>
          <mu-card-title :title="subject.title"/>
          <span v-if="subject.rating.average>0">
            <star-rating :stars="subject.rating.stars" :rating="subject.rating.average"></star-rating>
          </span>
          <span v-else>暂无评分</span>
        </mu-card>
      </mu-col>
    </mu-row>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import * as type from '../../store/mutation-types';
  import star from '../../components/Star';
  export default {
    created() {
      this.fetchData()
    },
    props: ['tabName'],
    watch: {
      "$route" : "fetchData"
    },
    computed: mapState({
      subjects(state) {
        return state.movie[this.tabName].subjects
      }
    }),
    components: {
      "star-rating": star
    },
    methods: {
      fetchData() {
        var subjects = this.$store.state.movie[this.tabName].subjects;
        if (subjects && subjects.length == 0) {
          this.$store.dispatch(type.FETCH_MOVIES, {type: this.tabName})
        }
      }
    }
  } 
</script>
<style type="text/css">
  
</style>
