<template>
  <div class="login">    
    <el-container>
      <el-main class="main">
        <div class="left_pic">
          <a class="logo"></a>
          <div class="loginPicture">
            <a href target="_blank">
              <img
                src="https://s4.51cto.com/images/blog/202006/15/4f905930fce458ec9e16d4d953f6e276.jpg"
                alt="登录图片"
              />
            </a>
          </div>
        </div>

        <div class="right_form">
          <div class="loginTitle">
            <span :class="{'active':activeClass == 0}" @click="changeTab(0)">密码登录</span>
            <span :class="{'active':activeClass == 1}" @click="changeTab(1)">免密登录</span>
            <router-link :to="{path:'/register', query: {flag: 'true'}}">注册</router-link>
          </div>

          <!-- 密码登录  -->
          <el-form ref="loginForm" :rules="rules" :model="user" v-if="isFirst" class="loginForm">
            <el-form-item prop="studentPhone">
              <el-input v-model="user.studentPhone" placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <el-form-item prop="studentPassword">
              <el-input
                v-model="user.studentPassword"
                type="password"
                placeholder="请输入密码"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox name="checkbox" class="checkBox" checked>
                <span>10天内自动登录</span>
              </el-checkbox>
              <router-link :to="{path:'/register'}">
                <a class="forgetPwd">忘记密码</a>
              </router-link>
              <el-button type="danger" class="btn" @click="pwdLogin">登 录</el-button>
            </el-form-item>
          </el-form>

          <!-- 免密登录  -->
          <el-form
            ref="unclassifiedForm"
            :model="user"
            :rules="rules1"
            v-else
            class="unclassifiedForm"
          >
            <el-form-item prop="no_secret_studentPhone">
              <el-input v-model="user.no_secret_studentPhone" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item prop="code" class="msgCodeItem">
              <el-input v-model="user.code" class="msgCode" placeholder="短信验证码"></el-input>
              <el-button @click="count" class="sendCode" :disabled="dis">
                <template v-if="!sending">
                  <span>发送验证码</span>
                </template>
                <template v-else>
                  <span>{{ minute }}</span>
                </template>
              </el-button>
            </el-form-item>
            <el-form-item class="btn_sub">
              <el-button type="danger" class="btn" @click="unclassifiedLogin">登 录</el-button>
            </el-form-item>
          </el-form>

          <div class="weChat">
            <a href="javascript:;" @click="handleWeChatLogin">微信登录</a>
          </div>
        </div>
      </el-main>

      <el-footer class="foot">

      </el-footer>
    </el-container>
  </div>
</template>
<script>
import md5 from "js-md5";
import ElFooter from "@/components/footer";
import { setCookie } from "@/util/Cookie";

