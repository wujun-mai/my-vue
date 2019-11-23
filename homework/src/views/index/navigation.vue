<template>
  <div class="navigation">
    <div class="navigation_container">
      <div class="navigation_title">
        <span @click="back()">
          <img src="@/assets/personal/houtui.png" />
        </span>
        <div>类型选择</div>
      </div>
      <div class="navigation_title_content_container">
        <div class="navigation_title_content">
          <div class="navigation_title_content_box">
            <div class="choose_city">
              <div class="content_left">城市</div>
              <div class="choose_right">
                <div></div>
                <span @click="choose_city">
                  <img src="@/assets/personal/jinruanniu.png" />
                </span>
              </div>
            </div>
            <div class="search">
              <div class="content_left">搜索</div>
              <div class="choose_right">
                <div class="hotel_info">酒店/地名/关键词</div>
                <span>
                  <img src="@/assets/personal/jinruanniu.png" />
                </span>
              </div>
            </div>
            <div class="time">
              <div class="content_left">时间</div>
              <div class="choose_right">
                <div class="time_middle">
                  <div>2019年9月23日</div>
                  <div>2019年9月27日</div>
                </div>
                <span>
                  <img src="@/assets/personal/jinruanniu.png" />
                </span>
              </div>
            </div>
            <div class="area">
              <div class="content_left">区域</div>
              <div class="choose_right">
                <div class="area_info">选择地区</div>
                <span>
                  <img src="@/assets/personal/jinruanniu.png" />
                </span>
              </div>
            </div>
            <div class="house_style">
              <div class="content_left">房型</div>
              <div class="choose_right choose_text">
                <div class="house_type" v-for="item in list" :key="item.id">{{item.house_type}}</div>
              </div>
            </div>
            <div class="price">
              <div class="content_left">价格</div>
              <div class="choose_right">
                <div class="price_info">不限价格</div>
                <span>
                  <img src="@/assets/personal/jinruanniu.png" />
                </span>
              </div>
            </div>
          </div>
          <div class="click_search">
            <div class="click_text">查询房源</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
export default {
  name: "navigation",
  data() {
    return {
      list: [
        {
          id: "1",
          house_type: ""
        }
      ]
    };
  },

  created() {
    axios.defaults.baseURL = "/api";
    let date = { type: 1 };

    axios
      .post("Index/house_type", Qs.stringify(date))
      .then(res => {
        if (res.data.code == 1) {
          window.console.log(res.data);
          this.list = res.data.data;
        }
      })
      .catch(() => {
        window.console.log("请求失败了");
      });
  },

  mounted() {
    this.go_display();
  },

  methods: {
    getParams() {
      // 取到路由带过来的参数
      let routerparams = this.$route.params.x;
      // 将数据放在当前组件的数据内
      this.id = routerparams;

      window.console.log(this.id);
    },

    //返回上一页
    back() {
      this.$router.go(-1);
    },
    go_display() {
      window.console.log(this.id);
      this.show = this.id;
    },

    choose_city() {
      this.$router.push(`/city`);
    }
  },

  watch: {
    $route: "getparams"
  }
};
</script>

<style  scoped>
p {
  margin: 0;
  padding: 0;
}
.navigation_title {
  background: #3fe4c7;
  width: 100%;
  height: 40px;
}

.navigation_title > span {
  position: absolute;
  top: 10px;
  left: 8px;
}

.navigation_title > div {
  text-align: center;
  line-height: 40px;
}

.navigation_content_container {
  height: calc(100vh - 40px);
  overflow: scroll;
}

.choose_city,
.search,
.time,
.area,
.price,
.content_left {
  height: 56px;
}
.navigation_title_content_box {
  padding: 15px;
  background: #ffffff;
}
.navigation_title_content_box > div {
  border-bottom: 1px solid #eeeeee;
  display: flex;
}

.navigation_title_content_box div {
  align-items: center;
}

.content_left {
  width: 15%;
  display: flex;
}

.choose_right {
  display: flex;
  justify-content: space-between;
  width: 85%;
}

.time_middle {
  display: flex;
  flex-direction: column;
}

.hotel_info,
.price_info,
.area_info {
  color: #aaa;
}

.house_style > .choose_text {
  justify-content: left;
  flex-wrap: wrap;
}

.house_type {
  margin: 5px 10px 5px 0;
  padding: 5px 8px;
  background: #eee;
  color: #aaa;
  font-size: 17px;
  border-radius: 3px;
}

.click_search {
  margin-top: 30px;
  height: 50px;
  padding: 0 15px;
}
.click_text {
  justify-content: space-around;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  color: #fff;
  background: #3fe4c7;
  border-radius: 8px;
}
</style>