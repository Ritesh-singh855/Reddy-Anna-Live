export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        
        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Reddy Anna Live" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@reddyannalive" />
        <meta name="twitter:creator" content="@reddyannalive" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Reddy Anna Live" />
        <meta name="publisher" content="Reddy Anna Live" />
        <meta name="copyright" content="Reddy Anna Live" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://api.whatsapp.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Canonical URL will be set by individual pages */}
      </head>
      <body className="font-serif">
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Reddy Anna Live",
              url: "https://www.reddyannalive.in/",
              logo: "https://www.reddyannalive.in/images/reddy-anna-live-og.png",
              description: "Best online sports betting and casino platform in India. Live cricket betting, casino games, instant payouts.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN"
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                availableLanguage: ["en", "hi"],
                areaServed: "IN",
                url: "https://api.whatsapp.com/send?phone=918890051287"
              },
              sameAs: [
                "https://www.instagram.com/reddyannalive",
                "https://www.facebook.com/reddyannalive",
                "https://x.com/reddyannalive",
                "https://www.youtube.com/reddyannalive"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
