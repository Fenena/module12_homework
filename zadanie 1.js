function User(object) {
    console.log(Object.entries(object));
}

var obj = {
  name: 'Andrei',
  surname: 'Ivanov',
  age: 18,
  position: 'developer',
};

User(obj);
