function input1(){

let ft=document.getElementById("ft1");
ft.style.display="block";
let cont=document.getElementById("container1")

cont.style.opacity="0.5";

}

//  function sub(){

// // // let name=document.getElementById("name")
// let head=document.getElementById("head");
//   head.style.visibility="visibility";
// //     cont.style.opacity="0.5";
// //     let ft=document.getElementById("ft1");
// //     ft.style.visibility="visibility";
//  }



function sub(){
    let nam=document.getElementById("name");
let name2=document.getElementById("passord");

    let headvalue=nam.value

       if(headvalue ===""){

           nam.style.borderColor="red";
       }
       else{
              
        nam.style.borderColor="green";

       }
      

       let head1value=name2.value
   
          if(head1value ===""){
   
              name2.style.borderColor="red";
          }
          else{
                 
           name2.style.borderColor="green";
           head();
          }

         

          // head.style.visibility="visible";
       

}



function head(){

    let head=document.getElementById("head");
    // let head=e.head1;

       head.style.visibility="visible";
        cont.style.opacity="0.5";

}
function ok(){
    // let head=document.getElementById("head");
    // let head=e.head1;

    //    head.style.visibility="visibile";
     window.location.reload();

    // alert("its ok")

}


// form.addEventListener("sumit",function(){

//     sumit();
// })

// function sumit(){

//     let nam1=document.getElementById("name");

//     let small=document.getElementsByTagName("small");
    
//     let password=document.getElementById("password");

// let nam1value=nam1.value.trim();
// let passvalue=password.value.trim();



// if(nam1value===""||passvalue===""){
 
//     nam1.style.borderColor="red";
//     small.innerText="error";
//     small.style.color="red";

//     password.style.borderColor="red";
//     small.innerText="error";
//    small.style.color="red";

// }
// else{
//     nam1.style.borderColor="green";
//     password.style.borderColor="green";

// }




 
//  check() ;
    
// }
// function check(){

    
// }