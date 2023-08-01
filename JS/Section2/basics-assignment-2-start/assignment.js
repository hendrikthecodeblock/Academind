const task3Element = document.getElementById('task-3');

function greet() {
  alert('Hello World');
}

function greetUser(name) {
  alert('Hello ' + name);
}

function stringMaker(str1, str2, str3) {
  return `${str1} ${str2} ${str3}`
}

const joinString = stringMaker('Hello', 'World', 'Again');
alert(joinString);

greet();
greetUser('Henno');

task3Element.addEventListener('click', greet);
