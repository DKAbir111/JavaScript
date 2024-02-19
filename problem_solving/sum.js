function getArraysum(x){
var sum=0;
for(var i=0; i<x.length;i++){
    var result=x[i];
    sum= sum+result;
}
return sum;
}
var x=[1,2,3,4,5,6,7,8,9];
var result=getArraysum(x)
console.log("Sum is: ",result);

var total=getArraysum([1,3,5,7,9])
console.log("Sum is: ",total);