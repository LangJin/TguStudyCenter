<template>
<div class='header'>
      <header class="page_header">
      <div class="header_child">
        <nav>
          <a>xxx</a>
          <a>xxx</a>
          <a>xxx</a>
        </nav>
      </div>
      <div class="header_child">
        <div class="link_item">
          <el-dropdown trigger="click">
            <div class="add">+xxxxx
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>加入班级</el-dropdown-item>
              </el-dropdown-menu>
            </div>
          </el-dropdown>
          <el-dropdown trigger="click">
            <div class="avatar">
              <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="">
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>xx</el-dropdown-item>
                <el-dropdown-item>xx</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </div>
          </el-dropdown>
        </div>
      </div>
    </header>
</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
  .page_header {
    z-index: 32;
    padding: 10px;
    line-height: 1.5;
    font-size: 14px;
    background-color: #24292e;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header_child {

      nav a {
        color: #fff;
        font-weight: 600;
        white-space: nowrap;
      }

      .link_item {
        display: flex;
        align-items: center;

        div {
          margin-right: 16px;
          cursor: pointer;
        }

        .add {
          color: #fff;
          font-size: 18px;
          font-weight: 600;
        }

        .avatar {
          width: 20px;
          height: 20px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
    }

  }
</style>