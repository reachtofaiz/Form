let close = document.querySelector('.close');


function myFunction(){
    document.querySelector('.container').style.display = "none";
}


close.addEventListener('click',()=>{
    console.log("button is clicked");
    myFunction();
})


function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('show');
}