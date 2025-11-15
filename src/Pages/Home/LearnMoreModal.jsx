import React from "react";

export default function LearnMoreModal({ item, onClose }) {
    if (!item) return null;

    const isMobile = window.innerWidth <= 768;

    const styles = {
        overlay: {
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            overflowY: "auto",                 // 🔥 allow scroll on small screens
            padding: isMobile ? "10px" : "0",  // 🔥 padding for safe mobile spacing
        },
        modal: {
            width: isMobile ? "100%" : "90%",
            maxWidth: "800px",
            background: "#121721",
            borderRadius: "14px",
            padding: isMobile ? "15px" : "25px",  // 🔥 smaller padding on mobile
            color: "white",
            position: "relative",
        },
        closeX: {
            position: "absolute",
            top: isMobile ? "10px" : "12px",
            right: isMobile ? "12px" : "15px",
            fontSize: isMobile ? "20px" : "24px",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#ffffffaa",
            transition: "0.2s ease",
        },
        header: {
            fontSize: isMobile ? "20px" : "26px",
            fontWeight: "bold",
            marginBottom: isMobile ? "12px" : "15px",
            paddingRight: "35px",
            lineHeight: 1.3,
        },
        img: {
            width: "100%",
            height: isMobile ? "180px" : "280px",   // 🔥 mobile height fix
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: isMobile ? "15px" : "20px",
        },
        desc: {
            fontSize: isMobile ? "14px" : "16px",
            lineHeight: "1.6",
            marginBottom: "15px",
            color: "#d9e1ec",
        },
        closeBtnWrapper: {
            display: "flex",
            justifyContent: "flex-end",
            marginTop: isMobile ? "15px" : "25px",
        },
        closeBtn: {
            padding: isMobile ? "10px 22px" : "12px 28px",
            background: "#2a3344",
            color: "white",
            borderRadius: "10px",
            cursor: "pointer",
            border: "1px solid rgba(255,255,255,0.15)",
            transition: "0.2s ease",
            fontSize: isMobile ? "14px" : "15px",
        },
    };

    return (
        <div style={styles.overlay} onClick={onClose}>

            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>

                {/* X BUTTON */}
                <span style={styles.closeX} onClick={onClose}>×</span>

                {/* TITLE */}
                <h2 style={styles.header}>{item.name}</h2>

                {/* IMAGE */}
                <img src={item.img} alt={item.name} style={styles.img} />

                {/* DESCRIPTION */}
                {item.description && <p style={styles.desc}>{item.description}</p>}

                {/* DETAILS */}
                {item.details && <p style={styles.desc}>{item.details}</p>}

                {/* CLOSE BUTTON */}
                <div style={styles.closeBtnWrapper}>
                    <button style={styles.closeBtn} onClick={onClose}>
                        Close
                    </button>
                </div>

            </div>
        </div>
    );
}
