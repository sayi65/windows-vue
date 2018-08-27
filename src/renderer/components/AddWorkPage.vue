<template>
  <div id="add">
    <main>
      <el-container>
          <el-main style="margint-top:20px;">
              <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="120px">
                <el-row :gutter="20">
                    <el-col :span="4">
                        <router-link :to="{path: '/'}" class="left-side">
                                <el-button type="info" >戻る</el-button>
                        </router-link>
                    </el-col>
                    <el-col :span="12" :offset="5">
                        <div class="grid-content">    
                            <el-switch
                                style="display: block"
                                v-model="isWork"
                                active-color="#13ce66"
                                inactive-color="#ff4949"
                                active-text="残業あり"
                                @change="addtime"
                                inactive-text="残業なし">
                            </el-switch>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12" :offset="6">
                        <el-form-item label="社員番号">
                            <el-select v-model="ruleForm.emp_code" placeholder="社員を選択">
                                <el-option label="001" value="shanghai"></el-option>
                                <el-option label="002" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <!-- 残業申請あり -->
                <el-row :gutter="20" v-if="hasWork">
                    <el-col :span="12" :offset="6">
                            <el-form-item label="プロジェクト名">
                                <el-input v-model="ruleForm.pj_name" clearable></el-input>
                            </el-form-item>
                            <el-form-item label="残業詳細">
                                <el-input v-model="ruleForm.reason_name" clearable></el-input>
                            </el-form-item>
                            <el-form-item label="予定時間">
                                <el-time-select
                                    v-model="ruleForm.over_time"
                                    :picker-options="{
                                        start: '08:45',
                                        step: '00:15',
                                        end: '24:00'
                                    }"
                                    placeholder="帰宅予定時間">
                                </el-time-select>
                            </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12" :offset="6">
                        <el-form-item>
                                <el-button type="primary" @click="onSubmit">保存</el-button>
                            </el-form-item>
                    </el-col>
                </el-row>
                <!-- 残業申請あり -->
                </el-form>
          </el-main>
      </el-container>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'addWorktime',
    data () {
      return {
        isWork: false,
        hasWork: false,
        addForm: {

        },
        ruleForm: {
          emp_code: '',
          pj_name: '',
          reason_name: '',
          over_time: ''
        }
      }
    },
    methods: {
      addtime: function () {
        console.log(this.isWork)
        this.hasWork = this.isWork
      },

      onSubmit: function () {
        console.log(this)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #add {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 20px 50px;
    width: 100vw;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .right-side {
      float: right;
  }

  .left-side {
      float: left;
  }

</style>
