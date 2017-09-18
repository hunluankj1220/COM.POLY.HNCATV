var app = getApp();
var routes = require('routes'); 
Page({
	data:{
    nickName: '',
    userInfoAvatar: '',
    routes:[]
	},
	onLoad:function(options){
    var that = this;
    this.setData({
      routes: routes.PageItems,
    })
    //获取用户信息
    wx.getUserInfo({
      success: function (res) {
        // success
        that.setData({
          nickName: res.userInfo.nickName,
          userInfoAvatar: res.userInfo.avatarUrl,
          province: res.userInfo.province,
          city: res.userInfo.city
        })
      }
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