# webpack-multi-pages
针对多页面的webpack配置

build  
  |  
  util  //配置文件的一些方法  
  webpack.base.js  //公共配置文件  
  webpack.dev.js   //开发环境配置文件  
  webpack.prod.js  //生产环境配置文件  
src  
  |  
  views  
     |  
     home //页面内容   每一个页面一个文件夹  其中包含html js  css   注：css通过模块在js中引入  
      |  
      home.index  
      home.js  
      home.css  
static  //静态资源文件夹  
   |  
   font  
   image  
utils //公共js文件  


### 打包后的项目结构

css //单独提取的css  
js  //所有js文件  
static  //所有静态资源  
index.html  
home.html  
.  
.  
.  