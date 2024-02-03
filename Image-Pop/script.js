
 
const throttleFunction = (func, delay) => {
      let prev = 0;
       return (...args) => {                
                let now = new Date().getTime(); 
                if (now - prev > delay) {
                    prev = now; 
                    return func(...args);
                }
            }
        }
 document.addEventListener('DOMContentLoaded', () => {

 let x =document.querySelector("#center")
 x.addEventListener(
    "mousemove",
        throttleFunction((dets) => {
            var div = document.createElement("div");
            div.classList.add('imagediv');
            div.style.left = dets.clientX + 'px'
            div.style.top = dets.clientY +'px'


            document.body.appendChild(div);
            var img =document.createElement("img");
            img.setAttribute("src","https://imgs.search.brave.com/IhmJc38q0MjYbYllKTNzHq_nlwoUgb6RY7IJCu5vy3Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MDY5MTc2L3Bob3Rv/L2RlaXR5LW9mLWdh/bmVzaGEtZnJvbS1p/bmRpYS1vbi13aGl0/ZS1iYWNrZ3JvdW5k/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1SMWFkT3ctd1RY/T2JJb3U4bFJ0RG4y/dF80Y0pKdWtQZzB1/UktzRVUyckhRPQ")

            div.appendChild(img)
            gsap.to(img,{
                y:"0",
                ease:Power1,
                duration:.6
            });
            gsap.to(img,{
                y:"100%",
                delay:.6,
                ease:Power2,
                duration:.2
            });


            setTimeout(function(){
                    div.remove()
            },
            2000)
        }, 400)
        );})  ;     
    