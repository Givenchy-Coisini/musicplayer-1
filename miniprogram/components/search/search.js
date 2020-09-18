// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder:{
      type:String,
      value:'请输入'
    }
  },
  // page中引用组件的时候传入class名称
  //todo 传递进来的样式 在组件中是不能修改的
  externalClasses:[
    'iconfont',
    'icon-sousuo'
  ],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
