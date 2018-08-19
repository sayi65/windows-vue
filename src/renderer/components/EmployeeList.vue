<template>
  <div id="wrapper">
    <main>
      <el-container>
        <!-- ヘッダー -->
        <el-header style="height:80px;">
          <el-row :gutter="20">
            <el-col :span="8"><el-input v-model="code" placeholder="社員番号"></el-input></el-col>
            <el-col :span="8"><el-input v-model="name" placeholder="社員名"></el-input></el-col>
            <el-col :span="8"><el-input v-model="email" placeholder="メールアドレス"></el-input></el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="24">
              <div>
                <router-link :to="{path: '/'}" class="left-side">
                  <el-button type="info" >戻る</el-button>
                </router-link>
                <el-button type="success" plain class="right-side">社員追加</el-button>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <!-- テーブル -->
        <el-main style="margint-top:20px;">
            <el-table 
                      stripe
                      :data="tabledata" 
                      @row-click="rowClick" 
                      style="width:100%; margint-top:10px;">
                <el-table-column
                    fixed
                    prop="emp_code"
                    label="社員番号"
                    width="100">
                </el-table-column>
                 <el-table-column
                    fixed
                    prop="emp_name"
                    label="社員名"
                    width="200">
                </el-table-column>
                <el-table-column
                    fixed
                    prop="emp_email"
                    label="メールアドレス"
                    width="250">
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      fixed="right"
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
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
        code: '',
        name: '',
        email: '',
        tabledata: [{
          emp_code: '2016-05-03',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-02',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-04',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-04',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-04',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-04',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-04',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-04',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-04',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-04',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-04',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-04',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-04',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-04',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-04',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-04',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-04',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-04',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-04',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }, {
          emp_code: '2016-05-01',
          emp_name: 'Tom',
          emp_email: 'No. 189, Grove St, Los Angeles'
        }]
      }
    },
    methods: {
      rowClick: function (row, event, column) {
        console.log(row)
        console.log(event)
        console.log(column)
        this.$router.push({path: 'employeedetail', query: { emp_code: '123' }})
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
    height: 100%;
    padding: 30px 50px;
    width: 100vw;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .el-row {
    margin-bottom: 10px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }

  .right-side {
      float: right;
      margin-bottom: 10px;
  }

  .left-side {
    float: left;
    margin-bottom: 10px;
  }
</style>