function gridView() {
    const el = document.querySelector("div");
    const gridView = el.classList.add("grid");
}

function toggleDarkMode() {
    const el = document.querySelector("body");
    const darkMode = el.classList.toggle("darkMode");
}

function colView() {
    const el = document.querySelector("div");
    const colView = el.classList.remove("grid");
}

function toggleMenu() {
    const el = document.querySelector("menu");
    const toggleMenu = el.classList.toggle("hidden");
}

function galleryOn() {
    const el = document.querySelector("div");
    const galleryOn = el.classList.add("border", "bg-white")
}

function galleryOff() {
    const el = document.querySelector("div");
    const galleryOff = el.classList.remove("border", "bg-white")
}