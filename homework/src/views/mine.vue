<template>
  <div>
    <div id="mine">
      <div class="mine_topper">
        <div class="mine_topper_box">
          <div class="mine_topper_box_container">
            <div class="mine_topper_logo">
              <img src="@/assets/x_icon@2x.png" alt="图片加载失败" />
            </div>
            <div class="mine_topper_logo_text">
              <p class="mine_topper_logo_text_top">kxkKwVmwcR</p>
              <p class="mine_topper_logo_text_bottom">18380115753</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mine_content">
        <div
          class="mine_content_container"
          v-for="item in list"
          :key="item.id"
          @click="on_jump(item.next_net)"
        >
          <div class="mine_content_text">
            <div class="mine_content_left">
              <img :src="item.logoImg" :alt="item.alt" />
              <p>{{ item.text }}</p>
            </div>
            <div class="mine_content_right">
              <span>
                <img :src="item.jumpImg" :alt="item.alt" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar.vue";
export default {
  name: "mine",
  components: {
    tabbar
  },

  data() {
    return {
      list: [
        {
          id: 1,
          logoImg: require("@/assets/personal/xx.png"),
          text: "我的消息",
          jumpImg: require("@/assets/personal/jinruanniu.png"),
          alt: "..",
          next_net: "/mine_massage"
        },
        {
          id: 2,
          logoImg: require("@/assets/personal/fp.png"),
          text: "发票信息管理",
          jumpImg: require("@/assets/personal/jinruanniu.png"),
          alt: "..",
          next_net: "/mine_bill"
        },
        {
          id: 3,
          logoImg: require("@/assets/personal/sc.png"),
          text: "我的收藏",
          jumpImg: require("@/assets/personal/jinruanniu.png"),
          alt: "..",
          next_net: "/mine_bill"
        },
        {
          id: 4,
          logoImg: require("@/assets/personal/zh.png"),
          text: "账户",
          jumpImg: require("@/assets/personal/jinruanniu.png"),
          alt: "..",
          next_net: "/mine_bill"
        },
        {
          id: 5,
          logoImg: require("@/assets/personal/yhq.png"),
          text: "优惠劵",
          jumpImg: require("@/assets/personal/jinruanniu.png"),
          alt: "..",
          next_net: "/mine_bill"
        }
      ]
    };
  },

  mounted() {
    this.line_disappear();
  },

  methods: {
    on_jump(next_net) {
      this.$router.push(next_net);
    },
    line_disappear() {
      let border_bottom = document.getElementsByClassName("mine_content_text");

      border_bottom[border_bottom.length - 1].style.borderBottom = "none";
    }
  }
};
</script>

<style  scoped lang='less'>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#mine {
  background: #f5f5f5;
  height: calc(100vh - 35px);
  overflow: auto;
}

.mine_topper {
  background: #61d5ac;
  padding: 15px;
}

.mine_topper_box {
  background: #fff;
  padding: 0 15px;
  border-radius: 8px;
  transform: translateY(50%);
}

.mine_topper_box_container {
  padding: 0 15px 15px 15px;
  align-items: center;
  display: flex;
}

.mine_topper_logo {
  height: 80px;
  width: 80px;
  border: 2px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  transform: translateY(-30%);
  margin-right: 10px;
}

.mine_topper_logo_text {
  > p {
    color: #61d5ac;
  }
}

.mine_topper_logo_text_top {
  font-size: 19px;
  font-family: "PingFangB";
}
.mine_topper_logo_text_bottom {
  font-size: 16px;
}

.mine_content {
  margin: 60px 0;
  padding: 0 15px;
}

.mine_content_container {
  background: #fff;
  display: flex;
  position: relative;
  height: 45px;
  padding: 0 5px;
}

.mine_content_text {
  position: relative;
  display: -webkit-box;
  width: 100%;
  padding: 0 10px;
  -webkit-box-align: center;
  border-bottom: 1px solid #c0c0c0;
}

.mine_content_left {
  display: flex;
  line-height: 30px;
  align-items: center;
  position: relative;
  font-size: 14px;
  font-family: "PingFang";
}

.mine_content_left > img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.mine_content_right {
  position: absolute;
  right: 4px;
  top: 10px;
}
.mine_content_right > img {
  width: 20px;
  height: 20px;
}
</style>>


