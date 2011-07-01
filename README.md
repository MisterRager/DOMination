DOMination - Simple jQuery DOM Manipulation Library
===================================================

The idea behind DOMination is pretty simple - just include it, and you can create jQuery DOM elements with functions named after the HTML tag which you want to create a node to represent.  It's a shorthand notation for $(some_html), essentially.

Each function takes a list of arguments representing child nodes of the node you want to create.  Passing a dictionary as one of the nodes allows you to set the attributes of the node, as well.

For example, to create a DIV node with its class set to "wooo" and text of "text", you would just use this:

	var node = DIV({'class':'woo'}, 'text');

In that line, node contains a jQuery DOM object representing the DIV node, it's equivalent to doing just this:

	var node = jQuery('<div class="woo">text</div>');

What's convenient is that you can arbitrarily nest these function calls to create any ui you'd like:

	var form = FORM({id:'ui_form'},
		INPUT({type:'text', name:'field1'}),
		INPUT({type:'text', name:'field2'}),
		INPUT({type:'submit'})
	);

Elements that normally have click events bound to them can also be passed a function, such as the anchor tag:

    var link = A(function() { // Do something on click }, {title: 'My Link'}, 'Link text');

Requirements
------------

* jQuery 1.3+

License: MIT
------------

Copyright (C) 2011 by Alan Rager

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
