// ==UserScript==
// @name xiami song lyrics link
// @author violet
// @include     http://www.xiami.com/song/*
// @description add lyric links in xiami song pages
// @version 0.1
// ==/UserScript==
//GM_addStyle("a.lnk-bd:link, a.lnk-bd:visited {no-repeat transparent;}");
function trim(string){
  return string.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
function main(){
    
    var jp_lrc = document.createElement("a");
    var name = document.getElementsByTagName("h1")[0].innerHTML.trim();

    var share = document.getElementById("albums_info");
    var artist = share.childNodes[1].childNodes[2].childNodes[3].firstChild.firstChild.firstChild.nodeValue;
  
    console.log(name);
    jp_lrc.setAttribute('class','lnk-bd');
    jp_lrc.setAttribute('src','查看日文歌词');
    jp_lrc.setAttribute('href', 'javascript:void(0)');
    jp_lrc.innerHTML = ' 日文歌词 ';
    jp_lrc.addEventListener("click",function(e){
	var url = "http://j-lyric.net/index.php?kt=" + encodeURIComponent(name) + "&ct=0&ka=" + encodeURIComponent(artist) + "&ca=0&kl=&cl=0";
	unsafeWindow.open(url);
    });
    
    share.parentNode.insertBefore(jp_lrc, share.nextSibling);
    
    var hd_pv = document.createElement("a");
    share.parentNode.insertBefore(hd_pv, share.nextSibling);
    
    hd_pv.setAttribute('class','lnk-bd');
    hd_pv.setAttribute('src','HDPV');
    hd_pv.setAttribute('href', 'javascript:void(0)');
    hd_pv.innerHTML = ' 超清PV ';
    hd_pv.addEventListener("click",function(e){
	var url = "http://www.soku.com/v?keyword=" + encodeURIComponent(artist) +"+"+ encodeURIComponent(name) + "&hd=1";
	unsafeWindow.open(url);
    });
    
    var pv = document.createElement("a");
    share.parentNode.insertBefore(pv, share.nextSibling);
    
    pv.setAttribute('class','lnk-bd');
    pv.setAttribute('src','PV');
    pv.setAttribute('href', 'javascript:void(0)');
    pv.innerHTML = ' PV ';
    pv.addEventListener("click",function(e){
	var url = "http://www.soku.com/v?keyword=" + encodeURIComponent(artist) +"+"+ encodeURIComponent(name);
	unsafeWindow.open(url);
    });
   
    
}

main();

