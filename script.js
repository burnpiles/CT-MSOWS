// Main JavaScript for MSOWS Website
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing functionality...');
  
  // Initialize all functionality
  initCountdownTimer();
  initFAQAccordion();
  initSmoothScrolling();
  initButtonEffects();
});

// Countdown Timer Functionality
function initCountdownTimer() {
  console.log('Initializing countdown timer...');
  
  const eventDate = new Date('November 2, 2025 00:01:00').getTime();
  const countdownNumbers = document.querySelectorAll('.countdown-number');
  
  if (countdownNumbers.length === 0) {
    console.log('No countdown elements found');
    return;
  }
  
  console.log('Found countdown elements:', countdownNumbers.length);
  
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Update the countdown display
      if (countdownNumbers.length >= 4) {
        countdownNumbers[0].textContent = days;
        countdownNumbers[1].textContent = hours;
        countdownNumbers[2].textContent = minutes;
        countdownNumbers[3].textContent = seconds;
      }
    } else {
      // Event has passed
      const countdownTimer = document.querySelector('.countdown-timer');
      if (countdownTimer) {
        countdownTimer.innerHTML = '<span class="countdown-number">Event Started!</span>';
      }
    }
  }
  
  // Update immediately and then every second
  updateCountdown();
  setInterval(updateCountdown, 1000);
  
  console.log('Countdown timer initialized successfully');
}

// FAQ Accordion Functionality
function initFAQAccordion() {
  console.log('Initializing FAQ accordion...');
  
  const faqItems = document.querySelectorAll('.faq-item');
  const faqToggles = document.querySelectorAll('.faq-toggle');
  
  if (faqItems.length === 0) {
    console.log('No FAQ items found');
    return;
  }
  
  console.log('Found FAQ items:', faqItems.length);
  
  // Add click event to toggle buttons
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const faqItem = this.closest('.faq-item');
      const isActive = faqItem.classList.contains('active');
      
      console.log('FAQ toggle clicked, current state:', isActive);
      
      // Close all FAQ items
      faqItems.forEach(item => {
        item.classList.remove('active');
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        faqItem.classList.add('active');
        console.log('FAQ item opened');
      }
    });
  });
  
  // Add click event to question text as well
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', function(e) {
      if (e.target.tagName !== 'BUTTON') {
        const toggle = this.querySelector('.faq-toggle');
        if (toggle) {
          toggle.click();
        }
      }
    });
  });
  
  console.log('FAQ accordion initialized successfully');
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('.header-nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // CTA button scroll to tickets
  const ctaButtons = document.querySelectorAll('.header-cta, .hero-button, .final-cta-button');
  ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const ticketsSection = document.getElementById('tickets');
      if (ticketsSection) {
        ticketsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Button Hover Effects
function initButtonEffects() {
  const buttons = document.querySelectorAll('.btn, .header-cta, .hero-button, .pricing-button, .schedule-button, .final-cta-button, .speakers-button');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

// Video Play Functionality
function playVideo() {
  const videoFrame = document.getElementById('videoFrame');
  if (videoFrame) {
    // Replace with a simple iframe approach first to test
    videoFrame.innerHTML = `
      <iframe 
        src="https://fast.wistia.com/embed/medias/yxlod43xob" 
        title="Alex Ramon Video" 
        allowtransparency="true" 
        frameborder="0" 
        scrolling="no" 
        class="wistia_embed" 
        name="wistia_embed" 
        allowfullscreen 
        mozallowfullscreen 
        webkitallowfullscreen 
        oallowfullscreen 
        msallowfullscreen 
        width="100%" 
        height="100%">
      </iframe>
    `;
    
    console.log('Video play function executed - using iframe approach');
  }
}

// Speakers Toggle Functionality
function toggleSpeakers() {
  const expandedSection = document.getElementById('speakersExpanded');
  const button = document.querySelector('.speakers-button');
  
  if (expandedSection.style.display === 'none' || expandedSection.style.display === '') {
    expandedSection.style.display = 'block';
    button.textContent = 'Show Less Speakers';
  } else {
    expandedSection.style.display = 'none';
    button.textContent = 'View All Speakers';
  }
} 