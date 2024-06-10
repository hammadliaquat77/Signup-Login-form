function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let user1 = localStorage.getItem('email1');
    let user2 = localStorage.getItem('pass1');

    
    if (email && password ) {

        if (email == user1 && password == user2) {
            window.location.href = "dashbord.html";
        } else {

            Swal.fire({
                text: 'Email and password incorrect!',
              });    
            }

            
    } else {
        
        Swal.fire({
            text: 'Please fill in all fields to login.',
          });    
        }
    }
// }


function sign() {
    window.location.href = 'signup.html'
    

}




function fal() {
    let pas = document.getElementById('password')
    let image =document.getElementById('image')
  
    if (pas.type == 'password') {
      pas.type = 'text'
      image.src = 'img/1.png'
    
    }else{
      pas.type ='password'
      image.src = 'img/2.png'
    }
  }
  
  
