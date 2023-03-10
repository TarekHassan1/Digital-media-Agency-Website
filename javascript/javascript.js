// Nav - 2
const menu = document.querySelector(".menu");
const p1 = document.querySelectorAll(".p1");
const p2 = document.querySelector(".menu .p2");

const nav_2 = document.querySelector(".nav-2");
const ulTest = document.querySelector(".ul-1-nav-2");
const ulTestLis = document.querySelectorAll(".ul-1-nav-2 li.nav-item a");
// Nav-2 End
// Home Start
// Home  img , text content
const image = document.querySelector(".home-container img");
const content = document.querySelector(".content");
// About us Start
const abotusImg = document.querySelector(".about-us .container .img-container img");
const abotusText = document.querySelector(".about-us .container .text-content");
let fir=document.querySelector(".text-content .circles .first .fir");
let sec=document.querySelector(".text-content .circles .second .sec");
let thir = document.querySelector(".text-content .circles .third .thir");

// About us End
// Home End
// Services Start

const servTxt = document.querySelector(".services .text.head");
const categories = document.querySelectorAll(".services .categories .category");
const container = document.querySelector(".services .content");
const title = document.querySelector(".services .content .text h4");
const img = document.querySelector(".services .content .img-container img");
const rightText = document.querySelector(".services .content .text");
const leftImg = document.querySelector(".services .content .img-container img");
// Services En
// portfolio start

const portTxt = document.querySelector(".portfolio .text");
const imgs_container = document.querySelector(".portfolio .images-container");
const prevBtn=document.querySelector(".portfolio .prev-next-stop .prev");
const nextBtn=document.querySelector(".portfolio .prev-next-stop  .next");
const stopBtn=document.querySelector(".portfolio .prev-next-stop  .stop .stop-icon ");
const returnBtn=document.querySelector(".portfolio .prev-next-stop  .stop .return-icon ");
const cardWidth =document.querySelector(".portfolio .images-container .card").clientWidth;
// Portfolio end

// Blog Start

const blogTxt = document.querySelector(".blog .text");
const content_container = document.querySelector(".blog .content-container");

// Blog end

// Contact us start

const contact_Txt = document.querySelector(".contact-us .text");
const contact_Content_Container = document.querySelector(".contact-us .content-container");

// Contact us end


// Subscribe
const form = document.querySelector(".subscribe form");
const btn = document.querySelector(".subscribe form button");
const text = document.querySelector(".subscribe .text");
// Subscribe end

// Variables Done ;

// Nav 2 3spans Menu
menu.addEventListener("click", () => {
    p1[0].classList.toggle("transform-1");
    p1[1].classList.toggle("transform-2");
    p2.classList.toggle("hide");

    ulTest.classList.toggle("show");
})
function show_Border_Bottom(secName, minH, maxH) {
    let windowHeight = window.scrollY;
    ulTestLis.forEach((e) => {
    if (windowHeight > minH && windowHeight < maxH) {
        e.classList.remove("on-click-border");

        if (e.textContent == secName) {
            e.classList.add("on-click-border"); 
    }

    }       
    })
}


// Subscribe form
function prevent(e) {
    e.preventDefault();
}
form.addEventListener("click", prevent);
// Pervent Default
    // 
    // All the element transform effects to all sections
window.addEventListener("scroll",() => {
    let windowHeight = window.scrollY;
    if (windowHeight > 60) {
        nav_2.classList.add("move-it-to-top");
    } else {
        nav_2.classList.remove("move-it-to-top");
    }
    show_Border_Bottom("Home", 120, 650);
    show_Border_Bottom("About", 651, 1300);
    show_Border_Bottom("Services", 1380, 2300);
    show_Border_Bottom("Projects", 2850, 3710);
    show_Border_Bottom("Blog", 3750, 4740);
    show_Border_Bottom("Contact", 4741, 5500);
    // Subscribe section show
    if (windowHeight > 1500) {
        text.classList.add("show");
        form.classList.add("show");
    }
    if (windowHeight > 1025) {
        servTxt.classList.add("show");
    }
    // Portfolio Section Show
    if (windowHeight > 2440) {
        portTxt.classList.add("show");
    }
    // Projects section show
    if (windowHeight > 2900) {
        imgs_container.classList.add("show");
    }
    if (windowHeight > 3450) {
        blogTxt.classList.add("show");
    }
    if (windowHeight > 3550) {
        content_container.classList.add("show");
    }
    if (windowHeight > 4450) {
        contact_Txt.classList.add("show");
    }
    if (windowHeight > 4850) {
        contact_Content_Container.classList.add("show");
    }
})

