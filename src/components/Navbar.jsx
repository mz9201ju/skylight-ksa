import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../components/assets/logo-bg.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    const navRef = useRef(null);

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
            if (window.innerWidth >= 800) setOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Close on outside click
    useEffect(() => {
        const close = (e) => {
            if (open && navRef.current && !navRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", close);
        document.addEventListener("touchstart", close);
        return () => {
            document.removeEventListener("mousedown", close);
            document.removeEventListener("touchstart", close);
        };
    }, [open]);

    // Navigation Links with Paths
    const links = [
        { name: "Home", path: "/" },
        { name: "Partners", path: "/partners" },
        { name: "Career", path: "/career" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
    ];

    // Navbar styles
    const styles = {
        container: {
            width: "100%",
            maxWidth: "1400px",
            padding: "20px 25px",
            margin: isMobile ? "20px auto" : "0 auto",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            borderRadius: "40px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)",

            position: isMobile ? "relative" : "fixed",
            top: isMobile ? "initial" : "15px",
            left: 0,
            right: 0,
            zIndex: 50,

            transition: "0.3s ease",
        },

        spacer: {
            height: isMobile ? "0px" : "100px",
        },

        overlay: {
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(6px)",
            opacity: open && isMobile ? 1 : 0,
            pointerEvents: open && isMobile ? "auto" : "none",
            transition: "0.3s ease",
            zIndex: 15,
        },

        logoArea: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
        },
        logoImg: {
            height: "48px",
            width: "auto",
        },
        textBlock: {
            display: "flex",
            flexDirection: "column",
            lineHeight: 1.1,
        },
        title: {
            fontSize: "22px",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "3px",
        },
        tagline: {
            fontSize: "13px",
            color: "rgba(255,255,255,0.70)",
            letterSpacing: "0.3px",
        },

        desktopLinks: {
            display: isMobile ? "none" : "flex",
            gap: "40px",
            fontSize: "18px",
            fontWeight: 500,
            color: "white",
        },

        desktopLink: {
            cursor: "pointer",
            textDecoration: "none",
            color: "white",
        },

        hamburger: {
            display: isMobile ? "flex" : "none",
            width: "32px",
            height: "24px",
            flexDirection: "column",
            justifyContent: "space-between",
            cursor: "pointer",
            zIndex: 30,
        },

        bar: {
            width: "100%",
            height: "3.5px",
            background: "#fff",
            borderRadius: "4px",
            transition: "0.3s ease",
            transformOrigin: "center",
        },

        barOpen1: {
            transform: "rotate(45deg) translateY(15px)",
        },

        barOpen2: {
            opacity: 0,
        },

        barOpen3: {
            transform: "rotate(-45deg) translateY(-13px)",
        },

        mobileMenu: {
            display: open && isMobile ? "flex" : "none",
            flexDirection: "column",
            alignItems: "center",
            gap: "25px",
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            padding: "30px 0",
            textAlign: "center",
            background: "rgba(255,255,255,0.10)",
            borderRadius: "25px",
            backdropFilter: "blur(12px)",
            zIndex: 25,
        },

        mobileLink: {
            fontSize: "22px",
            fontWeight: 500,
            cursor: "pointer",
            textDecoration: "none",
            color: "white",
        },
    };

    return (
        <>
            <div style={styles.overlay} />

            <div style={styles.spacer}></div>

            <nav style={styles.container} ref={navRef}>

                {/* LOGO */}
                <Link to="/" style={{ textDecoration: "none" }}>
                    <div style={styles.logoArea}>
                        <img src={logo} style={styles.logoImg} />

                        <div style={styles.textBlock}>
                            <div style={styles.title}>Skylight</div>
                            <div style={styles.tagline}>General Contracting Est.</div>
                        </div>
                    </div>
                </Link>

                {/* DESKTOP LINKS */}
                <div style={styles.desktopLinks}>
                    {links.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            style={styles.desktopLink}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* HAMBURGER ICON */}
                {isMobile && (
                    <div style={styles.hamburger} onClick={() => setOpen(!open)}>
                        <div style={{ ...styles.bar, ...(open ? styles.barOpen1 : {}) }} />
                        <div style={{ ...styles.bar, ...(open ? styles.barOpen2 : {}) }} />
                        <div style={{ ...styles.bar, ...(open ? styles.barOpen3 : {}) }} />
                    </div>
                )}

                {/* MOBILE MENU */}
                {isMobile && (
                    <div style={styles.mobileMenu}>
                        {links.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                style={styles.mobileLink}
                                onClick={() => setOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </>
    );
}
