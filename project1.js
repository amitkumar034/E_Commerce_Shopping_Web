// let apple=function(a,b){
//     return a*b;
// }
// let sum =apple(20,34);
// console.log (${sum} );   // anonymous function expression

var sidenav=document.getElementById('sidenav');
var menubar=document.getElementById('menubar');
sidenav.style.width="0px";
menubar.onclick=function(){
  if(sidenav.style.width=="0px"){
    sidenav.style.width="250px";
  }
  else{
    sidenav.style.width="0px";
  }
}