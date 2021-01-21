var slideshow_index=0;
var slide;
var button;
var timer;

//Automatically display slideshow
function slideshow(){
    var i;
    slideshow_index++;
    slide = document.getElementsByClassName("quotes");    
    button = document.getElementsByClassName("slideshow-button");    
    
    for (i = 0; i < slide.length; i++) {               
        slide[i].style.display = "none"; //Hide extra slides
    }        
    
    for (i = 0; i < button.length; i++) {
        button[i].classList.remove("button-active"); //Reset button color to white
      }      
    
    if (slideshow_index > slide.length) {
        slideshow_index = 1; //Reset index if it goes over the number of buttons available
    }       
    
    slide[slideshow_index-1].style.display = "block";  //Show quote    
    button[slideshow_index-1].classList.add("button-active"); //Change button color to blue
    timer = setTimeout(slideshow, 6000); //Change slide every 6 seconds
}

slideshow();

//On button click switch to the slideshow that matches the button.
function slideSelect(index) {        
    slideshow_index = index-1;
    clearTimeout(timer); //Reset active timer
    slideshow();
}

