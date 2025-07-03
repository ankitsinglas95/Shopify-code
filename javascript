  
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



/* speed optimize */

<script>

document.addEventListener("DOMContentLoaded", function () {

  // 1. Lazy load all non-logo images

  document.querySelectorAll("img:not([loading]):not(.no-lazy)").forEach(img => {

    img.setAttribute("loading", "lazy");

    img.decoding = "async";

  });
 
  // 2. Lazy load iframes & videos

  document.querySelectorAll("iframe, video").forEach(media => {

    media.setAttribute("loading", "lazy");

  });
 
  // 3. Lazy load background images using IntersectionObserver

  const lazyBGs = document.querySelectorAll("[data-bg]");

  if ("IntersectionObserver" in window) {

    const bgObserver = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          const el = entry.target;

          el.style.backgroundImage = `url('${el.getAttribute("data-bg")}')`;

          el.removeAttribute("data-bg");

          bgObserver.unobserve(el);

        }

      });

    });

    lazyBGs.forEach(el => bgObserver.observe(el));

  }
 
  // 4. Defer non-critical scripts (skip JSON-LD + Shopify CDN)

  function deferScripts() {

    document.querySelectorAll("script:not([type='application/ld+json']):not([data-critical])").forEach(script => {

      const isShopify = /shopify|cdn\.shopify/.test(script.src);

      if (!script.hasAttribute("defer") && !isShopify) {

        const newScript = document.createElement("script");

        [...script.attributes].forEach(attr => newScript.setAttribute(attr.name, attr.value));

        newScript.defer = true;

        if (!script.src) newScript.innerHTML = script.innerHTML;

        script.replaceWith(newScript);

      }

    });

  }

  if ('requestIdleCallback' in window) {

    requestIdleCallback(deferScripts, { timeout: 300 });

  } else {

    setTimeout(deferScripts, 300);

  }
 
  // 5. Further delay non-essential scripts on mobile only

  if (window.innerWidth <= 768) {

    window.addEventListener("load", () => {

      setTimeout(() => {

        document.querySelectorAll("script[data-mobile-delay]").forEach(script => {

          const s = document.createElement("script");

          if (script.src) s.src = script.src;

          else s.innerHTML = script.innerHTML;

          script.replaceWith(s);

        });

      }, 2000);

    });

  }

});
</script>
 
