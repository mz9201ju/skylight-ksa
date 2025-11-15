import React, { useEffect, useRef, useState } from "react";

// Static imports
import adidas from "./homeImages/logos/adidas.png";
import albaik from "./homeImages/logos/albaik.png";
import axiom from "./homeImages/logos/axiom.png";
import babyshop from "./homeImages/logos/babyshop.png";
import baskinrobins from "./homeImages/logos/baskinrobins.png";
import carpisa from "./homeImages/logos/carpisa.png";
import centrepoint from "./homeImages/logos/centrepoint.png";
import diesel from "./homeImages/logos/diesel.png";
import Femi9 from "./homeImages/logos/Femi9.png";
import gaca from "./homeImages/logos/gaca.png";
import HnM from "./homeImages/logos/H&M.png";
import Homebox from "./homeImages/logos/Homebox.png";
import homecenter from "./homeImages/logos/homecenter.png";
import lenskart from "./homeImages/logos/lenskart.png";
import magrabi from "./homeImages/logos/magrabi.png";
import Max from "./homeImages/logos/Max.png";
import meed from "./homeImages/logos/meed.png";
import oasis from "./homeImages/logos/oasis.png";
import Redtag from "./homeImages/logos/Redtag.png";
import samsonite from "./homeImages/logos/samsonite.png";
import shoeexpress from "./homeImages/logos/shoeexpress.png";
import twenty4 from "./homeImages/logos/twenty4.png";

export default function ClientLogos({ title, slideTo = "left" }) {

    const logos = [
        adidas, albaik, axiom, babyshop, baskinrobins, carpisa,
        centrepoint, diesel, Femi9, gaca, HnM, Homebox, homecenter,
        lenskart, magrabi, Max, meed, oasis, Redtag, samsonite,
        shoeexpress, twenty4
    ];

    const infinite = [...logos, ...logos];

    const trackRef = useRef(null);
    const [trackWidth, setTrackWidth] = useState(0);
    const [selectedLogo, setSelectedLogo] = useState(null);

    // NEW: hover index
    const [hoverIndex, setHoverIndex] = useState(null);

    // stable animation name
    const animRef = useRef(`loop_${Math.random().toString(36).slice(2, 8)}`);
    const anim = animRef.current;

    const direction = slideTo === "right" ? "right" : "left";

    useEffect(() => {
        setTimeout(() => {
            if (trackRef.current) {
                const width = trackRef.current.scrollWidth / 2;
                setTrackWidth(width);
            }
        }, 200);
    }, []);

    // close popup
    useEffect(() => {
        const close = (e) => {
            if (selectedLogo && !e.target.classList.contains("popup-img")) {
                setSelectedLogo(null);
            }
        };
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close);
    }, [selectedLogo]);

    // keyframes
    const keyframes = `
        @keyframes ${anim} {
            from { transform: translateX(0); }
            to   { transform: translateX(${direction === "left" ? `-${trackWidth}px` : `${trackWidth}px`}); }
        }
    `;

    const styles = {
        section: { margin: "60px auto", textAlign: "center" },
        title: {
            fontSize: "40px",
            fontWeight: "700",
            marginBottom: "35px",
            background: "linear-gradient(90deg,#1fb8ff,#0073ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        },
        wrapper: {
            width: "100%",
            overflow: "hidden",
            padding: "25px 0",
            borderRadius: "40px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
        },
        track: {
            display: "flex",
            gap: "60px",
            whiteSpace: "nowrap",
            animation: trackWidth
                ? `${anim} ${(logos.length * 4)}s linear infinite`
                : "none"
        },
        logo: {
            height: "80px",
            padding: "10px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.96)",
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
            cursor: "pointer",
            transition: "transform 0.25s ease",
        },
        logoHover: {
            transform: "scale(1.15) translateY(-6px)"
        },
        popupOverlay: {
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
        },
        popupImg: {
            maxWidth: "80%",
            maxHeight: "80%",
            borderRadius: "20px",
            background: "white",
            padding: "20px",
        },
    };

    return (
        <section style={styles.section}>
            <style>{keyframes}</style>

            <h2 style={styles.title}>{title}</h2>

            <div style={styles.wrapper}>
                <div ref={trackRef} style={styles.track}>
                    {infinite.map((logo, i) => (
                        <img
                            key={i}
                            src={logo}
                            style={{
                                ...styles.logo,
                                ...(hoverIndex === i ? styles.logoHover : {})
                            }}
                            onMouseEnter={() => setHoverIndex(i)}
                            onMouseLeave={() => setHoverIndex(null)}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedLogo(logo);
                            }}
                        />
                    ))}
                </div>
            </div>

            {selectedLogo && (
                <div style={styles.popupOverlay}>
                    <img
                        src={selectedLogo}
                        className="popup-img"
                        style={styles.popupImg}
                        alt="Preview"
                    />
                </div>
            )}
        </section>
    );
}
