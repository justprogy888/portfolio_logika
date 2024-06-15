let card_list = document.querySelectorAll(".card")
var completed = true
var run_reverse = false
let finished = true
let c = false
var completed2 = false
var completed3 = false
let gr = document.querySelector(".grid-background")
let tileAmountRow = Math.floor(gr.getBoundingClientRect().height / 20)
let tileAmountCol = Math.floor(gr.getBoundingClientRect().width / 20)
let cards = document.querySelectorAll(".card-bio-languages")
console.log(tileAmountCol)
console.log(tileAmountRow)
console.log(document.body.clientWidth)
console.log(document.body.clientHeight)
setTimeout(()=>{
    let glitch1 = document.querySelector(".glitch-1")
    let glitch2 = document.querySelector(".glitch-2")
    let text = document.querySelector(".title-text")
    text.style.transform = "translateY(-15px)"
    glitch1.style.height = "15px"
    glitch2.style.height = "15px"
    setTimeout(()=>{
        glitch2.style.transform = "translateX(-5px)"
        setTimeout(()=>{
            glitch1.style.height = "30px"
            glitch2.style.height = "0px"
        },400)
    },50)
},8000)
function onGridClick(index,elem){
    console.log("Hello world")
    anime({
        targets:".tile",
        keyframes:[{opacity:1.0,duration:100},{opacity:0.0,duration:50}],
        easing:"linear",
        delay:anime.stagger(10,{grid:[tileAmountCol,tileAmountRow],from:index})
    })
}
function onGridHover(index,elem){
    let elems = document.querySelectorAll(".tile")
    anime({
        targets:[elems[index]],
        keyframes:[{opacity:1.0,duration:2},{opacity:0.0,duration:1000}],
        easing:"linear",
    })
}
function add_tiles(){
    gr.style.setProperty("--columns",tileAmountCol)
    gr.style.setProperty("--rows",tileAmountRow)
    for(let i = 0; i <= (tileAmountRow * tileAmountCol);i++){
        let elem = document.createElement("div")
        elem.classList.add("tile")
        elem.addEventListener("mouseover",()=>onGridHover(i,elem))
        elem.addEventListener("click",()=>onGridClick(i,elem))
        gr.append(elem)
    }
}
add_tiles()
let c1 = 0
/*et timeline1 = anime.timeline({
    targets:skills_ul.querySelectorAll(".li-skill"),        
}) */
let an;
let grad_card = document.querySelectorAll(".gradient-wrap")
function add_text(){
    
    console.log("Mouse on")
    console.log("Before add text if " + completed)
    let skills_ul = card_list[0].querySelector(".skls")
            //if(completed == true){
            console.log("In add text if " + completed)
            anime({
                targets:skills_ul.querySelectorAll(".li-skill"), 
                keyframes:[{height:"50px",opacity:1.0,translateY:0,duration:800,easing:"easeOutQuad"}],
                delay:anime.stagger(900,{start:1000}),
            })
            //timeline1.play()
            for(let i = 0;i <= skills_ul.querySelectorAll(".li-skill").length - 1;i++){
                skills_ul.children[i].style.transform = "translateY(0px)"
            }
            //}
}
function cancel(){
    let skills_ul = card_list[0].querySelector(".skls")
    anime({
        targets:grad_card[0],
        rotateX:0,
        rotateY:0,
        duration:300,
        easing:"easeOutQuad"
    })
   
        anime({
            targets: Array.from(skills_ul.querySelectorAll(".li-skill")).reverse(),
            translateY:20,
            height:"0px",
            opacity:0.0,
            easing:"easeOutQuad",
            duration:800,
            delay:anime.stagger(900,{start:2000}),
        })
        /*console.log(run_reverse)
        let skills_ul = card_list[0].querySelector(".skls")
        console.log("Before cancel if " + completed)
        console.log("leave instant " + run_reverse)
        timeline1.pause()
        //grad_card[0].removeEventListener("mouseenter", add_text)
        grad_card[0].removeEventListener("mouseleave", cancel)
        console.log("Mouse out")
        completed = false
        console.log("In cancel if " + completed)
        an = anime({
            targets: Array.from(skills_ul.querySelectorAll(".li-skill")).reverse(),
            translateY:20,
            height:"0px",
            opacity:0.0,
            easing:"easeOutQuad",
            duration:800,
            delay:anime.stagger(900,{start:2000}),
        }).finished.then(()=>{
            console.log("completed")
            completed = true
            run_reverse = false
            //grad_card[0].addEventListener("mouseenter", add_text)
            grad_card[0].addEventListener("mouseleave", cancel)
        })*/
    }
    
