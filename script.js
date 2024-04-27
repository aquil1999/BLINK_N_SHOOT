// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Activate carousel for testimonials
    var carouselTestimonials = new bootstrap.Carousel(document.getElementById('carouselTestimonials'), {
        interval: 5000, // Adjust the interval as needed
        pause: "hover"
    });

    // Custom next button for testimonials
    var nextTestimonialBtn = document.querySelector('#testimonials .carousel-control-next');
    nextTestimonialBtn.addEventListener('click', function () {
        carouselTestimonials.next();
    });

    // Custom previous button for testimonials
    var prevTestimonialBtn = document.querySelector('#testimonials .carousel-control-prev');
    prevTestimonialBtn.addEventListener('click', function () {
        carouselTestimonials.prev();
    });
});
