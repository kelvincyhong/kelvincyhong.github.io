$(document).ready(function(){
    
    $(function(){
        $(".clearfix > a").click(function(){
            $(".clearfix > a").removeClass("active");
            console.log("removed class");
            $(this).addClass("active");
            console.log("added active class");

        });
    });
    
    
    
    
    
    
    
    
    
    
    
    
    /*
    // Get the container element
    var navContainer = document.getElementById("navigation");
    // Get all buttons with class="btn" inside the container
    var navElements = navContainer.getElementsByClassName("navItem");

    // Loop through the buttons and add the active class to the current/clicked button
    document.onload()
    for (var i = 0; i < navElements.length; i++) {

        navElements[i].addEventListener("click", function() {
            var current = document.getElementById("active");
            current.id = current.id.replace("active", "");
            this.id = "active";
        });
    }
    */

});


