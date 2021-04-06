const CommonApi = require('../../api/common.js')
const app = getApp()

// pages/news/news.js
var allTypes = [
    { id: 0, typeName: '头条', theType: 'top', activity: true },
    { id: 1, typeName: '社会', theType: 'shehui', activity: false },
    { id: 2, typeName: '国内', theType: 'guonei', activity: false },
    { id: 3, typeName: '国际', theType: 'guoji', activity: false },
    { id: 4, typeName: '娱乐', theType: 'yule', activity: false },
    { id: 5, typeName: '体育', theType: 'tiyu', activity: false },
    { id: 6, typeName: '军事', theType: 'junshi', activity: false },
    { id: 7, typeName: '科技', theType: 'keji', activity: false },
    { id: 8, typeName: '财经', theType: 'caijing', activity: false },
    { id: 9, typeName: '时尚', theType: 'shishang', activity: false }
]
Page({
    data: {
        newsList: null,        //获取到的新闻列表数据
        newTypes: null,        //所有的新闻类型
        nowType: 'top'         //当前的新闻类型
    },

    onLoad: function (options) {
        this.getNews()
        this.setData({ newTypes: allTypes })
    },
    
    //onLoad时获取头条的数据
    getNews(theType){
        var _self = this
        if(theType){
            this.setData({ nowType: theType })
        }
        CommonApi.getNews({
            data:{
                type: _self.data.nowType
            },
            success: res => {
                _self.setData({ newsList: res.data.result.data })
                console.log('获取新闻头条返回值:', _self.data.newsList)
            }
        })
    },

    //点击改变新闻类型
    changeType(e){
        console.log('点击新闻类型返回值:', e)
        var clickType = e.target.dataset.reg
        for (let i of allTypes){
            i.activity = false
        }
        allTypes[clickType.id].activity = true
        this.setData({ newTypes: allTypes })
        this.getNews(clickType.theType)
    },

    //点击标题跳转到外部链接
    turnToUrl(e){
        console.log('点击标题返回值:', e)
        app.globalData.webUrl = e.target.dataset.item.url
        wx.navigateTo({
            url: '../webpage/webpage',
            success(res){
                res.eventChannel.emit('toWebPage', {
                    a: 'this is a',
                    b: "this is b"
                })
            }
        })
    }
})