var app=getApp();
var routes = require('routes'); 
//商品页面
Page({
	data:{
    array: ['主卡8512010264533087平江', '主卡8512010264533088', '主卡8512010264533089'],
    routes:[],
    index: 0,
	},
  showTap:function(e){
    var id = e.currentTarget.id;
    console.log(id)
    wx.navigateTo({
       url: '/pages/products/products?id=' + id
    }) 
    
    
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
	onLoad:function(options){
    var that = this
    this.setData({
      routes: routes.PageItems,
    })
	},
  showTopTips: function () {
    var that = this;
    wx.navigateBack({
      delta: 1
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