/* Les différents sélecteurs JQuery:

* sélection par la balise html : $("li")
* sélection par la class : $(".hidden")
* sélection par l'id : $("#title")
* sélection par l'attribut : 
    - si l'attribut est présent: $("[href]")
    - si l'attribut a une valeur donnée: $("[href = 'index.html']")
etc.
*/

$(document).ready(function (){


    //1. Sélectionner le titre du blog : "John's Blog".
    //$("[id='title']").hide();
    $("[id='title']").addClass("test");
    //$("h4").addClass("test");
    //$("h4#title").addClass("test");


    // 2. Sélectionner tous les éléments du side-menu de gauche.
    $("[class = 'col-sm-3 sidenav']").addClass("test");
    //$(".sidenav").addClass("test");

    // 3. Sélectionner le footer
    //$("footer").addClass("test");
    $("footer").hide();

    // 4. Sélectionner la barre de recherches
    $(".input-group").hide();

    }

)
