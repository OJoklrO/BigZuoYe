<template>
  <div>
    <div class="title">
      <el-row :gutter="0">
        <!-- 左1 -->
        <el-col :span="10">
          <div class="grid-content bg-purple">
            <text-select
              font="课程编号："
              :data="idArray()"
              :showValue="currentCourse.id"
            >
            </text-select>
          </div>
        </el-col>
        <el-col :span="8" :offset="6">
          <div class="grid-content bg-purple">
            <text-with-input
              font="授课院系："
              :content="currentCourse.department"
            ></text-with-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="8" :offset="16">
          <div class="grid-content bg-purple">
            <text-with-input
              font="学时："
              :content="currentCourse.hour"
            ></text-with-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="10">
          <div class="grid-content bg-purple">
            <text-select
              font="课程名称："
              :data="nameArray()"
              :showValue="currentCourse.name"
            ></text-select>
          </div>
        </el-col>
        <el-col :span="8" :offset="6">
          <div class="grid-content bg-purple">
            <text-with-input
              font="课程班级："
              :content="currentCourse.class"
            ></text-with-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="5">
          <div class="buttoncontainer">
            <el-button class="titlebutton">添加</el-button>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="buttoncontainer">
            <el-button class="titlebutton">删除</el-button>
          </div>
        </el-col>
        <el-col :span="8" :offset="6">
          <div class="grid-content bg-purple">
            <text-with-input
              font="授课学期："
              :content="currentCourse.term"
            ></text-with-input>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-divider content-position="left" style="margin: 50px 0;"
      >课程包含实验</el-divider
    >
    <el-container style="height: 100%">
      <el-main>
        <el-table
          :data="experiments"
          style="width: 100%"
          stripe
          height="450"
          sortable
          ><el-table-column prop="date" label="实验名称"> </el-table-column>
          <el-table-column prop="name" label="实验时间"> </el-table-column>
          <el-table-column prop="province" label="实验员"> </el-table-column>
          <el-table-column prop="city" label="人数"> </el-table-column>
          <el-table-column prop="address" label="地点"> </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TextSelect from "@/components/TextSelect.vue";
import TextWithInput from "@/components/TextWithInput.vue";
import { mapState } from "vuex";

export default {
  methods: {
    idArray() {
      var temp = new Array();
      for (var i in this.courses) {
        temp.push({ key: this.courses[i].id, label: this.courses[i].id });
      }
      return temp;
    },
    nameArray() {
      var temp = new Array();
      for (var i in this.courses) {
        temp.push({ key: this.courses[i].id, label: this.courses[i].name });
      }
      return temp;
    }
  },
  computed: {
    ...mapState({
      experiments: state => state.experiment.experiments,
      courses: state => state.course.courses,
      currentCourse: state => state.course.currentCourse
    })
  },
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
  background: #ffffff;
}
.bg-purple {
  background: #fff;
}
.bg-purple-light {
  background: #fff;
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
