

const googleBtn= document.querySelector(".google-btn");
const appleBtn= document.querySelector(".apple-btn");
const createBtn= document.querySelector(".create-btn");

googleBtn.addEventListener("click", () => {
    window.location.href="http://localhost:3000/google/signup";
});

appleBtn.addEventListener("click", () => {
    window.location.href="http://localhost:3000/apple/signup";
});

createBtn.addEventListener("click", () => {
    window.location.href="http://localhost:3000/create/new/signup";
});
