

/* Gave me errors that element_node is not a function..it isn't, created a div but in the end var node was irrelevant */
document.getElementById("SubmitBtn").addEventListener ("click", function(){
    var diva = document.createElement("div");
    var node =document.ELEMENT_NODE("div");
    diva.appendChild(node);

    var element = document.getElementById("carousel-inner");
    element.appendChild("diva");
    
});

/* Almost there -copies the div*/
document.getElementById("SubmitBtn").addEventListener ("click", function(){
    var carouselItem = document.getElementById("carousel-item");
    var cloneDiv = carousel-item.cloneNode(true);

});
/* This code works but would take a long time to add each and every element */
document.getElementById("SubmitBtn").addEventListener ("click", function(){
    var diva = document.createElement("div");
    var img = document.createElement("img");
    diva.appendChild(img);

    var element = document.getElementById("carousel-inner");
    element.appendChild(diva);
    console.log(diva);
    
});
/* Final code for copying the entire div node with its children and appending it to another div */
document.getElementById("SubmitBtn").addEventListener ("click", function(){
    var carouselItem = document.getElementById("carouselItem");
    var cloneDiv = carouselItem.cloneNode(true);
    
    var element = document.getElementById("carousel-inner");
    element.appendChild(cloneDiv);

    console.log(cloneDiv);

});