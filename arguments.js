function sum(...args) {
    let arr = Array.from(args);
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }
    return sum;
}

// function sum(){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// console.log(sum(1, 2, 3, 4));


//mirrored from lecture notes - Need explainer/maybe to refactor

Function.prototype.myBind = function (context, ...bindArgs) {
    const that = this;
    return function(...callArgs){
        return that.apply(context, bindArgs.concat(callArgs));
    }
}

//---------------------------------------------------------------

function curriedSum(numArgs){
    const nums = [];

    return function _curriedSum(num){
        nums.push(num);
        if (nums.length === numArgs) {
            console.log(nums.reduce((acc, el) => {return acc + el}));
            // let sum = 0;
            // for (i = 0; i < nums.length; i++) {
            //     sum += nums[i];
            // }
            // return sum;
        }else {
            return _curriedSum;
        }
    }
}

// bob will run when 4 args are passed
// const bob = curriedSum(3);  
// // add 5, than 30, than 20, than 1 to bob
// bob(5)(30)(20);

Function.prototype.curry = function (numArgs) {
    let arr = [];
    let that = this;
    return function _curried(arg) {
        
        arr.push(arg);
        if (arr.length === numArgs) {
            that.apply(arr);
        } else {
            return _curried;
        }
    }
}

// test with things such as sum
