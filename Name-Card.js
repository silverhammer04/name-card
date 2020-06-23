const rank = document.getElementById("rank");
const change = document.getElementById("change");
const you = document.getElementById("you");

const changeName = () => {
    rank.innerHTML = you.value  
}

const eventtype = "click";

change.addEventListener(eventtype, changeName);
