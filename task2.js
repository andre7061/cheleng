console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7);

// 1 - стек
// 7 - стек
// 3 - micro
// 5 - micro
// 2 - macro
// 6- macro
// 4 - micro + macro

console.log("start");
setTimeout(() => {
    console.log("timer1");
    new Promise((resolve, reject) => {
        reject("error");
        setTimeout(() => {
            console.log("timer2");
        });
        resolve("success");
    })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally((data) => {
            console.log(data);
            return "text from finally";
        })
        .then((data) => {
            console.log(data);
            return "text form then";
        })
        .then((data) => {
            console.log(data);
        });
}, 0);
console.log("end");

//start -steck
//end -steck
//timer1 -macro
//error - micro
//udef  - micro
//udef  - micro
//text from finally  - micro
//timer2 -macro + macro
