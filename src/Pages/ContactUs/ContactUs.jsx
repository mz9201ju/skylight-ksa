import React from "react";
import ContactForm from "../ContactForm";

// SVG ICONS for Contact Info
const contactIcons = {
    phone: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#3B6ECC">
            <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 .96-.26c1.05.26 2.18.4 3.34.4a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.68a1 1 0 0 1 1 1c0 1.16.14 2.29.4 3.34a1 1 0 0 1-.26.96l-2.2 2.2z" />
        </svg>
    ),
    email: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#2ECC71">
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
    ),
    location: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#9B59B6">
            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z" />
        </svg>
    ),
};


export default function ContactUs() {
    const isMobileDevice = () => {
        return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    };


    const styles = {
        wrapper: {
            width: "100%",
            padding: "80px 20px",
            backgroundColor: "#0E151F",
            color: "white",
        },

        headerTitle: {
            fontSize: "34px",
            fontWeight: 800,
            textAlign: "center",
            color: "#1fb8ff",
            marginBottom: "10px",
        },

        headerSubtitle: {
            textAlign: "center",
            fontSize: "16px",
            opacity: 0.8,
            marginBottom: "60px",
            maxWidth: "600px",
            marginInline: "auto",
        },

        // full-width centered card container
        fullRow: {
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
        },

        card: {
            backgroundColor: "rgba(255,255,255,0.06)",
            padding: "30px",
            borderRadius: "16px",
            width: "650px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 8px 22px rgba(0,0,0,0.25)",
        },

        cardTitle: {
            fontSize: "20px",
            fontWeight: 700,
            marginBottom: "20px",
        },

        contactItem: {
            marginBottom: "20px",
        },

        // Map Card
        mapCard: {
            backgroundColor: "rgba(255,255,255,0.06)",
            padding: "0",
            borderRadius: "16px",
            width: "740px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 8px 22px rgba(0,0,0,0.25)",
            overflow: "hidden",
            marginTop: "40px",
        },

        mapInfo: {
            padding: "25px",
        },

        mapTitle: {
            fontSize: "22px",
            fontWeight: 700,
            marginBottom: "10px",
        },

        mapDesc: {
            fontSize: "15px",
            color: "#d0d0d0",
            marginBottom: "10px",
        },

        directionsLink: {
            color: "#1fb8ff",
            fontWeight: 600,
            cursor: "pointer",
        },
        contactRow: {
            display: "flex",
            alignItems: "center",
            gap: "18px",
            marginBottom: "28px",
        },

        iconCircle: {
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },

        contactLabel: {
            fontSize: "18px",
            fontWeight: 700,
        },
        contactText: {
            fontSize: "16px",
            fontWeight: 500,
            marginBottom: "3px",
        },
    };

    return (
        <div style={styles.wrapper}>
            {/* Header */}
            <h2 style={styles.headerTitle}>Get In Touch</h2>
            <p style={styles.headerSubtitle}>
                We'd love to hear from you! Whether you have questions about our services or want to
                discuss a project, our team is ready to help.
            </p>

            {/* CONTACT INFORMATION (top) */}
            <div style={styles.fullRow}>
                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>Contact Information</h3>

                    {/* CALL US */}
                    <div
                        style={{ ...styles.contactRow, cursor: "pointer" }}
                        onClick={() => {
                            if (isMobileDevice()) {
                                window.location.href = "tel:+966554260602";
                            } else {
                                alert("📱 Please use your mobile device to make a call.");
                            }
                        }}
                    >
                        <div
                            style={{
                                ...styles.iconCircle,
                                background: "rgba(66, 103, 178, 0.20)",
                            }}
                        >
                            {contactIcons.phone}
                        </div>

                        <div>
                            <div style={styles.contactLabel}>Call Us</div>
                            <div style={styles.contactText}>+966 55 426 0602</div>
                            <small>Sat–Thurs, 9am–1am | Fri 4pm–10pm</small>
                        </div>
                    </div>

                    {/* EMAIL */}
                    <div
                        style={{ ...styles.contactRow, cursor: "pointer" }}
                        onClick={() => {
                            window.location.href = "mailto:info@skylightksa.com";
                        }}
                    >
                        <div
                            style={{
                                ...styles.iconCircle,
                                background: "rgba(46, 204, 113, 0.20)",
                            }}
                        >
                            {contactIcons.email}
                        </div>

                        <div>
                            <div style={styles.contactLabel}>Email Us</div>
                            <div style={styles.contactText}>info@skylightksa.com</div>
                            <small>Response within 24 hours</small>
                        </div>
                    </div>

                    {/* LOCATION */}
                    <div
                        style={{ ...styles.contactRow, cursor: "pointer" }}
                        onClick={() => {
                            window.open(
                                "https://www.google.com/maps/place/%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D8%A7%D9%86%D9%8A%D8%A9+%D9%84%D9%84%D8%B2%D8%AC%D8%A7%D8%AC+%D8%A7%D9%84%D8%B3%D9%8A%D9%83%D9%88%D8%B1%D9%8A%D8%AA+-+%D8%A3%D9%84%D9%85%D9%86%D9%8A%D9%88%D9%85+-+%D9%85%D8%B1%D8%A7%D9%8A%D8%A7+Al+Hamdania+Tempered+Glass,+Aluminium+,Mirror%E2%80%AD/@21.7758982,39.2116973,79m/data=!3m1!1e3!4m6!3m5!1s0x15c17b5c1ba1577f:0xd2af7c2537b35737!8m2!3d21.7759136!4d39.2118415!16s%2Fg%2F11fmgzv146?coh=245187&entry=tts&g_ep=EgoyMDI1MDUyMS4wIPu8ASoJLDEwMjExNDUzSAFQAw%3D%3D&skid=49f9fbe6-9ca6-48c5-a644-709287145898",
                                "_blank"
                            );
                        }}
                    >
                        <div
                            style={{
                                ...styles.iconCircle,
                                background: "rgba(155, 89, 182, 0.20)",
                            }}
                        >
                            {contactIcons.location}
                        </div>

                        <div>
                            <div style={styles.contactLabel}>Visit Us</div>
                            <div style={styles.contactText}>
                                123 Business District, Jeddah
                            </div>
                            <small>By appointment only</small>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEND US MESSAGE (middle) */}
            <div style={styles.fullRow}>
                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>Send Us a Message</h3>
                    <ContactForm buttonText={"Send Message"} showAttachment={true} />
                </div>
            </div>

            {/* MAP SECTION (bottom) */}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={styles.mapCard}>
                    <iframe
                        title="Skylight Location"
                        width="100%"
                        height="300"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d347.72609280340817!2d39.2116973!3d21.7758982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x15c17b5c1ba1577f%3A0xd2af7c2537b35737!2sAl%20Hamdania%20Tempered%20Glass%2C%20Aluminium%20%26%20Mirror!5e1!3m2!1sen!2ssa!4v1716400000000"
                        allowFullScreen=""
                    ></iframe>

                    <div style={styles.mapInfo}>
                        <h3 style={styles.mapTitle}>Our Headquarters</h3>
                        <p style={styles.mapDesc}>
                            Visit our modern office space in the heart of Riyadh’s business district.
                        </p>

                        <a
                            href="https://www.google.com/maps/place/%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D8%A7%D9%86%D9%8A%D8%A9+%D9%84%D9%84%D8%B2%D8%AC%D8%A7%D8%AC+%D8%A7%D9%84%D8%B3%D9%8A%D9%83%D9%88%D8%B1%D9%8A%D8%AA+-+%D8%A3%D9%84%D9%85%D9%86%D9%8A%D9%88%D9%85+-+%D9%85%D8%B1%D8%A7%D9%8A%D8%A7+Al+Hamdania+Tempered+Glass,+Aluminium+,Mirror%E2%80%AD/@21.7758982,39.2116973,79m/data=!3m1!1e3!4m6!3m5!1s0x15c17b5c1ba1577f:0xd2af7c2537b35737!8m2!3d21.7759136!4d39.2118415!16s%2Fg%2F11fmgzv146?coh=245187&entry=tts&g_ep=EgoyMDI1MDUyMS4wIPu8ASoJLDEwMjExNDUzSAFQAw%3D%3D&skid=49f9fbe6-9ca6-48c5-a644-709287145898"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.directionsLink}
                        >
                            Get directions →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
