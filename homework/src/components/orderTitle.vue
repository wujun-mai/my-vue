<template>
  <div class="order_box">
    <div class="order_box_item" v-for="item in list" :key="item.id" @click="btn(item.addr,item.id)">
      <img :src="item.img" :alt="item.alt" v-if="show==item.id" />
      <img :src="item.Nimg" :alt="item.alt" v-else />
      <a>{{ item.text}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ordertitle",
  data() {
    return {
      show: sessionStorage.getItem("order_tabbar") || 1,

      //导航图标信息
      list: [
        {
          id: 1,
          img: require("@/assets/order/yfk.png"),
          Nimg: require("@/assets/order/yfk_weixuan.png"),
          text: "已付款",
          alt: "图片加载失败",
          addr: "/paid"
        },

        {
          id: 2,
          img: require("@/assets/order/wfk.png"),
          Nimg: require("@/assets/order/dfk_weixuan.png"),
          text: "待付款",
          alt: "图片加载失败",
          addr: "/unpaid"
        },
        {
          id: 3,
          img: require("@/assets/order/ywc.png"),
          Nimg: require("@/assets/order/ywc_weixuan.png"),
          text: "已完成",
          alt: "图片加载失败",
          addr: "/Completed"
        }
      ]
    };
  },

  methods: {
    btn(addr, id) {
      this.$store.commit("setOrderTabbar", id);
      this.go_web();
      // window.console.log(sessionStorage.getItem("order_tabbar"));
      this.$router.push(addr);
    },
    go_web() {
      this.show = sessionStorage.getItem("order_tabbar") || 1;
    }
  },
  created() {
    window.console.log(this.show);
  },

  watch: {
    // show(val, old) {
    //   // window.console.log(val, old);
    // }
  }
};
</script>

<style  scoped>
.order_box {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #ffffff;
  padding: 5px 0;
  box-sizing: border-box;
  background: #eee;
}
.order_box_item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 70%;
}
a {
  font-size: 14px;
}
</style>
 
