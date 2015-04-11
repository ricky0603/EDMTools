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