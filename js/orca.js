console.log("test");

var orca1div = document.querySelector(".orca1div");
var orca2div = document.querySelector(".orca2div");

var orca1 = document.querySelector(".orca1");
var orca2 = document.querySelector(".orca2");

var sea = document.querySelector(".sea1div");
var background = document.querySelector(".background");
var seadiv = document.querySelector(".seadiv");





orca1div.addEventListener("click", function() {
  orca1.classList.remove("orcasup");
  orca2.classList.remove("orcasup");
  orca1.classList.remove("orcas");
  orca2.classList.remove("orcas");

  orca1.classList.toggle("orca1move");
});


orca2div.addEventListener("click", function() {
  orca1.classList.remove("orcasup");
  orca2.classList.remove("orcasup");
  orca1.classList.remove("orcas");
  orca2.classList.remove("orcas");

  orca2.classList.toggle("orca2move");
});


sea.addEventListener("click", function() {
  sea.classList.remove("underwaterup");
  background.classList.remove("underwater2up");
  orca1.classList.remove("orcasup");
  orca2.classList.remove("orcasup");


  sea.classList.add("underwater");
  background.classList.add("underwater2");
  orca1.classList.add("orcas");
  orca2.classList.add("orcas");
  seadiv.classList.remove("none");
});

seadiv.addEventListener("click", function() {
  sea.classList.remove("underwater");
  background.classList.remove("underwater2");
  orca1.classList.remove("orcas");
  orca2.classList.remove("orcas");


  orca1.classList.add("orcasup");
  orca2.classList.add("orcasup");
  seadiv.classList.add("none");
  sea.classList.add("underwaterup");
  background.classList.add("underwater2up");
});
