document.getElementById("scroll").addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll({ top: innerHeight, behavior: "smooth" })
})