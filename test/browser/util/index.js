var X = require("../../../util/X");

test("X.new", function() {
	var div = X.new("div");
	ok(div instanceof HTMLElement);
});

test("X.new children", function() {
	var div = X.new("div", X.new("h1"));
	ok(div.children.length && div.children[0] instanceof HTMLElement);
});

test("X.new callback", function() {
	var div = X.new("div", function(div) {
		div.classList.add("divvie");
	});

	equal(div.getAttribute("class"), "divvie");
});

test("X.new, callback, children", function() {
	var h1 = X.new("h1", function(h1) {
		h1.textContent = "Hello world! ";
	}, X.new("span", function(span) {
		span.textContent = "Hi there!";
	}));

	ok(h1.children.length);
	equal(h1.textContent, "Hello world! Hi there!");
	equal(h1.children[0].textContent, "Hi there!");
});

test("X", function() {
	ok(X("body") == document.body);
});

test("text, addClass, removeClass, attr", function() {
	var div = X.new("div"),
		hello = "Hello world!";
	div.text(hello);
	equal(div.textContent, hello);
	equal(div.attr("foo", hello).getAttribute("foo"), hello);
	equal(div.attr("foo"), hello);

	equal(div.addClass("foo").attr("class"), "foo");
	equal(div.removeClass("foo").attr("class"), "");
});

test("appendChildren", function() {
	var childer = Array.apply(null, {length: 10}).map(function() { return X.new("li"); }),
		parent = X.new("div");

	parent.appendChildren(childer);

	equal(parent.children.length, 10);

});