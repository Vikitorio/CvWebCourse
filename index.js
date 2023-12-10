
skillContent = '<div class="regalias__skills_box"><div class="skills-item"><h2 class="skills-item__title">Languages</h3><ul class="skills-item__list"><li class="skills-item__li">-English:B1</li><li class="skills-item__li">-Ukrainian:Native</li></ul></div><div class="skills-item"><h2 class="skills-item__title">Design</h3><ul class="skills-item__list"><li class="skills-item__li">-Figma</li><li class="skills-item__li">-Photoshop</li><li class="skills-item__li">-CorelDraw</li></ul></div><div class="skills-item"><h2 class="skills-item__title">Programing</h3><ul class="skills-item__list"><li class="skills-item__li">-HTML/CSS/JS</li><li class="skills-item__li">-mySQL</li><li class="skills-item__li">-Python</li></ul></div></div>'

let inventoryFull = false
let skillsFull = false
let regaliasContent = $(".regalias__content")
let regaliasBox = $(".regalias__box")
let currentSlide = $("._slider2")
let leftButtonSlide = $("._slider-left")
let rightButtonSlide = $("._slider-right")

/*slider*/
Quotes = ["Кодіть потрібно правильно, а не правильно не потрібно","Знаю все, окрім того що не знаю","Ти живеш як карта ляже , я живу як мама скаже"]
let currentQuote = 0;
$('.Quotes__slider').on("click", function(){
    console.log("s")
});

console.log(rightButtonSlide)



$('document').ready(function() {
    generateAboutMeTab()
    changeQuoteText()
    generateInventory()
});


function changeQuoteText(){
    console.log(Quotes.length-1)
    if(currentQuote>Quotes.length-1){
        currentQuote-=Quotes.length
    }
    else if(currentQuote<0){
        currentQuote=Quotes.length-1
    }
    currentSlide.text(Quotes[currentQuote])
}





function generateSkills(){
    console.log()
    if (skillsFull == false){
        regaliasBox.empty()
        inventoryFull = false
        regaliasBox.append(skillContent)
        skillsFull = true
}}

function generateInventory(){
    if (inventoryFull == false){
        
        let inventory = $('<div class="regalias__inventory"></div>')
    for (i=0;i<2;i++){
        inventory.append("<div class = 'item_box'><div class='item-caption'>asdasdasd<div/></div>");
    }
    regaliasBox.empty()
    regaliasBox.append(inventory)
    skillsFull = false
    inventoryFull = true
    }
    $(".item_box").hover(function (event){
        let element = $(this);
        console.log('asd')
        let desk = element.find('.item-caption')
        console.log(event.clientX)
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
        
        $('.item_box').click(function() {
            var overlay = $('<div class="overlay"></div>');
            var imageContainer = $('<div class="image-container"></div>');
            var image = $('<img src="шлях_до_зображення.jpg" alt="Зображення">');
            var closeButton = $('<button class="close-button">Закрити</button>');
            imageContainer.append(image);
            imageContainer.append(closeButton);
            overlay.append(imageContainer);
            $('body').append(overlay);
            overlay.click(function() {
                overlay.remove();
            });return false;
        });
    
}

let aboutMeTab = $('.aboutMe')
let examplesTab = $('.examplesTab')
let main = $("main")
let mainContent = $('main').children().clone()
let imagesSiteExamples = ['','']
examplesTab.on('click',()=>{
    generateExamplesTab()
})
function generateExamplesTab(){
    console.log(mainContent)
    main.empty()
    for(key in imagesSiteExamples){
        main.append('<div class = "site-example _box"></div>')
    }
    console.log(mainContent)
    

}
function generateAboutMeTab(){
    main.empty()
    $("main").append(mainContent.clone())
    inventoryFull = false
    skillsFull = false
    regaliasContent = $(".regalias__content")
    regaliasBox = $(".regalias__box")
    currentSlide = $("._slider2")
    leftButtonSlide = $("._slider-left")
    rightButtonSlide = $("._slider-right")
    
    leftButtonSlide.on("click",() => {
        console.log('asdasd')
        currentQuote-=1
    changeQuoteText()})
    rightButtonSlide.on("click",() => {
        currentQuote+=1
    
        changeQuoteText()
    })

    $(".regalias__education").on("click",() => {
        generateInventory()})
    function showDescription(){
        console.log('asd')
        let desk = this.$('.item-caption')
        let x = this.clientX
        let y = this.clientY
        desk.show()
        desk.css({left: x + "px",top: y + "px"})
        
    }
    $(".regalias__skills").on("click",()=>{
        console.log('clear invnt');
        generateSkills()
    
        
    })
    leftButtonSlide.on("click",() => {
    console.log('asdasd')
    currentQuote-=1
changeQuoteText()})
rightButtonSlide.on("click",() => {
    currentQuote+=1

    changeQuoteText()
})
    changeQuoteText()
    generateInventory()
    

}

aboutMeTab.on('click',()=>{
    generateAboutMeTab()
})