grad_card[0].addEventListener("mouseenter", add_text)
grad_card[0].addEventListener("mouseleave", cancel)
grad_card[0].addEventListener("mousemove", (event)=>{
    if(window.innerWidth < 1201){
        
    }else{
        setTimeout(()=>{
            let mouseX = event.clientX
            let mouseY = event.clientY
            let halfWidth = card_list[0].getBoundingClientRect().width / 2
            let halfHeight = card_list[0].getBoundingClientRect().height
            let xdeg = (mouseX - halfWidth)/halfWidth;
            let ydeg = (mouseY - halfHeight)/halfHeight;
            grad_card[0].style.transform = `rotateX(${ydeg * 30}deg) rotateY(${xdeg * 20}deg)`;
        },100)
    }   
    
    
})
let timeline2 = anime.timeline({
    targets:card_list[1].querySelector(".skls").querySelectorAll(".li-skill")[0],
}) 
let anim_arr = []
function add_text1(){
    let skills_ul = card_list[1].querySelector(".skls")
    let an1 = anime({
        targets:card_list[1].querySelectorAll(".snake")[0], 
        opacity:1.0,
        translateY:-25,
        duration:600,
        easing:"easeOutQuad"
    }).finished.then(()=>{
        anim_arr.push(an1)
        let an2 = anime({
            targets:card_list[1].querySelectorAll(".snake")[0], 
            fill:"#306998",
            duration:500,
            easing:"linear"
        }).finished.then(()=>{
            anim_arr.push(an2)
        })
    })
    let an3 = anime({
        targets:card_list[1].querySelectorAll(".snake")[1], 
        opacity:1.0,
        translateY:25,
        duration:600,
        easing:"easeOutQuad"
    }).finished.then(()=>{
        anim_arr.push(an3)
        let an4 = anime({
            targets:card_list[1].querySelectorAll(".snake")[1], 
            fill:"#FFD43B",
            duration:500,
            easing:"linear"
        }).finished.then(()=>{
            anim_arr.push(an4)
            let an5 = anime({
                targets:card_list[1].querySelectorAll(".snake")[0], 
                translateX:38,
                duration:500,
                easing:"linear"
            }).finished.then(()=>{
                anim_arr.push(an5)
            })
            let an6 = anime({
                targets:card_list[1].querySelectorAll(".snake")[1], 
                translateX:-38,
                duration:500,
                easing:"linear"
            }).finished.then(()=>{
                anim_arr.push(an6)
                let an7 = anime({
                    targets:card_list[1].querySelectorAll(".snake")[0], 
                    opacity:1.0,
                    translateY:-10,
                    duration:500,
                    easing:"linear"
                }).finished.then(()=>{
                    anim_arr.push(an7)
                })
                let an8 = anime({
                    targets:card_list[1].querySelectorAll(".snake")[1], 
                    translateY:10,
                    duration:500,
                    easing:"linear",
                    endDelay:200
                }).finished.then(()=>{
                    anim_arr.push(an8)
                    let an9 = anime({
                        targets:skills_ul, 
                        keyframes:[{height:"200px",duration:500,easing:"easeOutQuad"},{opacity:1.0,translateY:10,duration:500,easing:"easeOutQuad"}],
                        easing:"linear"
                    }).finished.then(()=>{
                        anim_arr.push(an9)
                    })
                })
            })
            let an10 = anime({
                targets:card_list[1].querySelector(".title-card"), 
                width:"0px",
                duration:800,
                easing:"easeOutQuad"
            }).finished.then(()=>{
                anim_arr.push(an10)
                console.log(anim_arr)
            })
        })
    })
}
function cancel1(){
    anime({
        targets:grad_card[1],
        rotateX:0,
        rotateY:0,
        duration:300,
        easing:"easeOutQuad"
    })
    /*let skills_ul = card_list[1].querySelector(".skls")
    
        for(let i = 0;i<=anim_arr.length;i++){
            anim_arr.reverse()[i].pause()
            anim_arr.reverse()[i].play()
            anim_arr.reverse()[i].reverse()
        }*/
}
    
