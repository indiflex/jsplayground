var name = "zero";
function log() {
  console.log(name);
}

function wrapper() {
  name = "nero";
  log();
}
wrapper();

//
for (var i = 1; i < 5; i++) {
  $("#span" + i).on("click", function () {
    alert(i);
  });
}







// sql
