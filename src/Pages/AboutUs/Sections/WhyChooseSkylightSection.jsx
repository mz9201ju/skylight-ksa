export default function WhyChooseSkylightSection() {
    const styles = {
        wrapper: {
            width: "100%",
            padding: "80px 20px",
            backgroundColor: "#0E151F",
            color: "white",
            textAlign: "center",
        },
        title: {
            fontSize: "28px",
            fontWeight: 700,
            color: "#1fb8ff",
            marginBottom: "40px",
        },
        grid: {
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
        },
        card: {
            backgroundColor: "rgba(255,255,255,0.08)",
            width: "300px",
            padding: "30px",
            borderRadius: "14px",
            textAlign: "left",
            position: "relative",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        },
        iconWrapper: {
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
        },
        cardTitle: {
            fontWeight: 700,
            marginBottom: "10px",
        },
    };

    // Icons (SVG inline)
    const icons = {
        speed: (
            <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                <path d="M12 3a9 9 0 0 0-9 9h2a7 7 0 1 1 7 7v2a9 9 0 0 0 0-18zm-1 5v6l5 3 .75-1.23-4.25-2.52V8z" />
            </svg>
        ),
        quality: (
            <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                <path d="M12 1.75 2.75 6.5v11L12 22.25 21.25 17.5v-11L12 1.75zm0 2.3 6.5 3.25v8.4L12 20.2l-6.5-4.5V7.3L12 4.05zm-1.75 5.7-1.5 1.45L12 14.95l5.25-5.3-1.5-1.45L12 12.05l-1.75-1.7z" />
            </svg>
        ),
        security: (
            <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18L19 7v4c0 4.45-3.07 8.87-7 10-3.93-1.13-7-5.55-7-10V7l7-3.82zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z" />
            </svg>
        ),
    };

    const items = [
        {
            title: "Industry-Leading Speed",
            text: "We deliver solutions faster than industry standards without compromising quality.",
            icon: icons.speed,
            color: "linear-gradient(135deg, #1fb8ff, #1760ff)", // blue
        },
        {
            title: "Uncompromising Quality",
            text: "Our rigorous quality control processes ensure flawless execution and deliverables that exceed expectations.",
            icon: icons.quality,
            color: "linear-gradient(135deg, #27c381, #159f60)", // green
        },
        {
            title: "Tailored Security",
            text: "We implement customized security measures to protect your assets and data according to your specific needs.",
            icon: icons.security,
            color: "linear-gradient(135deg, #b66dff, #7e3cff)", // purple
        },
    ];

    return (
        <div style={styles.wrapper}>
            <h2 style={styles.title}>Why Choose Skylight</h2>

            <div style={styles.grid}>
                {items.map((i, index) => (
                    <div key={index} style={styles.card}>
                        <div style={{ ...styles.iconWrapper, background: i.color }}>
                            {i.icon}
                        </div>

                        <h3 style={styles.cardTitle}>{i.title}</h3>
                        <p>{i.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
