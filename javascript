  
/* title length reduce script */

document.addEventListener("DOMContentLoaded", function () {
  const maxLength = 30;
  const titles = document.querySelectorAll("h2.woocommerce-loop-product__title");

  titles.forEach(function(title) {
    const originalText = title.textContent.trim();

    if (originalText.length > maxLength) {
      const truncated = originalText.slice(0, maxLength) + '...';
      title.textContent = truncated;

      // Optional: show full title on hover
      title.setAttribute("title", originalText);
    }
  });
});


/* title length reduce script */
