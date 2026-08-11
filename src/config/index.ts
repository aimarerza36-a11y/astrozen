import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Muhammad Erza Aimar Rizky — Researcher & Program Support",
  author: "Muhammad Erza Aimar Rizky",
  description:
    "Early-career professional with working experience across fields of international trade research, strategic communications in Asia, and sustainable development.",
  lang: "en",
  siteLogo: "/erza-pp.jpg",

navLinks: [
  { text: "Experience", href: "#experience" },
  { text: "Op-eds", href: "#opeds" },
  { text: "Research", href: "#research" },
  { text: "About", href: "#about" },
],

  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/erza-aimar/" },
  ],

  socialImage: "/zen-og.png",
  canonicalURL: "https://erza-aimar.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Muhammad Erza Aimar Rizky",
    specialty: "Researcher & Program Support",
    summary:
      "Early-career professional with working experience across fields of international trade research, strategic communications in Asia, and sustainable development.",
    email: "aimarerza36@gmail.com",
  },
  
 education: [
    {
      institution: "Universitas Indonesia",
      degree: "BA in International Relations",
      period: "August 2022 — Present",
      details: ["Bachelor's thesis: U.S. Trade Policy After the Cold War"],
      logo: "https://www.google.com/s2/favicons?domain=ui.ac.id&sz=64",
    },
    {
      institution: "National Quemoy University",
      degree: "Short-term Study Abroad — International Affairs and Cross-Strait Relations",
      period: "September 2025 — January 2026",
      details: ["Funded by the New Southbound Policy Elite Study Program 2025 Scholarship"],
      logo: "https://www.google.com/s2/favicons?domain=nqu.edu.tw&sz=64",
    },
  ],

  experience: [
    {
      company: "KONEKSI – Australia–Indonesia Knowledge Partnership",
      position: "Strategic Communications & Public Discourse Intern",
      startDate: "March 2026",
      endDate: "May 2026",
      summary: [
        "Supported end-to-end delivery of the Knowledge and Innovation Exchange (KIE) Jakarta Summit 2026.",
        "Produced content briefs and research dissemination materials for national media, websites, and social media.",
        "Supported field monitoring, activity documentation, stakeholder engagement, and reporting across program activities.",
        "Worked with Gender Equality, Disability, and Social Inclusion (GEDSI) frameworks in collaborative research and grant programming.",
      ],
    },

    {
      company: "Centre for Strategic and International Studies (CSIS) Indonesia",
      position: "Research Coder",
      startDate: "November 2025",
      endDate: "Present",
      summary: [
        "Assisting the Collective Violence Early Warning System (VEWS) Dataset.",
        "Collected, verified, coded, and maintained incident-level monitoring data across five Indonesian provinces.",
      ],
    },

    {
      company: "Centre for Strategic and International Studies (CSIS) Indonesia",
      position: "Department of International Relations Intern",
      startDate: "May 2025",
      endDate: "August 2025",
      summary: [
        "Assisted researchers with policy-oriented research, policy advocacy, and policy dissemination efforts.",
      ],
    },

    {
      company: "Center for International Trade Policy, Indonesian Ministry of Trade",
      position: "Analyst Intern",
      startDate: "January 2026",
      endDate: "February 2026",
      summary: [
        "Collected data for bachelor’s thesis research.",
        "Worked with Trade Map and GTAP and supported activities at the Center for International Trade Policy.",
      ],
    },

    {
      company: "Graduate School of Sustainable Development, Universitas Indonesia",
      position: "Research Assistant",
      startDate: "March 2025",
      endDate: "Present",
      summary: [
        "Co-authored a research article published in a Scopus Q1 journal.",
        "Drafted research proposals for research grants.",
        "Supported event management for science conferences.",
      ],
    },

    {
      company: "Australian National University — Coral Bell School of Asia-Pacific Affairs",
      position: "Research Assistant for Doctoral Candidate",
      startDate: "December 2024",
      endDate: "March 2025",
      summary: [
        "Provided technical and editing support for a 90,000-word doctoral thesis.",
        "Conducted quality assurance reviews for ANU Style Guide compliance and technical formatting.",
      ],
    },

    {
      company: "Indonesia Foreign Policy Review",
      position: "Editor-in-Chief",
      startDate: "February 2024",
      endDate: "Present",
      summary: [
        "Led the relaunch of Indonesia Foreign Policy Review as the flagship student academic journal of International Relations UI.",
        "Collaborated with 70+ members across multiple divisions during the journal relaunch and 11th IFPR Conference.",
        "Initiated the journal's first official website in collaboration with the Universitas Indonesia rectorate and Elsevier.",
        "Organized the 11th IFPR Conference with 60+ attendees and 20+ presenters.",
      ],
    },
  ],
 opeds: [
    {
      title: "Migrant Workers and Soft Power",
      publication: "Taipei Times",
      date: "October 2025",
      logo: "https://www.google.com/s2/favicons?domain=taipeitimes.com&sz=64",
    },
    {
      title: "Indonesia’s Homework Ahead of the CPTPP Talks",
      publication: "Stratsea.com",
      date: "August 2025",
      logo: "https://www.google.com/s2/favicons?domain=stratsea.com&sz=64",
    },
   {
      title: "Menakar Isu-Isu Krusial dalam Revisi UU Penyiaran",
      publication: "CSIS Indonesia – Commentaries",
      date: "October 2025",
      logo: "https://www.google.com/s2/favicons?domain=csis.or.id&sz=64",
    },
    {
      title: "Peran WTO di Tengah Ketidakpastian",
      publication: "Pikiran Rakyat",
      date: "July 2025",
      logo: "https://www.google.com/s2/favicons?domain=pikiran-rakyat.com&sz=64",
    },
    {
      title: "Waspada Kebijakan Dagang Tergesa-gesa",
      publication: "Media Indonesia",
      date: "July 2025",
      logo: "https://www.google.com/s2/favicons?domain=mediaindonesia.com&sz=64",
    },
  ],

  research: [
    {
      title:
        "Pop Goes the Identity: Tzuyu’s Return Concert and the Negotiation of Taiwanese Identity",
      publication: "Global Taiwan Brief, Global Taiwan Institute (Washington D.C.)",
      date: "February 2026",
    },
    {
      title:
        "Environmental Behavior Driving Household E-Waste Recycling in Emerging Urban Contexts",
      publication: "Environments (Q1), Vol. 13 No. 4",
      date: "April 2025",
    },
    {
      title:
        "The Emerging Trend of 'Green' Resource Nationalism: Lessons from Latin America",
      publication: "Global South Forum, FOSS UIII & LSE Global South Unit",
      date: "May 2025",
    },
    {
      title: "Tipping the Scale: China’s Disruption of U.S. AI Leadership",
      publication: "IIS Fortnightly Review, Institute of International Studies, UGM",
      date: "January 2025",
    },
  ],

  awards: [
    {
      title: "3rd Winner of National Infographic Competition",
      organization:
        "EU · EUforia Wiki4Trade, Wikimedia Indonesia & Delegation of the European Union to Indonesia",
      date: "November 2025",
      flag: "🇪🇺",
    },
    {
      title:
        "New Southbound Policy Elite Study Program 2025 Scholarship Awardee",
      organization:
        "TW · Ministry of Foreign Affairs, Republic of China (Taiwan)",
      date: "July 2025",
      flag: "🇹🇼",
    },
    {
      title:
        "2nd Winner of Social Science and Humanities Research Proposal Competition (PKM-RSH)",
      organization:
        "ID · Universitas Indonesia Student Science Olympiad 2024",
      date: "November 2024",
      flag: "🇮🇩",
    },
    {
      title: "1st Winner of CASE for Southeast Asia National Essay Competition",
      organization:
        "ID · Indonesian National Development Planning Agency & DE · GIZ GmbH",
      date: "August 2024",
      flag: "🇮🇩 🇩🇪",
    },
  ],
  
  about: {
    description: `
      I research Asia-Pacific affairs and help bridge academic research into public discourse.
  
      My previous writing has been featured in academic journals, international think tanks, and regional media.
  
      <span class="block mt-6">See my work on <a href="https://www.linkedin.com/in/erza-aimar/" target="_blank" rel="noopener noreferrer" class="text-[#2f6b3f] underline underline-offset-4 hover:text-[#255632]">LinkedIn</a>, <a href="https://scholar.google.com/citations?hl=id&user=Fa09tToAAAAJ" target="_blank" rel="noopener noreferrer" class="text-[#2f6b3f] underline underline-offset-4 hover:text-[#255632]">Google Scholar</a>, and <a href="https://erza.substack.com/" target="_blank" rel="noopener noreferrer" class="text-[#2f6b3f] underline underline-offset-4 hover:text-[#255632]">Substack</a>.
    `,
    image: "/erza-pp.jpg",
  },
};