// Nav-2 end
// Home 

window.addEventListener("scroll", () => {
    // About us image and text
    abotusImg.classList.add("translate-to-page");
    abotusText.classList.add("translate-to-page");
// Home  img , text content
})
window.addEventListener("DOMContentLoaded", () => {
    image.classList.add("translate-to-page");
    content.classList.add("translate-to-page");
})

//



// About us

// Counter to make circle start from nothing (0) to 80/90%

let counter=0,fcounter=0;
let st= setInterval(() => {
counter+=1;

if(counter == 80){
        clearInterval(st);
    }
    sec.innerHTML=counter+"%";
    thir.innerHTML=counter+"%";
}, 25);
let f= setInterval(() => {
fcounter+=1;
    if(fcounter == 90){
        clearInterval(f);
    }


    fir.innerHTML=fcounter+"%";
}, 22.5);

// Change Between Services in services section
// Services

// Get Text From json 
let request = new XMLHttpRequest();

request.open("GET", "json.json", true);
request.send();


categories.forEach(cat => {
    cat.addEventListener("click", () => {
        categories.forEach((cat) => {
            cat.classList.remove("shadow");  
        })

       cat.classList.add("shadow");
    });
})
request.onreadystatechange =function () {
    if (this.readyState === 4 && this.status == "200") {
        let x = JSON.parse(this.responseText);
        let text="";
        categories.forEach(cat => {
            cat.onclick = () => {
                text =  cat.textContent.trim()
                for (let i = 0; i < categories.length; ++i){

                    if (x[i].name != text) {
                        // console.log(`x[i].name ${x[i].name} and text ${text}`);
                        continue;
                    }
                    else {
                        container.innerHTML = `
                        <div class="text">
                        <h4>${x[i].h4Text}</h4>
                        <p class="on-page">${x[i].para1}</p>
                        <div >
                        <span><i class="fa fa-check"></i>Optimized Template</span>
                        <span><i class="fa fa-check"></i>Data Info</span> 
                        <span ><i class="fa fa-check"></i>SEO Analysis</span></div>
                        <div>
                        <span > <i class="fa fa-check"></i>Data Info</span>
                        <span ><i class="fa fa-check"></i>SEO Analysis</span>
                        <span ><i class="fa fa-check"></i>Optimized Template</span>
                        </div>
                        <p class="on-page">${x[i].para2}</p>
                        </div>
                        <div class="img-container">
                        <img src="${x[i].img}" alt="">
                        </div>`;


                    }

                    }

            }

        });


        }
    
    }

// portfolio functinos
const mediaQuerySM = window.matchMedia('(max-width: 575px)');
const mediaQueryMed = window.matchMedia('(max-width: 768px)');
const mediaQuerylg = window.matchMedia('(max-width: 991px)');
const mediaQueryXL = window.matchMedia('(max-width: 1199px)');
const mediaQueryXXL = window.matchMedia('(min-width: 1200px)');


let currentIndex=0;
function moveslider(index){
if(mediaQuerySM.matches){
    imgs_container.style.transform=`translateX(-${(cardWidth + 45)  * index}px)`;

}
else if(mediaQueryMed.matches){
    imgs_container.style.transform=`translateX(-${(cardWidth + 47.5)  * index}px)`;

}
else if(mediaQuerylg.matches){
    imgs_container.style.transform=`translateX(-${(cardWidth + 50)  * index}px)`;

}
else if(mediaQueryXL.matches){
    imgs_container.style.transform=`translateX(-${(cardWidth + 57.5)  * index}px)`;

}
else if(mediaQueryXXL.matches){
    imgs_container.style.transform=`translateX(-${(cardWidth + 25.2)  * index}px)`;

}
}
function moveNext(){
    if(currentIndex === imgs_container.children.length - 6 ){
        currentIndex=0;
    }else{
        ++currentIndex;
    }
moveslider(currentIndex);
}
function movePrevious(){
    if(currentIndex === 0){
        currentIndex=imgs_container.children.length - 6;
    }else{
        --currentIndex;
    }
moveslider(currentIndex);
}
console.log((cardWidth + 20));

nextBtn.addEventListener("click",moveNext);
prevBtn.addEventListener("click",movePrevious);
let autoScroll= setInterval(moveNext,3000);
stopBtn.onclick=()=>{
    clearInterval(autoScroll);
}
returnBtn.onclick=()=>{
    autoScroll= setInterval(moveNext,3000);

}
// portfolio end