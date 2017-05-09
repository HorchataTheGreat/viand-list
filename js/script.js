// vl-topnote closer code
    topNoteCloseButton = document.getElementById('vl-topnote-closer');
    topNoteBox = document.getElementById('vl-topnote');
    
    topNoteCloseButton.addEventListener("click", function() {
        topNoteBox.classList.add('closed');
    });

//threesteps slider code
    slideIndex = 1;
    showSlide(slideIndex);
    
    function plusDivs(n) {
        showSlide(slideIndex += n);
    }
    
    function showSlide(slideNumber) {
        var slides = document.getElementsByClassName("slides");
        var threeStepsList = document.getElementsByClassName('threeItems');
        
        // If more than number of images go back to first
        if (slideNumber > slides.length) {
            slideIndex = 1;
        }
          //If less than 1 than go to the last slide
        if (slideNumber < 1) {
            slideIndex = slides.length;
        }
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            threeStepsList[i].classList.remove('active');
        }
        
        threeStepsList[slideIndex - 1].classList.add('active');
        slides[slideIndex - 1].style.display = "block";
    }
    
    backButton = document.getElementById('threestepsleft');
    nextButton = document.getElementById('threestepsright');
    
    backButton.addEventListener("click", function() {
      plusDivs(-1);
    });
    nextButton.addEventListener("click", function() {
      plusDivs(1);
    });
    
//Email signup code