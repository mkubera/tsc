interface Person {
  firstName: string;
  lastName: string;
  isParent: boolean;
}

function greeter(person: Person) {
  if (person.isParent) {
    return `Hello, parent ${person.firstName}.`;
  } else {
    return `Hello, ${person.firstName}`;
  }
}

let user = {
  firstName: "Jane",
  lastName: "User",
  isParent: true,
};

document.body.textContent = greeter(user);
