var x=13;
var y=11;
var z=9;

if(x<z && y<z){
    console.log(z, "is greater than",x,"and", y);
}
else if(x<y && z<y)
{
    console.log(y,"is greater than", x,"and",z);
}
else{
    console.log(x, "is greater than",  y, "and",z);
}
