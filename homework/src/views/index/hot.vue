<template>
  <div class="hot">
    <div class="hot_title">
      <span @click="back()">
        <img src="@/assets/personal/houtui.png" />
      </span>
      <div>福利详情</div>
    </div>

    <div class="hot_content_container">
      <div class="hot_topper">
        <p class="hot_name">大龙火锅</p>
        <p class="hot_address">
          <span>
            <img src="@/assets/index/dingw.png" />
          </span>
          四川省成都市武侯区南一段2号
        </p>
        <p class="consumption_level">
          消费水平：
          <span>人均74元左右/人</span>
        </p>
        <p class="time">
          营业时间：
          <span>17:00 —— 23:00</span>
        </p>
        <div class="hot_img">
          <img src="@/assets/index/huog5.jpg" />
        </div>
        <p class="Discount">
          东道客会员可享
          <span>菜品7.8折优惠</span>
        </p>
      </div>

      <div class="hot_down">
        <div class="hot_down_content">
          <p class="hot_down_title">
            <span>|</span>其他福利
          </p>
          <div class="hot_content_box" v-for="item in list" :key="item.union_id">
            <div class="hot_box_left">
              <img :src="item.union_print" />
            </div>

            <div class="hot_box_right">
              <p class="box_title">{{ item.union_name}}</p>
              <p class="box_addr">{{item.union_addres}}</p>
              <div class="box_bottom">
                <div class="box_bottom_left">{{ item.union_agio }}</div>
                <div class="box_bottom_right">已有{{item.union_num }}人享受折扣</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import qs from "qs";

export default {
  name: "hot",
  data() {
    return {
      list: [
        {
          union_id: 1,
          union_print: require("@/assets/index/huog2.jpg"),
          union_name: "锦上添花",
          union_addres: "武侯区一环路南一段2号1栋附19号",
          union_agio: "满35减5元",
          union_num: "1"
        }
      ]
    };
  },

  created() {
    axios.defaults.baseURL = "/api";

    axios
      .post("WebUnion/getUnion.html")
      .then(res => {
        window.console.log(res);
        if (res.data.code == 1) {
          this.list = res.data.data;
        }
      })
      .catch(() => {
        window.console.log("请求失败了");
      });
  },

  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};

// WebUnion/getUnion.html
</script>

<style scoped lang='less'>
p {
  margin: 0;
  padding: 0;
}

.hot_title {
  background: #3fe4c7;
  width: 100%;
  height: 40px;
  position: relative;
  > span {
    position: absolute;
    top: 10px;
    left: 8px;
  }
  > div {
    text-align: center;
    line-height: 40px;
  }
}

.hot_content_container {
  height: calc(100vh - 40px);
  width: 100%;
  overflow: scroll;
  background: #eee;
}

.hot_topper {
  background: #ffffff;
  padding: 10px;
}

.hot_name {
  line-height: 2.84444444rem;
  font-family: "PingFangB";
  font-size: 1.42222222rem;
}

.hot_address {
  line-height: 3.55555556rem;
  color: #61d5ac;
}

.consumption_level,
.time {
  line-height: 2.13333333rem;
}

.hot_img {
  margin-top: 1.42222222rem;
  > img {
    width: 120px;
    border-radius: 5px;
    overflow: hidden;
  }
}

.Discount {
  margin: 0;
  font-size: 15px;
  font-family: "PingFangM";
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10px;
  span {
    color: red;
  }
}

.hot_down {
  margin-top: 10px;
  background: #ffffff;
}

.hot_down_content {
  padding: 10px;
}

.hot_down_title {
  position: relative;
  font-family: "PingFangM";
  font-size: 1.17333333rem;
  text-indent: 0.35555556rem;
}

.hot_content_box {
  display: flex;
  flex-wrap: nowrap;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.hot_box_left {
  width: 100px;
  height: 81px;
  border-radius: 5px;
  overflow: hidden;
  > img {
    height: 100%;
    width: 100%;
  }
}

.box_addr,
.box_bottom,
.box_title {
  display: flex;
  align-items: center;
  height: 33.333%;
}

.hot_box_right {
  padding: 0 5px;
  width: calc(100% - 105px);
}

.box_addr {
  font-size: 13px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.box_bottom {
  justify-content: space-between;
}

.box_bottom_right {
  font-size: 12px;
  font-weight: 600;
}

.box_bottom_left {
  color: red;
}
</style>