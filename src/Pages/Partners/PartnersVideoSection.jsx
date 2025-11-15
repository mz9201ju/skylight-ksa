import falconfly from "./patnerImages/falconfly.png";

export default function PartnersVideoSection() {
    const styles = {
        wrapper: {
            width: "100%",
            padding: "60px 20px",
            backgroundColor: "#0E151F",
            color: "#fff",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
        },
        title: {
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#4da3ff",
        },
        logo: {
            width: "180px",
            margin: "0 auto",
            display: "block",
        },
        subtitle: {
            marginTop: "20px",
            fontSize: "15px",
            maxWidth: "600px",
            lineHeight: "1.6",
            marginLeft: "auto",
            marginRight: "auto",
            opacity: "0.9",
        },
        btn: {
            marginTop: "25px",
            backgroundColor: "#4da3ff",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "600",
        },
        videoWrapper: {
            width: "90%",
            maxWidth: "900px",
            margin: "40px auto 0 auto",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        },
        video: {
            width: "100%",
            borderRadius: "12px",
        },
        smallLogo: {
            width: "120px",
            position: "absolute",
            bottom: "20px",
            right: "20px",
            opacity: "0.9",
        },
        bottomText: {
            fontSize: "16px",
            fontWeight: "700",
            marginTop: "50px",
        },
        bottomDesc: {
            fontSize: "14px",
            maxWidth: "650px",
            lineHeight: "1.6",
            margin: "10px auto 0 auto",
            opacity: "0.85",
        }
    };

    return (
        <div style={styles.wrapper}>
            {/* Title */}
            <h2 style={styles.title}>Our Technology Partner</h2>

            {/* Logo */}
            <img
                style={styles.logo}
                src={falconfly}
                alt="FalconFly Logo"
                loading="lazy"
            />

            {/* Subtitle */}
            <p style={styles.subtitle}>
                Powering innovation through our strategic partnership with FalconFly,
                a leading software development company.
            </p>

            {/* Visit button */}
            <button
                style={styles.btn}
                onClick={() => window.open("https://www.falconflytechnology.com", "_blank")}
            >
                Visit FalconFly →
            </button>

            {/* Video preview */}
            <div style={styles.videoWrapper}>
                <video
                    style={styles.video}
                    src="https://skylightksa.com/videos/falconfly-intro.mp4"
                    autoPlay
                    loop
                    muted
                />
            </div>

            {/* Bottom text */}
            <div style={styles.bottomText}>Innovative Software Solutions</div>
            <p style={styles.bottomDesc}>
                FalconFly specializes in cutting-edge software development, delivering
                robust solutions that drive digital transformation. Their expertise
                complements our services, creating unparalleled value for our clients.
            </p>
        </div>
    );
}
