var word="I  am a Student. My name        is Abir"
var count=0;
for (var i=0; i<word.length; i++){
    var result=word[i];
    if(result==" " && word[i-1] !=" "){
        count++;
    }
}
count++;
console.log(count);
