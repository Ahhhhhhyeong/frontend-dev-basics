/**
 * Arrow Function
 * 
 */

const power01 = function(x){
    y = x * x;
    return y;
}


const number = [1,2,3,4,5];
number.forEach(function(n){
    process.stdout.write(`${n}:${power01(n)}\t`);
});


//ex1
console.log("\n------------------------------------------\n");
const power02 = (x) => x * x;

number.forEach(function(n){
    process.stdout.write(`${n}: ${        power02(n)         }\t`);
});


//ex2
console.log("\n------------------------------------------\n");
number.forEach(function(n){
    process.stdout.write(`${n}: ${((x) => x * x)(n)}\t`);
});


//ex3
console.log("\n------------------------------------------\n");
number.forEach((n) => process.stdout.write(`${n}: ${((x) => x * x)(n)}\t`));


//ex4
console.log("\n------------------------------------------\n");
const o = {
    name: '둘리',
    friends: ['또치', '마이콜', '도우너', '희동이'],
    printFriends: function(){
        this.friends.forEach((f) => console.log(`${this.name}'s friends ${f}`));
    }
};

o.printFriends();
