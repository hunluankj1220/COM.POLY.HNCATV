//index.js  
//获取应用实例  
var app = getApp()  
var routes = require('routes'); 
Page({
	data:{

		images:[
          'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2462611862.jpg',
           'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2462515303.jpg',
           'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2461589633.jpg',
           'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2462912672.jpg',
		 ],
		image:'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2462611862.jpg',
		routes:[],
		activeIndex: 0,
        indicatorDots: !0,
        autoplay: true,
        current: 0,
        interval: 3000,
        duration: 1000
	},
	search() {
    wx.navigateTo({
      url: '../search/search',
    })
    },
	onLoad:function(options){
          var that = this 
          this.setData({
          	routes:routes.PageItems,
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