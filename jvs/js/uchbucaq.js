var x, y, z;
x =parseInt(prompt("Uch bucagin x terefin sechin"));
y =parseInt(prompt("Uch bucagin y terefin sechin"));
z =parseInt(prompt("Uch bucagin z terefin sechin"));


if (x < y + z && y < z + x && z < y + x && x!=y && y!=z && x!=z ) {
alert("olar")  
}
 else if ( x==y && x==z && y==z) {
   
    alert("Uchbucaq beraber tereflidir.");
}

else {
  alert("Olmaz");
}
 
