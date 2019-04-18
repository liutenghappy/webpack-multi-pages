# webpack-multi-pages
针对多页面的webpack配置


### 项目结构
build  
&nbsp;&nbsp;|  
&nbsp;&nbsp;util  //配置文件的一些方法  
&nbsp;&nbsp;webpack.base.js  //公共配置文件  
&nbsp;&nbsp;webpack.dev.js   //开发环境配置文件  
&nbsp;&nbsp;webpack.prod.js  //生产环境配置文件  
src  
&nbsp;&nbsp;|  
&nbsp;&nbsp;index.html //入口页面  
&nbsp;&nbsp;index.js&nbsp;&nbsp;//**(最好不要改名)**统一js入口文件
&nbsp;&nbsp;views  
&nbsp;&nbsp;|  
&nbsp;&nbsp;home //页面内容   每一个页面一个文件夹  其中包含html js  css   注：css通过模块在js中引入  
&nbsp;&nbsp;|  
&nbsp;&nbsp;home.index  
&nbsp;&nbsp;home.js  
&nbsp;&nbsp;home.css  
static  //静态资源文件夹  
&nbsp;&nbsp;|  
&nbsp;&nbsp;font  
&nbsp;&nbsp;image  
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