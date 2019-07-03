var fName; 
window.onload  =() => {
    fName = document.getElementById("fname") ; 
    aType= document.getElementById("accountType");
    req = document.getElementById("request"); 
    paddableTag = document.getElementsByClassName("paddable"); // returns an array
    
};

function logAll() {
    console.log(fName.value);
    console.log(aType.value);
    console.log(req.textContent);
}

function updateRequest(){
    req.textContent = fName.value + ' wants to create a ' + aType.value +' account';
}

function increasePadding(){
    let marg;
    if (!paddableTag[0].style.margin){
    marg = 10 ; 
    }
    else {
        marg = parseInt(paddableTag[0].style.margin);
        marg+=10;
    }
    for (let i = 0 ; i < paddableTag.length ; i++){
        paddableTag[i].style.margin = marg+'px';
    }
}

function openPopup(){
    window.open("http://www.google.com");
}

function timer(){
    setTimeout(countDown, 2000);
    function countDown(){
        updateRequest(); 
        req.style.color = "blue";
    }
}