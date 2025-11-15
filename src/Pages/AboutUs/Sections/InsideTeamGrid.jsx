import React from "react";

// Importing real images
import umer from "./leadershipImages/umer.jpg";
import husnain from "./leadershipImages/husnain.jpg";
import khaled from "./leadershipImages/khaled.jpg";
import adil from "./leadershipImages/adil.jpg";
import sidra from "./leadershipImages/sidra.jpg";
import abuGhazi from "./leadershipImages/abuGhazi2.jpg";

export default function InsideTeamGrid() {
    const styles = {
        wrapper: {
            marginTop: "80px",
        },
        title: {
            fontSize: "28px",
            fontWeight: 700,
            color: "#1fb8ff",
            marginBottom: "40px",
            textAlign: "center",
        },
        grid: {
            display: "flex",
            justifyContent: "center",
            gap: "35px",
            flexWrap: "wrap",
        },
        card: {
            backgroundColor: "rgba(255,255,255,0.06)",
            width: "280px",
            padding: "35px 25px",
            borderRadius: "16px",
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 8px 22px rgba(0,0,0,0.20)",
        },
        img: {
            width: "95px",
            height: "95px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "15px",
            border: "3px solid rgba(255,255,255,0.18)",
        },
        name: {
            fontSize: "18px",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "5px",
        },
        role: {
            fontSize: "15px",
            fontWeight: 600,
            marginBottom: "15px",
        },
        description: {
            fontSize: "13px",
            color: "#d0d0d0",
            lineHeight: "1.6",
        },
    };

    const team = [
        {
            name: "Umar Javed",
            role: "Marketing Manager",
            roleColor: "#1fb8ff", // blue
            img: umer,
            description:
                "Driving brand growth and customer engagement with innovative marketing strategies.",
        },
        {
            name: "Ar Husnain Ashraf",
            role: "Senior Architect Engineer",
            roleColor: "#ffb347", // orange/gold
            img: husnain,
            description:
                "Transforming visions into structural realities with precision engineering.",
        },
        {
            name: "Khaled Saad",
            role: "Finance Manager",
            roleColor: "#2ecc71", // green
            img: khaled,
            description:
                "Ensuring financial health and strategic investments for sustainable growth.",
        },
        {
            name: "Omar Al Turk (Abu Ghazi)",
            role: "Site Engineer",
            roleColor: "#ff6b6b", // red
            img: abuGhazi,
            description:
                "Ensuring construction excellence through meticulous on-site leadership and oversight.",
        },
        {
            name: "Adil Javed",
            role: "Civil Engineer",
            roleColor: "#1fb8ff", // blue-teal
            img: adil,
            description:
                "Overseeing construction excellence and infrastructure development.",
        },
        {
            name: "Sidra Tabassum",
            role: "Architect Engineer",
            roleColor: "#c77dff", // purple
            img: sidra,
            description:
                "Transforming concepts into sustainable, functional, and inspiring built environments.",
        },
    ];

    return (
        <div style={styles.wrapper}>
            <h2 style={styles.title}>Inside Skylight</h2>

            <div style={styles.grid}>
                {team.map((p, i) => (
                    <div key={i} style={styles.card}>
                        <img src={p.img} style={styles.img} alt={p.name} />

                        <h3 style={styles.name}>{p.name}</h3>

                        {/* Role with custom color */}
                        <p style={{ ...styles.role, color: p.roleColor }}>{p.role}</p>

                        <p style={styles.description}>{p.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
