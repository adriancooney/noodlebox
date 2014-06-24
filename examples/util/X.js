var X = requier("../../util/X");

var div = X.new("div", function(div) {
	div.addClass("container");	
}, X.new("h1").text("Hello World!").addClass("title"));