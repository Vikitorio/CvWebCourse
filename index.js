
let skillContent = '<div class="regalias__skills_box"><div class="skills-item"><h2 class="skills-item__title">Languages</h3><ul class="skills-item__list"><li class="skills-item__li">-English:B1</li><li class="skills-item__li">-Ukrainian:Native</li></ul></div><div class="skills-item"><h2 class="skills-item__title">Design</h3><ul class="skills-item__list"><li class="skills-item__li">-Figma</li><li class="skills-item__li">-Photoshop</li><li class="skills-item__li">-CorelDraw</li></ul></div><div class="skills-item"><h2 class="skills-item__title">Programing</h3><ul class="skills-item__list"><li class="skills-item__li">-HTML/CSS/JS</li><li class="skills-item__li">-mySQL</li><li class="skills-item__li">-Python</li></ul></div></div>'
import {aboutMeContent} from './aboutMeContent.js';
import {contactMeContent} from './contactMeContent.js';
import { regaliasListItems } from './regaliasListItems.js';
let inventoryFull = false
let skillsFull = false
let currentTabButton = $('.aboutMe')
let main = $("main")
let regaliasContent = $(".regalias__content")
let regaliasBox = $(".regalias__box")
let currentSlide = $("._slider2")
let leftButtonSlide = $("._slider-left")
let rightButtonSlide = $("._slider-right")
let contactMeTab = $('.contactMe')
let aboutMeTab = $('.aboutMe')
let examplesTab = $('.examplesTab')

$('.header__link').on('click', function () {
    currentTabButton.removeClass('_active__tab')
    $(this).addClass('_active__tab')
    currentTabButton = $(this)
})


function generateContactMeTab(){
    main.empty()
    main.append(contactMeContent)
}

/*slider*/
let Quotes = ["Кодіть потрібно правильно, а не правильно не потрібно","Знаю все, окрім того що не знаю","Не всі клоуни виступають в цирку"]
let currentQuote = 2;
$('.Quotes__slider').on("click", function(){
});




$('document').ready(function() {
    generateAboutMeTab()
    //changeQuoteText()
    //generateInventory()
});


function changeQuoteText(){
    if(currentQuote>Quotes.length-1){
        currentQuote-=Quotes.length
    }
    else if(currentQuote<0){
        currentQuote=Quotes.length-1
    }
    currentSlide.empty()
    currentSlide.text(Quotes[currentQuote])
    currentSlide.append("<br><span class='quote__author'>В. Михальчевський 700 років до н.е<span>")
}





function generateSkills(){
    if (skillsFull == false){
        regaliasBox.empty()
        inventoryFull = false
        regaliasBox.append(skillContent)
        skillsFull = true
}}

function generateInventory(){
    if (inventoryFull == false){
        
        let inventory = $('<div class="regalias__inventory"></div>')
    for (let i=0 ; i<200 ;i++){
        if (i<regaliasListItems.length){
            let el = $("<div class = 'item_box'></div>");
            let capt = `<div class='item-caption'>${regaliasListItems[i]["caption"]}</div>`;
            let icon = `<img class='item-icon' src="${regaliasListItems[i]["icon-src"]}"></img>`;
            el.append(icon)
            el.append(capt)
            inventory.append(el)

        }
        else{
            inventory.append("<div class = 'item_box'><div class='item-caption'></div></div>");
        }
        
    }
    regaliasBox.empty()
    regaliasBox.append(inventory)
    skillsFull = false
    inventoryFull = true
    }
    let inventoryItemsArray = $('.item_box')
    for (var i = 0; i < regaliasListItems.length; i++) {

        addHoverEvent(inventoryItemsArray[i])
        addClick(inventoryItemsArray[i],regaliasListItems[i])


    }
    function addHoverEvent(currentItem){
        $(currentItem).hover(function (event){
            let element = $(currentItem);
            let desk = element.find('.item-caption')
            let x = event.pageX - element.offset().left;
            let y = event.pageY - element.offset().top;
            desk.show()
            desk.css({left: x + "px",top: y + "px"})
            
            element.on('mousemove', function(event) {
                x = event.pageX - element.offset().left;
                y = event.pageY - element.offset().top;
                desk.css({ left: x + 'px', top: y + 'px' });
            });
        },function() {
            let element = $(this);
            let description = element.find('.item-caption');
            description.hide();
            element.off('mousemove');})
    }
   
    function addClick(item,itemInfo=""){
        $(item).click(function() {
            var overlay = $('<div class="overlay"></div>');
            var imageContainer = $('<div class="overlay__image-container"></div>');
            var image = $(`<img src=${itemInfo['full-img-src']} class="overlay__image" alt="Зображення">`);
            var closeButton = $('<button class="close-button">Закрити</button>');
            imageContainer.append(image);
            imageContainer.append(closeButton);
             overlay.append(imageContainer);
            $('body').append(overlay);
            overlay.click(function() {
                overlay.remove();
            });
        return false;
        });
    }
    
}



