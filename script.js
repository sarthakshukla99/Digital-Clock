function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    // let j = date.getUTCMonth;    
    let session = 'am'

    if(h==0){
        h = 12;
    }

    if(h>12){
        h = h-12;
        session = "pm";
    }

    // if(h<10){
    //     h = "0" + h;
    // }
    // if(m<10){
    //     m = "0" + m;
    // }
    // if(s<10){
    //     s = "0" + s;
    // }

    h = (h<10)?"0"+h:h;
    m = (m<10)?"0"+m:m;
    s = (s<10)?"0"+s:s;
    

document.getElementById('digital_clock').innerHTML = h + ':' + m + ':' + s + session;
}

setInterval(showTime,1000);