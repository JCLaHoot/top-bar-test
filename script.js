
    let fab = document.querySelector("#fab");

    let topBar = document.querySelector(".top-bar");

    fab.addEventListener('click', () => {
        topBar.classList.toggle('compact');
    });


    let currentScrollY = 0;


    let newY;
    let scrollingUp;
    let below120;
    let below60;


   window.addEventListener('scroll', (event) => {
       newY = window.scrollY;
       scrollingUp = newY < currentScrollY;
       below120 = newY > 120;
       below60 = newY > 60;

       if (!below60) {
           topBar.classList.add('full');
           topBar.classList.remove('compact')
       }

       if (below120) {
           topBar.classList.add('past-120');
           topBar.classList.remove('full')
           // topBar.style.top = `${currentScrollY - 120}px`


       }
       else {
           topBar.classList.remove('past-120');

       }

       if(scrollingUp && !below120) {
           topBar.style.transition = null;
       }


       if(scrollingUp && below120) {
           if(!topBar.classList.contains('compact')){
               topBar.style.transition = null;
               setTimeout(() => {
                       topBar.style.transition = 'none';
               }, 1000)
               // topBar.addEventListener('transitionend', () => {
               //     topBar.style.transition = 'none';
               // }, {once: true});
           }
           topBar.classList.add('compact');

           console.log('scrolling up');
       } else  {
           if (below120) {
               topBar.style.transition = null;
               topBar.classList.remove('compact');
           }
       }
       currentScrollY = newY;
   });