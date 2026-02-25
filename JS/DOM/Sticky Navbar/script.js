var navbar = document.querySelector("body")

navbar.addEventListener("wheel", function (dets){
    
    console.log(dets)
    if(dets.deltaY>0){
        navbar.style.transform = "translateY(-100%)"    
        console.log("Down")
    }else{
        navbar.style.transform = "translateY(0)" 
        console.log("Up")
    }
})


