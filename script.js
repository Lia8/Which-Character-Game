$(".submit").click(function() {
 let species = $(".species").val();
     let age = $(".age").val();
    if(species === "vampire" && age>100){
     $(".quiz-answers").append("<p> You are acient!" + "</p>");    
    }
   else if(species === "vampire" && age<100){
   $(".quiz-answers").append("<p> You are still so young" + "</p>");   
   }
     else if(species === "werewolf" && age<100){
   $(".quiz-answers").append("<p> You such a lil wolfie" + "</p>");   
   }
      else if(species === "werewolf" && age>100){
   $(".quiz-answers").append("<p> You're most likely the chief of your pack " + "</p>");   
   }
      else if(species === "hybrid" && age>100){
   $(".quiz-answers").append("<p> You're the one of the oldest of your kind so far!" + "</p>");   
   }
      else if(species === "hybrid" && age<100){
   $(".quiz-answers").append("<p> You are a new born" + "</p>");   
   }
});



