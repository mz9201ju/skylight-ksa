import React from "react";
import { useNavigate } from "react-router-dom";

export default function ContactUsCTASection() {
    const navigate = useNavigate();

    const styles = {
        wrapper: {
            width: "80%",
            margin: "60px auto",
            backgroundColor: "rgba(255,255,255,0.06)",
            padding: "60px 20px",
            borderRadius: "16px",
            textAlign: "center",
            color: "white",
        },
        button: {
            marginTop: "20px",
            background: "linear-gradient(90deg,#1fb8ff,#00d4ff)",
            padding: "12px 30px",
            border: "none",
            borderRadius: "8px",
            color: "#000",
            fontWeight: "600",
            cursor: "pointer",
        },
    };

    return (
        <div style={styles.wrapper}>
            <h2>Ready to Work With Us?</h2>
            <p>Discover how Skylight can transform your business with innovative solutions.</p>

            <button
                style={styles.button}
                onClick={() => navigate("/contact")}
            >
                Contact Our Team
            </button>
        </div>
    );
}
