import Section from "./Section";
import ClientLogos from "./ClientLogos";
import StatisticsSection from "./StatisticsSection";
import OurProcess from "./OurProcess";

// GlassServices
import heraSt from "./homeImages/commercialGlassAluminium/heraSt.jpg";
import photo from "./homeImages/commercialGlassAluminium/photo.jpeg";
import photo2 from "./homeImages/commercialGlassAluminium/photo2.jpg";
import photoMainGlassServices from "./homeImages/commercialGlassAluminium/photoMainGlassServices.jpg";
import walkIn from "./homeImages/commercialGlassAluminium/walkIn.jpg";

import residentialGlassPhoto1 from "./homeImages/residentialGlass/residentialGlassPhoto1.jpg";
import residentialGlassPhoto2 from "./homeImages/residentialGlass/residentialGlassPhoto2.jpg";
import residentialGlassPhoto3 from "./homeImages/residentialGlass/residentialGlassPhoto3.jpg";
import residentialGlassPhoto4 from "./homeImages/residentialGlass/residentialGlassPhoto4.jpg";
import photoMainResidentialGlass from "./homeImages/residentialGlass/photoMainResidentialGlass.jpg";

import mirror1 from "./homeImages/mirrors/photo1.jpg";
import mirror2 from "./homeImages/mirrors/photo2.jpg";
import mirror3 from "./homeImages/mirrors/photo3.jpg";
import mirror4 from "./homeImages/mirrors/photo4.jpg";
import mirrorMain from "./homeImages/mirrors/photoMain.jpg";

// IT Section
import ItPhoto1 from "./homeImages/itSection/ItPhoto1.jpg";
import ItPhoto2 from "./homeImages/itSection/ItPhoto2.jpg";
import ItPhoto3 from "./homeImages/itSection/ItPhoto3.jpg";
import ItPhoto4 from "./homeImages/itSection/ItPhoto4.jpg";
import ItPhoto5 from "./homeImages/itSection/ItPhoto5.jpg";
import ItPhoto6 from "./homeImages/itSection/ItPhoto6.jpg";
import ItPhoto7 from "./homeImages/itSection/ItPhoto7.jpg";
import ItPhoto8 from "./homeImages/itSection/ItPhoto8.jpg";
import ItPhoto9 from "./homeImages/itSection/ItPhoto9.jpg";

// Background images
import bg1 from "./homeImages/background/GlassServices.webp";
import bg2 from "./homeImages/background/ItSolutions.webp";
import bg3 from "./homeImages/background/CivilWork.webp";

