import React from "react";
import { Link } from "react-router-dom";

import {
    FaPhone,
    FaEnvelope,
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "./assets/logo-bg.png";

export default function Footer() {
    const isMobile = window.innerWidth < 700;

    // Detect mobile
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Click actions
    const handlePhoneClick = () => {
        if (isMobileDevice) {
            window.location.href = "tel:+966554260602";
        } else {
            alert("Please use your mobile device to make a call.");
        }
    };

    const handleEmailClick = () => {
        window.location.href = "mailto:info@skylightksa.com";
    };

    const handleLocationClick = () => {
        window.open(
            "https://www.google.com/maps/place/%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D8%A7%D9%86%D9%8A%D8%A9+%D9%84%D9%84%D8%B2%D8%AC%D8%A7%D8%AC+%D8%A7%D9%84%D8%B3%D9%8A%D9%83%D9%88%D8%B1%D9%8A%D8%AA+-+%D8%A3%D9%84%D9%85%D9%86%D9%8A%D9%88%D9%85+-+%D9%85%D8%B1%D8%A7%D9%8A%D8%A7+Al+Hamdania+Tempered+Glass,+Aluminium+,Mirror%E2%80%AD/@21.7758982,39.2116973,79m/data=!3m1!1e3!4m6!3m5!1s0x15c17b5c1ba1577f:0xd2af7c2537b35737!8m2!3d21.7759136!4d39.2118415!16s%2Fg%2F11fmgzv146?coh=245187&entry=tts&g_ep=EgoyMDI1MDUyMS4wIPu8ASoJLDEwMjExNDUzSAFQAw%3D%3D&skid=49f9fbe6-9ca6-48c5-a644-709287145898",
            "_blank"
        );
    };

    const styles = {
        footer: {
            marginTop: "80px",
            padding: "50px 30px 20px",
            background: "#000",
            color: "white",
            borderTop: "1px solid rgba(255,255,255,0.12)",
        },

        container: {
            maxWidth: "1300px",
            margin: "0 auto",
            display: "flex",
            justifyContent: isMobile ? "center" : "space-between",
            textAlign: isMobile ? "center" : "left",
            flexWrap: "wrap",
            gap: "50px",
        },

        left: { flex: "1 1 280px" },

        slogan: {
            fontSize: "16px",
            lineHeight: "1.6",
            opacity: 0.85,
            maxWidth: "330px",
            margin: isMobile ? "0 auto" : "0",
        },

        middle: { flex: "1 1 180px" },
        right: { flex: "1 1 240px" },

        sectionTitle: {
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "12px",
        },

        link: {
            display: "block",
            fontSize: "15px",
            marginBottom: "8px",
            cursor: "pointer",
            opacity: 0.8,
        },

        contactRow: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "12px",
            opacity: 0.85,
            justifyContent: isMobile ? "center" : "flex-start",
            cursor: "pointer",
            transition: "0.2s",
        },

        contactHover: {
            opacity: 1,
        },

        bottomBar: {
            marginTop: "40px",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "20px",
            display: "flex",
            justifyContent: isMobile ? "center" : "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            textAlign: isMobile ? "center" : "left",
        },

        socialRow: {
            display: "flex",
            gap: "18px",
            justifyContent: isMobile ? "center" : "flex-end",
            width: isMobile ? "100%" : "auto",
        },

        icon: {
            fontSize: "20px",
            cursor: "pointer",
            opacity: 0.85,
            transition: "0.2s",
        },

        logo: {
            width: "80px",
            marginBottom: "10px",
            marginLeft: isMobile ? "auto" : "0",
            marginRight: isMobile ? "auto" : "0",
            display: "block",
        },
        socialCircle: {
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "0.25s ease",
        },

        socialIcon: {
            color: "white",
            fontSize: "22px",
            transition: "0.25s ease",
        },
        socialCircleHover: {
            transform: "scale(1.15)",
        },
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                {/* LEFT */}
                <div style={styles.left}>
                    <img src={logo} alt="Skylight Logo" style={styles.logo} />
                    <p style={styles.slogan}>
                        Innovative solutions tailored to your needs.
                        <br />
                        Let's build something remarkable together.
                    </p>
                </div>

                {/* MIDDLE */}
                <div style={styles.middle}>
                    <h3 style={styles.sectionTitle}>Quick Links</h3>

                    <Link to="/" style={styles.link}>Home</Link>
                    <Link to="/about" style={styles.link}>About Us</Link>
                    <Link to="/contact" style={styles.link}>Contact</Link>
                </div>


                {/* RIGHT */}
                <div style={styles.right}>
                    <h3 style={styles.sectionTitle}>Get in Touch</h3>

                    <div
                        style={styles.contactRow}
                        onClick={handleEmailClick}
                    >
                        <FaEnvelope /> info@skylightksa.com
                    </div>

                    <div
                        style={styles.contactRow}
                        onClick={handlePhoneClick}
                    >
                        <FaPhone /> +966 55 426 0602
                    </div>

                    <div
                        style={styles.contactRow}
                        onClick={handleLocationClick}
                    >
                        <FaMapMarkerAlt /> Jeddah, Saudi Arabia
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div style={styles.bottomBar}>
                <span>© {new Date().getFullYear()} SKYLIGHT. All rights reserved.</span>

                <div style={styles.socialRow}>

                    {/* Instagram */}
                    <div
                        style={{ ...styles.socialCircle, background: "linear-gradient(45deg, #C13584, #E1306C)" }}
                        onClick={() => window.open("https://www.instagram.com/skylightksaest/", "_blank")}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                        <FaInstagram style={styles.socialIcon} />
                    </div>

                    {/* Snapchat */}
                    <div
                        style={{ ...styles.socialCircle, background: "#FFFFFF" }}
                        onClick={() => window.open("https://www.snapchat.com/add/skylightksa", "_blank")}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/1024px-Snapchat_logo.svg.png"
                            alt="Snapchat"
                            style={{ width: "22px", filter: "drop-shadow(0 0 1px black)" }}
                        />
                    </div>

                    {/* Facebook */}
                    <div
                        style={{ ...styles.socialCircle, background: "#1877F2" }}
                        onClick={() => window.open("https://www.facebook.com/skylightksa/", "_blank")}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                        <FaFacebookF style={styles.socialIcon} />
                    </div>

                    {/* YouTube */}
                    <div
                        style={{ ...styles.socialCircle, background: "#FF0000" }}
                        onClick={() => window.open("https://www.youtube.com/@skylightGCC", "_blank")}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                        <svg width="26" height="26" fill="#fff" viewBox="0 0 24 24">
                            <path d="M19.6 3.2H4.4C3.1 3.2 2 4.3 2 5.6v12.8c0 1.3 1.1 2.4 2.4 2.4h15.2c1.3 0 2.4-1.1 2.4-2.4V5.6c0-1.3-1.1-2.4-2.4-2.4zM10 16V8l6 4-6 4z" />
                        </svg>
                    </div>

                    {/* TikTok */}
                    <div
                        style={{
                            ...styles.socialCircle,
                            background: "#250202ff", // TikTok circle background
                        }}
                        onClick={() => window.open("https://www.tiktok.com/@skylightksaco", "_blank")}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                        {/* TikTok SVG Logo */}
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                            <path d="M12.75 2h3.02c.2 1.3.95 2.42 2.02 3.14.7.47 1.53.74 2.41.74v3.06c-.9 0-1.76-.19-2.54-.52v7.59c0 3.58-2.91 6.48-6.5 6.48S4.75 19.6 4.75 16s2.91-6.48 6.5-6.48c.5 0 .98.06 1.45.18V12c-.46-.2-.96-.31-1.48-.31-1.89 0-3.43 1.53-3.43 3.43s1.54 3.43 3.43 3.43 3.42-1.53 3.42-3.43V2z" />
                        </svg>
                    </div>

                </div>
            </div>

        </footer>
    );
}
