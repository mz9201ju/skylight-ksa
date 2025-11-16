import InsideTeamGrid from "./InsideTeamGrid";

// IMPORT ALL IMAGES
import adham from "./leadershipImages/adham.jpg";
import abbas from "./leadershipImages/abbas.jpg";
import saima from "./leadershipImages/saima_1.jpg";

export default function MeetLeadershipSection() {
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
            marginBottom: "12px",
        },
        subtitle: {
            opacity: 0.7,
            marginBottom: "60px",
            fontSize: "15px",
        },
        grid: {
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
        },
        card: {
            backgroundColor: "rgba(255,255,255,0.06)",
            width: "330px",
            padding: "40px 30px",
            borderRadius: "16px",
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 8px 22px rgba(0,0,0,0.25)",
        },
        image: {
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "20px",
            border: "3px solid rgba(255,255,255,0.2)",
        },
        name: {
            fontSize: "20px",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "6px",
        },
        role: {
            fontSize: "15px",
            fontWeight: 600,
            color: "#1fb8ff",
            marginBottom: "18px",
        },
        description: {
            fontSize: "14px",
            color: "#d0d0d0",
            lineHeight: "1.6",
        },
        founderRole: {
            fontSize: "15px",
            fontWeight: 600,
            color: "#8de706ff", // <-- change to any color you want
            marginBottom: "18px",
        },
    };

    const CEO = {
        name: "Adham M Ibrahim Sindi",
        role: "Founder",
        img: adham,
        description:
            "Visionary entrepreneur driving innovation and building lasting partnerships for business excellence.",
    };

    const leadership = [
        {
            name: "Qallab Abbas",
            role: "Founder & CEO",
            img: abbas,
            description:
                "Visionary leader with 15+ years of industry experience, driving Skylight’s strategic direction.",
        },
        {
            name: "Saima Tariq",
            role: "General Manager",
            img: saima,
            description:
                "Results-driven sales leader with a proven track record of building high-performing teams.",
        },
        {
            name: "Qalab Abbas",
            role: "Chief Operations Officer",
            img: abbas,
            description:
                "Operations expert streamlining our processes for maximum efficiency.",
        },
    ];

    return (
        <div style={styles.wrapper}>
            <h2 style={styles.title}>Meet Our Leadership</h2>
            <p style={styles.subtitle}>
                The visionary minds driving Skylight's success story
            </p>

            {/* CEO Card */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}>
                <div style={styles.card}>
                    <img src={CEO.img} alt={CEO.name} style={styles.image} loading="lazy" />
                    <h3 style={styles.name}>{CEO.name}</h3>

                    {/* Special color for Founder */}
                    <p style={styles.founderRole}>{CEO.role}</p>

                    <p style={styles.description}>{CEO.description}</p>
                </div>
            </div>

            {/* Leadership Grid */}
            <div style={styles.grid}>
                {leadership.map((person, i) => (
                    <div key={i} style={styles.card}>
                        <img src={person.img} alt={person.name} style={styles.image} loading="lazy" />
                        <h3 style={styles.name}>{person.name}</h3>
                        <p style={styles.role}>{person.role}</p>
                        <p style={styles.description}>{person.description}</p>
                    </div>
                ))}
            </div>

            <InsideTeamGrid />
        </div>
    );
}
