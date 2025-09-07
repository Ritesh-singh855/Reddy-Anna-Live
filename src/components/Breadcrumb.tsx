import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const items: BreadcrumbItem[] = [
      { label: "Home", href: "/" }
    ];

    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      let label = segment;
      switch (segment) {
        case "about-us":
          label = "About Us";
          break;
        case "contact-us":
          label = "Contact Us";
          break;
        case "live-matches":
          label = "Live Matches";
          break;
        case "privacyPolicy":
          label = "Privacy Policy";
          break;
        case "termAndCondition":
          label = "Terms & Conditions";
          break;
        default:
          label = segment.charAt(0).toUpperCase() + segment.slice(1);
      }

      items.push({
        label,
        href: isLast ? undefined : currentPath
      });
    });

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  // Don't show breadcrumb on home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="bg-gray-900 border-b border-gray-800" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
              )}
              {item.href ? (
                <Link
                  to={item.href}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 flex items-center"
                >
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {item.label}
                </Link>
              ) : (
                <span className="text-white font-medium flex items-center">
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
