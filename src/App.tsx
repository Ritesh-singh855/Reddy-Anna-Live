import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GoogleAnalytics, GoogleSearchConsole } from "@/components/GoogleAnalytics";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { SEO } from "@/components/SEO";

const Sidebar = lazy(() => import("@/components/Sidebar").then(m => ({ default: m.Sidebar })));
const Index = lazy(() => import("./pages/Index"));
const AboutUs = lazy(() => import("./pages/AboutUs").then(m => ({ default: m.AboutUs })));
const ContactUs = lazy(() => import("./pages/ContactUs").then(m => ({ default: m.ContactUs })));
const Casino = lazy(() => import("./pages/Casino").then(m => ({ default: m.Casino })));
const Sports = lazy(() => import("./pages/Sports").then(m => ({ default: m.Sports })));
const LiveMatches = lazy(() => import("./pages/LiveMatches").then(m => ({ default: m.LiveMatches })));
const FAQ = lazy(() => import("./pages/FAQ").then(m => ({ default: m.FAQ })));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy").then(m => ({ default: m.PrivacyPolicy })));
const TermsAndCondition = lazy(() => import("./pages/TermsAndCondition").then(m => ({ default: m.TermsAndCondition })));
const NotFound = lazy(() => import("./pages/NotFound"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton").then(m => ({ default: m.WhatsAppButton })));
const LiveChat = lazy(() => import("@/components/LiveChat").then(m => ({ default: m.LiveChat })));

const queryClient = new QueryClient();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Reddy Anna",
  "alternateName": ["Reddy Anna Live", "reddyanna"],
  "url": "https://www.reddyannalive.in",
  "logo": "https://www.reddyannalive.in/images/reddy-anna-logo.png",
  "foundingDate": "2010",
  "description": "India's #1 cricket betting platform",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8890051287", // Replace with actual phone number if available
    "contactType": "Customer Service",
    "areaServed": "IN",
    "availableLanguage": ["en", "hi"]
  },
  "sameAs": [
    "https://www.instagram.com/reddyannabook_id/",
    "https://www.facebook.com/reddyanna"
  ]
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GoogleAnalytics />
        <GoogleSearchConsole />
        <PerformanceOptimizer />
        <SEO structuredData={[organizationSchema]} />
        <div className="min-h-screen bg-black">
          <Header />
          <Breadcrumb />
          <div className="flex flex-col lg:flex-row lg:min-h-[calc(100vh-4rem)]">
            <Suspense fallback={null}>
              <Sidebar />
            </Suspense>
            <div className="flex-1">
              <Suspense fallback={null}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/casino" element={<Casino />} />
                  <Route path="/sports" element={<Sports />} />
                  <Route path="/live-matches" element={<LiveMatches />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                  <Route path="/termAndCondition" element={<TermsAndCondition />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
          </div>

          <Suspense fallback={null}>
            <WhatsAppButton />
          </Suspense>
          
          <Suspense fallback={null}>
            <LiveChat />
          </Suspense>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
