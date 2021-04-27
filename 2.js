/**
 * 测试、学习浏览器时间循环、渲染机制
 */
function sleep(time) {
    for (let start = new Date(); Date.now() - start < time; ) {}
}
function print() {
    console.log("print sth...");
}
function animate() {
    if (divWidth > 800) return void 0;
    divWidth += 4;
    div.style.width = divWidth + "px";
    window.requestIdleCallback(print);
    window.requestAnimationFrame(() => {
        animate();
    });
}
/**
 * Frame：
 * JS
 * Style：样式计算
 * Layout：布局
 * Paint绘制：填充像素，一般在多个表面上完成
 * Composition合成：页面可能绘制在多层上，需要按照正确的顺序去合成Layer，正确渲染页面
 * IDLE：如果执行完以上步骤仍有时间就去执行IDLE的回调
 */
let div = document.getElementsByClassName("div")[0];
div.style.width = "20px";
let divWidth = 20;
// 1. 查看正常的渲染流程：performance查看帧率 -> 每一帧的末尾绘制页面和idleCallback
// animate();
// 2. 查看一个事件在渲染流程的中执行时机：Event-click触发执行，然后去样式、布局、IDLE
// animate();
// div.addEventListener('click', ()=>{
//     div.style.background = "red";
// })
// 3. 查看一直执行计算的js代码在渲染流程中的执行时机：由于JS一直执行，导致页面前期一直空白；并后期一直丢帧
for(let i=0;i<100000;i++){
    div.innerHTML = i;
}
animate();
// 4. 查看一帧中睡眠20ms的性能数据