grad_card[1].addEventListener("mouseenter", add_text1)
grad_card[1].addEventListener("mouseleave", cancel1)
let bounds;
grad_card[1].addEventListener("mousemove", (e)=>{
    if(window.innerWidth < 1201){
    }else{
        bounds = grad_card[1].getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        grad_card[1].style.transform = `
        rotateX(${(topY - bounds.height / 2) / 30}deg) rotateY(${(leftX - bounds.width / 2) / 30}deg)
    `
    }
    })
function add_text2(){
    console.log("Mouse on")
    console.log("Before add text if " + completed)
    let skills_ul = card_list[2].querySelector(".skls")
            //if(completed == true){
            console.log("In add text if " + completed)
            anime({
                targets:skills_ul.querySelectorAll(".li-skill"), 
                keyframes:[{height:"50px",opacity:1.0,translateY:0,duration:800,easing:"easeOutQuad"}],
                delay:anime.stagger(900,{start:1000}),
            })
            //timeline1.play()
            for(let i = 0;i <= skills_ul.querySelectorAll(".li-skill").length - 1;i++){
                skills_ul.children[i].style.transform = "translateY(0px)"
            }
            //}
}
function cancel2(){
    let skills_ul = card_list[2].querySelector(".skls")
    anime({
        targets:grad_card[2],
        rotateX:0,
        rotateY:0,
        duration:300,
        easing:"easeOutQuad"
    })
    
        anime({
            targets: Array.from(skills_ul.querySelectorAll(".li-skill")).reverse(),
            translateY:20,
            height:"0px",
            opacity:0.0,
            easing:"easeOutQuad",
            duration:800,
            delay:anime.stagger(900,{start:2000}),
        })
        /*console.log(run_reverse)
        let skills_ul = card_list[0].querySelector(".skls")
        console.log("Before cancel if " + completed)
        console.log("leave instant " + run_reverse)
        timeline1.pause()
        //grad_card[0].removeEventListener("mouseenter", add_text)
        grad_card[0].removeEventListener("mouseleave", cancel)
        console.log("Mouse out")
        completed = false
        console.log("In cancel if " + completed)
        an = anime({
            targets: Array.from(skills_ul.querySelectorAll(".li-skill")).reverse(),
            translateY:20,
            height:"0px",
            opacity:0.0,
            easing:"easeOutQuad",
            duration:800,
            delay:anime.stagger(900,{start:2000}),
        }).finished.then(()=>{
            console.log("completed")
            completed = true
            run_reverse = false
            //grad_card[0].addEventListener("mouseenter", add_text)
            grad_card[0].addEventListener("mouseleave", cancel)
        })*/
    }
    
