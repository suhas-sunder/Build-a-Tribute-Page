var slideshow_index=0;
var slide;
var button;
var timer;

//Automatically display slideshow
function slideshow(){
    var i;
    slide = document.getElementsByClassName("quotes");    
    button = document.getElementsByClassName("slideshow-button");    
    
    for (i = 0; i < slide.length; i++) {               
        slide[i].style.display = "none"; //Hide extra slides
    }        
    
    for (i = 0; i < button.length; i++) {
        button[i].classList.remove("button-active"); //Reset button color to white
      } 
      
    slideshow_index++;

    if (slideshow_index > slide.length) {
        slideshow_index = 1
    }       
    
    slide[slideshow_index-1].style.display = "block";  //Show quote    
    button[slideshow_index-1].classList.add("button-active"); //Change button color to blue
    timer = setTimeout(slideshow, 6000); //Change slide every 6 seconds
}

slideshow();

//On button click check input and change slideshow accordingly
function slideSelect(index) {  
    //Reset index if it falls outside of the range of the number of buttons
    if (index > slide.length) {
        index = 1
    }else if(index<1){
        index = slide.length
    }
    
    clearTimeout(timer); //Reset active timer
    slideshow_index = index-1; 
    slideshow();
}

