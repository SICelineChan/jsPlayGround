/*let alice = 0;
let bob = 0;
compareTriplets([1,2,3],[3,2,1])

function compareTriplets(a, b) {
    
        for (let i = 0; i < a.length; i++){
            if (a[i] > b[i]){
                alice = alice + 1
            } if(a[i] < b[i]){
             bob = bob + 1
            }
        } 
    }
    
console.log(`${alice} ${bob}`);*/
function compareTriplets(a, b) {
    let score = [0,0]

    for (let i = 0; i < a.length; i++)
        a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : ""
    return score
}
console.log(compareTriplets([44,2,3],[3,2,99]));

//or more sensible solution for me
let counterA = 0,
    counterB = 0;
function compareTriplets(a,b){  
for(let i=0;i<a.length;i++){
    if(a[i] > b[i]){
        counterA++;
    }
    else if(a[i] < b[i]){
        counterB++;
    }
}

return [counterA,counterB];
} 