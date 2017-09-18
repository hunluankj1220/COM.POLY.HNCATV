var app=getApp()
var routes = require('routes');
//服务页面 
Page({
	data:{
    routes:[],
	},
	onLoad:function(options){
    var that = this 
     this.setData({
       routes: routes.PageItems,
       
     })
	},
	onReady:function(){
		
	},
	onShow:function(){
		
	},
	onHide:function(){
		
	},
	onUnload:function(){
		
	},
	onPullDownRefresh:function(){
		
	},
	onReachBottom:function(){
		
	}
})		