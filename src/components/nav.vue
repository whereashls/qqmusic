<template>
  <div class="nav">
    <!-- 如果name等于music页面的name就会加一个select的class进去 -->
     <div class="nav-item" :class="{ select :name === 'Music'}" @click="to('Music')">
       <div class="icon">
         <i class="iconfont icon-yinle"></i>
       </div>
       <div class="music">音乐馆</div>
     </div>
     <div class="nav-item" :class="{ select :name === 'Recommended'}" @click="to('Recommended')">
       <div class="icon">
         <i class="iconfont icon-tuijian1"></i>
       </div>
       <div class="music">推荐</div>
     </div>
     <div class="nav-item" :class="{ select :name === 'Dynamic'}" @click="to('Dynamic')">
       <div class="icon">
         <i class="iconfont icon-dongtai"></i>
       </div>
       <div class="music">动态</div>
     </div>
     <div class="nav-item" :class="{ select :name === 'Mine'}" @click="to('Mine')">
       <div class="icon">
         <i class="iconfont icon-wode"></i>
       </div>
       <div class="music">我的</div>
     </div>
  </div>
</template>

<script>
// import MyMenu from './components/menu.vue'

export default {
  // name: 'nav',
  // props: {
  //   msg: String
  // }
  computed: {
    // 当前路由的名字
    name () {
      return this.$route.name
    }
  },
  methods: {
    // 路由跳转
    to (name) {
      // 如果点击的是当前页，则不跳转
      if (name === this.name) return false
      // 跳转去点击的页面
      this.$router.replace({
        name
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  position:fixed;
  padding-top:4px;
  bottom:0;
  height: 40px;
  display:flex;
  width: 100%;
  background:white;
  border-top:1px solid rgb(95, 93, 93);
}
.nav .nav-item{
  flex-grow: 1;
  color:rgb(155, 143, 143);
  display:flex;
  /* 垂直水平居中 */
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.nav .nav-item.select{
  color:rgb(105, 211, 162)
}

.nav .nav-item .icon .iconfont{
  font-size: 18px;
}
.nav .nav-item .music{
  font-size: 1px;
}
</style>
