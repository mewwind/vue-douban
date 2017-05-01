<template>
<mu-appbar>
  <mu-icon-button class='bar-icon' icon='arrow_back' slot="left" @click="gotoTab()"/>
  <mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
</mu-appbar>
</template>
<script type="text/javascript">
  export default {
    methods: {
      gotoTab() {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="css">
.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
}
.appbar-search-field .focus-state {
    color: #FFF;
}
.appbar-search-field .mu-text-field-hint {
    color: fade(#FFF, 54%);
}
.appbar-search-field .mu-text-field-input {
    color: #FFF;
}
.appbar-search-field .mu-text-field-focus-line {
    background-color: #FFF;
}
</style>