<template>
  <div>
    <div class="title">
      <el-row :gutter="0">
        <!-- 左1 -->
        <el-col :span="10">
          <div class="grid-content bg-purple">
            <text-select font="课程编号：" :data="number"> </text-select>
          </div>
        </el-col>
        <el-col :span="8" :offset="6">
          <div class="grid-content bg-purple">
            <text-with-input font="授课院系："></text-with-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="8" :offset="16">
          <div class="grid-content bg-purple">
            <text-with-input font="学时："></text-with-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="10">
          <div class="grid-content bg-purple">
            <text-select font="课程名称：" :data="name"></text-select>
          </div>
        </el-col>
        <el-col :span="8" :offset="6">
          <div class="grid-content bg-purple">
            <text-with-input font="课程班级："></text-with-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="5">
          <div class="buttoncontainer">
            <el-button class="titlebutton">保存</el-button>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="buttoncontainer">
            <el-button class="titlebutton">删除</el-button>
          </div>
        </el-col>
        <el-col :span="8" :offset="6">
          <div class="grid-content bg-purple">
            <text-with-input font="授课学期："></text-with-input>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-divider />
    <el-container style="height: 100%">
      <el-main>
        <el-table
          :data="tableData"
          style="width: 100%"
          stripe
          height="450"
          highlight-current-row
          sortable
        >
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </el-main>
      <el-aside width="20%">
        <el-row :gutter="0">
          <el-col :span="20">
            <div>
              <el-button class="tablebutton">添加</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="0">
          <el-col :span="20">
            <div>
              <el-button class="tablebutton">编辑</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="0">
          <el-col :span="20">
            <div>
              <el-button class="tablebutton">删除</el-button>
            </div>
          </el-col>
        </el-row>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import TextSelect from "@/components/TextSelect.vue";
import TextWithInput from "@/components/TextWithInput.vue";

export default {
  components: {
    TextSelect,
    TextWithInput
  },
  data() {
    return {
      number: [
        {
          value: 1,
          label: "黄金糕"
        },
        {
          value: 2,
          label: "双皮奶"
        },
        {
          value: 3,
          label: "蚵仔煎"
        },
        {
          value: 4,
          label: "龙须面"
        },
        {
          value: 5,
          label: "北京烤鸭"
        }
      ],
      name: [
        {
          value: 1,
          label: "实验1"
        },
        {
          value: 2,
          label: "实验2"
        },
        {
          value: 3,
          label: "实验3"
        },
        {
          value: 4,
          label: "实验4"
        },
        {
          value: 5,
          label: "实验5"
        }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.font1 {
  font-size: 20px;
}

.title {
  height: 40%;
}

.tablebutton {
  height: 80%;
  width: 80%;
}

.titlebutton {
  height: 80%;
  width: 80%;
}

.buttoncontainer {
  padding-left: 10px;
  padding-right: 10px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 50px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
