export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Arab Student Association",
    "alternateName": ["ASA UIC", "Arab Student Association UIC"],
    "url": "https://asa-site-theta.vercel.app",
    "logo": "https://asa-site-theta.vercel.app/assets/images/AsaLogo1x1.webp",
    "image": "https://asa-site-theta.vercel.app/assets/images/AsaLogo1x1.webp",
    "description": "Arab Student Association at University of Illinois Chicago empowering students through education, cultural preservation, and community building initiatives.",
    "foundingDate": "2009",
    "memberOf": {
      "@type": "EducationalOrganization",
      "name": "University of Illinois Chicago",
      "url": "https://www.uic.edu"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1200 W Harrison St",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60607",
      "addressCountry": "US"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": "info@arabstudents.org",
        "contactType": "General Information"
      },
      {
        "@type": "ContactPoint",
        "email": "support@arabstudents.org",
        "contactType": "Support"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/asa.at.uic"
    ],
    "numberOfEmployees": "200+",
    "slogan": "Building Bridges, Strengthening Communities",
    "knowsAbout": [
      "Arab culture",
      "Middle Eastern heritage",
      "Student education",
      "Cultural preservation",
      "Community building"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "University of Illinois Chicago"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Arab Student Association UIC",
    "url": "https://asa-site-theta.vercel.app",
    "description": "Official website of the Arab Student Association at University of Illinois Chicago",
    "publisher": {
      "@type": "Organization",
      "name": "Arab Student Association UIC"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://asa-site-theta.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
} 