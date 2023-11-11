function repeat (str, num){
    var final = '';
    if(num < 0) return '';

    for(i=0; i<num; i++){
        final += str;
    }
    return final
}
console.log(repeat('abc ', 6))