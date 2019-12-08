<template>
  <div class="recommended">
           <img class="image" alt="推荐卡片" src="@/assets/images/11.jpg">
           <img class="image" alt="推荐卡片" src="@/assets/images/12.jpg">
    </div>
</template>

<style scoped>

.recommended{
  display:flex;
  margin:10px;
  justify-content: space-between;
  align-items:center;
  padding:5px;
  margin:10px;
}
.recommended .image{
  /* width:160px; */
  /* height: 80px; */
  width:40%;
  height: 40%;
  margin:2px;
  border-radius: 10px;
}
</style>
