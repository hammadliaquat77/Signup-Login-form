
function register() {
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let password = document.getElementById('pass').value

  if (name && email  && password ) {


    localStorage.setItem('name1', name);
    localStorage.setItem('email1', email);
    localStorage.setItem('pass1', password);

    window.location.href = 'login.html'
    alert('Thanks for Signup!')

  } else {
    Swal.fire({
      text: 'Please fill in all fields to register.',
    });    
  }
}




function logn() {
  window.location.href = 'login.html'

}



function pass() {
  let pas = document.getElementById('pass')
  let image =document.getElementById('image')

  if (pas.type == 'password') {
    pas.type = 'text'
    image.src = 'img/1.png'
  
  }else{
    pas.type ='password'
    image.src = 'img/2.png'
  }
}

























// function register() {
//   let name = document.getElementById('name').value
//   let email = document.getElementById('email').value
//   let password = document.getElementById('pass').value
  
//   let store1 = localStorage.setItem('name1', name);
//   let store2 = localStorage.setItem('email1', email);
//   let store3 = localStorage.setItem('pass1', password);

//   if (name == store1 && email == store2 && password == store3 ) {


//     window.location.href = 'login.html'
//  alert('Thanks for Signup!')


//   } else {
//     Swal.fire({
//       text: 'Please fill in all fields to register.',
//     });    
//   }
// }


// function sign() {
//   window.location.href = 'signup.html'

// }


// function logn() {
//   window.location.href = 'login.html'

// }



// function pass() {
//   let pas = document.getElementById('pass')
//   let image =document.getElementById('image')

//   if (pas.type == 'password') {
//     pas.type = 'text'
//     image.src = 'img/1.png'
  
//   }else{
//     pas.type ='password'
//     image.src = 'img/2.png'
//   }
// }

























