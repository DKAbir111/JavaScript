function getReverse(char){
    var reverse="";
    for(var i=0; i<char.length; i++){
        var result=char[i];
        reverse=result+reverse;
    }
    return reverse;
}

var y= "Ki khabo vai!";
var x=getReverse(y);
console.log(x);