export default {
  name: "Login",
  components: {
    ElFooter
  },
  data() {
    return {
      isFirst: true,
      activeClass: 0,
      sending: false,
      minute: 60,
      dis: false,
      user: {
        no_secret_studentPhone: "",
        studentPassword: "",
        studentPhone: "",
        code: ""
      },
      rules: {
        studentPhone: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          { max: 11, message: "不能超过11位数字", trigger: "blur" },
          {
            pattern: /^0?(13[0-9]|15[012356789]|18[0123456789]|14[57]|17[3678]|170[059]|14[57]|166|19[89])[0-9]{8}$/,
            message: "手机号码格式不正确",
            trigger: "blur"
          }
        ],
        studentPassword: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ]
      },
      rules1: {
        no_secret_studentPhone: [
          { required: true, message: "电话不能为空", trigger: "blur" },
          { max: 11, message: "不能超过11位数字", trigger: "blur" },
          {
            pattern: /^0?(13[0-9]|15[012356789]|18[0123456789]|14[57]|17[3678]|170[059]|14[57]|166|19[89])[0-9]{8}$/,
            message: "手机号码格式不正确",
            trigger: "blur"
          }
        ],
        code: [{ required: true, message: "验证码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {    
    changeTab(num) {
      this.activeClass = num;
      if (num === 0) {
        this.$refs["unclassifiedForm"].resetFields();
        this.isFirst = true;
      } else if (num === 1) {
        this.$refs["loginForm"].resetFields();
        this.isFirst = false;
      }
    },
    count() {
      const phone = this.user.no_secret_studentPhone;
      this.$refs.unclassifiedForm.validateField(
        "no_secret_studentPhone",
        phoneError => {
          if (!phoneError) {
            this.$http.postValicode(phone).then(res => {
              this.sending = true;
              this.dis = true;
              var clear = setInterval(() => {
                if (this.minute > 0) {
                  --this.minute;
                } else {
                  clearInterval(clear);
                  this.sending = false;
                  this.dis = false;
                  this.minute = 60;
                }
              }, 1000);
            });
          } else {
            return false;
          }
        }
      );
    },
    pwdLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          let params = {
            studentPhone: this.user.studentPhone,
            studentPassword: md5(this.user.studentPassword)
          };
          this.$http.postLogin(params).then(res => {
            // console.log("login",res);
            if (res.length > 0) {
              setCookie("token", res.data[0].accessToken);
              setCookie("studentId", res.data[0].id);
              this.$router.push("/home");
            } else {
              this.$router.replace("/login");
            }
          });
        } else {
          return false;
        }
      });
    },
    unclassifiedLogin() {
      this.$refs.unclassifiedForm.validate(valid => {
        if (valid) {
          let params = {
            studentPhone: this.user.no_secret_studentPhone,
            code: this.user.code
          };
          this.$http.postLogin(params).then(res => {
            if (res.length > 0) {
              console.log(222, res);
              setCookie("token", res[0].accessToken);
              setCookie("studentId", res[0].id);
              this.$router.push("/home");
            } else {
              this.$router.replace("/login");
            }
          });
        } else {
          return false;
        }
      });
    },
    handleWeChatLogin(){

    }
  }
};
</script>
<style lang='scss' scope>
$color: #444444;
.login {
  width: 965px;
  margin: 40px auto;
  .main {
    overflow: hidden;
    .left_pic {
      width: 50%;
      float: left;
      .logo {
        display: block;
        width: 160px;
        height: 60px;
        margin: 0 0 40px 8px;
        background: url(../../assets/images/logo1.gif) no-repeat left top;
      }
      .loginPicture {
        height: 360px;
      }
    }
    .right_form {
      width: 30%;
      height: 370px;
      margin: 0;
      float: right;
      margin-top: 40px;
      padding: 3%;
      border: solid 1px #d4d4d4;
      border-radius: 2%;
      .loginTitle {
        height: 25px;
        margin-bottom: 40px;
        a {
          cursor: pointer;
          float: right;
          color: #000;
          font-size: 13px;
        }
        span {
          cursor: pointer;
          float: left;
          margin-left: 8px;
          font-size: 18px;
          color: #666666;
        }
        .active {
          font-weight: bold;
          color: #222222;
        }
      }
      .checkBox {
        float: left;
        margin-bottom: 0;
        span {
          color: #999;
          font-size: 12px;
        }
      }
      .forgetPwd {
        float: right;
        color: #999;
        font-size: 12px;
      }
      .msgCodeItem {
        .msgCode {
          width: 56%;
          float: left;
          margin-right: 2%;
        }
      }
    }
    .btn_sub {
      margin-top: 22%;
    }
    .btn {
      width: 100%;
      font-size: 18px;
      background: #e03537;
      font-weight: 400;
      span {
        color: #fff;
      }
    }
    .weChat a {
      border-radius: 4px;
      color: #3d9d5f;
      display: block;
      height: 40px;      
      font-size: 18px;
      text-align: center;
      line-height: 40px;
      border: 1px solid #3d9d5f;      
      // padding-left: 136px;
      // background: #fff
      //   url(https://s1.51cto.com/images/blog/201902/18/3f6afcfc7a2b32635c81af55e35f78f7.png)
      //   no-repeat 98px center;
    }
  }
  .foot {
    border-top: 1px solid #d4d4d4;
    color: $color;
    line-height: 24px;
    margin: 0 auto;
    padding: 8px 0 50px;
    margin-top: 90px;
    width: 930px;
    font-size: 12px;
    text-align: center;
    a {
      color: $color;
      font-size: 12px;
    }
  }
}
</style>
