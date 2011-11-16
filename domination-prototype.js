(function(basis) {
	var _safeAttributeSet = function(_e, attr, val) { 
		var lattr = attr.toLowerCase();
		if (lattr === 'class') {
		    _e.addClassName(val);
		} else if ((lattr === 'style') && (typeof(val) === "object")){
			_e.setStyle(val);
		} else if (lattr.substring(0, 7) === 'observe') {
            _e.observe(attr.substring(7).toLowerCase(), val);
		} else {
			/* fix some stupid IE capitalization bugs */
			if (lattr === "rowspan") {
				attr = "rowSpan";
			} else if (lattr === "colspan") {
				attr = "colSpan";
			} else if (lattr === "frameborder") {
				attr = "frameBorder";
			}
			_e.writeAttribute(attr, val);
		}
	};

	var createDOM = function(n, node_args) {
		var attrs = {};
		var nodeStart = 0;
		if ((node_args !== null) && (node_args.length > 0) ) {
			var first = node_args[0];
			if (first 
				&& (typeof(first) == 'object')
				&& !('jquery' in first) ) {
				attrs = first;
				nodeStart = 1;
			}
		}
		var _e ;
		if ((n === "input") && navigator.appName === 'Microsoft Internet Explorer' && attrs.name) {
			_e = document.createElement('<input name="' + attrs.name + '"/>');
		} else {
			_e = document.createElement(n);
		}
		_e = $(_e);
		if ((n === "a") && !attrs.href) {
			_e.attr("href", "#");
			_e.bind("click", function() { return false; });
		}
		for (var attr in attrs) {
			_safeAttributeSet(_e, attr, attrs[attr]);
		}
		for (var i = nodeStart; i <  node_args.length; ++i) {
			if (typeof(node_args[i]) === 'function') {
				_e.insert(node_args[i]());
			} else if ( (typeof(node_args[i]) === 'string') || (typeof(node_args[i]) === 'number')) {
				_e.insert(document.createTextNode(node_args[i]));
			} else {
				_e.insert(node_args[i]);
			}
		}
		return _e;
	};

	var _nodes = [ 'table', 'tbody','thead', 'tr', 'th', 'td', 'a', 'strong', 'div', 'img',
				   'br', 'b', 'span', 'li', 'ul', 'ol', 'iframe', 'form', 'h1',
				   'input', 'h2', 'h3', 'h4','h5','h6', 'p', 'br', 'select', 'option', 'optgroup',
				   'script', 'label', 'textarea', 'em', 'button', 'b', 'hr', 'fieldset', 'nobr',
				   'object', 'embed', 'param', 'style'];


	var makeFunction = function(nodeName) { 
		return function() {
			return createDOM(nodeName, arguments);
		};
	};
        
	for (var i = 0; i < _nodes.length; i++) {
		var node = _nodes[i].toUpperCase();
		var nodeName = _nodes[i];
		basis[node] = makeFunction(nodeName);
	}
    var makeRealArray = function(a) {
	  return Array.prototype.slice.call(a);
	};

    var bareLink = basis.A;

	basis.A = function() {
	  var callback = null;
	  var args = makeRealArray(arguments);
	  if (typeof(args[0]) == "function") {
		callback = args.shift();
	  }
	  var rv = bareLink.apply(this, args);
	  if (callback) {
		rv.click(function(e) { 
            Event.stop(e);
			callback(); 
			return false; 
		});
	  }
	  return rv;
    };
})(self);
