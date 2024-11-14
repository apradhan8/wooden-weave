// Granim Js for gradient background

var granimInstance = new Granim({
    element: '#granim-canvas',
    name: 'granim',
    opacity: [1, 1],
    states: {
        "default-state": {
            gradients: [
                ['#FF7E5F', '#FEB47B', '#FFD27F', '#FF9A8B'],  // Sunset Orange-Pink
                ['#FF9A8B', '#FF6A88', '#FF758C', '#FF7EB3']   // Warm Pink to Soft Magenta
            ],
            transitionSpeed: 5000,
            loop: true
        },
        "dark-state": {
            gradients: [
                ['#4E54C8', '#8F94FB', '#FF758C', '#FEB47B'],  // Twilight Blues to Sunset
                ['#355C7D', '#6C5B7B', '#C06C84', '#F67280']   // Deep Blue to Warm Coral
            ],
            transitionSpeed: 5000,
            loop: true
        }
    }
});


// GSAP FOR BUTTON SHINE EFFECT
const shineButtons = document.querySelectorAll('.button-shine');

shineButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            duration: 0.2,
            '--shine-position': '200%', 
            '--opacity': '100',
            ease: "power2.inOut"

        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            duration: 0.2,
            '--shine-position': '-200', 
            '--opacity': '0',
            ease: "power2.inOut"
        });
    });
});


// Vanilla Tilt for Hero image
VanillaTilt.init(document.querySelectorAll('.imagebox'), {
    max: 25,            // Maximum tilt angle
    speed: 400,         // Speed of the tilt effect
    glare: true,        // Enable glare effect
    'max-glare': 0.9    // Maximum glare intensity (range from 0 to 1)
});


// Sweet Alert for Product pop-up message
document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.productflexcontainer');

    products.forEach(item => {
        const overlay = item.querySelector('.out-of-stock-overlay');
        const okButton = item.querySelector('.ok-button');

        // Show overlay on product click
        item.addEventListener('click', function () {
            // Show the overlay on the clicked product
            overlay.style.display = 'flex';
        });

        // Close overlay when "OK" button is clicked
        okButton.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent click event from bubbling up
            overlay.style.display = 'none'; // Hide the overlay
        });
    });

    // Close overlay when clicking outside any product (but not on overlay or button)
    document.addEventListener('click', function (event) {
        const clickedInsideProduct = event.target.closest('.productflexcontainer');
        const clickedOverlayOrButton = event.target.closest('.out-of-stock-overlay, .ok-button');
        
        // If the click is outside the product container and not on the overlay/button
        if (!clickedInsideProduct && !clickedOverlayOrButton) {
            document.querySelectorAll('.out-of-stock-overlay').forEach(overlay => {
                overlay.style.display = 'none';
            });
        }
    });
});

// Textillate.js for h1 and p 
$(document).ready(function() {
    // Animate h1 first
    $('.textbox h1').textillate({
        loop: false, // Disable looping for heading
        minDisplayTime: 2000, // Set minimum display time for each text
        initialDelay: 0, // No initial delay
        autoStart: true, // Start animation automatically
        inEffects: [], // Custom in effects (empty array in this case)
        outEffects: ['hinge'], // Custom out effect
        in: {
            effect: 'fadeInLeftBig', // Animation effect for h1
            delayScale: 1.5,
            delay: 50,
            sync: false, // Don't animate characters at the same time
            shuffle: false, // Don't randomize character sequence
            reverse: false,
            callback: function() {
                // When h1 animation is complete, start p animation
                $('.textbox p').textillate('in'); // Trigger animation for p
            }
        },
        out: {
            effect: 'hinge', // Animation effect for h1 (out)
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false
        },
        callback: function() {}, // Callback when animation is done
        type: 'char' // Animate by character
    });

    // Textillate.js for p inside .textbox
    $('.textbox p').textillate({
        loop: false, // Disable looping for paragraph
        minDisplayTime: 2000,
        initialDelay: 1000,
        autoStart: true, // Do not start the animation automatically
        inEffects: [], // Empty in effects for now
        outEffects: ['hinge'],
        in: {
            effect: 'fadeInLeftBig', // Animation effect for p
            delayScale: 1.5,
            delay: 200,
            sync: false,
            shuffle: false,
            reverse: false,
            callback: function() {}
        },
        out: {
            effect: 'hinge', // Animation effect for p (out)
            delayScale: 1.5,
            delay: 100,
            sync: false,
            shuffle: false,
            reverse: false,
            callback: function() {}
        },
        callback: function() {}, // Callback when paragraph animation is done
        type: 'char' // Animate by character
    });
});
