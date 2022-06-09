const toggleButton = document.getElementById('toggleb');
let navList = document.getElementById('nav-list');

toggleButton.addEventListener('click', ()=>{
    if (navList.classList.contains('nav-list')){
        navList.classList.remove('nav-list');
        navList.classList.remove('c');
        navList.classList.add('b');
    }
    else{
        navList.classList.remove('b');
        navList.classList.add('c');
        navList.classList.add('nav-list');
    }
})