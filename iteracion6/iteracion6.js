const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];
function getRealToys() {
  let realToys = [];
  for (const personaje of toys) {
    if (personaje.name.includes('gato') !== true){
        realToys.push(personaje);
    }
  }
  return console.log(realToys);
}

getRealToys();
