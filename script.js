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


    $("#submit").click(function(event){
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
    
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
    
    //   $(".proj").hide()
    //   $(".project").hover(function(){
    //     $(this).find(".proj").toggle(1000)
    //   });
    
    let overlayTotalNumber =(
        $(".overlay").toArray().length
      );
  
      for(let overlayNumber = 1; overlayNumber<=overlayTotalNumber;overlayNumber++){
          $(`#overlay${overlayNumber}`).mouseover(function() {
          $(`#overlay${overlayNumber} > img`).addClass("overlay-effect");
          $(`#work-overlay${overlayNumber}`).toggle();
        }).mouseout(function(){
          $(`#overlay${overlayNumber} > img`).removeClass("overlay-effect");
          $(`#work-overlay${overlayNumber}`).toggle();
        });


});