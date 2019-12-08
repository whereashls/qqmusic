<template>
    <div class="new">
        <div class="new-item">
          <div class="icon">
            <i class="iconfont icon-geshou2"></i>
          </div>
          <div class="music">歌手</div>
        </div>

        <div class="new-item">
          <div class="icon">
            <i class="iconfont icon-paihang"></i>
          </div>
          <div class="music">排行</div>
        </div>

        <div class="new-item">
          <div class="icon">
            <i class="iconfont icon-leimupinleifenleileibie1"></i>
          </div>
          <div class="music">歌曲分类</div>
        </div>

        <div class="new-item">
          <div class="icon">
            <i class="iconfont icon-ziyuan"></i>
          </div>
          <div class="music">电台</div>
        </div>

        <div class="new-item">
          <div class="icon">
            <i class="iconfont icon-jiashimoshiyiqiting"></i>
          </div>
          <div class="music">一起听</div>
        </div>
     </div>
</template>

<style scoped>
.new{
  height: 40px;
  display:flex;
  width: 100%;
  background:white;
  margin:5px;
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
</style>
