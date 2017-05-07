<template>
	<div id="card">
    <router-link :to="{name: 'MovieSubject', params: {id: subject.id}}">
      <mu-paper>
        <div class="card-image" :style="'background-image:url('+subject.images.large + ')'">
        </div>
        <div class="description">
          <div class="title">
            <span class="name">{{subject.title}}</span>
            <span class="year">{{subject.year}}</span>
          </div>
          <div class="star-rating" v-if="subject.rating.average>0">
            <star-rating :size="13" :stars="subject.rating.stars" :rating="subject.rating.average" :max="subject.rating.max"></star-rating>
          </div>
          <div v-else>暂无评分</div>
          <div>类型：{{subject.genres | arr2string}}</div>
          <div class="line-limit-1">导演：{{subject.directors.map(e=>e.name) | arr2string}}</div>
          <div class="line-limit-2">主演：{{subject.casts.map(e=>e.name) | arr2string}}</div>
        </div>
      </mu-paper>
    </router-link>
  </div>
</template>
<script>
  import Star from './Star'
	export default {
    props: ["subject"],
    components: {
      "star-rating": Star
    }
	}
</script>
<style lang="less">
  #card {
    .mu-paper {
      margin:10px;
      display:flex;
      .card-image {
        flex:1;
        background-size:cover;
        padding-top:45%;
      }
      .description {
        flex:2;
        padding:10px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        min-width:0;
      }
    }
  }
  .line-limit{
    text-overflow:ellipsis;
    overflow:hidden;
  }
  .line-limit-1 {
    .line-limit();
    white-space:nowrap;
  }
  .line-limit-2 {
    .line-limit();
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
  }
</style>