grad_card[2].addEventListener("mouseenter", add_text2)
grad_card[2].addEventListener("mouseleave", cancel2)
grad_card[2].addEventListener("mousemove", (e)=>{
    console.log(window.innerWidth)
    if(window.innerWidth < 1201){

    }else{
        bounds = grad_card[2].getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        grad_card[2].style.transform = `
        rotateX(${(topY - bounds.height / 2) / 30}deg) rotateY(${(leftX - bounds.width / 2) / 30}deg)
        `
    }
})
let area_test = document.querySelector(".pull-div")
let imgs_arr = document.querySelectorAll(".pull-img")
let imgs_arr2 = document.querySelectorAll(".pull-img")
let count_img = 1
let first = false
let reset_on_next = false
let arr = Array.from(imgs_arr2).reverse()
arr.pop()
console.log(arr)
let hide_prev = false
area_test.onmousedown = function(e){
    if(reset_on_next){
        console.log("Hello world")
        count_img = 0
        for(let i = 0;i <= imgs_arr.length - 1;i++){
            if(i != (imgs_arr.length - 1) && i != 0){
                imgs_arr[i].style.zIndex = "1"
                imgs_arr[i].style.transform = "translateY(500px)"
            }else if(i == 0){
                imgs_arr[i].style.zIndex = "2"
                imgs_arr[i].style.transform = "translateY(500px)"
            }else if(i == (imgs_arr.length - 1)){
                imgs_arr[i].style.zIndex = "1"
                imgs_arr[i].style.transform = "translateY(0px)"
            }
            
        }
        
        area_test.removeEventListener("mousemove",onMouseMove)
        reset_on_next = false
        hide_prev = true
    }
    
    console.log("Will be moved now" + count_img)
    let trans = 500
    function onMouseMove(e) {
        trans = e.pageY - document.querySelector(".examples").offsetTop
        imgs_arr[count_img].style.transform = `translateY(${trans}px)`  
    }
    area_test.addEventListener("mousemove",onMouseMove)
    area_test.onmouseup = function(){
        console.log("Hello world")
        console.log(trans)

        if(trans < 201){
            area_test.removeEventListener("mousemove",onMouseMove)
            trans = 0
            anime({
                targets:imgs_arr[count_img],
                translateY:0,
                duration:600,
                easing:"easeOutQuad"
            }).finished.then(()=>{
                if(hide_prev){
                    imgs_arr[imgs_arr.length - 1].style.transform = "translateY(500px)"
                    hide_prev = false
                }
            })
            if(count_img == document.querySelectorAll(".pull-img").length - 1){
                reset_on_next = true
            }else{
                count_img += 1 
                for(let i = 0;i <= imgs_arr.length - 1;i++){
                    if(i != count_img){
                        imgs_arr[i].style.zIndex = "1"
                    }else{
                        console.log("Hello world")
                        imgs_arr[i].style.zIndex = "2"
                    }
                }
            }
            console.log(count_img)
        }else{
            area_test.removeEventListener("mousemove",onMouseMove)
            anime({
                targets:imgs_arr[count_img],
                translateY:500,
                duration:600,
                easing:"easeOutQuad"
            })
        }
    }
}
let path = document.querySelectorAll('.path');
for(let i = 0;i <= path.length - 1;i++){
    path[i].style.strokeDashoffset = `${path[i].getTotalLength()}`;
    console.log(path[i].getTotalLength())
}
let display_svgs = true
window.onscroll = function(){
    console.log(window.scrollY)
    if(window.scrollY >= 1900){
        if(display_svgs){
            let it_arr = document.querySelectorAll(".path")
        Array.from(it_arr).shift()
        let tel_arr = document.querySelectorAll(".path1")
        console.log(tel_arr)
        setTimeout(()=>{
            for(let i = 0;i <= tel_arr.length - 1;i++){
                tel_arr[i].style.strokeOpacity = "1"
            }  
        },30)
        anime({
            targets:tel_arr,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1600
        }).finished.then(()=>{
            setTimeout(()=>{
                for(let i = 0;i <= it_arr.length - 1;i++){
                    it_arr[i].style.strokeOpacity = "1"
                }
                
            },30)
            anime({
                targets:it_arr,
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                delay: anime.stagger(800),
                duration: 1600
            })
        })
        display_svgs = false
        }
    }else{
        let it_arr = document.querySelectorAll(".path")
        Array.from(it_arr).shift()
        let tel_arr = document.querySelectorAll(".path1")
        for(let i = 0;i <= tel_arr.length - 1;i++){
            tel_arr[i].style.strokeOpacity = "0"
        }
        for(let i = 0;i <= it_arr.length - 1;i++){
            it_arr[i].style.strokeOpacity = "0"
        }
        display_svgs = true
    }
}
cards[0].addEventListener("click",()=>{
    let card = cards[0];
    card.querySelector(".text-click").style.height = "0px"
    anime({
        targets:card.querySelector(".bio-info"),
        height:[{value:"30px",duration:700,easing:"easeOutQuad"},{value:"180px",duration:500,easing:"linear"}]
    }).finished.then(()=>{
        anime({
            targets:card.querySelectorAll(".li-bio-info"),
            opacity:1.0,
            duration:1000,
            easing:"easeOutQuad",
            delay:anime.stagger(1100,{start:1000})
        })
    })
})
cards[1].addEventListener("click",()=>{
    let card = cards[1];
    card.querySelector(".text-click").style.height = "0px"
    anime({
        targets:card.querySelector(".langs-ul"),
        height:"250px",
        duration:800,
        easing:"easeOutQuad"
    }).finished.then(()=>{
        anime({
            targets:card.querySelectorAll(".langs-li"),
            opacity:1.0,
            duration:1000,
            easing:"easeOutQuad",
            delay:anime.stagger(900)
        })
        anime({
            targets:[card.querySelectorAll(".path-lang")[0],card.querySelectorAll(".path-lang")[1],card.querySelectorAll(".path-lang")[2]],
            strokeDashoffset: [anime.setDashoffset, 0],
            duration:900,
            easing:"easeOutQuad",
        }).finished.then(()=>{
            anime({
                targets:card.querySelectorAll(".path-lang")[3],
                strokeDashoffset: [anime.setDashoffset, 0],
                duration:800,
                easing:"easeOutQuad",
                delay:100,
            }).finished.then(()=>{
                anime({
                    targets:[card.querySelectorAll(".path-lang")[4],card.querySelectorAll(".path-lang")[5]],
                    strokeDashoffset: [anime.setDashoffset, 0],
                    duration:800,
                    easing:"easeOutQuad",
                }).finished.then(()=>{
                    anime({
                        targets:[card.querySelectorAll(".path-lang")[6],card.querySelectorAll(".path-lang")[7]],
                        strokeDashoffset: [anime.setDashoffset, 0],
                        duration:800,
                        easing:"easeOutQuad",
                        endDelay:100
                    }).finished.then(()=>{
                        anime({
                            targets:[card.querySelectorAll(".path-lang")[8],card.querySelectorAll(".path-lang")[9],card.querySelectorAll(".path-lang")[10]],
                            strokeDashoffset: [anime.setDashoffset, 0],
                            duration:800,
                            easing:"easeOutQuad"
                        })
                    })
                })
            })
        })
    })
})
let chosen = 0
let choose_example = document.querySelectorAll(".example")
choose_example[0].addEventListener("click",function(){
    console.log("Hello world")
    if(chosen!=0){
        choose_example[0].querySelector(".bottom-bar").style.width = "100%"
        choose_example[chosen].querySelector(".bottom-bar").style.width = "0%"
        document.querySelector(".pull-div").innerHTML = `<div class="pull-img">
        <img src="img1_front.png" alt="" class="img-inner">
        <p class="text-photo-description">Apple Mockup</p>
        <div class="bottom-grad"></div>
    </div>
    <div class="pull-img">
        <img src="img2_front.png" alt="" class="img-inner">
        <p class="text-photo-description">Apple Mockup</p>
        <div class="bottom-grad"></div>
    </div>
    <div class="pull-img">
        <img src="img3_front.png" alt="" class="img-inner">
        <p class="text-photo-description">Coffee shop</p>
        <div class="bottom-grad"></div>
    </div>
    <div class="pull-img">
        <img src="img4_front.png" alt="" class="img-inner">
        <p class="text-photo-description">Coffee shop</p>
        <div class="bottom-grad"></div>
    </div>
    <div class="pull-img">
        <img src="img5_front.png" alt="" class="img-inner">
        <p class="text-photo-description">Coffee shop</p>
        <div class="bottom-grad"></div>
    </div>`
    chosen = 0
    count_img = 1
    imgs_arr = document.querySelectorAll(".pull-img")
    }
    
})
choose_example[1].addEventListener("click",function(){
    console.log("Hello world")
    if(chosen != 1){
        choose_example[1].querySelector(".bottom-bar").style.width = "100%"
        choose_example[chosen].querySelector(".bottom-bar").style.width = "0%"
        document.querySelector(".pull-div").innerHTML = `<div class="pull-img">
        <img src="python-work1.png" alt="" class="img-inner">
        <p class="text-photo-description">Telegram bot</p>
        <div class="bottom-grad"></div>
        </div>
        <div class="pull-img">
            <img src="python-work2.png" alt="" class="img-inner">
            <p class="text-photo-description">Telegram bot</p>
            <div class="bottom-grad"></div>
        </div>
        <div class="pull-img">
            <img src="python-work3.png" alt="" class="img-inner">
            <p class="text-photo-description">Telegram bot</p>
            <div class="bottom-grad"></div>
        </div>
        <div class="pull-img">
            <img src="python-work4.png" alt="" class="img-inner">
            <p class="text-photo-description">Telegram bot</p>
            <div class="bottom-grad"></div>
        </div>`
        chosen = 1
        count_img = 1
        imgs_arr = document.querySelectorAll(".pull-img")
    }
   
})
choose_example[2].addEventListener("click",function(){
    console.log("Hello world")
    if(chosen != 2){
        choose_example[2].querySelector(".bottom-bar").style.width = "100%"
        choose_example[chosen].querySelector(".bottom-bar").style.width = "0%"
        document.querySelector(".pull-div").innerHTML = ``
        chosen = 2
        count_img = 1
        imgs_arr = document.querySelectorAll(".pull-img")
    }
    
})
let header_items = document.querySelectorAll(".menu-item")


