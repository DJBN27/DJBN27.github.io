
let slideIndex = 0;
let slide = document.querySelectorAll('.slide-fade');
let slideLength = slide.length;
function showSlide(){
    //Display current slide
    slide[slideIndex].classList.add('prev');
    slide[slideIndex].classList.remove('active');

    slideIndex = (slideIndex + 1) % slideLength;
    
    //Display new slide
    slide[slideIndex].classList.remove('prev');
    slide[slideIndex].classList.add('active');  
}
document.addEventListener('DOMContentLoaded', function(){
    //display the first slide 
    slide[0].classList.add('active');
    
    //Switch slide every 4 secs
    setInterval(()=>{
        showSlide();
    }, 4000);
});

//control function
document.querySelectorAll('.control-header').forEach(header =>{
    header.addEventListener('click', ()=>{
        let content = header.nextElementSibling;
        let icon = header.querySelector('.fa-chevron-down');

        header.classList.toggle('active');  
        if(header.classList.contains('active')){
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.style.transform = 'rotate(180deg)';
        } else {
            content.style.maxHeight = 0;
            icon.style.transform = 'rotate(0deg)';
        }
    });
});
