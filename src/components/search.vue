<template>
    <div class="search">
      <!-- 名字 -->
      <div class="search-name">音乐馆</div>
      <!-- 输入框 -->
      <div class="search-input">
        <input type="text" placeholder="搜索好听的歌曲">
      </div>
    </div>
</template>

<style scoped>
.search{
  background: #fff;
  color:black;
  /* height: 30px; */
  /* padding: 0 20px; */
  display:flex;
  justify-content: space-between;
  align-items: center;
  /* position: fixed; */
  /* top: 0; */
  width: 100%;
  /* margin:0; */
}
.search .search-name{
  font-size:18px;
  font-weight:bold;
  /* white-space:nowrap; */
  margin: 5px;
}
.search .search-input{
  flex-grow:1;
}
.search .search-input input{
   width: 80%;
   height: 30px;
   border-radius: 40px;
   padding:0 8px;
}

</style>