header_items[0].addEventListener("click",function(){
    console.log("Hello world")
    window.scrollTo({
        top: 2200,
        left: 0,
        behavior: "smooth"
      });
})
header_items[1].addEventListener("click",function(){
    window.scrollTo({
        top: 1400,
        left: 0,
        behavior: "smooth"
      });
})
header_items[2].addEventListener("click",function(){
    window.scrollTo({
        top: 1900,
        left: 0,
        behavior: "smooth"
      });
})
/*card_list[1].addEventListener("mouseover",()=>{
    let skills_ul = card_list[1].querySelector(".skls")
    let list_items = [`<li class="li-skill">Bots(Telegram,Discord)</li>`,`<li class="li-skill">Scripts</li>`,`<li class="li-skill">Website scrapers</li>`]
    setTimeout(()=>{
        for(let i = 0; i <= list_items.length - 1; i++){
            setTimeout(()=>{
                anime({
                    targets:skills_ul.querySelectorAll(".li-skill")[i],
                    height:"40px",
                    endDelay:300,
                    duration:300,
                    opacity:1.0,
                    easing:"easeOutQuad"
                })
            },600 * i)    
        }
        completed = true
    },700)
    
})
card_list[2].addEventListener("mouseover",()=>{
    let skills_ul = card_list[2].querySelector(".skls")
    let list_items = [`<li class="li-skill">Code for ESP</li>`,`<li class="li-skill">Code for STM32</li>`,`<li class="li-skill">Code for Atmel</li>`]
    setTimeout(()=>{
        for(let i = 0; i <= list_items.length - 1; i++){
            setTimeout(()=>{
                anime({
                    targets:skills_ul.querySelectorAll(".li-skill")[i],
                    height:"40px",
                    endDelay:300,
                    duration:300,
                    opacity:1.0,
                    easing:"linear"
                })
            },600 * i)    
        }
        completed = true
    },700)
    
})*/