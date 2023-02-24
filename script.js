let btn = document.querySelector(".button"),
    spinIcon = document.querySelector(".spinner"),
    btnText = document.querySelector(".btn-text");
btn.addEventListener("click", () => {
    btn.style.cursor = "wait";
    btn.classList.add("checked");
    spinIcon.classList.add("spin");
    btnText.textContent = "Loading";
setTimeout(() => {
    btn.style.pointerEvents = "none";
    spinIcon.classList.replace("spinner", "check");
    spinIcon.classList.replace("fa-circle-notch", "fa-check");
    btnText.textContent = "Thanks";
}, 4500)
});