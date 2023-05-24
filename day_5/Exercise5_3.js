var names = ["Hello", "Java", "Arrays", "Test", "Laptop", "IntelliJ", "Coding", "fun"];

for (var i = 0; i < names.length; i++) {

    var name = names[i];

    if (name.length >= 5 ) {
        console.log(name);
    } else if (name.length < 5) {
        console.log(name)
    }
}