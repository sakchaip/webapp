var $g = {};

$g.queryString = function () {
  var qStr = {};
  var query = window.location.search.substring(1); 
  var vars = query.split("&"); 
  for (var i=0;i<vars.length && query!='';i++) {
	var pair = vars[i].split("=");
		// If first entry with this name
	if (typeof qStr[pair[0]] === "undefined") {
	  qStr[pair[0]] = decodeURIComponent(pair[1]);
		// If second entry with this name
	} else if (typeof qStr[pair[0]] === "string") {
	  var arr = [ qStr[pair[0]],decodeURIComponent(pair[1]) ];
	  qStr[pair[0]] = arr;
		// If third or later entry with this name
	} else {
	  qStr[pair[0]].push(decodeURIComponent(pair[1]));
	}
  } 
    return qStr;
}();

function importScript(url) {
    var script = document.createElement("script"); // Make a script DOM node
    script.src = url; // Set it's src to the provided URL
    document.head.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
