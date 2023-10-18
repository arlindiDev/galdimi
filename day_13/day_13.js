/* function reverseString(str) {
    var final = "";
    for(var i = str.length -1; i >= 0; i--) {
        final += str[i];
    }
    return final
}

console.log(reverseString('hajde ketu Galdim')) */


/* function longestWord(str) {
    var words = str.split(' ');
    var longest = ' ';
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest) longest = words[i].length;
    }
    return longest
}
console.log(longestWord('This is the longest word')); */


function titleCase(str) {
    var words = str.toLowerCase.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase + words[i].slice[1]

    }
    return words.join(' ')

}

titleCase('Im a little tea pot')
