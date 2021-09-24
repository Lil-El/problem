// break; 跳出循环
// continue: 进入下一个循环
// return: 函数返回结果

let main = () => {
    for (let i = 0; i < 10; i++) {
        console.log("start:", i);
        if (i > 3) {
            // if (i == 6) {
            //     break;
            // }
            if (i == 8) {
                return void 123;
            }
            continue;
        }
        console.log("end:", i);
    }
    console.log("for over");
};
for (let i = 0; i < 10; i++) {
    console.log("start:", i);
    if (i > 3) {
        return void 123;
    }
    console.log("end:", i);
}
// console.log(main());
