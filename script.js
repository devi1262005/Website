function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}
        $(document).ready(function () {
            var navbar = $('.navbar');

            $(window).scroll(function () {
                var scrollPosition = $(window).scrollTop();

                if (scrollPosition > 0) {
                    navbar.addClass('scrolled');
                } else {
                    navbar.removeClass('scrolled');
                }
            });
        });