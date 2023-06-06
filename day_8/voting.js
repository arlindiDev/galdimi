
function canVote() {
let age = parseFloat(prompt('What is your age: '))

if(age >= 18) {

    console.log('You are eligible to vote');
} else {
    console.log('You can not vote');
}

}
canVote();