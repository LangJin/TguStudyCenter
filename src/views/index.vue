<template>
  <div class='content'>
    <page-header></page-header>
    <main class="main">
      <div class="user">
        <div class="user_avatar">
          <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="">
        </div>
        <div class="user_info">
          <p>chenfeng</p>
          <!-- <p>若往事能够下酒，回忆便是一场宿醉</p> -->
          <button class="edit_btn">编辑个人资料</button>
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
        activeName: 'first'
      };
    },
    watch: {},
    computed: {},
    methods: {
      toLearn(){
        window.open('/classLearn')
      }
    },
    created() {},
    mounted() {}
  };

</script>
<style lang="scss" scoped>
  .main {
    display: flex;
    max-width: 1280px;
    margin: auto;
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
        p:nth-child(1) {
          font-size: 20px;
          font-style: normal;
          font-weight: 300;
          line-height: 24px;
          padding: 16px;
          color: #666;
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
          border-radius: 6px
        }
      }
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

</style>
