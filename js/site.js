//Codigo a Ejecutar al Cargar la Pagina
function myOnLoad() {
  cargar_sabores()
}

// funcion para cargar sabores al campo <select>
function cargar_sabores() {
  var listaSabores = [
    {
      "tipo": "Chocolate", 
      "precio": 150
    },
    {
      "tipo": "Vainilla",
      "precio": 100
    },
    {
      "tipo": "Fresa",
      "precio": 180
    }
  ];
  listaSabores.sort();

  addOptions("sabores", listaSabores);
}

// Rutina para agregar opciones a un <select>
function addOptions(domElement, listaSabores) {
  var select = document.getElementsByName(domElement)[0];

  for (const sabor of listaSabores) {
    var option = document.createElement("option");
    option.text = sabor.tipo;
    select.add(option);
    
  }

  /* for (value in listaSabores) {
    option.text = listaSabores[value];
    select.add(option);
  } */
}
