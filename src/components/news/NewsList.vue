<template>
  <div>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link to="/home/newsinfo">
						<img class="mui-media-object mui-pull-left" src="../../images/profile_picture.jpg">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class="mui-ellipsis">
                <span>发表时间：{{item.add_time | dateFormat}}</span>
                <span>点击次数：{{item.click}}</span>
              </p>
						</div>
					</router-link>
				</li>

			</ul>
  </div>  
</template>
<script>
  import { Toast } from 'mint-ui';
  export default{
    data(){
      return {
          newslist:[]
      }
    },
    created(){
      this.getNewsList();
    },
    methods:{
      getNewsList(){
        this.$http.get("api/getnewslist.json").then(result => {
            if(result.data.status === 0){
              this.newslist = result.data.message;
            } else{
              Toast("获取新闻列表失败！")
            }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>

  .mui-table-view {
  li {
    h1 {
      font-size: 14px;
      font-weight: normal;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
