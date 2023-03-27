let linkA = document.createElement("a");
linkA.id = "link";
linkA.href = "https://dom.spec.whatwg.org";

let h_1 = document.querySelector("h1");
linkA.appendChild(h_1);
console.log(linkA);
