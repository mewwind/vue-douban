<template>
  <div>
    <mu-appbar title="关于">
      <mu-icon-button icon="arrow_back" slot="left" @click="back"/>
    </mu-appbar>
    <mu-card>
      <mu-card-media>
        <img src="/static/img/action.jpg" />
      </mu-card-media>
      <mu-card-title title="Web Douban App" subTitle="movie,book,music..."/>
      <mu-card-text>
        This is a demo for douban app with vuejs, webpack.
        It gives you a brief description for movie, books and music.
        For more code infomation, please refer to the following github.
      </mu-card-text>
      <mu-card-actions>
        <a href="https://github.com/mewwind/vue-douban/" target="_Blank">
          <img class="github" src="/static/img/github.png" />
        </a>
      </mu-card-actions>
    </mu-card>
    <mu-divider /> 

  </div>
</template>
<script>
  import description from "../../components/Description"
  export default{
    name: 'About',
    components: {description},
    methods: {
      back() {
        this.$router.go(-1);
      }
    }
  }
</script>
<style lang="css">
  .action{
    width:100%;
  }
  .github{
    display:block;
    margin:auto;
    width:25px;
  }
</style>