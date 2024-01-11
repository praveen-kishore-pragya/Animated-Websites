let showcase = document.querySelector(".showcase");
let fixedImage = document.querySelector(".fixedImage");

showcase.addEventListener("mouseenter",function(){
    fixedImage.style.display = "block";
    // display property set to block starts on a new line and takes up the available screen width.
});

showcase.addEventListener("mouseleave",function(){
    fixedImage.style.display = "none";
});

let elem = document.querySelectorAll(".elem");
// var a = elem1.getAttribute("data-image")
console.log(elem);
elem.forEach(function(element){
    {
        element.addEventListener("mouseenter",function(){
            let image = element.getAttribute("data-image");
            // fixedImage.style.backgroundColor = "blue"
            console.log(image);
            console.log(`url(${"image"})`);
            fixedImage.style.backgroundImage = `url(${"image"})`;
        });
    }
});
