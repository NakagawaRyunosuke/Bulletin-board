const msg=document.getElementById("msgbox");
const sent=document.getElementById("sentbtn");
const tl=document.getElementById("timeline");
const time=document.getElementById("time");/*id=timeの値を取得する */
time.value="";

const timer2 = () => {
    let ret;
    if(num<10){
        ret="0"+num;
    }else{
        ret=num;
    }
    return ret;

}

function timer(){
    let nowTime=new Date();//現在日時
    let year=nowTime.getFullYear();//nowTimeから現在の年を取得
    let month=nowTime.getMonth()+1;//nowTimeから現在の月を獲得
    let date=nowTime.getDate();//nowTimeから現在の日付を獲得
    let hour=nowTime.getHours();//nowTimeから現在の時間を獲得
    let min=nowTime.getMinutes();//nowTimeから現在の分数を獲得
    let sec=nowTime.getSeconds();//nowTimeから現在の秒数を獲得

    let now=year+"/"+month+"/"+date+"/"+hour+":"+min+":"+sec;

    console.log(now);

    time.innerHTML=now;
    return{now:now};

}
setInterval("timer()",1000);//1秒後にtimer()を動かす



sent.onclick=function sentmsg(){

    let ms=msg.value;

    console.log(ms);

    let n=tl.childElementCount;

    switch(ms){
        case "":
        break;
                    
        default:

            switch(n){
                case "":
                n=1;
                break;

                default:

                n=n+1;
            }

        console.log(n);
        const box=document.createElement("li");

        tl.appendChild(box);

        box.id="msg"+n;

        const a=document.getElementById("msg"+n);

        a.style.listStyleType="none";

        let ntime=timer();
        let ntime2=ntime.now;//timerのnowの情報を取得

        a.innerHTML=n+"."+ntime2+"."+ms;
        msg.value="";

    }
}
