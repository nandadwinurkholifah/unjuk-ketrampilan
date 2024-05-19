function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

if ($(".text-slider").length == 1) {
  var typed_strings = $(".text-slider-items");
  var typed = new Typed(".text-slider", {
      strings: typed_strings.toArray().map(item => item.textContent),
      typeSpeed: 80,
      loop: true,
      backDelay: 1000,
      backSpeed: 30,
  });
}

// filter menu
$(document).on('click','.project-filter li', function () {
  $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active')
});

// for project filter
$(document).ready(function () {
  $('.list').click(function () {
    const value = $(this).data('filter');
    if (value == 'all') {
      $('.project-box').show('1000');
    } else {
      $('.project-box').not('.' +value).hide('1000');
      $('.project-box').hide('1000').filter('.' + value).show('1000');
    }
  });
});

//lightbox
const portfolioLightbox = GLightbox({
  selector: '.project-box'
});

// Pindahkan deskripsi ke samping kanan
const descriptions = document.querySelectorAll('.glightbox-desc');
  descriptions.forEach(description => {
  description.style.maxWidth = '50%';
  description.style.float = 'right';
  description.style.marginLeft = '20px';
});

