;(function(){
	var anchor={
		init:function(){
			var that=this;
			window.onscroll=function(){
				that.calute();
			};
		},
		calute:function(){
			var that=this;
			var buildings=document.querySelectorAll(".building");
			var sections=document.getElementsByTagName("section");
			var top=window.scrollY;
			var currentId="";
			for(var i=0,len=sections.length;i<len;i++){
				var offsetTop=sections[i].offsetTop;
				if(offsetTop<=top){
					currentId=sections[i].id;
				}else{
					break;
				}
			}
			that.showBuilding(currentId);
		},
		showBuilding:function(currentId){
			if(currentId==""){
				return;
			}else{
				var buildings=document.querySelectorAll(".building>li");
				var currObj=document.querySelector(".building>li>a[href='#"+currentId+"']");
				if(currObj){
					if(currObj.parentNode.className.indexOf("active")!=-1){
						return;
					}
					for(var i=0,len=buildings.length;i<len;i++){
						buildings[i].className="";
					}
					currObj.parentNode.className="active";
				}
			}
		}
	};

	anchor.init();
})();