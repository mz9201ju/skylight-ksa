export default function AboutSkylightSection() {
    const styles = {
        wrapper: {
            width: "100%",
            padding: "120px 20px 160px",
            backgroundImage: `
                linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)),
                url(https://skylightksa.com/ourStory.jpg)
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            textAlign: "center",
        },
        title: {
            fontSize: "40px",
            fontWeight: "800",
            color: "#1fb8ff",
            marginBottom: "20px",
        },
        subtitle: {
            fontSize: "18px",
            opacity: 0.9,
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
        },
        storyWrapper: {
            margin: "80px auto 0",
            width: "90%",
            maxWidth: "900px",
            backgroundColor: "rgba(0,0,0,0.45)", // DARKER, readable
            borderRadius: "16px",
            padding: "40px",
            backdropFilter: "blur(6px)",
        },
        storyTitle: {
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#ffffff",
        },
        storyText: {
            fontSize: "17px",
            lineHeight: "1.7",
            opacity: 0.95,
        },
    };

    return (
        <div style={styles.wrapper}>
            <h1 style={styles.title}>About Skylight</h1>

            <p style={styles.subtitle}>
                Pioneering excellence in the Saudi market with innovative solutions and unwavering
                commitment to quality.
            </p>

            <div style={styles.storyWrapper}>
                <h2 style={styles.storyTitle}>Our Story</h2>
                <p style={styles.storyText}>
                    Founded in 2016 in Jeddah, Skylight began as a visionary enterprise with a
                    simple goal: to revolutionize the industry through cutting-edge solutions and
                    customer-centric services. What started as a small team of passionate
                    professionals has grown into a market leader serving clients across Saudi Arabia
                    and beyond.
                </p>
            </div>
        </div>
    );
}
