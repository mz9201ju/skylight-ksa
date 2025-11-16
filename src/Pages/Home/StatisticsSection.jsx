import { useEffect, useState } from "react";

export default function StatisticsSection() {
    const stats = [
        { title: "Glass Work", percent: 55, color: "#1fb8ff" },
        { title: "IT Work", percent: 33, color: "#2ecc71" },
        { title: "Civil Work", percent: 42, color: "#f1c40f" }
    ];

    const yearlyStats = [
        { title: "Glass & Aluminum", percent: 91, color: "#69a8ff" },
        { title: "IT Work", percent: 62, color: "#2ecc71" },
        { title: "Civil Work", percent: 70, color: "#f1c40f" }
    ];

    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimated(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const styles = {
        container: {
            maxWidth: "1200px",
            margin: "80px auto",
            padding: "20px",
        },
        title: {
            fontSize: "42px",
            fontWeight: "900",
            marginBottom: "20px",
            background: "linear-gradient(90deg,#1fb8ff,#0073ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        },
        description: {
            fontSize: "18px",
            lineHeight: "1.6",
            maxWidth: "800px",
            marginBottom: "40px",
        },
        statBox: {
            marginBottom: "45px",
        },
        statLabel: {
            fontSize: "20px",
            fontWeight: "700",
            marginBottom: "8px",
        },
        barOuter: {
            width: "100%",
            height: "10px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "10px",
            overflow: "hidden",
            marginBottom: "8px",
        },
        barInner: (percent, color) => ({
            width: animated ? `${percent}%` : "0%",
            height: "100%",
            background: color,
            transition: "width 1.5s ease",
            borderRadius: "10px",
        }),
        statFooter: {
            fontSize: "16px",
            opacity: 0.8,
            marginBottom: "20px",
        },

        cardGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px",
            marginTop: "60px",
        },
        card: {
            padding: "25px",
            background: "rgba(255,255,255,0.07)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.15)",
        },
        cardTitle: {
            fontSize: "22px",
            fontWeight: "700",
            marginBottom: "15px",
        },
        cardFooter: {
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            opacity: 0.9,
        },
    };

    return (
        <div style={styles.container}>

            {/* MAIN TITLE */}
            <h2 style={styles.title}>Skylight In Action (2025)</h2>

            {/* SUBTEXT */}
            <p style={styles.description}>
                With years of experience in the industry, we deliver exceptional quality
                and craftsmanship in every project. Our team of experts ensures precision
                and excellence in all our services.
            </p>

            {/* 2025 SECTION */}
            {stats.map((s, i) => (
                <div key={i} style={styles.statBox}>
                    <div style={styles.statLabel}>
                        {s.title}
                        <span style={{ float: "right", color: s.color }}>{s.percent}%</span>
                    </div>

                    <div style={styles.barOuter}>
                        <div style={styles.barInner(s.percent, s.color)}></div>
                    </div>

                    <div style={styles.statFooter}>Target: 100 Clients</div>
                </div>
            ))}

            {/* YEARLY PERFORMANCE */}
            <h2 style={{ ...styles.title, marginTop: "80px" }}>
                Annual Performance Metrics (2024)
            </h2>

            <div style={styles.cardGrid}>
                {yearlyStats.map((s, i) => (
                    <div key={i} style={styles.card}>
                        <div style={styles.cardTitle}>{s.title}</div>

                        <div style={styles.barOuter}>
                            <div style={styles.barInner(s.percent, s.color)}></div>
                        </div>

                        <div style={styles.cardFooter}>
                            <span>Target: 100 Clients</span>
                            <span>Achieved: {s.percent}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
