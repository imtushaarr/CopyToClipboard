const buttonCopy = document.getElementsByClassName('copy-button')[0]; // Assuming there's only one element with this class
const textCopy = document.getElementsByClassName('copy-text')[0]; // Assuming there's only one element with this class

buttonCopy.addEventListener("click", () => {
    textCopy.select();
    textCopy.setSelectionRange(0, 99999);
    document.execCommand("copy");
    buttonCopy.classList.toggle("success");
    buttonCopy.innerHTML = "Done";

    setTimeout(function (){
         buttonCopy.classList.toggle("success");
         buttonCopy.innerHTML = "Done";
    }, 2000);
});