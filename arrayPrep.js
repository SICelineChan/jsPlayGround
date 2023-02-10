//first challenge
/*function simpleArraySum(ar) {
    
    let output = 0;
    for (let i = 0; i < ar.length; i++) {
        output = output + ar[i];
    }
return output;
    

}
console.log(simpleArraySum([2,4,6,8,9]));*/

let output = 0;
let n = [1001, 1002,1003, 1004, 1005];
for (let i = 0; i < n.length; i++) {
    output = output + n[i];
}
console.log(output);


function aVeryBigSum(ar) {
    let answer = 0;
    for (let x = 0; x < ar.length; x++){
        answer = answer + ar[x];
    }
    return answer;
}
console.log(aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]));
