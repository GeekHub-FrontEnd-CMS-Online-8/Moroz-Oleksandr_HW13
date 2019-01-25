
var todoList = [];
if (localStorage.getItem('todo') !=undefined) {
	todoList = JSON.parse(localStorage.getItem('todo'));
	out();
}




document.getElementById('add').onclick = function() {
	var data = document.getElementById('in').value;
	var temp = {};
	temp.todo = data;
	temp.check = false;
	var i = todoList.length;
	if (data === '') {
    alert("Напишіть завдання");
	}
	else {
	todoList[i] = temp;
	out();
	localStorage.setItem('todo', JSON.stringify(todoList));
}
	document.getElementById('in').value = '';
}

function out() {
	var out = '';
	for(var key in todoList) {
		
		if (todoList[key].check === true) {
			out += '<input type="checkbox" checked>.style.textDecoration="line-through"';
		}
		else {
			out += '<input type="checkbox">';
		}
		out += todoList[key].todo + '<br>';
		
	}
	document.getElementById('out').innerHTML = out;
}