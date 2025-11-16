import { useState, useEffect } from "react";

// Import your images from patnerImages
import appImg from "./patnerImages/app.jpg";
import crmImg from "./patnerImages/crm.jpg";
import dmImg from "./patnerImages/dm.jpg";
import webImg from "./patnerImages/web.jpg";

export default function PartnerActionSection() {
    const images = [appImg, crmImg, dmImg, webImg];
    const [index, setIndex] = useState(0);

    // AUTO LOOP every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const styles = {
        wrapper: {
            width: "100%",
            padding: "60px 20px",
            backgroundColor: "#0E151F",
            color: "white",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
        },
        title: {
            fontSize: "26px",
            fontWeight: "700",
            marginBottom: "25px",
            color: "#43b6ff",
        },
        sliderBox: {
            width: "90%",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "10px",
            borderRadius: "12px",
            backgroundColor: "#1a2230",
            boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
            position: "relative",
        },
        image: {
            width: "100%",
            borderRadius: "12px",
            display: "block",
            transition: "opacity 0.5s ease-in-out",
        },
        arrow: {
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "26px",
            color: "#00c8ff",
            cursor: "pointer",
            padding: "8px 12px",
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,0.3)",
            userSelect: "none",
            zIndex: 10,
        },
        leftArrow: { left: "10px" },
        rightArrow: { right: "10px" },

        // CTA box
        ctaBox: {
            marginTop: "50px",
            padding: "35px 25px",
            borderRadius: "14px",
            backgroundColor: "#121a24",
            maxWidth: "820px",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        },
        ctaTitle: {
            fontSize: "22px",
            fontWeight: "700",
            marginBottom: "15px",
        },
        ctaDesc: {
            fontSize: "15px",
            lineHeight: "1.6",
            opacity: "0.85",
            maxWidth: "600px",
            margin: "0 auto",
        },
        underline: {
            width: "60px",
            height: "4px",
            backgroundColor: "#00c8ff",
            margin: "10px auto",
            borderRadius: "5px",
        }
    };

    // Manual navigation
    const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
    const prevImage = () =>
        setIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div style={styles.wrapper}>
            {/* Top Title */}
            <div style={styles.title}>FalconFly in Action</div>

            {/* Slider Box */}
            <div style={styles.sliderBox}>
                {/* Left arrow */}
                <div
                    style={{ ...styles.arrow, ...styles.leftArrow }}
                    onClick={prevImage}
                >
                    ❮
                </div>

                {/* Main image */}
                <img
                    src={images[index]}
                    style={styles.image}
                    alt="Partner action showcase"
                    loading="lazy"
                />

                {/* Right arrow */}
                <div
                    style={{ ...styles.arrow, ...styles.rightArrow }}
                    onClick={nextImage}
                >
                    ❯
                </div>
            </div>

            {/* CTA SECTION */}
            <div style={styles.ctaBox}>
                <div style={styles.ctaTitle}>Inspired By Our Work?</div>

                <div style={styles.ctaDesc}>
                    Let's collaborate on your next project. Whether you need software
                    solutions or comprehensive digital services, our partnership with
                    FalconFly ensures top-tier results.
                </div>

                <div style={styles.underline}></div>
            </div>
        </div>
    );
}
