export default function StructuredData() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Prakash C.",
    "jobTitle": "Clinic Digitalisation Strategist",
    "telephone": "+918884675742",
    "email": "withnextgenai@gmail.com",
    "worksFor": {
      "@type": "Organization",
      "name": "NextGen Tech Hub",
      "url": "https://nxtgentechhub.com/"
    },
    "description": "I’m Prakash C., Founder of NextGen Tech Hub, helping healthcare clinics strengthen their digital presence, improve patient engagement, and implement practical digital growth solutions. With a background in technology, I focus on making digitalisation simple, effective, and accessible for clinic owners.",
    "url": "https://prakashnextgen.com/",
    "sameAs": [
      "https://www.youtube.com/@prakashnextgen",
      "https://www.instagram.com/aiwithnextgen?igsh=MTA2amxkczdqMXk4ag%3D%3D",
      "https://www.facebook.com/",
      "https://my.nxtgentechhub.com/"
    ],
    "knowsAbout": [
      "Clinic Digitalisation",
      "Patient Growth Strategy",
      "Healthcare Digital Marketing",
      "Medical Practice Management Systems",
      "Healthcare Technology Implementation",
      "AI & Automation for Clinics"
    ]
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NextGen Tech Hub",
    "telephone": "+918884675742",
    "email": "withnextgenai@gmail.com",
    "founder": {
      "@type": "Person",
      "name": "Prakash C.",
      "url": "https://prakashnextgen.com/"
    },
    "description": "Empowering healthcare clinics with end-to-end digital solutions, modern web presence, and sustainable patient acquisition strategies.",
    "url": "https://nxtgentechhub.com/",
    "sameAs": [
      "https://www.youtube.com/@prakashnextgen",
      "https://www.instagram.com/aiwithnextgen?igsh=MTA2amxkczdqMXk4ag%3D%3D",
      "https://www.facebook.com/"
    ]
  };

  return (
    <>
      <script
        id="structured-data-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </>
  );
}
