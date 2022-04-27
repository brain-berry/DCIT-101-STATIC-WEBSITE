
'use scrict'


const switcher=document.querySelector('.btn');

switcher.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme')

var className = document.body.className;
if ( classssName =="light-theme"){
    this.textContent ="Darkmode"; 
}
else {
    this.textContent = "Lightmode";
}
console.log ('current class name:'+ className);
});
