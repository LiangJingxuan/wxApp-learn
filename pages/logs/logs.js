//logs.js
const util = require('../../utils/util.js')
const app = getApp();

Page({
  data: {
    logs: [],
    username: '梁景'
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })

    // 判断登录信息进行跳转
    if (!app.globalData.login) {
      wx.redirectTo({
        url: '../login/login'
      });
    } else {

    }
  }
})
