<template>
  <div class="member">
    <div class="member_title">
      <span @click="back()">
        <img src="@/assets/personal/houtui.png" />
      </span>
      <div>会员福利</div>
    </div>

    <div class="hot_content_box_container">
      <div class="hot_content_box" v-for="item in list" :key="item.union_id">
        <div class="hot_box_left">
          <img :src="item.union_print" />
        </div>

        <div class="hot_box_right">
          <p class="box_title">{{ item.union_name}}</p>
          <p class="box_addr">{{item.union_addres}}</p>
          <div class="box_bottom">
            <div class="box_bottom_left">{{ item.union_agio }}</div>
            <div class="box_bottom_right">去这儿</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "member",
  data() {
    return {
      id: "",
      list: [
        {
          union_id: 1,
          union_print: require("@/assets/index/huog2.jpg"),
          union_name: "锦上添花",
          union_addres: "武侯区一环路南一段2号1栋附19号",
          union_agio: "满35减5元"
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
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.member_title {
  background: #3fe4c7;
  width: 100%;
  height: 40px;
  position: relative;
}

.member_title > span {
  position: absolute;
  top: 10px;
  left: 8px;
}
.member_title > div {
  text-align: center;
  line-height: 40px;
}

.hot_content_box_container {
  padding: 15px;
  height: calc(100vh - 70px);
  overflow: scroll;
}

.hot_content_box {
  display: flex;
  flex-wrap: nowrap;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-bottom: 10px;
}

.hot_box_left {
  width: 130px;
  height: 120px;
  border-radius: 5px;
  overflow: hidden;
}

.hot_box_left > img {
  height: 100%;
  width: 100%;
}

.hot_box_right {
  padding: 0 10px;
  width: calc(100% - 150px);
}

.box_addr {
  font-size: 13px;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 40px;
  white-space: nowrap;
}

.box_title {
  display: flex;
}

.box_bottom {
  display: flex;
  justify-content: space-between;
}

.box_addr,
.box_bottom,
.box_title {
  align-items: center;
  height: 33.333%;
}

.box_bottom_right {
  font-size: 14px;
  height: 24px;
  align-items: center;
  display: flex;
  width: 43px;
  justify-content: space-around;
  background: #3fe4c7;
  padding: 0 7px;
  color: #fff;
  border-radius: 13px;
}

.box_bottom_left {
  color: #dd0202;
}
</style>