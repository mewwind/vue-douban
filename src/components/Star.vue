<template>
  <div id="star-container">
  <span class="star">
    <mu-icon value="star" v-for="n in starObj.stars" :key="n" :size="size"/>
    <mu-icon value="star_half" v-for="n in starObj.half" :key="n" :size="size"/>
    <mu-icon value="star_border" v-for="n in starObj.empty" :key="n" :size="size"/>
  </span>
  <span>{{rating}}</span>
</div>
</template>
<script type="text/javascript">
  export default {
    props: ["size", "stars", "rating", "max"],
    computed: {
      starObj() {
        const stars = Math.floor(parseInt(this.stars) / 10)
        const half = this.stars % 10 / 5
        const empty = 5 - stars - half
        return {
          stars,
          half,
          empty
        }
      }
    }
  }
</script>
<style lang="css">
  #star-container span{
    vertical-align: middle;
  }
  .star{
    display:inline-flex;
  }
  .star .mu-icon{
    letter-spacing: -3px;
    color: orange;
  }
</style>
