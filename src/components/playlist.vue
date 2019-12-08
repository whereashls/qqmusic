<template>
  <div class="ad">
        <div class="list">
          <div class="up-words">
             <div class="left">官方歌单</div>
             <div class="right">更多></div>
          </div>
        </div>
        <div class="down-pic-words">
              <div class="up-pic">
                <div class="together">
                   <img class="image" src="@/assets/images/21.jpg">
                   <div class="down-words">青春</div>
                </div>
                 <div class="together">
                   <img class="image" src="@/assets/images/22.jpg">
                   <div class="down-words">青春</div>
                 </div>
                  <div class="together">
                   <img class="image" src="@/assets/images/23.jpg">
                   <div class="down-words">青春</div>
                  </div>
              </div>

              <div class="down-words"></div>
              <div class="down-words"></div>
        </div>

  </div>
</template>

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
  width: 70%;
  height: 80%;
  margin:10px;
}
.together{
  margin:1px;
}
</style>
