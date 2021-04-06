// components/testComponent/testComponent.js
Component({
    // behaviors相当于vue中的mixins
    options: {
        multipleSlots: true,        //是否启用多slot
        styleIsolation: 'isolated',         //组件样式隔离设置
        virtualHost: false,          //可在父组件上直接为此组件定义style
        pureDataPattern: /^_/        // 指定所有 _ 开头的数据字段为纯数据字段，也可以在json文件中设置
    },
    externalClasses: ['test-class'],        //父组件可直接在此组件上使用的class

    //组件的属性列表
    properties: {
        style: {            //可以拿到父组件为此组件设置的style的值
            color: String,
            type: String
        }
    },

    data: {
        
    },

    //组件的生命周期
    lifetimes: {
        created: function() {},     //实例刚被创建
        attached: function() {},      //初始化完毕
        ready: function() {},       //视图布局完成
        detached: function() {}     //组件离开页面节点树
    },

    //调用组件的页面生命周期
    pageLifetimes: {
        show: function() {},
        hide: function() {},
        resize: function() {}  
    },

    // 类似于vue的watch
    observers:{
        
    },

    methods: {
        
    }
})
