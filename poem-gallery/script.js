const poem1 = document.getElementById("poem-1");

poem1.style.backgroundColor = "lightblue";

const poems = document.querySelectorAll("article");

poems.forEach(function(poem)) {
    console.log(poem);
}