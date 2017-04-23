<template>
  <span>
    <mu-icon value="star" v-for="n in starObj.stars"/>
    <mu-icon value="star_half" v-for="n in starObj.half"/>
    <mu-icon value="star_border" v-for="n in starObj.empty"/>
    <span>{{rating}}</span>
  </span>
</template>
<script type="text/javascript">
  export default {
    props: ["stars", "rating", "max"],
    computed: {
      starObj() {
        const stars = Math.floor(parseInt(this.stars) / 10);
        const half = this.stars % 10 / 5   
        const empty = this.max - stars - half
        return {
          stars,
          half,
          empty
        }
      }
    }
  }  
</script>
