import { useEffect } from "react";

// Google Analytics configuration
const GA_TRACKING_ID = "G-XXXXXXXXXX"; // Replace with your actual GA4 tracking ID

export const GoogleAnalytics: React.FC = () => {
  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);

    // Track page views on route changes
    const handleRouteChange = () => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true,
        });
      }
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return null;
};

// Google Search Console verification meta tag
export const GoogleSearchConsole: React.FC = () => {
  useEffect(() => {
    // Add Google Search Console verification meta tag
    const meta = document.createElement("meta");
    meta.name = "google-site-verification";
    meta.content = "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE"; // Replace with your actual verification code
    document.head.appendChild(meta);

    return () => {
      const existingMeta = document.head.querySelector('meta[name="google-site-verification"]');
      if (existingMeta) {
        document.head.removeChild(existingMeta);
      }
    };
  }, []);

  return null;
};

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default GoogleAnalytics;
