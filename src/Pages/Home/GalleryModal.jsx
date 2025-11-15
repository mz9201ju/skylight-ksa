import React, { useState } from "react";

export default function GalleryModal({ item, onClose }) {
    if (!item || !item.gallery) return null;

    const [activeIndex, setActiveIndex] = useState(0);

    const next = () =>
        setActiveIndex((prev) =>
            prev < item.gallery.length - 1 ? prev + 1 : 0
        );

    const prev = () =>
        setActiveIndex((prev) =>
            prev > 0 ? prev - 1 : item.gallery.length - 1
        );

    // 🔥 Responsive helper
    const isMobile = window.innerWidth <= 768;

    // ---------- INLINE CSS ----------
    const styles = {
        overlay: {
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.70)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            overflowY: "auto",          // 🔥 allows scrolling on mobile
            padding: isMobile ? "10px" : "0",
        },
        modal: {
            width: isMobile ? "100%" : "95%",
            maxWidth: "1200px",
            background: "#121721",
            borderRadius: "14px",
            padding: isMobile ? "15px" : "25px",
            color: "white",
            position: "relative",
        },
        closeX: {
            position: "absolute",
            top: isMobile ? "10px" : "15px",
            right: isMobile ? "14px" : "20px",
            fontSize: isMobile ? "22px" : "28px",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#ffffffbb",
            zIndex: 10,
        },
        header: {
            fontSize: isMobile ? "20px" : "28px",
            fontWeight: "bold",
            marginBottom: "15px",
            paddingRight: "40px",
        },
        bigImgWrapper: {
            position: "relative",
            width: "100%",
            height: isMobile ? "250px" : "500px",   // 🔥 MOBILE FIX
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: "15px",
        },
        bigImg: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
        arrowLeft: {
            position: "absolute",
            top: "50%",
            left: "10px",
            fontSize: isMobile ? "28px" : "40px",
            cursor: "pointer",
            color: "white",
            transform: "translateY(-50%)",
            userSelect: "none",
            zIndex: 5,
        },
        arrowRight: {
            position: "absolute",
            top: "50%",
            right: "10px",
            fontSize: isMobile ? "28px" : "40px",
            cursor: "pointer",
            color: "white",
            transform: "translateY(-50%)",
            userSelect: "none",
            zIndex: 5,
        },
        thumbRow: {
            display: "flex",
            gap: isMobile ? "10px" : "16px",
            overflowX: "auto",
            paddingBottom: "10px",
        },
        thumb: {
            width: isMobile ? "90px" : "150px",   // 🔥 MOBILE FIX
            height: isMobile ? "60px" : "100px",
            objectFit: "cover",
            borderRadius: "10px",
            cursor: "pointer",
            opacity: 0.75,
            transition: "0.2s ease",
            border: "2px solid transparent",
            flexShrink: 0,
        },
        activeThumb: {
            opacity: 1,
            border: "2px solid #4aa3ff",
        },
    };

    return (
        <div style={styles.overlay} onClick={onClose}>

            {/* Prevent closing when clicking inside modal */}
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>

                {/* X CLOSE BUTTON */}
                <span style={styles.closeX} onClick={onClose}>×</span>

                {/* TITLE */}
                <h2 style={styles.header}>{item.name}</h2>

                {/* MAIN IMAGE */}
                <div style={styles.bigImgWrapper}>
                    <span style={styles.arrowLeft} onClick={prev}>❮</span>
                    <span style={styles.arrowRight} onClick={next}>❯</span>

                    <img
                        src={item.gallery[activeIndex]}
                        style={styles.bigImg}
                        alt="gallery"
                        loading="lazy"
                    />
                </div>

                {/* THUMBS */}
                <div style={styles.thumbRow}>
                    {item.gallery.map((g, idx) => (
                        <img
                            key={idx}
                            src={g}
                            style={
                                idx === activeIndex
                                    ? { ...styles.thumb, ...styles.activeThumb }
                                    : styles.thumb
                            }
                            onClick={() => setActiveIndex(idx)}
                            loading="lazy"
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}
