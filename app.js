const modeToggle=document.getElementById("modeToggle");

let darkMode=false;

modeToggle.addEventListener("click",()=>{
    darkMode=!darkMode;
    if(darkMode){
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
        modeToggle.textContent="dark";
        
    } else{
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
        modeToggle.textContent="light";
        
    }
})
