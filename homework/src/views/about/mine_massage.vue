<template>
  <div>
    <div class="mine_title">
      <span @click="back()">
        <img src="@/assets/personal/houtui.png" alt="图片加载失败" />
      </span>
      <div>我的消息</div>
    </div>
    <div id="mine_massage_container">
      <div class="mine_massage" v-for="item in list" :key="item.id">
        <div class="mine_massage_left">
          <img src="@/assets/xitongxiaoxi.png" alt="加载失败" />
        </div>
        <div class="mine_massage_right">
          <p>
            系统消息
            <span>{{ item.creat_time }}</span>
          </p>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
export default {
  data() {
    return {
      list: [
        {
          id: "1",
          content: "温馨提示，您有一张优惠劵即将过期。",
          creat_time: "2019-02-10 00:00:00"
        },
        {
          id: "2",
          content: "温馨提示，您有一张优惠劵即将过期。",
          creat_time: "2019-02-10 00:00:00"
        }
      ]
    };
  },

  created() {
    axios.defaults.baseURL = "/api";
    let date = {
      member_id: "7486db1d85280b37626a525f4b0e8d29"
    };
    axios
      .post("Personal/system", Qs.stringify(date))
      .then(res => {
        window.console.log(res);
        if (res.data.code == 1) {
          this.list = res.data.data;
          window.console.log(this.list);
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

<style  scoped>
p {
  margin: 0;
  padding: 0;
}
.mine_title {
  background: #3fe4c7;
  width: 100%;
  height: 40px;
}

.mine_title > span {
  position: absolute;
  top: 10px;
  left: 8px;
}

.mine_title > div {
  text-align: center;
  line-height: 40px;
}
.mine_massage_container {
  position: relative;
  top: 40px;
}

.mine_massage {
  padding: 5px 6px;
  display: flex;
}

.mine_massage_left {
  width: 15%;
}

.mine_massage_right {
  padding: 0 10px;
  font-size: 14px;
  max-width: 75%;
}
.mine_massage_right p {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>