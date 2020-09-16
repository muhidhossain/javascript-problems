function reverseString(str){
    var reverse = " ";
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse
}


var statement = "Hello alian brother.";
var forAlian = reverseString(statement);
console.log(forAlian);