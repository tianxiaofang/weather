function jsonp(settings){
    var url=settings.url;
    var jsonp=settings.jsonp||"callback";
    var jsonpCallback=settings.jsonpCallback||"j"+new Date().getTime()
    +"-"+Math.floor(Math.random()*100000);
    var success=settings.success;
    url+="?"+jsonp+"="+jsonpCallback;
    var script=document.createElement("script");
    script.src=url;
    document.head.appendChild(script);
    window[jsonpCallback]=function(r){
        success(r);
        document.head.removeChild(script);
        delete window[jsonpCallback];
    }
}