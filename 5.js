// Promise.resolve("Hello").then(d=>console.log(d))


function request(data) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data);
        }, data);
    });
}
// Promise.all实现

Promise.prototype.yxdAll = Promise.yxdAll = function(values){
    let index = 0;
    let result = [];
    return new Promise((res, rej)=>{
        values.forEach((event, idx)=>{
            Promise.resolve(event).then((data)=>{
                result[idx] = data;
                if(++index === values.length){
                    res(result);
                }
            }).catch(err=>{
                rej(err);
            });
        })
    })
}

Promise.yxdAll([request(5000), request(2000), request(3000)])
// Promise.all([request(5000), request(2000), request(3000)])
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
