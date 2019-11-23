<template>
  <div class="scenic">
    <div class="scenic_title">
      <span @click="back()">
        <img src="@/assets/personal/houtui.png" />
      </span>
      <div>东道君宣布：这些酒店免费住了！</div>
    </div>

    <div class="scenic_content_container">
      <div class="scenic_content_topper">
        <p class="topper_introduction">东道君宣布：这些酒店免费住了！</p>
        <p class="topper_date">2019年03月05日</p>
      </div>

      <div class="content_text_Survey">
        <p>
          今年成都初雪，全成都人民都在等雪，
          像一个初恋少女等待心上人，同时也等来了一波接一波的寒潮
          。
        </p>

        <p>
          这么寒冷的天气，
          不来住一下温暖的酒店
          ，怎么表示自己对冬天的尊重。
        </p>
        <p>
          根据内部消息，
          东道君必须要告诉你内部的消息，
          东道客平台酒店免费住了！
        </p>
      </div>

      <div class="content_text_box">
        <p class="content_interval">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>

        <p class="content_text_title">
          <span class="content_text_title_num">NO 1 .</span>
          <span class="content_text_title">九眼桥博纳酒店</span>
        </p>
        <p class="content_text_artic">地处九眼桥繁华之地的博纳酒店，是众多年轻人打卡的地方。迷蒙的</p>
        <p class="content_interval">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
        <p class="content_text_title">豪华大床房示意图</p>
        <p class="text_img">
          <img src="@/assets/index/banner_02.png" />
        </p>

        <p class="content_text_artic">
          博纳酒店的装修风格很适合年轻人居住，
          小清新的家庭式公寓风格深入现在小年轻的心，
          采用复古的绿色色调，仿佛住进了大自然一般。
          酒店设有豪华大床房、豪华标间、主题电影房、
          简约电影房等多种房型。
        </p>
        <p class="content_interval">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>

        <p class="content_text_title">主题大床电影房展示图</p>
        <p class="text_img">
          <img src="@/assets/index/banner_02.png" />
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
export default {
  name: "scenic",
  data() {
    return {
      id: ""
    };
  },
  created() {
    this.id = this.$route.query.id ? this.$route.query.id : "";
    axios.defaults.baseURL = "/wx";
    let params = { id: this.id, token: "ohsi11Gsq8GLgfMD2n6oaSP7iqgE" };
    axios
      .post("WeChat/index_act_view", Qs.stringify(params))
      .then(res => {
        window.console.log(res);
        // if (res.data.code == 1) {
        //   this.list2 = res.data.data;
        // }
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

.scenic_title {
  background: #3fe4c7;
  width: 100%;
  display: flex;
  height: 40px;
  justify-content: space-around;
}

.scenic_title > span {
  position: absolute;
  top: 10px;
  left: 8px;
}

.scenic_title > div {
  width: 55%;
  text-align: center;
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.scenic_content_container {
  padding: 0 15px;
  height: calc(100vh - 40px);
  overflow: scroll;
}
.topper_introduction {
  line-height: 32px;
  padding-top: 18px;
  font-size: 21px;
  text-align: left;
  align-items: center;
  margin-bottom: 10px;
}

.topper_date {
  color: #c3c3c3;
  text-align: right;
  font-size: 13px;
  height: 40px;
}

.content_text_title_num {
  font-size: 14px;
  color: #000;
  font-weight: 600;
  font-family: inherit;
}

.content_text_title {
  font-size: 16px;
  color: #000;
  font-weight: 600;
  font-family: inherit;
  margin: 14px 0;
}

.content_interval {
  margin: 14px 0;
}
</style>


