function kelilingTrapesium(a, b, c, d) {
    return a + b + c + d;
}


var form = document.getElementById("form");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var submit = document.getElementById("submit");
var result = document.getElementById("result");


submit.addEventListener("click", function(event) {

    event.preventDefault();

    var k = kelilingTrapesium(Number(a.value), Number(b.value), Number(c.value), Number(d.value));

    result.textContent = "Keliling trapesium sama kaki adalah " + k + " cm.";
});