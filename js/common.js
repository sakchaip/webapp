//-- e-Analytics --\\
$g={};
$g.browser = (function(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|CriOS|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    } 
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!== null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!== null) M.splice(1, 1, tem[1]);
    return {
        "type":(M[0].replace('CriOS','chrome').toLowerCase()),
        "ver":(M[1].toLowerCase()),
        "mobile":(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)),
        "touch":('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0),
        "svg":(document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.0") || false),
        "canvas":(!!document.createElement("canvas").getContext || false)};
})();
$g.screen = {"width":screen.width,"height":screen.height};
$g.display = {"width":window.innerWidth,"height":window.innerHeight};
$g.element = function(id){{"width":document.getElementById(id).offsetWidth,"height":document.getElementById(id).innerHeight}};
function importScript(url) {
    var script = document.createElement("script"); // Make a script DOM node
    script.src = url; // Set it's src to the provided URL
    document.head.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
};
function moveElement(id,position){
    var pos = (position || 'top-left');
    var posTop = (pos.indexOf('middle')>-1)?(($g.display.height/2)-($g.element(id).height/2)).toString()+'px':(pos.indexOf('bottom')>-1)?($g.display.height-$g.element(id).height).toString()+'px':'0px');
    var posLeft = ((pos.indexOf('center')>-1)?(($g.display.width/2)-($g.element(id).width/2)).toString()+'px':(pos.indexOf('right')>-1)?($g.display.width-$g.element(id).width).toString()+'px':'0px');
	
    document.getElementById(id).style.top=posTop;
    document.getElementById(id).style.left=posLeft;
}
