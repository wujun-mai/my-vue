<template>
  <div id="container">
    <div id="content_container">
      <div class="planting" @click="index_planting(item.addr)" v-for="item in list3" :key="item.id">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in list7" :key="item.id">
            <img :src="item.img" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <van-sticky>
        <div id="Navigation_container">
          <div class="navigation">
            <div
              class="navigation_box"
              v-for="item in list4"
              :key="item.id"
              @click="hotal_details(item.addr ,item.id)"
            >
              <img :src=" item.img " :alt="item.alt" />
              <a>{{ item.text }}</a>
            </div>
          </div>
        </div>
      </van-sticky>

      <div id="ad">
        <img :src="adimg" alt="广告" />
      </div>

      <div id="member_ad">
        <div class="lab_title_1">
          <div class="lab_title1_left">
            <span>
              <i>会员福利</i>
            </span>
          </div>
          <div class="lab_title1_right" @click="go_hot_more">
            <div>更多</div>
            <span>
              <img src="@/assets/personal/jinruanniu.png" />
            </span>
          </div>
        </div>
        <div class="member">
          <div @click="jump_hot()" v-for="item in list5" :key="item.id">
            <img :src="item.img " alt />
          </div>
        </div>
      </div>

      <div id="nearbyHotal">
        <p class="nearby">
          <span>|</span>附近
        </p>

        <div class="hotal_box" v-for="item in list" :key="item.id" @click="jump_hotal(item.id)">
          <div class="hotal_box_img">
            <img :src="item.img" alt="加载失败" />
          </div>
          <div class="hotal_box_infor">
            <p class="hotal_box_infor_title">{{ item.hotel_home_name }}</p>
            <p class="hotal_box_infor_position">{{ item.deta_address }}</p>
            <p class="score">
              <a class="score_left">{{ item.score }}</a>
              <a class="score_right">{{ item.price }}</a>
            </p>

            <p class="hotal_box_label">
              <a class="hotal_box_label_1">热门</a>
              <a class="hotal_box_label_2">豪华</a>
            </p>
          </div>
        </div>
      </div>

      <div class="lab">
        <div class="lab_title">
          <div class="lab_title_left">
            <a>|</a>推荐
          </div>
          <div class="lab_title_right">
            <div>更多</div>
            <span>
              <img src="@/assets/personal/jinruanniu.png" />
            </span>
          </div>
        </div>
        <div class="lab-content">
          <div
            class="lab-list"
            v-for="item in list2"
            :key="item.id"
            @click="goScenic(item.article_id)"
          >
            <div>
              <img :src="item.article_img" />
            </div>
            <p>{{item.article_brief}}</p>
          </div>
        </div>
      </div>
      <van-cell title="单元格">
        <div slot="default">
          <van-image
            width="10rem"
            height="10rem"
            fit="contain"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
      </van-cell>
    </div>

    <tabbar></tabbar>
  </div>
</template>


<script>
import tabbar from "@/components/tabbar.vue";
import axios from "axios";
import { article, hotHotel } from "@/http/api";

export default {
  name: "index",
  components: {
    tabbar
  },
  data() {
    return {
      //图片地址
      adimg: require("../assets/beijing_shang1.png"),

      //index 子页面地址
      adrress_title: "",

      //附近酒店信息
      list: [
        {
          id: "1",
          hotel_home_id: 105,
          img: require("../assets/index/others/hotel_03.png"),
          hotel_home_name: "博纳酒店",
          deta_address: "距离1.73km，武侯区一环南一段",
          score: "5.0分",
          price: "￥168.00"
        },
        {
          id: "2",
          hotel_home_id: 105,
          img: require("../assets/index/others/hotel_03.png"),
          hotel_home_name: "博纳酒店",
          deta_address: "距离1.73km，武侯区一环南一段",
          score: "5.0分",
          price: "￥168.00"
        },
        {
          id: "3",
          hotel_home_id: 105,
          img: require("../assets/index/others/hotel_03.png"),
          hotel_home_name: "博纳酒店",
          deta_address: "距离1.73km，武侯区一环南一段",
          score: "5.0分",
          price: "￥168.00"
        }
      ],

      list2: [
        {
          id: 1,
          img: require("@/assets/index/banner_02.png"),
          text: "123",
          alt: "图片加载失败"
        },
        {
          id: 2,
          img: require("@/assets/index/banner_02.png"),
          text: "123",
          alt: "图片加载失败"
        }
      ],

      list3: [
        {
          id: 1,
          img: require("../assets/beijing_shang1.png"),
          addr: "/planting_first"
        }
      ],
      list4: [
        {
          id: 1,
          img: require("../assets/jingpinjiudian.png"),
          alt: "精品酒店",
          text: "精品酒店",
          addr: "/navigation"
        },
        {
          id: 2,
          img: require("../assets/bangrendingfang.png"),
          alt: "帮人订房",
          text: "帮人订房",
          addr: "/navigation"
        },
        {
          id: 3,
          img: require("../assets/dituzhaofang.png"),
          alt: "地图找房",
          text: "地图找房",
          addr: "/navigation"
        }
      ],
      list5: [
        {
          id: 1,
          img: require("../assets/huoguo.png")
        },
        {
          id: 2,
          img: require("../assets/zaocan.png")
        }
      ],
      list7: [
        {
          img: require("../assets/beijing_shang1.png")
        }
      ]
    };
  },
  created() {
    this.getArticle();
    this.getHotel();
  },
  methods: {
    // 获取文章
    getArticle() {
      article().then(res => {
        this.list2 = res.data;
      });
    },

    // 获取酒店
    getHotel() {
      axios.defaults.baseURL = "/wx";
      //更换接口
      hotHotel().then(res => {
        this.list = res.data;
      });
    },

    // 传ID 跳详情
    goScenic(id) {
      this.$router.push(`/scenic?id=${id}`);
    },

    index_planting(addr) {
      this.$router.push(addr);
    }, //跳转到 轮播图详情

    hotal_details(addr, id) {
      this.$router.push({
        name: addr,
        params: {
          x: id
        }
      });
      window.console.log(id);
    }, //跳转到 精品酒店

    jump_hotal(id) {
      this.$router.push(`/hotal?id=${id}`);
    }, //跳转到 推荐酒店

    jump_hot(id) {
      this.$router.push(`/hot?id=${id}`);
    }, //跳转到火锅详情

    go_hot_more(id) {
      this.$router.push(`/member?${id}`);
    } //跳转到 会员火锅详情
  }
};
</script>


