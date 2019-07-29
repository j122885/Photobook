

document.getElementById("SubmitBtn").addEventListener ("click", function(){ /* clicking the sumbit button causes function to be called */
    var carouselItem = document.getElementById("carouselItem");
    var cloneDiv = carouselItem.cloneNode(true);    /*clones the div node that had id= "carouselItem" and the children inside it. */
    
    var element = document.getElementById("carousel-inner"); 
    element.appendChild(cloneDiv); /* appends the cloned div node to another div with id="carousel-inner" */

    console.log(cloneDiv);

});

