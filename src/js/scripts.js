(function() {

    var header = document.querySelector('.header__menu');

    function scrollMenu() {
        
        if (scrollY > 50) {
            header.style.height = '70px';
            header.style.background = 'rgba(37, 59, 110, 0.8)';
        } else {
            header.style.height = '100px';
            header.style.background = 'none';
        }
        
    }
    
    window.addEventListener('scroll', scrollMenu, false);
    
    
    var date = new Date();
    var year = date.getFullYear();
    var footerYear = document.querySelector('.year');
    
    footerYear.textContent = year;
    
 })();