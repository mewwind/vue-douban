<template>
  <div class="wrapper">
    <mu-row>
      <mu-col width="33" tablet="25" desktop="20" v-for="subject in subjects" :key="subject.id">
      <router-link :to="{name: 'MovieSubject', params: {id: subject.id}}">
        <mu-card>
          <mu-card-media :style="'background-image: url('+subject.images.large+')'">
          </mu-card-media>
          <mu-card-title :title="subject.title" titleClass="card-title"/>
          <span class="star-rating" v-if="subject.rating.average>0">
            <star-rating :size="13" :stars="subject.rating.stars" :rating="subject.rating.average" :max="subject.rating.max"></star-rating>
          </span>
          <span v-else>暂无评分</span>
        </mu-card>
      </router-link>
      </mu-col>
    </mu-row>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import * as type from '../../store/mutation-types';
  import star from '../../components/Star';
  export default {
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    created() {
      this.fetchData()
    },
    props: ['tabName'],
    watch: {
      "$route"(to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    beforeUpdate() {
      this.fetchData()
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
  .wrapper .mu-card {
    margin:5px;
  }
  .wrapper .mu-card-media{
    width:100%;
    background-size:cover;
    padding-top:140%;
  }
  .wrapper .row{
    justify-content: flex-start;
  }
</style>
