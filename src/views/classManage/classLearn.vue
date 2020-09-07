<template>
  <div class="class_learn">
    <page-header></page-header>
    <div class="course_info">
      <div class="center Page" style="height:200px">
        <h2>初识HTML(5)+CSS(3)-2020升级版</h2>
        <div class="statics">
          <div class="teacher">
            <div>
              <el-avatar
                :size="50"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
            </div>
            <div class="teacher_info">
              <p>chenfeng</p>
              <p>web前端工程师</p>
            </div>
          </div>
          <div class="course_base">xxxxx</div>
        </div>
      </div>
    </div>
    <div class="coures_info_main center Page">
      <div class="content">
        <div
          class="course_description course_wrap"
        >简介：2020升级版来了，课程将持续更新....本课程从最基本的概念开始讲起，步步深入，带领大家学习HTML(5)、CSS(3)样式基础知识，了解各种常用标签的意义以及基本用法，后半部分教程主要讲解CSS(3)样式代码添加，为后面的案例课程打下基础。</div>
        <div class="course_chapters">
          <div class="chapter course_wrap">
            <h3>第1章 HTML5介绍</h3>
            <div
              class="chapter_description"
            >本章节主要讲解html5和css3样式的关系，以及html5标签语法，文档结构,最后讲解了在html5中的注释代码的作用。</div>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="一致性 Consistency" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div style="margin-bottom: 16px">在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                <el-button size="small">签到</el-button>
                <el-button size="small">提交作业</el-button>                
              </el-collapse-item>
              <el-collapse-item title="反馈 Feedback" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
              </el-collapse-item>
              <el-collapse-item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
              </el-collapse-item>
              <el-collapse-item title="可控 Controllability" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
        <div class="course_chapters">
          <div class="chapter course_wrap">
            <h3>第1章 HTML5介绍</h3>
            <div
              class="chapter_description"
            >本章节主要讲解html5和css3样式的关系，以及html5标签语法，文档结构,最后讲解了在html5中的注释代码的作用。</div>
            <ul class="chapter_main">
              <li>
                <a href>1-1 代码初体验，制作我的第一个网页</a>
              </li>
              <li>
                <a href>1-1 代码初体验，制作我的第一个网页</a>
              </li>
              <li>
                <a href>1-1 代码初体验，制作我的第一个网页</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="course_chapters">
          <div class="chapter course_wrap">
            <h3>第1章 HTML5介绍</h3>
            <div
              class="chapter_description"
            >本章节主要讲解html5和css3样式的关系，以及html5标签语法，文档结构,最后讲解了在html5中的注释代码的作用。</div>
            <ul class="chapter_main">
              <li>
                <a href>1-1 代码初体验，制作我的第一个网页</a>
              </li>
              <li>
                <a href>1-1 代码初体验，制作我的第一个网页</a>
              </li>
              <li>
                <a href>1-1 代码初体验，制作我的第一个网页</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="aside">
        <div class="aside_item">
          <h4>公告</h4>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
        </div>
        <div class="aside_item">
          <h4>群成员</h4>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
        </div>
        <div class="aside_item">
          <h4>下载资料</h4>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "@/components/header/header";
export default {
  components: {
    pageHeader,
  },
  data() {
    return {
      activeNames: [],
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.class_learn {
  .center {
    height: 200px;
  }

  .course_wrap {
    margin-bottom: 8px;
    padding: 24px 32px 32px;
    background: #fff;
    box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.1);
    border-radius: 12px;
  }

  .course_info {
    background-color: #172a34;

    h2 {
      color: #fff;
      padding-top: 30px;
      margin-bottom: 8px;
      line-height: 48px;
      font-size: 32px;
    }

    .statics {
      display: flex;
      align-items: center;
      color: #fff;

      // margin-right: 320px;
      .teacher {
        display: flex;
        align-items: center;
        padding-right: 60px;
        line-height: 12px;
        font-size: 12px;

        .teacher_info p {
          margin-left: 10px;
          color: #fff;

          &:nth-child(1) {
            font-size: 14px;
            line-height: 22px;
            font-weight: 700;
          }
        }
      }

      .course_base {
        color: #fff;
      }
    }
  }

  .coures_info_main {
    display: flex;

    .content {
      width: 100%;
      padding-top: 36px;

      .course_description {
        line-height: 28px;
      }

      .course_chapters {
        h3 {
          color: #1c1f21;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
        }

        .chapter_description {
          margin-top: 2px;
          font-size: 12px;
          color: #545c63;
          line-height: 18px;
          margin-bottom: 16px;
        }

        .chapter_main {
          padding-top: 16px;

          li {
            padding-left: 12px;
            height: 48px;
            line-height: 48px;
          }
        }
      }
    }

    .aside {
      width: 320px;
      margin-left: 20px;

      .aside_item {
        margin: 20px 0 30px 0;
      }
    }
  }
}
</style>
