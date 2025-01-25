function imgchange1(){document.getElementById('logo').src='./image/buranko_girl_smile.png';}
function imgchange2(){document.getElementById('logo').src='./image/buranko_girl_sad.png';}
function imgchange3(){document.getElementById('logo').src='./image/buranko_girl_smile.png';
                   setTimeout("imgchange4()",3000);}

function imgchange4(){document.getElementById('logo').src='./image/buranko_girl_sad.png';}
function imgchange5(){document.getElementById("logo").classList.add("imagechange1");}
function imgchange6(){document.getElementById("logo").classList.add("imagechange2");}
function imgchange7(){document.getElementById("logo").classList.remove("imagechange1");document.getElementById("logo").classList.remove("imagechange2");}
