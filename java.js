var second=00;
var tens=00;
var min=00;
var appendtens=document.getElementById("tens");
var appendsecond=document.getElementById("second");
var appendstart=document.getElementById("start");
var appendstop=document.getElementById("stop");
var appendreset=document.getElementById("reset");
var appendmin=document.getElementById("min");
var interval;
function startime() {
    tens++;
    if (tens<9) {
        appendtens.innerHTML="0"+tens;
    }
    if (tens>9) {
        appendtens.innerHTML=tens;
    }
    if (tens>99) {
        second++;
        appendsecond.innerHTML="0"+second;
        tens=0;
        appendtens.innerHTML="0"+0;
    }
    if (second<9) {
        appendsecond.innerHTML="0"+second;
    }
    if (second>9) {
        appendsecond.innerHTML=second;
    }
    if (second==60) {
        appendsecond.innerHTML=second;
        min++;
        appendmin.innerHTML="0"+min;
        second=0;
        appendsecond.innerHTML="0"+second;
    }
}
appendstart.onclick=function () {
  if (interval) {
    clearInterval(interval);
  } 
  interval=setInterval(startime);
};
appendstop.onclick=function () {
    clearInterval(interval);
};
appendreset.onclick=function () {
    clearInterval(interval);
    tens="00";
    second="00";
    min="00";
    appendsecond.innerHTML=second;
    appendtens.innerHTML=tens;
    appendmin.innerHTML=min;
};
