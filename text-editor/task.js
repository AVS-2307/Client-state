const textarea = document.getElementById("editor");

textarea.addEventListener("input", () => {
    const text = textarea.value;
    localStorage.setItem("savedText", text);
});

window.addEventListener("load", () => {
    const savedText = localStorage.getItem("savedText");
    if (savedText) {
        textarea.value = savedText;
    }
});