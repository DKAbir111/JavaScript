var array=[34,45,65,101, 12,23,78,89,99]
var max=array[0];
for(var i=0; i<=array.length; i++){
    var element=array[i];
    if (array[i]>max){
        max=array[i];
    }

}
console.log("Maximum value is:",max);