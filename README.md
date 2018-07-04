# LayUiComponent基于LayUi组件拓展

## 下拉框联动l ayui-cascade##
*****
>**起步**

引入LayUi、Jquery、layui-cascade文件
```javascript
<link rel="stylesheet" href="layui/css/layui.css"  media="all">
<script type="text/javascript" src="layui/layui.js"></script>
<script src="https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="/LayUiComponent/layui-cascade-1.0.1/layui-cascade-1.0.1.js"></script>
```

---

---

>**HTML部分代码**
```HTML
<form class="layui-form" action="" id="textDemo">
		  <label class="layui-form-label">省份：</label>
		  <div class="layui-col-xs2">
		      <select id="province"  lay-verify="required"
		        data-cc-autoload="true"
				data-cc-url="json/Province.json"
				data-cc-key="id"
				data-cc-next="city"
		      >
		      </select>
	  	  </div>
	  	  <label class="layui-form-label">市：</label>
	  	  <div class="layui-col-xs2">
		      <select id="city" lay-verify="required"
				data-cc-url="json/Province.json"
				data-cc-key="id"
				data-cc-next="area"
		      >
		        
		      </select>
	  	  </div>
	  	  <label class="layui-form-label">区/县：</label>
	  	  <div class="layui-col-xs2">
		      <select id="area" lay-verify="required"
				data-cc-url="json/Province.json"
				data-cc-key="id"
		      ></select>
	  	  </div>
	</form>
```


**参数说明**
属性名|属性值|说明
---|:--:|---
data-cc-autoload|任意字符|初始化自动加载该下拉框数据
data-cc-url|任意字符|下拉框数据请求地址
data-cc-key|任意字符|请求参数名
data-cc-next|任意字符|下一个关联的下拉框ID

---
---

>**下拉框联动**
```javascript
layui.use('form', function(){
  $("#textDemo").layCascade();
});
```
