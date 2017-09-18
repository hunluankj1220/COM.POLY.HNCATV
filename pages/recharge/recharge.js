Page({

  /**
   * 页面的初始数据
   */
  data: {
    hint:'注：1、除绑定的账号外，用户也可以自行输入账号进行充值。\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、低保、军属等享受特殊优惠政策客户，请到当地营业厅办理。',

    //选中值
    radiovalue:'',
    array: ['8512010264533087', '8512010264533088', '8512010264533089'],
    items: [
      { name: '50元', value: '50元' },
      { name: '100元', value: '100元' },
      { name: '300元', value: '300元' },
      { name: '500元', value: '500元' },
      { name: '1000元', value: '1000元'},
      { name: '', value: '其他' , checked: 'true'},
    ],
    index: 0,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  radioChange:function(e){
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      radiovalue: e.detail.value
    })
  },
  showTopTips: function () {
    var that = this;
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})