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
            <el-button
              type="primary"
              round
              class="titlebutton"
              @click="dialogVisable = true"
              ><i class="el-icon-plus"></i>添加
            </el-button>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="buttoncontainer">
            <el-button round class="titlebutton"
              ><i class="el-icon-delete" />删除</el-button
            >
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
      <el-dialog title="添加课程信息" :visible.sync="dialogVisable">
        <el-form @submit.native.prevent>
          <el-form-item label="课程名称" :label-width="formLabelWidth">
            <el-input v-model="tempCourse.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="课程编号" :label-width="formLabelWidth">
            <el-input v-model="tempCourse.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="授课院系" :label-width="formLabelWidth">
            <el-input
              v-model="tempCourse.department"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="学时" :label-width="formLabelWidth">
            <el-input v-model="tempCourse.hour" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="课程班级" :label-width="formLabelWidth">
            <el-input v-model="tempCourse.class" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="授课学期" :label-width="formLabelWidth">
            <el-input v-model="tempCourse.term" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisable = false">取 消</el-button>
          <el-button type="primary" @click="dialogOK">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <el-divider content-position="left" style="margin: 50px 0;">
      课程包含实验
    </el-divider>
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
    },
    checkTempNull() {
      if (
        this.tempCourse.name == "" ||
        this.tempCourse.id == "" ||
        this.tempCourse.hour == "" ||
        this.tempCourse.department == "" ||
        this.tempCourse.term == "" ||
        this.tempCourse.class == ""
      )
        return false;
      return true;
    },
    saveCourse() {
      for (var i in this.courses) {
        if (this.tempCourse.id === this.courses[i].id) return;
      }
      this.$store.commit("AddCourse", this.tempCourse);
    },
    dialogOK() {
      if (!this.checkTempNull()) return;
      this.saveCourse();
      this.dialogVisable = false;
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
      dialogVisable: false,
      tempCourse: {
        id: "",
        name: "",
        hour: "",
        department: "",
        class: "",
        term: ""
      },
      formLabelWidth: "120px"
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
  width: 40%;
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
