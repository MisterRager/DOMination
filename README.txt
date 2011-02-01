DOMination - a jQuery DOM element creator

The idea behind DOMination's pretty simple - just include it, and you can create jQuery DOM elements with functions named after the HTML tag which you want to create a node to represent.  It's a shorthand notation for $(some_html), essentially.  Each function takes a list of arguments representing child nodes of the node you want to create.  Passing a dictionary as one of the nodes allows you to set the attributes of the node, as well.

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

This gives you a web form you can append in or add event listeners to.
	
