
    let fab = document.querySelector("#fab");

    let topBar = document.querySelector(".top-bar");

    let interval;

    // action button scrolling event
    fab.addEventListener('click', () => {
        // topBar.classList.toggle('compact');
        window.scrollBy({behavior: "smooth"});

            let goingDown = true;

            if(interval) {
                clearInterval(interval);
                interval = null;
            }
            else {
                interval = setInterval(()=> {
                    if(window.scrollY < 250 && goingDown) {

                        window.scrollBy(0, 1);
                    }
                    else  {
                        goingDown = false;
                        window.scrollBy(0, -1);
                        if (window.scrollY === 0) {
                            goingDown = true;
                        }
                    }
                }, 15);
            }


    });


    //makes the scroll go all the way to the top when "changing pages". Unfortunately the animation isn't very smooth when scrolling fast
    let pageIndicators = Array.from(document.querySelectorAll('.page-nav a'));
    pageIndicators.forEach((indicator) => {
       indicator.addEventListener('click', () => {
           window.scrollTo(0, 0);
       })
    });


    let currentScrollY = 0;


    let newY;
    let scrollingUp;
    let below120;
    let below60;


   // changes top-bar classes depending on scroll position.
   window.addEventListener('scroll', (event) => {
       newY = window.scrollY;
       scrollingUp = newY < currentScrollY;
       below120 = newY > 120;
       below60 = newY > 60;

       // ⚠️ transition between compact top-bar and full top-bar happens here.
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

           }
           topBar.classList.add('compact');

           // console.log('scrolling up');
       } else  {
           if (below120) {
               topBar.style.transition = null;
               topBar.classList.remove('compact');
           }
       }
       currentScrollY = newY;
   });