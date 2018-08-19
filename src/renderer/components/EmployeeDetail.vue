<template>
  <div id="detail">
    <main>
      <el-container>      
        <!-- テーブル -->
        <el-main style="margint-top:20px;">
            <el-row :gutter="20">
                <el-col :span="12" :offset="6">
                    <div class="grid-content bg-purple">
                        <el-input v-model="emp_code" placeholder="社員番号"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12" :offset="6">
                    <div class="grid-content bg-purple">
                        <el-input v-model="emp_name" placeholder="社員名"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12" :offset="6">
                    <div class="grid-content bg-purple">
                        <el-input v-model="emp_email" placeholder="メールアドレス"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12" :offset="6">
                    <div>
                        <router-link :to="{path: 'employeelist'}">
                            <el-button type="info" class="left-side">戻る</el-button>
                        </router-link>
                        <el-button type="success" class="right-side">社員編集</el-button>
                    </div>
                </el-col>
            </el-row>
        </el-main>
      </el-container>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'employeelist',
    data () {
      return {
        emp_code: '003418',
        emp_name: 'aaaa',
        emp_email: 'test@test.cpm'
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

  #detail {
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
      margin-top: 10px;
      margin-bottom: 10px;
  }

  .left-side {
    float: left;
    margin-top: 10px;
    margin-bottom: 10px;
  }

 .el-row {
    margin-bottom: 10px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  
  .el-col {
    border-radius: 4px;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
