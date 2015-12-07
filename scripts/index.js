//instructions:

// Write a script that , when you click on the button,
// adds a new fox RANDOM image to the container div.
// All foxes should be floated.  Make another button to remove all foxes.

// Stretch:   Make several buttons that change the way the foxes are
// added and displayed.  Example:  a new add button would change all
// to display: block in the existing dom and add a new random fox which is
// also display: block.  Hit the display float button and they all change
// back to float and it adds a new floated random fox.

$("#trigger").click(function(){
    var link = "";
    var rand = Math.random();
    if (rand < .33){
      link = collection["images"][0]["image_src"]
    }
    else if (rand > .33 && rand < .66){
      link = collection["images"][1]["image_src"]
    }
    else if (rand > .66){
      link = collection["images"][2]["image_src"]
    }
    $("#container").append("<img class='foxes' src=" + link +">")
  });

$("#block").click(function(){
  $(".foxes").css("display","block");
});

$("#inline").click(function(){
  $(".foxes").css("display","inline");
})