contactMeTab.on('click',()=>{
    generateContactMeTab()
})
let imagesSiteExamples = ['./images/cool-site.png','./images/cool-site.png','./images/cool-site.png']
examplesTab.on('click',()=>{
    generateExamplesTab()
})
function generateExamplesTab(){
    main.empty()
    imagesSiteExamples.forEach((el)=>{
        let siteBox = $('<div class ="site-example _box"></div>')
        let siteImage = $(`<img src= ${el} alt="Тут повинен був бути крутий сайт" class="site-example__image"></img>`)
        siteBox.append(siteImage)
        main.append(siteBox)
    })
    

}
let currentValue = 2; // Initial position
let quoteTimer;
function generateAboutMeTab(){
    main.empty()
    main.append(aboutMeContent)
    //$("main").append(mainContent.clone())
    inventoryFull = false
    skillsFull = false
    regaliasContent = $(".regalias__content")
    regaliasBox = $(".regalias__box")
    currentSlide = $("._slider2")
    leftButtonSlide = $("._slider-left")
    rightButtonSlide = $("._slider-right")
    
    leftButtonSlide.on("click",() => {
        sliderChange(-1)
    changeQuoteText()})
    rightButtonSlide.on("click",() => {
        sliderChange(1)

    })
    function sliderChange(val=1){
        if (quoteTimer) {
            clearTimeout(quoteTimer);
          }
        currentQuote+=val
        changeCurrentBall(val)
        changeQuoteText()
        quoteTimer = setTimeout(sliderChange, 5000);
    }
    $(".regalias__education").on("click",() => {
        generateInventory()})
    function showDescription(){
        let desk = this.$('.item-caption')
        let x = this.clientX
        let y = this.clientY
        desk.show()
        desk.css({left: x + "px",top: y + "px"})
        
    }
    $(".regalias__skills").on("click",()=>{
        generateSkills()
    
        
    })
    leftButtonSlide.on("click",() => {
    currentQuote-=1
changeQuoteText()})
rightButtonSlide.on("click",() => {
    currentQuote+=1

    changeQuoteText()
})
    changeQuoteText()
    generateInventory()
    
   function changeCurrentBall(value) {
        if (value < 0) {
            currentValue = (currentValue - 1 < 1) ? 3 : currentValue - 1;
            console.log(currentValue)
            updateBalls(-1);
        } else if (value > 0) {
            currentValue = (currentValue + 1 > 3) ? 1 : currentValue + 1;
            console.log(currentValue)
            updateBalls(+1);
        }

        
    };
    $(`.quotes__ball._ball__${2}`).addClass("_ball__active");
    $(`.quotes__ball._ball__${2}`).css({"transform": `translateX(0px)`})
    $(`.quotes__ball._ball__${1}`).css({"transform": `translateX(30px)`})
    $(`.quotes__ball._ball__${3}`).css({"transform": `translateX(-30px)`})
    sliderChange()

}

aboutMeTab.on('click',()=>{
    generateAboutMeTab()
})


function updateBalls(Value) {
    $(".quotes__ball").removeClass("_ball__active");
    let rightValue = (currentValue + 1 > 3) ? 1 : currentValue + 1;
    let leftValue = (currentValue - 1 < 1) ? 3 : currentValue - 1;
    
    $(`.quotes__ball._ball__${currentValue}`).addClass("_ball__active");
    $(`.quotes__ball._ball__${currentValue}`).css({"transform": `translateX(0px)`})
    $(`.quotes__ball._ball__${rightValue}`).css({"transform": `translateX(-30px)`})
    $(`.quotes__ball._ball__${leftValue}`).css({"transform": `translateX(30px)`})
    
}
