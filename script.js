function show2D() {
  alert("Mode 2D activé (simulation)");
}

function show3D() {
  alert("Mode 3D activé (simulation)");
}

function viderPlan() {
  alert("Plan vidé !");
}

function toggleCatalogue() {
  const cat = document.getElementById("catalogue");
  cat.classList.toggle("hidden");
}

function ajouterMeuble(nom) {
  alert(`Meuble ajouté : ${nom}`);
}
