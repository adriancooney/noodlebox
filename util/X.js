/**
 * X.js is a simple DOM library that uses well
 * tested and performant manipulation methods.
 * It tends to be as raw as possible, leaving
 * out all but the simpliest of abstractions.
 */

var X = function(selector) {
	return document.querySelector(selector);
};

/**
 * Create a new element. (`new` does not reserved as
 * an accessor.)
 * @return {HTMLElement}
 */
X.new = function(element, callback, children) {
	element = document.createElement(element);
	children = Array.prototype.slice.call(arguments, 1);

	if(typeof (children[0]) === "function") (callback = children.shift())(element);
	if(children.length) element.appendChildren(children);

	return element;
};

/**
 * Append children into a node.
 * @return {Node}
 */
Node.prototype.appendChildren = function(nodes) {
	var fragment = document.createDocumentFragment(), i = 0;
	while(nodes[i]) fragment.appendChild(nodes[i++]);
	this.appendChild(fragment);
	return this;
};

/**
 * Set the textContent of the Node.
 * @param  {String} string 
 * @return {Node}
 */
Node.prototype.text = function(string) {
	this.textContent = string;
	return this;
};

/**
 * Add a class to the element and return it.
 * @param {String} className 
 * @return {Element}
 */
Element.prototype.addClass = function(className) {
	this.classList.add(className);
	return this;
};

/**
 * Remove a class to the element and return it.
 * @param {String} className 
 * @return {Element}
 */
Element.prototype.removeClass = function(className) {
	this.classList.remove(className);
	return this;
};

/**
 * Get (and set) the value of an attribute.
 * @param  {String} name  
 * @param  {String} value 
 * @return {Element?}
 */
Element.prototype.attr = function(name, value) {
	if(value) {
		this.setAttribute(name, value);
		return this;
	} else return this.getAttribute(name);
};

module.exports = X;