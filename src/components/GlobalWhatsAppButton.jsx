import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function GlobalWhatsAppButton() {
    const [hover, setHover] = useState(false);

    const styles = {
        container: {
            position: "fixed",
            bottom: "90px",   // ⬅ increased from 25px to 90px
            right: "25px",
            zIndex: 9999,
            cursor: "pointer",
            transition: "0.25s ease",
        },

        iconWrapper: {
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: hover ? "#ffffff" : "#25D366", // green → white
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            transition: "0.25s ease",
        },

        icon: {
            color: hover ? "#25D366" : "#ffffff", // white → green
            fontSize: "34px",
            transition: "0.25s ease",
        },
    };

    const handleClick = () => {
        window.open(
            "https://api.whatsapp.com/send/?phone=923214770852&text&type=phone_number&app_absent=0",
            "_blank"
        );
    };

    return (
        <div
            style={styles.container}
            onClick={handleClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div style={styles.iconWrapper}>
                <FaWhatsapp style={styles.icon} />
            </div>
        </div>
    );
}
