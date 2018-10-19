
    let fab = document.querySelector("#fab");

    let topBar = document.querySelector(".top-bar");

    fab.addEventListener('click', () => {
        topBar.classList.toggle('compact');
    });


    let currentScrollY = 0;




   window.addEventListener('scroll', (event) => {
       let newY = window.scrollY;
       let scrollingUp = newY < currentScrollY;
       let below120 = newY > 120;

       if (below120) {
           topBar.classList.add('past-120');
       }
       else {
           topBar.classList.remove('past-120');
           topBar.classList.remove('compact');

       }


       if(scrollingUp) {
           console.log('scrolling up');
           if(below120) {
               topBar.classList.add('compact');
           }
       } else  {
           topBar.classList.remove('compact');

       }
       currentScrollY = newY;
   });