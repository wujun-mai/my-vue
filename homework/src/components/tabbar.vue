<template>
  <div id="tab">
    <div @click="jump(item.on_jump,item.id)" v-for="item in list" :key="item.id" class="tab_body">
      <img :src="item.logoImge" :alt="item.alt" v-if="show==item.id" />
      <img :src="item.logoImg" :alt="item.alt" v-else />
      <a>{{ item.text }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",

  data() {
    return {
      show: sessionStorage.getItem("tabbar") || 1,

      list: [
        {
          id: 1,
          logoImg: require("@/assets/index2.png"),
          logoImge: require("@/assets/index.png"),
          alt: "图片加载失败",
          text: "首页",
          on_jump: "/index"
        },
        {
          id: 2,
          logoImg: require("@/assets/order2.png"),
          logoImge: require("@/assets/order.png"),
          alt: "图片加载失败",
          text: "订单",
          on_jump: "/order"
        },
        {
          id: 3,
          logoImg: require("@/assets/wod2.png"),
          logoImge: require("@/assets/wod.png"),
          alt: "图片加载失败",
          text: "我的",
          on_jump: "/mine"
        }
      ]
    };
  },

  methods: {
    jump(on_jump, id) {
      this.$store.commit("setTabbar", id);
      this.$router.push(on_jump);
      if (id == 2) {
        this.$store.commit("setOrderTabbar", 1);
      }
    }
  }
};
</script>

<style  scoped lang='less'>
img {
  max-height: 70%;
  max-width: 70%;
}

#tab {
  width: 100%;
  background: #ffffff;
  height: 55px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #eee;
  cursor: pointer;
  > div {
    font-size: 15px;
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>

