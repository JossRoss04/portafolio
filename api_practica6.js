function getName() {
  var name = document.getElementById("name").value;
  localStorage.setItem("name", name);
  document.getElementById("result").innerHTML = "Nombre guardado";
}

function getData() {
  var name = localStorage.getItem("name");
  if (name) {
    document.getElementById("result").innerHTML = "Nombre: " + name;
  } else {
    document.getElementById("result").innerHTML = "No hay nada.";
  }
}
