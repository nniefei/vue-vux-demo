# vue + vux

> 1、描述：这一个使用vue+vux实现的一个移动端demo  

> 2、主要功能
>> 2.1、登入、登出、简单的登入校验（默认路由、路由重定向）  
>> 2.2、侧边栏、ActionSheet  
>> 2.3、底部四个Tap导航页切换及信息展示可下拉加载更多（电影、音乐、书籍、图片）  
>> 2.4、电影：豆瓣数据源（https://api.douban.com/v2）、vue子路由实现分类切换、下拉加载更多  
>> 2.5、音乐：网易云数据源（http://music.163.com/api/playlist/detail）、编程式导航路由跳转、下拉加载更多  
>> 2.6、书籍：豆瓣数据源（https://api.douban.com/v2/book/user）、轮播图、下拉加载更多  
>> 2.7、图片：百度数据源（http://image.baidu.com/channel/listjson/）  
>> 2.8、搜索：百度搜索引擎（http://suggestion.baidu.com/）  

>3、使用
>> 3.1、pull整个项目直接npm install安装依赖  
>> 3.2、第三方接口已配置proxyTable不存在跨域、具体接口地址请到vux/config/index.js内自行查找  
>> 3.3、如果需要build后使用
>>> 3.3.1、使用nginx代理（将vux/config/index.js里proxyTable配置进到nginx安装目录conf/nginx.conf里）  
>>> 3.3.2、将vux/src/asets目录下music整个文件夹复制进img文件夹里  
>>> 3.3.3、将vux/arc/mock/music/index.js内的数据换成注释的数据  

>4、其他
>> 4.1、关于图片那里本来也是想实现下拉加载更多，不过个人在使用vux时发现在图片视图中存在下拉回弹的问题、暂未解决这个问题  
>> 4.2、关于加载动画，不知道是不是个人使用vux自带的组件姿势不对，总是有问题  
所以本项目里的Loading组件是自己把WEUI的Loading扣出来写成了一个全局通用组件  
>> 4.3、关于播放的问题，实际上个人还没有研究过这方面的东西、所以目前就没有了  
>> 4.4、关于移动设备兼容性的问题，个人手里没有iPhone设备（只有一个锤子M1L）、都只是使用Chrome模拟  

>5、最后，附上几张截图  

![演示图](https://github.com/nniefei/vue-vux-demo/blob/master/src/assets/example/0.gif)
![登录页](https://github.com/nniefei/vue-vux-demo/blob/master/src/assets/example/1.png)
![图片](https://github.com/nniefei/vue-vux-demo/blob/master/src/assets/example/2.png)
![查看图片](https://github.com/nniefei/vue-vux-demo/blob/master/src/assets/example/3.png)
![电影](https://github.com/nniefei/vue-vux-demo/blob/master/src/assets/example/4.png)
![音乐](https://github.com/nniefei/vue-vux-demo/blob/master/src/assets/example/5.png)
![音乐列表](https://github.com/nniefei/vue-vux-demo/blob/master/src/assets/example/6.png)
![图书](https://github.com/nniefei/vue-vux-demo/blob/master/src/assets/example/7.png)
![侧边栏](https://github.com/nniefei/vue-vux-demo/blob/master/src/assets/example/8.png)
![搜索](https://github.com/nniefei/vue-vux-demo/blob/master/src/assets/example/9.png)

## Build Setup

```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
