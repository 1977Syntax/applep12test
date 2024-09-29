function Sigin(n) {
    let t = $(n).serialize();
    return console.log(t), $.post(n.action, t).then(n => {
        console.log(n), n.code !== 0 ? alert(n.message) : location = n.data
    }), !1
}

function Signup(n) {
    let t = $(n).serialize();
    return console.log(t), $.post(n.action, t).then(n => {
        console.log(n), n.code !== 0 ? alert(n.message) : location = n.data
    }), !1
}(function() {
    "use strict";
    var t = document.querySelectorAll(".needs-validation"),
        n;
    Array.prototype.slice.call(t).forEach(function(n) {
        n.addEventListener("submit", function(t) {
            n.checkValidity() || (t.preventDefault(), t.stopPropagation());
            n.classList.add("was-validated")
        }, !1)
    });
    n = new ClipboardJS(".btn");
    n.on("success", function() {
        alert("Copy Success!")
    });
    n.on("error", function() {})
})()
