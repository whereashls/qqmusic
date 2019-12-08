<template>
  <div class="app">
    <!-- 搜索栏 -->
    <search></search>
    <!-- 轮播图 -->
    <img class="img" alt="轮播图" src="../assets/1.jpg">
    <!-- 五个图标+五个页面 -->
     <div class="new">
        <!-- <div class="nav-item" :class="{ select :name === 'Singer'}" @click="to(Singer)"> -->
        <div class="new-item">
          <div class="icon">
            <i class="iconfont icon-geshou2"></i>
          </div>
          <div class="music">歌手</div>
        </div>

        <!-- <div class="nav-item" :class="{ select :name === 'Rank'}" @click="to(Rank)"> -->
        <div class="new-item">
          <div class="icon">
            <i class="iconfont icon-paihang"></i>
          </div>
          <div class="music">排行</div>
        </div>

        <!-- <div class="nav-item" :class="{ select :name === 'List'}" @click="to(List)"> -->
        <div class="new-item">
          <div class="icon">
            <i class="iconfont icon-leimupinleifenleileibie1"></i>
          </div>
          <div class="music">歌曲分类</div>
        </div>

        <!-- <div class="nav-item" :class="{ select :name === 'Broadcaster'}" @click="to(Broadcaster)"> -->
        <div class="new-item">
          <div class="icon">
            <i class="iconfont icon-ziyuan"></i>
          </div>
          <div class="music">电台</div>
          </div>

        <!-- <div class="nav-item" :class="{ select :name === 'Together'}" @click="to(Together)"> -->
        <div class="new-item">
          <div class="icon">
            <i class="iconfont icon-jiashimoshiyiqiting"></i>
          </div>
          <div class="music">一起听</div>
        </div>
     </div>
      <!-- 推荐卡片 -->
        <div class="recommended">
           <img class="image" alt="推荐卡片" src="../assets/11.jpg">
           <img class="image" alt="推荐卡片" src="../assets/12.jpg">
        </div>

        <!-- 官方歌单 -->
        <div class="list">
          <div class="up-words">
             <div class="left">官方歌单</div>
             <div class="right">更多></div>
          </div>
        </div>
          <div class="down-pic-words">
              <div class="up-pic">
                <div class="together">
                   <img class="image" src="../assets/21.jpg">
                   <div class="down-words">青春</div>
                </div>
                 <div class="together">
                   <img class="image" src="../assets/22.jpg">
                   <div class="down-words">青春</div>
                 </div>
                  <div class="together">
                   <img class="image" src="../assets/23.jpg">
                   <div class="down-words">青春</div>
                  </div>
              </div>

              <div class="down-words"></div>
              <div class="down-words"></div>
          </div>

  </div>
</template>

<script>
import Search from '../components/search'
export default {
  components: {
    Search
  }
}
</script>

<style scoped>
.list{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.list .up-words{
  display:flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 5px; */
  /* padding:5px; */
}
.list .up-words .left{
  font-size: 22px;
  margin:10px;
}
.list .up-words .right{
  font-size: 18px;
}
.down-pic-words .up-pic{
  display:flex;
  justify-content: space-between;
}
.down-pic-words .up-pic .image{
  width: 90px;
  height: 90px;
  margin:10px;
}
.together{
  margin:1px;
}
.app{
  display:flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 60px;
}
.img{
  height: 150px;
  width:90%;
  /* text-align: center; */
  /* margin:0 auto; */
  margin:5px;
  margin-bottom:15px;
  /* border-radius: 18px; */
  /* max-width: 100%; */
  /* max-height: 100%; */
  border-radius: 10px;
  /* padding:0 8px; */
  object-fit: cover;
  border:1px solid black;
}
.new{
  /* position:fixed; */
  /* bottom:0; */
  height: 40px;
  display:flex;
  width: 100%;
  background:white;
  margin:5px;
  /* border-top:1px solid rgb(2, 2, 2); */
}
.new .new-item{
  flex-grow: 1;
  color:rgb(155, 143, 143);
  display:flex;
  /* 垂直水平居中 */
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.new .new-item.selected{
  color:rgb(105, 211, 162)
}

.new .new-item .icon .iconfont{
  font-size: 22px;
}
.new .new-item .music{
  font-size: 14px;
}
.recommended{
  display:flex;
  margin:10px;
  justify-content: space-between;
  align-items:center;
  padding:5px;
  margin:10px;
}
.recommended .image{
  width:160px;
  height: 80px;
  margin:2px;
  border-radius: 10px;
}
</style>
