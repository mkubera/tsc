function greeter(person) {
    if (person.isParent) {
        return "Hello, parent " + person.firstName + ".";
    }
    else {
        return "Hello, " + person.firstName;
    }
}
var user = {
    firstName: "Jane",
    lastName: "User",
    isParent: true
};
document.body.textContent = greeter(user);
