(function(){
    var oBanner=document.getElementById("banner");    
    var oImgs=document.getElementById("imgs").getElementsByTagName("img");
    var oLis=document.getElementById("nav").getElementsByTagName("li");
    var oLeft=document.getElementById("left");
    var oRight=document.getElementById("right");
    var now=0;
    var timer=null;

for(var i=0;i<oLis.length;i++){ 
    oLis[i].index=i;
    oLis[i].onmouseover=function(){  
        now = this.index;
        play();
    }
}
function play(){
    show();
    now++;
    if(now==oImgs.length){
        now=0;
    }
}
function show(){
    for(var i=0;i<oImgs.length;i++){
        oImgs[i].className="";//图片
        oLis[i].className="";
    }
    oImgs[now].className="on";
    oLis[now].className="on";
}

function go(){
    timer=setInterval(play,1000);
}
oBanner.onmouseover=function(){
    clearInterval(timer);
} 
oBanner.onmouseout=function(){
    timer=setInterval(play,1000);
}

oLeft.onclick=oRight.onclick=function(){
    if(this==oLeft){ 
        now--; 
        if(now==-1){
            now=oLis.length-1;
        }
    }else{  
        now++;
        if(now==oImgs.length){
            now=0;
        }
    }
    show(); 
}

})()

