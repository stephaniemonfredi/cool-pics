let button = document.querySelector(".menu-btn");
let nav = document.querySelector("nav")

let dialog = document.querySelector("dialog");
let dialogImage = dialog.querySelector("img");

button.addEventListener("click", function (e){


    if(nav.style.display === ""){
        nav.style.display = "flex";
        console.log("Im in bro")
    } else {
        nav.style.display = "";
    }
    

    button.classList.toggle("change");
});

    button.style.display



let gallery = document.querySelector(".gallery");

const closeButton = dialog.querySelector('.close-viewer');


// 2 add an event listener to show dialog
gallery.addEventListener("click", function(event){
    console.log(event.target.src);
    // swap out src of dialog img
    if(event.target.src !== undefined) {
        dialogImage.src = event.target.src.replace("-sm", "-full")
        //show dialog box
        dialog.showModal();
    }
    
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

dialog.addEventListener("click", (event) => {
    if(event.target === dialog) {
        dialog.close();
    }
});