<template>
  <div class="header">
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
          <!-- <el-dropdown trigger="click">
            <div class="add">+xxxxx
               <span class="el-dropdown-link">
              <i class="el-icon-caret-bottom" style="color:#fff"></i>
            </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>加入班级</el-dropdown-item>
              </el-dropdown-menu>
            </div>
          </el-dropdown>-->
          <!-- 用户名下拉菜单 -->
          <el-dropdown class="user-name" trigger="click">
            <div class="avatar d_flex flex-items-center">
              <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
              <span class="el-dropdown-link">
                <i class="el-icon-caret-bottom" style="color:#fff"></i>
              </span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>xx</el-dropdown-item>
              <el-dropdown-item @click.native="add()">创建组织</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <el-dialog title="创建组织" :visible.sync="dialogVisible" width="30%">
          <el-form :model="createForm" ref="createForm" label-width="100px" class="demo-ruleForm" :rules="formRules">
            <el-form-item label="名称：" prop="name">
              <el-input v-model.trim="createForm.name"></el-input>
            </el-form-item>
            <el-form-item label="简介：" prop="intro">
              <el-input v-model.trim="createForm.intro" type="textarea" :rows="2"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="cancleForm('createForm')">取 消</el-button>
              <el-button @click="submitForm('createForm')">确 定</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        dialogVisible: false,
        createForm: {
          name: '',
          intro: ''
        },
        formRules: {
          name: [{
            required: true,
            message: '请输入组织名称',
            trigger: 'blur'
          }],
          intro: [{
            required: true,
            message: '请输入简介内容',
            trigger: 'blur'
          }],
        }

      };
    },
    watch: {},
    computed: {},
    methods: {
      add() {
        this.dialogVisible = true
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      cancleForm(formName) {
        this.$refs[formName].resetFields();
        this.dialogVisible = false
      }
    },
    created() {},
    mounted() {},
  };

</script>
<style lang="scss" scoped>
  @import "../../assets/css/flex.css";

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
          margin-right: 6px;
          cursor: pointer;
        }

        .add {
          color: #fff;
          font-size: 18px;
          font-weight: 600;
        }

        .avatar {
          img {
            width: 25px;
            height: 25px;
            margin-right: 4px;
            border-radius: 50%;
          }
        }
      }
    }
  }

</style>
