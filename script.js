$(document).ready(function(){

    $("what1").click(function(){
        $("hide1").slideToggle();
        $("show1").slideToggle();
    });

    $("what2").click(function(){
        $("hide2").slideToggle();
        $("show2").slideToggle();
    });

    $("what3").click(function(){
        $("hide3").slideToggle();
        $("show3").slideToggle();
    });

    $("#submit").click(function(){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
    
        if(name == ""){
          alert("enter your name")
        } 
        else if(email == ""){
          alert("enter your email")
        }
        else if(message == ""){
          alert("write a message")
        }
        else {
         alert(name + " " + "we have received your message. Thank you for reaching out to us.")
        }
      })
    
      $(".proj").hide()
      $(".project").hover(function(){
        $(this).find(".proj").toggle(1000)
      });


});