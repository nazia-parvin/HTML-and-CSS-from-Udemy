document.addEventListener('DOMContentLoaded', function(){
    const header = document.querySelector('.header');
    
    // console.log(header);
    function toggleHeaderTransparency(){
        // console.log(123);
        // console.log(window.scrollY)
        if (scrollY > 0){
            header.classList.add('transparent');
        }
        else{header.classList.remove('transparent')}
    }
    window.addEventListener('scroll', toggleHeaderTransparency)
});