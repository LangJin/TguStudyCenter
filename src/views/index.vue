<template>
  <div class='content'>
    <page-header></page-header>
    <main class="main center Page">
      <div class="user">
        <div class="user_avatar">
          <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="">
        </div>
        <div class="user_info">
          <p>chenfeng1995</p>
          <p>{{sign}}</p>
          <!-- <p>若往事能够下酒，回忆便是一场宿醉</p> -->
          <button class="edit_btn" @click="editData" v-show="edit_btn">编辑个人资料</button>
        </div>
        <div class="edit_form" v-show="showForm">
          <div class="sign">
            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入签名" v-model.trim="sign">
            </el-input>
          </div>
          <ul class="input_container">
            <li class="d_flex flex-items-center">
              <i class="el-icon-office-building"></i>
              <el-input placeholder="请输入公司" v-model.trim="form.company">
              </el-input>
            </li>
            <li class="d_flex flex-items-center">
              <i class="el-icon-location-outline"></i>
              <el-input placeholder="请输入地区" v-model.trim="form.location">
              </el-input>
            </li>
            <li class="d_flex flex-items-center">
              <i class="el-icon-message"></i>
              <el-input placeholder="请输入邮箱" v-model.trim="form.email">
              </el-input>
            </li>
            <li class="d_flex flex-items-center">
              <el-button type="success" @click="save">保存</el-button>
              <el-button @click="cancle">取消</el-button>
            </li>
          </ul>
        </div>
        <div class="block" v-show="blockForm">
          <ul>
            <li>
              <i class="el-icon-office-building"></i>
              <span>{{saveForm.company}}</span>
            </li>
            <li>
              <i class="el-icon-location-outline"></i>
              <span>{{saveForm.location}}</span>
            </li>
            <li>
              <i class="el-icon-message"></i>
              <span>{{saveForm.email}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="main_content">
        <div class="tags">
          <!-- 加入班级列表 更多班级 -->
          <el-tabs v-model="activeName">
            <el-tab-pane label="班级管理" name="first">
              <div class="title">
                <div>班级</div>
                <div>查看更多>></div>
              </div>
              <div>
                <ul class="class_list">
                  <li>
                    <div class="class_name">
                      <a @click="toLearn">名称</a>
                    </div>
                    <p class="class_intro">简介</p>
                    <p>人数:xx</p>
                  </li>
                  <li>
                    <div class="class_name">
                      <a>名称</a>
                    </div>
                    <p class="class_intro">简介</p>
                    <p>人数:xx</p>
                  </li>
                  <li>
                    <div class="class_name">
                      <a>名称</a>
                    </div>
                    <p class="class_intro">简介</p>
                    <p>人数:xx</p>
                  </li>
                  <li>
                    <div class="class_name">
                      <a>名称</a>
                    </div>
                    <p class="class_intro">简介</p>
                    <p>人数:xx</p>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="状态跟踪" name="second">状态跟踪</el-tab-pane>
            <!-- 表格 -->
            <el-tab-pane label="面试记录" name="third">
              <interview-table></interview-table>
            </el-tab-pane>
            <el-tab-pane label="课程回顾" name="fourth">录的视频</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import pageHeader from '@/components/header/header'
  import interviewTable from '@/components/interviewRecord/interviewRecord'
  export default {
    components: {
      interviewTable,
      pageHeader
    },
    data() {
      return {
        activeName: 'first',
        showForm: false,
        edit_btn: true,
        sign: '',
        form: {
          company: '',
          location: '',
          enail: '',

        },
        saveForm: {
          // company: '',
          // location: '',
          // enail: '',
        },
        blockForm: false
      };
    },
    watch: {},
    computed: {},
    methods: {
      toLearn() {
        window.open('/classLearn')
      },
      editData() {
        this.showForm = true
        this.edit_btn = false
        this.blockForm = false
      },
      save() {
        this.showForm = false
        this.form = this.saveForm
        if (JSON.stringify(this.saveForm) != '{}') {
          this.blockForm = true
        }
        this.edit_btn = true
      },
      cancle() {
        this.showForm = false
        this.edit_btn = true
        this.form = {}
      }
    },
    created() {
      if (JSON.stringify(this.saveForm) != '{}') {
        this.blockForm = true
      }
    },
    mounted() {}
  };

</script>
<style lang="scss" scoped>
  @import '../assets/css/flex.css';

  .main {
    display: flex;
    margin-top: 24px;

    .user {
      width: 25%;

      .user_avatar {
        width: 280px;
        height: 280px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .user_info {
        padding: 3px;
        padding-top: 12px;

        p:nth-child(1) {
          font-size: 20px;
          font-style: normal;
          font-weight: 300;
          line-height: 24px;
          color: #666;
          padding-bottom: 12px;
        }

        p:nth-child(2) {
          font-size: 16px;
          color: #24292e;
          margin-bottom: 8px;
        }


        .edit_btn {
          color: #24292e;
          background-color: #fafbfc;
          width: 280px;
          border-color: rgba(27, 31, 35, .15);
          box-shadow: 0 1px 0 rgba(27, 31, 35, .04), inset 0 1px 0 hsla(0, 0%, 100%, .25);
          transition: background-color .2s cubic-bezier;
          padding: 5px 16px;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          white-space: nowrap;
          vertical-align: middle;
          cursor: pointer;
          user-select: none;
          border-radius: 6px;
          margin-bottom: 16px;

          &:focus {
            outline: none;
            box-shadow: none;
          }
        }
      }

      .edit_form {
        li {
          margin-top: 8px;

          .el-input {
            margin-left: 8px !important;
          }

          >>>.el-input__inner {
            height: 28px;
            line-height: 28px;
            font-size: 12px;
          }

          button {
            padding: 3px 12px;
            font-size: 12px;
            line-height: 20px;
          }

          &:last-child {
            margin: 16px 0;
          }
        }

      }
    }

    i {
      font-size: 18px;
    }

    .main_content {
      width: 100%;
      padding: 0 30px;

      .tags {
        .title {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          font-weight: 400;
          padding-right: 10px;
          margin-bottom: 8px;

          div:nth-child(2) {
            color: #586069;
            font-size: 13px;
            font-weight: 400;
          }
        }

        .class_list>li {
          display: inline-block
        }

        .class_list li {
          width: 45%;
          background-color: #fff;
          border: 1px solid #e1e4e8;
          border-radius: 6px;
          padding: 16px;
          margin-right: 9px;
          margin-bottom: 16px;

          .class_name a {
            color: #0366d6;
            font-size: 14px;
          }

          .class_intro {
            margin: 9px 0;
          }

          p {
            color: #586069;
            font-size: 12px;
          }
        }

      }
    }
  }

 
  @media screen and (max-width:1240px) {
    .main .user {
      width: 36%;
    }
    .class_list li{
      width: 36% !important;
    }
  }

</style>
