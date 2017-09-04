
// Opens alert during development
function popup(){
  alert("The link you are trying to reach is under developmet! Stay tuned for more.\nHave fun, look good, stay safe.");
}

// Changes the H1 name upon click
// !!! CURRENTLY NOT WORKING !!!
var o = new Array('Organically');
var u = new Array('Using');
var adjC = new Array('Celestrial');
var nounC = new Array('Camels');

function changeName(){
  var a = Math.floor(Math.random() * o.length);
  var b = Math.floor(Math.random() * u.length);
  var c = Math.floor(Math.random() * adjC.length);
  var d = Math.floor(Math.random() * nounC.length);

  var str = o[a] + " " u[b] + " " + adjC[c] + " " + nounC[d];
  console.log(str);
}

$('h1').click(function(){
  console.log('hello');
});
