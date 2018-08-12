<template>
  <div id="wrapper">
    <main>
      <el-container>
        <el-header>
            <div class="left-side"><router-link tag="a" :to="{ path: 'empliyeelist'}">社員一覧</router-link></div>
            <div class="right-side">
                <router-link to="/addWorktime">
                    <el-button type="primary">残業申請</el-button>
                </router-link>
            </div>
        </el-header>
        <el-main>
            <el-table :data="tabledata" style="width:100%;">
                <el-table-column
                    prop="emp_code"
                    label="社員番号"
                    width="180">
                </el-table-column>
                 <el-table-column
                    prop="pj_name"
                    label="業務名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="定時後作業不可避事由">
                </el-table-column>
                <el-table-column
                    prop="reason"
                    label="残業理由詳細">
                </el-table-column>
                <el-table-column
                    prop="worktime"
                    label="退社予定時刻">
                </el-table-column>
            </el-table>
        </el-main>
      </el-container>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'worktingpage',
    data () {
      return {
        tabledata: [{
          emp_code: '2016-05-03',
          pj_name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          reason: 'reason'
        }, {
          emp_code: '2016-05-02',
          pj_name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          reason: 'reason'
        }, {
          emp_code: '2016-05-04',
          pj_name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          reason: 'reason'
        }, {
          emp_code: '2016-05-01',
          pj_name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          reason: 'reason'
        }]
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

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
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