export default function Home() {

    const styles = {
        container: {
            maxWidth: "1300px",
            margin: "40px auto",
            padding: "20px",
            width: "100%",
            boxSizing: "border-box",
        }
    };

    // ======================================================
    // GALLERY SECTION WITH FULL WORKING EXAMPLES (Glass Work)
    // ======================================================
    const glassWork = [
        {
            name: "Commercial Glass & Aluminum",
            img: photoMainGlassServices,
            gallery: [heraSt, photo, photo2, walkIn]
        },
        {
            name: "Residential Glass",
            img: photoMainResidentialGlass,
            gallery: [
                residentialGlassPhoto1,
                residentialGlassPhoto2,
                residentialGlassPhoto3,
                residentialGlassPhoto4,
            ]
        },
        {
            name: "Mirrors",
            img: mirrorMain,
            gallery: [mirror1, mirror2, mirror3, mirror4]
        }
    ];

    // ======================================================
    // LEARN MORE SECTION (IT Services)
    // ======================================================
    const itServices = [
        {
            img: ItPhoto1,
            name: "Mobile App Development",
            description: "Cross-platform and native mobile apps with cutting-edge technologies for iOS and Android platforms.",
            details:
                "We specialize in creating high-performance mobile applications using Flutter, React Native, and native technologies \
            (Swift/Kotlin). Our apps are optimized for performance, security, and user experience. We follow agile development \
            methodologies to deliver robust solutions that scale with your business needs. From concept to deployment, \
            we handle everything including UI/UX design, API integration, testing, and App Store submission."
        },
        {
            img: ItPhoto2,
            name: "Web Development",
            description: "Modern web applications with React, Angular, or Vue.js with responsive design and optimal performance.",
            details:
                "Our web development services include single-page applications, progressive web apps, and traditional web applications. \
             We focus on responsive design, accessibility, and SEO-friendly architectures. We use modern frameworks like \
              Next.js, Nuxt.js, and Gatsby for optimal performance. Our full-stack solutions include backend \
               development with Node.js, Django, or .NET Core, and database design with PostgreSQL, MongoDB, or Firebase."
        },
        {
            img: ItPhoto3,
            name: "Windows App Development",
            description: "Powerful desktop applications using WPF, WinForms, or UWP for Windows platforms.",
            details: "Technologies: .NET Core, Electron JS, C#, Windows SDK."
        },
        {
            img: ItPhoto4,
            name: "SEO Services",
            description: "Optimize your search engine presence and increase organic traffic to your website.",
            details:
                "Our comprehensive SEO services include technical SEO audits, on-page optimization, content strategy, \
            and link building. We use advanced tools like SEMrush and Ahrefs to analyze your competition and identify high-value \
            keywords. Our white-hat techniques focus on long-term growth, including schema markup implementation, site speed \
            optimization, and mobile-first indexing. We provide monthly reports with actionable insights and measurable results."
        },
        {
            img: ItPhoto5,
            name: "Digital Marketing",
            description: "Grow your brand with multi-platform campaigns across social media, email, and search engines.",
            details:
                "Our digital marketing strategies combine paid advertising (Google Ads, Facebook Ads), \
            content marketing, and social media management. We create data-driven campaigns with precise audience \
            targeting and conversion tracking. Services include marketing automation setup, email campaign design, \
            influencer marketing, and analytics dashboard implementation. We focus on ROI-driven strategies with A/B \
            testing and continuous optimization."
        },
        {
            img: ItPhoto6,
            name: "IT Consultancy",
            description: "Expert advice for strategic IT decisions and technology roadmap planning.",
            details:
                "Our IT consultants help businesses align technology with business goals. Services include \
            cloud migration strategy, software selection, IT infrastructure assessment, and digital transformation \
            planning. We provide vendor-neutral recommendations for hardware, software, and services. Our deliverables \
            include detailed technology roadmaps, cost-benefit analyses, and implementation plans. We specialize in helping \
            SMBs scale their IT infrastructure efficiently."
        },
        {
            img: ItPhoto7,
            name: "Server Management",
            description: "Reliable server deployment, configuration, and upkeep for optimal performance.",
            details:
                "We offer comprehensive server management services including Linux/Windows server administration, \
            cloud server setup (AWS, Azure, GCP), and container orchestration (Docker, Kubernetes). Our 24/7 monitoring \
            includes security patches, performance tuning, and automated backups. We handle load balancing, failover \
            configurations, and disaster recovery planning. Services include regular health reports, security audits, and \
            compliance management for HIPAA, GDPR, etc."
        },
        {
            img: ItPhoto8,
            name: "Firewall Installation",
            description: "Secure your network from threats with enterprise-grade firewall solutions.",
            details:
                "We deploy and configure next-generation firewalls (Palo Alto, Fortinet, Cisco) with \
            advanced threat protection. Our services include network vulnerability assessment, firewall rule \
            optimization, and intrusion prevention system setup. We implement zero-trust architectures with VPN \
            configurations and multi-factor authentication. Ongoing management includes log analysis, threat intelligence \
            updates, and regular security policy reviews. We specialize in compliance-ready configurations for PCI DSS and \
            other standards."
        },
        {
            img: ItPhoto9,
            name: "Network Management",
            description: "Monitoring and maintaining your IT infrastructure for maximum uptime and efficiency.",
            details:
                "Our network management services include LAN/WAN configuration, wireless network optimization, \
            and SD-WAN implementation. We use enterprise tools like PRTG, SolarWinds, or Nagios for real-time monitoring. \
            Services include network documentation, bandwidth management, QoS configuration, and VoIP optimization. \
            We provide proactive maintenance with SLA-backed response times. For larger networks, we implement automated \
            provisioning and configuration management tools."
        }
    ];

    // ======================================================
    // GALLERY SECTION (Civil Work)
    // ======================================================
    const civilWork = [
        {
            name: "House Construction",
            img: photoMainGlassServices,
            gallery: [heraSt, photo, photo2, walkIn]
        },
        {
            name: "Interior Renovation",
            img: photoMainResidentialGlass,
            gallery: [
                residentialGlassPhoto1,
                residentialGlassPhoto2,
                residentialGlassPhoto3,
                residentialGlassPhoto4,
            ]
        },
        {
            name: "Commercial Projects",
            img: mirrorMain,
            gallery: [mirror1, mirror2, mirror3, mirror4]
        }
    ];

    return (
        <div style={styles.container}>
            {/* Gallery Section */}
            <Section title="Glass Work" items={glassWork} bg={bg1} />

            {/* Learn More Section */}
            <Section title="IT Services" items={itServices} bg={bg2} />

            {/* Gallery Section */}
            <Section title="Civil Work" items={civilWork} bg={bg3} />

            <ClientLogos title="Our Clients" slideTo="left" />
            <StatisticsSection />
            <OurProcess />
        </div>
    );
}
