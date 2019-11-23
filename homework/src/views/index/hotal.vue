<template>
  <div class="hotal">
    <div class="hotal_container" v-for="item in list" :key="item.hotel_home_id">
      <div class="hotal_title">
        <span @click="back()">
          <img src="@/assets/personal/houtui.png" />
        </span>
        <div>详情</div>
        <div class="hotal_title_sc">
          <img src="@/assets/personal/sc2.png" />
        </div>
      </div>

      <div class="hotal_body">
        <div class="hotal_body_content_planting">
          <img src="@/assets/index/pic_07.png" />
        </div>

        <div class="hotal_introduction">
          <div class="hotal_introduction_container">
            <p class="hotal_introduction_name">{{ item.hotel_home_name }}-{{ item.house_type }}</p>
            <div class="hotal_introduction_bottom">
              <div class="hotal_introduction_advantage">
                <span>wifi</span>
                <span>有窗</span>
              </div>
              <a>￥{{ item.price }}</a>
            </div>
          </div>
        </div>

        <div class="video">
          <span class="video_logo">
            <img src="@/assets/index/others/video_03.png" />
          </span>
          <a>房屋视频</a>
          <span class="jump_video">
            <img src="@/assets/personal/jinruanniu.png" />
          </span>
        </div>
        <div class="notice">
          <div>
            <a class="notice_num">{{item.score}}</a> 分
          </div>
          <span>
            <a>查看评价</a>
            <img src="@/assets/personal/jinruanniu.png" />
          </span>
        </div>

        <div class="house">
          <p class="house_title">房屋信息</p>
          <div class="house_bottom">
            <!-- <div class="house_info" v-for="item in list1" :key="item.id">
            <p>{{ item.title }}:{{ item.info }}</p>
            </div>-->
            <div class="house_info">
              <p>闪住:否</p>
            </div>
            <div class="house_info">
              <p>房型:{{ item.house_type }}</p>
            </div>
            <div class="house_info">
              <p>联系电话:无</p>
            </div>
            <div class="house_info">
              <p>早餐：无</p>
            </div>
          </div>
        </div>

        <div class="house_map">
          <div class="house_postion_title">
            <div class="house_postion_title_left">位置</div>
            <div class="house_postion_title_right">导航</div>
          </div>

          <div class="house_position">
            <img src="@/assets/personal/map2.png" />
          </div>
        </div>

        <div class="configure">
          <p class="configure_title">房间配置</p>
          <div class="configure_info">
            <div class="configure_info_box">
              <img src="@/assets/personal/wsj.png" />
              <a>卫生间</a>
            </div>
          </div>
        </div>
      </div>

      <div class="cost_click">
        <div class="cost_click_box">
          <div class="cost_click_box_left">
            ￥
            <a>{{ item.price }}</a>
          </div>
          <div class="cost_click_box_right">立即预定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { hotHotelInfo } from "@/http/api.js";
export default {
  name: "hotal",

  data() {
    return {
      list: [
        {
          id: "1",
          house_type: "标准大床房",
          score: "5.0",
          price: "168.00",
          hotel_home_name: "博纳酒店"
        }
      ]
    };
  },

  created() {
    this.getHotelInfo();
  },

  methods: {
    getHotelInfo() {
      this.id = this.$route.query.id ? this.$route.query.id : "";
      window.console.log(this.id);
      let params = {
        id: this.id,
        token: "ohsi11Gsq8GLgfMD2n6oaSP7iqgE",
        check_time: "2019-10-18",
        end_time: "2019-10-19"
      };
      //引入api中的封装函数
      hotHotelInfo(params).then(res => {
        this.list = res.data;
      });
    }
  },

  back() {
    this.$router.go(-1);
  }
};
</script>

<style  scoped>
p {
  margin: 0;
  padding: 0;
}
.hotal_title {
  background: #3fe4c7;
  width: 100%;
  height: 40px;
  position: relative;
}

.hotal_title > span {
  position: absolute;
  top: 10px;
  left: 8px;
}
.hotal_title > div {
  text-align: center;
  line-height: 40px;
}

.hotal_title_sc {
  position: absolute;
  right: 5px;
  top: 2px;
}

.hotal_body {
  height: calc(100vh - 83px);
  overflow: scroll;
  width: 100%;
  background: #eee;
}

.hotal_body_content_planting {
  width: 100%;
  height: 200px;
}

.hotal_body_content_planting > img {
  height: 100%;
}

.hotal_introduction {
  background: #ffffff;
}

.hotal_introduction_container {
  height: 72px;
  padding: 0 15px;
}

.hotal_introduction_name {
  padding-top: 10px;
  font-family: "PingFangB";
  font-size: 17px;
  color: #000;
}

.hotal_introduction_bottom {
  display: flex;
  justify-content: space-between;
  height: 35px;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.hotal_introduction_advantage > span {
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid #61d5ac;
  color: #61d5ac;
  display: inline-block;
  line-height: 0.99555556rem;
  margin-right: 5px;
  padding: 0 2px;
}

.hotal_introduction_bottom > a {
  color: #e1ae27;
  font-family: "PingFangB";
  font-size: 24px;
}

.video {
  height: 40px;
  padding: 0 15px;
  margin-bottom: 10px;
  position: relative;
  background: #ffffff;
  line-height: 40px;
}

.video a {
  margin-left: 5px;
  color: #000;
}

.video_logo {
  position: relative;
  top: 2px;
}

.video_logo > img {
  width: 23px;
}

.video > .jump_video > img {
  width: 8px;
  position: absolute;
  right: 15px;
  top: 11px;
}

.notice {
  margin-bottom: 0.71111111rem;
  background: #fff;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 5px 15px;
  -webkit-box-align: center;
  -ms-flex-align: cente;
  height: 35px;
  align-items: center;
}

.notice_num {
  font-size: 23px;
  color: red;
}

.notice img {
  width: 8px;
}

.notice > span a {
  margin-right: 10px;
  color: #acacac;
}

.house {
  width: 100%;
  padding: 0 1.06666667rem 0.71111111rem;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 0.71111111rem;
}

.house p {
  font-size: 16px;
  font-family: "PingFangB";
}

.house_title {
  line-height: 35px;
  color: #000;
}

.house_map {
  width: 100%;
  height: auto;
  background-color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 1.06666667rem;
  overflow: hidden;
  border-bottom: 0.35555556rem solid #f2f2f2;
}

.house_postion_title {
  display: flex;
  justify-content: space-between;
  height: 24px;
  padding: 10px 0;
}

.house_postion_title_left {
}

.house_postion_title_right {
  width: 60px;
  text-align: center;
  background: #00d4d5;
  border-radius: 12px;
  color: #fff;
}

.house_bottom {
  display: flex;
  flex-wrap: wrap;
}

.house_info {
  width: 50%;
}

.configure {
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 1.06666667rem;
}

.configure_title {
  line-height: 45px;
}

.configure_info {
  display: flex;
  flex-wrap: nowrap;
  font-size: 14px;
  padding: 5px 0;
}

.configure_info_box {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cost_click {
  height: 32px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 5px 15px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-top: 1px solid #eee;
}

.cost_click_box {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  line-height: 32px;
}

.cost_click_box_left {
  color: #e1ae27;
}
.cost_click_box_left > a {
  font-size: 24px;
}

.cost_click_box_right {
  width: 75px;
  margin-left: 10px;
  background: #e1ae27;
  color: #fff;
  text-align: center;
  border-radius: 16px;
}
</style>