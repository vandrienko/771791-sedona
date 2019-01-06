var link_search = document.querySelector(".button-open-search");     
var form_search = document.querySelector(".search");                
var form = document.querySelector(".search-form");             
var date_arrival = form.querySelector("[name=date-arrival]");           
var date_departure = form.querySelector("[name=date-departure]");            
var map_img = document.querySelector(".map-img");  
var map_img_activ = document.querySelector(".map-img-activ");  

    map_img.classList.add("map-img-hide");
    map_img_activ.classList.add("map-img-show");
    
if (link_search) {
    form_search.classList.add("search-hide");
};

link_search.addEventListener("click", function (evt) {
    evt.preventDefault();
    form_search.classList.toggle("modal-show");  
    form.classList.remove("modal-error");              
});  

form.addEventListener("submit", function (evt) {
    if (!date_arrival.value || !date_departure.value) {   
    evt.preventDefault();               
    form.classList.remove("modal-error");
    form.offsetWidth = form.offsetWidth; 
    form.classList.add("modal-error");
    }  
});
