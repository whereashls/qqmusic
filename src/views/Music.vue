<template>
  <div class="app">
    <!-- 搜索栏 -->
    <search></search>
    <!-- 轮播图 -->
    <my-banner></my-banner>
    <!-- 菜单 -->
    <my-menus></my-menus>
    <!-- 推荐卡片-广告位 -->
    <my-ad></my-ad>
    <!-- 官方歌单 -->
    <my-playlist></my-playlist>
    <!-- 歌单 -->
    <div class="playlist"></div>
  </div>
</template>

<script>
import Search from '../components/search'
import MyBanner from '../components/bannar'
import MyMenus from '../components/menus'
import MyAd from '../components/ad'
import MyPlaylist from '../components/playlist'

export default {
  components: {
    Search,
    MyBanner,
    MyMenus,
    MyAd,
    MyPlaylist
  }
}
</script>

<style scoped>
.app{
  display:flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px;
}

</style>
