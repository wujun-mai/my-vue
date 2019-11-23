<template>
  <div class="planting_first">
    <div class="planting_first_title">
      <span @click="back()">
        <img src="@/assets/personal/houtui.png" alt="图片加载失败" />
      </span>
      <div>活动详情</div>
    </div>
    <div class="planting_first_content_container">
      <div class="planting_first_content">
        <p>东道客新版本上新之后引进了会员体系。</p>
        <p>目前在成都合作的火锅店、串串店、日料店、化妆品店、KTV等有50余家。</p>
        <p>吃喝玩乐皆可享受折扣。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "planting_first",
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style  scoped>
p {
  margin: 0;
  padding: 0;
}
.planting_first_title {
  background: #3fe4c7;
  width: 100%;
  height: 40px;
}

.planting_first_title > span {
  position: absolute;
  top: 10px;
  left: 8px;
}

.planting_first_title > div {
  text-align: center;
  line-height: 40px;
}

.planting_first_content_container {
  height: calc(100vh - 40px);
  overflow: auto;
}
</style>


