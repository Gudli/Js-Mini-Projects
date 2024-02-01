window.addEventListener("mousemove", function(details){
  let ract =document.querySelector("#rect")
  
    let xval =  gsap.utils.mapRange(0,
        window.innerWidth,
        100+ract.getBoundingClientRect().width/2,
        window.innerWidth-(100+ract.getBoundingClientRect().width/2),
        details.clientX)
    
    gsap.to('#rect',{
        left:xval +"px",
        ease:Power3
    });
});