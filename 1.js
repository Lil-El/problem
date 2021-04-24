/**
 * ajax请求异步处理：顺序执行（串行）
 */

let list = [];
let next = (request)=>{
    if(!request) return void 0;
    mockAjax(() => {
        request.callback(); // success callback
        next(list.pop());
    });
}
function sendAjax(url, callback) {
    list.shift({url, callback});
}
function mockAjax(callback) {
    setTimeout(() => {
        // response body
        callback();
    }, 1000);
}
for (let i = 0; i < 10; i++) {
    sendAjax(i, () => console.log(i));
}
next(list.pop());

/**
 * 同步执行
 */
let mockAjax = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("time", time);
            resolve(time);
        }, time);
    });
};
Promise.all([mockAjax(2000), mockAjax(1200)]).then((val) => {
    console.log(val);
});

/**
 *  顺序执行
 */

mockAjax(1000)
    .then(() => mockAjax(2000))
    .then((val) => {
        console.log(val);
    });
