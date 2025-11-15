import React from "react";

export default function OurCoreValuesSection() {
    const styles = {
        wrapper: {
            width: "100%",
            padding: "80px 20px",
            backgroundColor: "#0E151F",
            color: "white",
            textAlign: "center",
        },
        title: {
            fontSize: "32px",
            fontWeight: 700,
            color: "#1fb8ff",
            marginBottom: "50px",
        },
        grid: {
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
        },
        card: {
            width: "300px",
            backgroundColor: "rgba(255,255,255,0.06)",
            padding: "35px 30px",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 8px 22px rgba(0,0,0,0.2)",
            textAlign: "left",
        },
        iconWrapper: {
            width: "45px",
            height: "45px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "15px",
        },
        cardTitle: {
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "10px",
        },
        text: {
            fontSize: "14px",
            lineHeight: "1.6",
            color: "#d0d0d0",
        },
    };

    // SVG ICONS (Matches your screenshot style)
    const icons = {
        integrity: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18L19 7v4c0 4.45-3.07 8.87-7 10-3.93-1.13-7-5.55-7-10V7l7-3.82z" />
            </svg>
        ),
        innovation: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M17 9V7H7v2H4v2h1v2h2v2H6v2h12v-2h-1v-2h2v-2h1V9h-3zM9 15v-2h6v2H9zm8-4H7V9h10v2z" />
            </svg>
        ),
        collaboration: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M12 5.5A2.5 2.5 0 1 1 9.5 8 2.5 2.5 0 0 1 12 5.5m0-2A4.5 4.5 0 1 0 16.5 8 4.5 4.5 0 0 0 12 3.5zm0 11a7 7 0 0 0-7 7h2a5 5 0 0 1 10 0h2a7 7 0 0 0-7-7z" />
            </svg>
        ),
        growth: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M3 3h2v18H3V3m6 6h2v12H9V9m6-4h2v16h-2V5z" />
            </svg>
        ),
    };

    const values = [
        {
            title: "Integrity",
            text: "We uphold the highest standards of honesty and ethics in all our dealings.",
            icon: icons.integrity,
            bg: "#0e9dd9",
        },
        {
            title: "Innovation",
            text: "We constantly push boundaries to deliver cutting-edge solutions.",
            icon: icons.innovation,
            bg: "#1fb8ff",
        },
        {
            title: "Collaboration",
            text: "We believe in the power of teamwork and partnership.",
            icon: icons.collaboration,
            bg: "#0fb5c4",
        },
        {
            title: "Growth",
            text: "We're committed to continuous improvement and learning.",
            icon: icons.growth,
            bg: "#1fb8ff",
        },
    ];

    return (
        <div style={styles.wrapper}>
            <h2 style={styles.title}>Our Core Values</h2>

            <div style={styles.grid}>
                {values.map((v, i) => (
                    <div key={i} style={styles.card}>
                        <div style={{ ...styles.iconWrapper, backgroundColor: v.bg }}>
                            {v.icon}
                        </div>

                        <h3 style={styles.cardTitle}>{v.title}</h3>
                        <p style={styles.text}>{v.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
