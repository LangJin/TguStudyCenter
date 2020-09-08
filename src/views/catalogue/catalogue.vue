<template>
  <!-- 创建目录页 -->
  <div class='Page'>
    <div class="container">
      <el-form :model="createForm" ref="createForm" label-width="100px" class="demo-ruleForm" :rules="formRules">
        <div class="d_flex">
          <div class="item">
            <el-form-item label="标题：" prop="name">
              <el-input v-model.trim="createForm.name" style=""></el-input>
            </el-form-item>
          </div>
          <div class="item">
            <el-form-item>
              <el-button @click="cancleForm('createForm')">取 消</el-button>
              <el-button type="primary" @click="openDialog('createForm')">发 布</el-button>
            </el-form-item>
          </div>
        </div>
        <el-form-item>
          <mavon-editor v-model="content" ref="md" @change="change" :toolbars="toolbars" style="min-height: 800px"  />
        </el-form-item>
      </el-form>
    </div>
    <el-dialog title="发布文章" :visible.sync="dialogVisible" width="35%">
      <el-form :model="createForm" ref="createForm" label-width="100px" class="demo-ruleForm" :rules="formRules">
        <el-form-item label="一级目录：" prop="name">
          <!-- <el-input v-model.trim="createForm.name"></el-input> -->
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-button @click="add">新建</el-button>
          <div class="dialog_inner" v-show="innerDialog">
            <div class="icon">
              <i class="el-icon-close" @click="close"></i>
            </div>
            <el-input v-model.trim="createForm.name" placeholder="请输入一级目录"></el-input>
            <div style="text-align:right">
              <el-button size="mini" @click="confirmAdd">确定</el-button>
            </div>

          </div>
        </el-form-item>
        <el-form-item label="二级目录：" prop="intro">
          <el-input v-model.trim="createForm.name"></el-input>
        </el-form-item>
        <el-form-item style="text-align:right">
          <el-button @click="cancle('createForm')">取 消</el-button>
          <el-button type="primary" @click="submitForm('createForm')">发 布</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  import {
    mavonEditor
  } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    components: {
      mavonEditor,
    },
    data() {
      return {
        createForm: {
          name: '',
        },
        formRules: {
          name: [{
            message: '请输入组织名称',
            trigger: 'blur'
          }],

        },
        content: '', // 输入的markdown
        html: '', // 及时转的htm
        dialogVisible: false,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value: '',
        innerDialog: false,

        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          htmlcode: true, // 展示html源码
          help: true, // 帮助
          /* 1.3.5 */
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          /* 1.4.2 */
          navigation: true, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          /* 2.2.1 */
          subfield: true, // 单双栏模式
          preview: true, // 预览
        }

        };
      },
      watch: {},
        computed: {},
        methods: {
          change(value, render) {
            // render 为 markdown 解析后的结果[html]
            this.html = render;
          },
          submitForm() {

          },
          add() {
            this.innerDialog = true
          },
          confirmAdd() {
            this.innerDialog = false
          },
          close() {
            this.innerDialog = false
          },
          openDialog() {
            this.dialogVisible = true
          },

          cancle() {

            this.dialogVisible = false
          },
          cancleForm() {
            // 传html给后端
            console.log(this.content)
            console.log(this.html)
          }
        },
        created() {
          // this.content  = '<ol><li>2222222- 33333</li></ol>'
        },
        mounted() {}
    };

</script>
<style lang="scss" scoped>
  .container {
    padding: 30px 0;

    .item:nth-child(1) {
      width: 76%;
    }

  }

  .dialog_inner {
    position: absolute;
    left: 0;
    width: 280px;
    z-index: 999;
    height: auto;
    background: #fff;
    margin-top: 6px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .1);
    border: 1px solid #e3e3e3;
    padding: 10px 15px;

    >>>.el-input__inner {
      height: 30px;
      line-height: 30px;
      font-size: 12px;
    }

    .icon {
      text-align: right;
      font-size: 12px;
      line-height: 1px;
      margin-bottom: 6px;

      .el-icon-close {
        color: #909399;

        &:hover {
          background-color: rgba(0, 0, 0, .05);
          cursor: pointer;
        }
      }
    }
  }

</style>
