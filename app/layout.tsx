import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Outsource Your Tasks — Global Staffing for Growing Companies",
  description:
    "OYT is a boutique global staffing firm that finds, screens, and delivers top talent — offshore, nearshore, or US local. One flat fee. 12-month warranty.",
  keywords: [
    "offshore staffing",
    "nearshore talent",
    "global staffing agency",
    "boutique recruiting",
    "flat fee recruiting",
    "video interview staffing",
    "virtual assistant placement",
    "remote talent acquisition",
  ],
  openGraph: {
    title: "Outsource Your Tasks — Global Staffing for Growing Companies",
    description:
      "We find world-class global talent. You just choose the best fit.",
    url: "https://outsourceyourtasks.com",
    siteName: "Outsource Your Tasks",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://outsourceyourtasks.com/#organization",
      name: "Outsource Your Tasks",
      url: "https://outsourceyourtasks.com",
      logo: "https://outsourceyourtasks.com/brand/logo-black.png",
      description:
        "Boutique global staffing firm specializing in offshore, nearshore, and US local talent placement with a flat fee model and 12-month replacement warranty.",
      areaServed: "Worldwide",
      serviceType: [
        "Offshore Staffing",
        "Nearshore Talent Placement",
        "Global Recruiting",
        "Virtual Assistant Placement",
        "Remote Talent Acquisition",
      ],
      sameAs: [
        "https://www.linkedin.com/company/outsource-your-tasks",
        "https://www.facebook.com/outsourceyourtasks",
        "https://www.instagram.com/outsourceyourtasks",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        url: "https://outsourceyourtasks.com/contact-us",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://outsourceyourtasks.com/#website",
      url: "https://outsourceyourtasks.com",
      name: "Outsource Your Tasks",
      publisher: { "@id": "https://outsourceyourtasks.com/#organization" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://outsourceyourtasks.com/#service",
      name: "Outsource Your Tasks",
      description:
        "We find, screen, and video-interview top global talent so growing companies can hire the right person faster, for less.",
      provider: { "@id": "https://outsourceyourtasks.com/#organization" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Global Staffing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Offshore Talent Placement",
              description:
                "Sourcing and placing pre-vetted offshore candidates with recorded video interviews and DISC profiles.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Nearshore Talent Placement",
              description:
                "Recruiting nearshore talent from Latin America with bilingual English and Spanish capabilities.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "US Local Talent Placement",
              description:
                "Flat-fee US local hiring with the same rigorous video screening and candidate vetting process.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
