<template>
  <div class='class_learn'>
    <page-header></page-header>
    <div class="course_info">
      <div class="center">
        <h2>初识HTML(5)+CSS(3)-2020升级版</h2>
        <div class="statics">
          <div class="teacher">
            <div>
              <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
              </el-avatar>
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
    <div class="coures_info_main center">
      <div class="content">
        <div class="course_description course_wrap ">
          简介：2020升级版来了，课程将持续更新....本课程从最基本的概念开始讲起，步步深入，带领大家学习HTML(5)、CSS(3)样式基础知识，了解各种常用标签的意义以及基本用法，后半部分教程主要讲解CSS(3)样式代码添加，为后面的案例课程打下基础。
        </div>
        <div class="course_chapters">
          <div class="chapter course_wrap ">
            <h3>第1章 HTML5介绍</h3>
            <div class="chapter_description">本章节主要讲解html5和css3样式的关系，以及html5标签语法，文档结构,最后讲解了在html5中的注释代码的作用。</div>
            <ul class="chapter_main">
              <li>
                <a href=""> 1-1 代码初体验，制作我的第一个网页</a>
              </li>
              <li>
                <a href=""> 1-1 代码初体验，制作我的第一个网页</a>
              </li>
              <li>
                <a href=""> 1-1 代码初体验，制作我的第一个网页</a>
              </li>
            </ul>
          </div>
        </div>
           <div class="course_chapters">
          <div class="chapter course_wrap ">
            <h3>第1章 HTML5介绍</h3>
            <div class="chapter_description">本章节主要讲解html5和css3样式的关系，以及html5标签语法，文档结构,最后讲解了在html5中的注释代码的作用。</div>
            <ul class="chapter_main">
              <li>
                <a href=""> 1-1 代码初体验，制作我的第一个网页</a>
              </li>
              <li>
                <a href=""> 1-1 代码初体验，制作我的第一个网页</a>
              </li>
              <li>
                <a href=""> 1-1 代码初体验，制作我的第一个网页</a>
              </li>
            </ul>
          </div>
        </div>
           <div class="course_chapters">
          <div class="chapter course_wrap ">
            <h3>第1章 HTML5介绍</h3>
            <div class="chapter_description">本章节主要讲解html5和css3样式的关系，以及html5标签语法，文档结构,最后讲解了在html5中的注释代码的作用。</div>
            <ul class="chapter_main">
              <li>
                <a href=""> 1-1 代码初体验，制作我的第一个网页</a>
              </li>
              <li>
                <a href=""> 1-1 代码初体验，制作我的第一个网页</a>
              </li>
              <li>
                <a href=""> 1-1 代码初体验，制作我的第一个网页</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="aside">
        <div class="aside_item">
          <h4>推荐课程</h4>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>xxxx</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import pageHeader from '@/components/header/header'
  export default {
    components: {
      pageHeader
    },
    data() {
      return {};
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
    mounted() {}
  };

</script>
<style lang="scss" scoped>
  .class_learn {
    .center {
      max-width: 1152px;
      height: 200px;
      margin: 0 auto;
    }

    .course_wrap {
      margin-bottom: 8px;
      padding: 24px 32px 32px;
      background: #fff;
      box-shadow: 0 8px 16px 0 rgba(7, 17, 27, .1);
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

      }
    }
  }

</style>
