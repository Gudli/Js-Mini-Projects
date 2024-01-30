let rect = document.querySelector("#center")

rect.addEventListener("mousemove",function(details){
    let rectanglrLocation = rect.getBoundingClientRect();
    let insiderectval=details.clientX - rectanglrLocation.left;
    if (insiderectval<rectanglrLocation.width/2) {
       let redcolor = gsap.utils.mapRange(0,rectanglrLocation.width/2,255,0,insiderectval)
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            erase:Power4,
        })
    
    }
    else{
        let bluecolor = gsap.utils.mapRange(rectanglrLocation.width/2,rectanglrLocation.width,0,255,insiderectval)
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            erase:Power4,
        })
    }
});

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white"
    })
})
