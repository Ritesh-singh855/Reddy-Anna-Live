import { useEffect } from "react";

export const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical images
      const criticalImages = [
        "/images/reddy-anna-live-og.png",
        "/favicon.png"
      ];

      criticalImages.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        document.head.appendChild(link);
      });

      // Preload critical fonts
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
      link.as = "style";
      document.head.appendChild(link);
    };

    // Add resource hints for better performance
    const addResourceHints = () => {
      const hints = [
        { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
        { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
        { rel: "preconnect", href: "https://fonts.googleapis.com", crossorigin: "anonymous" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
      ];

      hints.forEach((hint) => {
        const link = document.createElement("link");
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossorigin) {
          link.crossOrigin = hint.crossorigin;
        }
        document.head.appendChild(link);
      });
    };

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        if (!img.hasAttribute("loading")) {
          img.setAttribute("loading", "lazy");
        }
        if (!img.hasAttribute("decoding")) {
          img.setAttribute("decoding", "async");
        }
      });
    };

    // Add intersection observer for lazy loading
    const setupLazyLoading = () => {
      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                imageObserver.unobserve(img);
              }
            }
          });
        });

        const lazyImages = document.querySelectorAll("img[data-src]");
        lazyImages.forEach((img) => imageObserver.observe(img));
      }
    };

    // Initialize optimizations
    preloadCriticalResources();
    addResourceHints();
    optimizeImages();
    setupLazyLoading();

    // Cleanup function
    return () => {
      // Remove any dynamically added elements if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
