<template>
  <div style="position: relative">
    <mu-icon-button class='icon-back' icon='arrow_back' slot="left" @click='goBack()' />
    <div class="image-wrap" :style="'background-image: url('+movie.images.large+')'">
    </div>
    <div class="title-border">
      <div class="title-info">
        <div class="title-image">
          <img :src='movie.images.large' />
        </div>
        <div class="title-text">
          <p>{{movie.title}}</p>
          <p>{{movie.rating.average}}</p>
        </div>
      </div>
    </div>

    <div class="star">
      <span class="star-rating" v-if="movie.rating.average>0">
        <star-rating :stars="movie.rating.stars" :rating="movie.rating.average" :max="movie.rating.max"></star-rating>
      </span>
    </div>
    <div class="info">
      <p class="info-content"><span class="info-title">原名</span><span class="info-text">{{movie.original_title}}</span></p>
      <p class="info-content"><span class="info-title">类型</span><span class="info-text">{{movie.genres | arr2string}}</span></p>
      <p class="info-content"><span class="info-title">年代</span><span class="info-text">{{movie.year}}</span></p>
      <p class="info-content"><span class="info-title">地区</span><span class="info-text">{{movie.countries | arr2string}}</span></p>
      <p class="info-content"><span class="info-title">又名</span><span class="info-text">{{movie.aka | arr2string}}</span></p>
      <p class="info-content"><span class="info-title">想看人数</span><span class="info-text">{{movie.wish_count}}</span></p>
      <p class="info-content"><span class="info-title">看过人数</span><span class="info-text">{{movie.collect_count}}</span></p>
      <p class="info-content"><span class="info-title">评分人数</span><span class="info-text">{{movie.ratings_count}}</span></p>
      <p class="info-content"><span class="info-title">短评数量</span><span class="info-text">{{movie.comments_count}}</span></p>
      <p class="info-content"><span class="info-title">影评数量</span><span class="info-text">{{movie.reviews_count}}</span></p>
    </div>
    <div class="summary">{{movie.summary}}</div>
    <div class="author">
      <p class="author-type">导演</p>
      <mu-row>
        <mu-col class='author-elem' width="50" tablet="33" desktop="25" v-for="subject in movie.directors" :key="subject.id">
          <mu-paper>
            <div class='author-wrap'>
              <div class="author-image">
                <div class='author-padding' :style="'background-image: url('+(subject.avatars && subject.avatars.large || '')+')'"></div>
              </div>
              <div class="author-name">{{subject.name}}</div>
            </div>
          </mu-paper>
        </mu-col>
      </mu-row>
    </div>
    <div class="author">
      <p class="author-type">主演</p>
      <mu-row>
        <mu-col class='author-elem' width="50" tablet="33" desktop="25" v-for="subject in movie.casts" :key="subject.id">
          <mu-paper>
            <div class='author-wrap'>
              <div class="author-image">
                <div class='author-padding' :style="'background-image: url('+(subject.avatars && subject.avatars.large || '')+')'"></div>
              </div>
              <div class="author-name">{{subject.name}}</div>
            </div>
          </mu-paper>
        </mu-col>

      </mu-row>
    </div>

  </div>
</template>
<script type="text/javascript">
  import {mapState} from 'vuex';
  import star from '../../components/Star';
  import * as type from '../../store/mutation-types';
  export default{
    created() {
      this.fetchData()
    },
    computed: mapState({
      movie(state) {
        return state.movie.subjects[this.$route.params.id]
      }
    }),
    components: {
      "star-rating": star
    },
    watch: {
      $route: 'fetchData'
    },
    methods: {
      fetchData() {
        const id = this.$route.params.id;
        const subject = this.$store.state.movie.subjects[id];
        console.log('subject' + subject);
        if (!subject) {
          this.$store.dispatch(type.FETCH_MOVIE_SUBJECT, {id: id})
        }
      }
    }

  }
</script>
<style lang="css" scoped>
.image-wrap{
  width: 100%;
  padding-top: 80%;
  background: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  overflow: hidden;
}
.icon-back{
  position: absolute;
  top: 0;
  color: #fff;
  text-shadow: 0px 0px 3px #ddd;
}
.title-border{
  padding: 20px;
  box-shadow: 0 0px 15px 5px #ccc;
}
.title-info{
  position: relative;
}
.title-image{
  width: 30%;
  position: absolute;
  bottom: 0;
}
.title-image>img{
  width: 100%;
  display: block;
}
.title-text{
  position: relative;
  font-size: 16px;
  font-weight: 600;
  padding: 4px 0 4px 30%;
}
.title-text>p{
  padding-left: 15px;
  margin: 0;
}
.star{
  display: flex;
  justify-content: center;
  background: #eee;
  font-size: 42px;
  color: #ff6f00;
  padding: 8px 0;
}
.star-icon{
  margin: 20px 0;
  color: #ff6f00;
}
.info{
  margin: 30px;
}
.info-content>span{
  display: block;
}
.info-text{
  color: #888;
}
.summary{
  padding: 30px 20px;
  background: #eee;
}
.author{
  margin: 25px;
}
.author-type{
  padding: 0px 5px;
  margin: 0;
}
.author-elem{
  padding:5px;
}
.author-wrap{
  position: relative;
  display: block;
  overflow: hidden;
}
.author-image{
  float: left;
  width: 50%;
  border-radius: 2px  0 0 2px;
  overflow: hidden;
}
.author-padding{
  width: 100%;
  padding-top: 141%;
  background-size: cover;
  -moz-background-size: cover;
}
.author-name{ 
  float: left;
  width: 50%;
  padding: 10px 6px;
}
    
</style>