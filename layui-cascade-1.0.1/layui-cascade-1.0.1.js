/**
 * @Author    Mervin
 * @DateTime  2018-07-03T17:33:06+0800
 * @param     {[type]}
 * @param     {[type]}
 * @param     {[type]}
 * @return    {[type]}
 */
(function(root,factory,pulg){
	 factory(root,pulg)
})(typeof window !== "undefined" ? window : this ,function(root,plug){
	 //var root._
	 var _PULES_ = {

	 }

	 var $jquery = root.$;//引用jquery对象


	 function loadOptionForSelect(next,age){
	 	var url = $jquery("#"+next).data("cc-url");
		var key = $jquery("#"+next).data("cc-key");
	 	var ages = {}
		ages[key] = age;
		$jquery.getJSON(url,ages,function(result){
			 $("#"+next).empty(); //移除子元素
			 $.each(result.data, function(i, field){
		     	$("#"+next).append("<option value="+field.id+">"+field.name+"</option> ");
		     });
		     layui.form.render("select"); //更新渲染
		});
	 }

	 root.$.fn[plug] = function(ops){
	 	if (this.is("form")) {
	 		this.find("select[data-cc-autoload]").each(function(e,t){
	 			loadOptionForSelect(t.id,'');
	 		});
	 		layui.form.on('select()', function(data){
			  if(data.elem.getAttribute("data-cc-next") != null ){
			  	 var next = data.elem.getAttribute("data-cc-next");
			  	 console.log(next);
			  	 loadOptionForSelect(next,data.value);
			  }
			});
	 	}else{
	 		throw Error("target elment must be from");
	 	}
	 }
},"layCascade")