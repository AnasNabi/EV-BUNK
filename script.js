
 // slider steps

$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });
  
  // nav bar sticky
  window.addEventListener('scroll', function(){
    let navbar = document.querySelector('nav');
    if(
       window.pageYOffset >0){
          navbar.classList.add('sticky');
       }
       else{
          navbar.classList.remove('sticky');
       }
    
  });

// preloader
  var loader =document.getElementById("preloader");
  window.addEventListener("load",function(){
      loader.style.display ="none";
  } ) ;  
  
  


  //captcha
 
  function submitUserForm() {
    var recaptcha_response = '';
      if(recaptcha_response.length == 0) {
          document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This captcha is required.</span>';
          return false;
      }
      return true;
  }
   
  function verifyCaptcha(token) {
      recaptcha_response = token;
      document.getElementById('g-recaptcha-error').innerHTML = '';
  }


                                                     