<style scoped lang='less'>
* {
  box-sizing: border-box;
}
p {
  margin: 0;
  padding: 0;
}
#container {
  background: #eee;
}

#content_container {
  overflow: auto;
  height: calc(100vh - 45px);
}

.planting {
  width: 100%;
  height: 125px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}

#Navigation_container {
  padding: 0 15px;
  height: 90px;
  box-shadow: 0 1px 2px #eee;
  position: sticky;
}

.navigation {
  height: 100%;
  width: 100%;
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px;
  position: relative;
  top: -15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    font-weight: 600;
    padding: 5px 0;
    > img {
      width: 80%;
    }
  }
}

.van-sticky--fixed {
  #Navigation_container {
    background: #fff;
  }
  .navigation {
    top: 0;
    width: 100%;
    border-radius: 0px;
  }
}

.van-swipe {
  overflow: hidden;
  height: 100%;
}

#ad {
  width: 100%;
  height: 80px;
  overflow: hidden;
  > img {
    width: 100%;
    position: relative;
    top: -40px;
    margin: 5px 0;
  }
}

#member_ad {
  padding: 0 15px;
  background: #ffffff;
}

.lab_title {
  padding: 10px 0;
  font-size: 1.06666667rem;
  height: 3.55555556rem;
  align-items: center;
}

.lab_title_left {
  padding-left: 15px;
  font-size: 15px;
}

.lab_title_left a {
  color: #61d5ac;
}

.lab_title_right {
  padding-right: 15px;
  display: flex;
  justify-content: space-between;
  div {
    font-size: 14px;
    line-height: 20px;
    margin-right: 15px;
  }
}

.lab_title_right img {
  height: 14px;
}

.lab_title_1 {
  font-size: 1.06666667rem;
  height: 3.55555556rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.lab_title,
.member {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.member {
  > div {
    width: 48%;
    overflow: hidden;
  }
}
.hotal_box {
  display: flex;
  flex-direction: row;
  height: 7.17777778rem;
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  margin-bottom: 3px;
}

.hotal_box_img {
  width: 40%;
  height: 100%;
  > img {
    width: 100%;
    height: 100%;
  }
}

.hotal_box_infor {
  width: 60%;
  padding: 5px 5px 0 5px;
}

.hotal_box_infor_title {
  font-family: "PingFangB";
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.06666667rem;
}

.hotal_box_infor_position {
  color: #d4d4d4;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  -webkit-box-pack: justify;
  font-size: 0.88888889rem;
  line-height: 25px;
}

#nearbyHotal {
  background: #ffffff;
  padding: 0 15px;
}

.score {
  display: flex;
  justify-content: space-between;
  font-size: 1.42222222rem;
  line-height: 35px;
}

.score_left {
  color: red;
}
.score_right {
  color: #ff9917;
}

.nearby {
  padding: 10px 0;
  font-size: 15px;
  font-family: "PingFangB";
  > span {
    color: #61d5ac;
  }
}

.lab {
  background: #fff;
}

.lab-list {
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
  > p {
    line-height: 30px;
    padding: 0 8px;
    font-size: 14px;
  }
  > div {
    > img {
      width: 100%;
      height: 140px;
    }
  }
}

.hotal_box_label {
  font-size: 11px;
  border-top: 1px solid #eee;
  line-height: 25px;
  > a {
    margin: 0 1px;
    border-radius: 3px;
  }
}

.hotal_box_label_1 {
  color: #ffd600;
  border: 1px solid;
  text-align: center;
}

.hotal_box_label_2 {
  color: #5803f7;
  border: 1px solid;
}

.lab-content {
  padding: 0 15px;
}

.lab_title1_left {
  font-size: 15px;
  span {
    position: relative;
    padding-left: 10px;
    box-sizing: border-box;
    i {
      font-style: normal;
    }
    &::before {
      display: block;
      clear: both;
      content: "";
      width: 3px;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      height: 100%;
      background: #61d5ac;
    }
  }
  > a {
    color: #61d5ac;
  }
}

.lab_title1_right {
  display: flex;
  justify-content: space-between;
  > div {
    font-size: 14px;
    line-height: 20px;
    margin-right: 15px;
  }
  .lab_title1_right {
    img {
      height: 14px;
    }
  }
}
</style>