// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tip: '用户中心测试...',
    item: [
      { id: 1, name: '张三', age: 20 },
      { id: 2, name: '李四', age: 24 },
      { id: 3, name: '王五', age: 18 },
      { id: 4, name: '赵六', age: 21 },
    ],
    login: false
  },
  tapName: function(e){
    console.log(e);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.tag);

    // 请求数据
    wx.request({
      url: 'https://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=35',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
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