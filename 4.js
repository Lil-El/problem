// JS展示当前时间，因为js执行阻塞，导致有时间差
let isSleep = true;
let sleep = (time)=>{
    console.log(time);
    let start = new Date();
    while(new Date() - start < time){}
}

function getCurrentTime(){
    let curTime = new Date();
    let h = curTime.getHours();
    let m = curTime.getMinutes();
    let s = curTime.getSeconds();
    return `${h}:${m}:${s}`;
}

function loadTimeByTimeOut(ele){
    sleep(Math.random() * 2000); // 模拟其他事件的执行导致js的阻塞
    setInterval(()=>{
        ele.innerText = getCurrentTime();
    }, 1000)
}

function loadTimerByRAF(ele){
    isSleep && sleep(1000); // 模拟其他事件的执行导致js的阻塞
    requestAnimationFrame(()=>{
        ele.innerText = getCurrentTime();
        loadTimerByRAF(ele);
    }, 500)
}

// 模拟页面刚加载时js执行的阻塞
window.onload = ()=>{
    loadTimerByRAF(document.getElementById("timer1"));
    loadTimerByRAF(document.getElementById("timer2"));
    document.getElementById("clear").onclick = ()=>{
        isSleep = false;
    }
}
