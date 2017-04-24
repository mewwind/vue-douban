<template>
  <div class="wrapper">
    <mu-row>
      <mu-col width="33" tablet="25" desktip="20" v-for="subject in subjects">
        <mu-card>
          <mu-card-media>
            <img :src="subject.images.large"/>
          </mu-card-media>
          <mu-card-title :title="subject.title" titleClass="card-title"/>
          <span class="star-rating" v-if="subject.rating.average>0">
            <star-rating :stars="subject.rating.stars" :rating="subject.rating.average" :max="subject.rating.max"></star-rating>
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
  .mu-card div.card-title{
    font-size:14px;
    line-height:15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-top: 5px;
  }
  .mu-card .mu-card-title-container{
    padding:2px;
  }
  .mu-card {
    padding:5px;
  }
</style>
