var x;
x = prompt("Gunun nomresini daxil edin!");

if (x <= 0 || x > 7) {
  alert("heftenin bele gunu yoxdur!");
} else {

}

switch (x) {
  case "1" :
    alert("Bazar ertesi");
    break;

  case "2":
    alert("Chershembe axshami");
    break;

  case "3":
    alert("çərşənbə");
    break;

  case "4":
    alert("cümə axşamı");
    break;

  case "5":
    alert("cümə");
    break;

  case "6":
    alert("şənbə");
    break;

  case "7":
    alert("bazar");
    break;

}
