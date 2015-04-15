var new_href = [];
//取iframe中对象
function getIframeDocument(element){
	return element.contentDocument || element.contentWindow.document;
}

//换图片
function changeImage(){
	var iframe = document.getElementById("fra");
	var img = getIframeDocument(iframe).getElementsByTagName("img");
	var img_src = [];
	var new_src = document.getElementsByTagName('input');
	for (i=0; i<img.length; i++) {
		if (new_src[i].getAttribute("name") === "picture") {
		img_src[i] = img[i].setAttribute("src", new_src[i].value);
		}
	}
}

//换链接
function changeUrl(){
	var iframe = document.getElementById("fra");
	var url = getIframeDocument(iframe).getElementsByTagName("a");
	var new_href = new Array();
	var inputs = document.getElementsByTagName("input");
	for (i=0; i<inputs.length; i++){
		if (inputs[i].getAttribute("name") === "url"){
			new_href.push(inputs[i]);
		}
	}

	for (i=0; i<url.length; i++){
		url[i].setAttribute("href",new_href[i].value);
	}
}

//changetext

$(function(){
	$(".text > input").click(function(){
		var text1 = $("#banner_text").val();
		var text2 = $("#tab2").val();
		var text3 = $("#tab3").val();
		var text4 = $("#submit").val();
		var text5 = $("#more_job").val();
		var text6 = $("#contacts").val();
		//var iframe = $(document.getElementById("fra").contentWindow.document.body);
		//alert($("tbody",window.frames["fra"].document).html());
		$("#fra").contents().find(".dxy_td:eq(0)").text(text1);
		$("#fra").contents().find("td > div:eq(1)").text(text2);
		$("#fra").contents().find("td > div:eq(4)").text(text3);
		$("#fra").contents().find("td > div:eq(3) > a > strong").text(text4);
		$("#fra").contents().find("td > a:eq(2)").text(text5);
		$("#fra").contents().find("div.devicewidth").html(text6);
	});
});