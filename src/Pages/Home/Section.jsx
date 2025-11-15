import React, { useState, useEffect, useRef } from "react";
import GalleryModal from "./GalleryModal";
import LearnMoreModal from "./LearnMoreModal";

export default function Section({ title, items, bg }) {
    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);
    const [inView, setInView] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [modalType, setModalType] = useState(null); // "gallery" or "learn"

    const sectionRef = useRef(null);

    // ------------------------------------------------------------
    // 📌 Detect if section is visible (background fade)
    // ------------------------------------------------------------
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.5 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // ------------------------------------------------------------
    // 📌 Responsive card count
    // ------------------------------------------------------------
    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth <= 600) setVisibleCount(1);
            else if (window.innerWidth <= 900) setVisibleCount(2);
            else setVisibleCount(3);
        };
        updateVisible();
        window.addEventListener("resize", updateVisible);
        return () => window.removeEventListener("resize", updateVisible);
    }, []);

    // ------------------------------------------------------------
    // 📌 Slider Navigation
    // ------------------------------------------------------------
    const next = () => {
        if (index < items.length - visibleCount) setIndex(index + 1);
        else setIndex(0);
    };

    const prev = () => {
        if (index > 0) setIndex(index - 1);
        else setIndex(items.length - visibleCount);
    };

    const trackWidth = (items.length * 100) / visibleCount;
    const translate = (index * 100) / items.length;

    // ------------------------------------------------------------
    // 📌 Open Modal Automatically Based On Item
    // ------------------------------------------------------------
    const openModal = (item) => {
        setModalData(item);

        if (Array.isArray(item.gallery) && item.gallery.length > 0) {
            setModalType("gallery");
        } else {
            setModalType("learn");
        }

        setModalOpen(true);
    };

    // ------------------------------------------------------------
    // 📌 Auto button text rule
    // ------------------------------------------------------------
    const getButtonText = (item) =>
        Array.isArray(item.gallery) && item.gallery.length > 0
            ? "View Gallery"
            : "Learn More";

    // ------------------------------------------------------------
    // 📌 Inline CSS (unchanged)
    // ------------------------------------------------------------
    const styles = {
        bgLayer: {
            position: "fixed",
            inset: 0,
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -3,
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s ease-out",
        },
        overlay: {
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.28)",
            zIndex: -2,
            opacity: inView ? 1 : 0,
            transition: "opacity 0.4s ease-out",
        },
        section: {
            margin: "60px 0",
            width: "100%",
            position: "relative",
            zIndex: 1,
        },
        title: {
            fontSize: "32px",
            textAlign: "center",
            marginBottom: "25px",
            color: "white",
        },
        wrapper: {
            width: "100%",
            overflow: "hidden",
            position: "relative",
        },
        track: {
            display: "flex",
            width: `${trackWidth}%`,
            transform: `translateX(-${translate}%)`,
            transition: "transform 0.6s ease",
        },
        cardWrapper: {
            padding: "10px",
            width: `${100 / items.length}%`,
            boxSizing: "border-box",
        },
        card: {
            background: "rgba(255,255,255,0.07)",
            borderRadius: "20px",
            padding: "20px",
            color: "white",
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.12)",
            transition: "all 0.3s ease",
            cursor: "pointer",

            ...(window.innerWidth > 768
                ? { transform: "translateY(0px)" }
                : {}),
        },
        img: {
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "14px",
            marginBottom: "10px",
        },
        buttons: {
            marginTop: "20px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
        },
        btn: {
            padding: "12px 28px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "10px",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            transition: "0.3s ease",
        },
        learnBtn: {
            marginTop: "12px",
            padding: "10px 20px",
            background: "rgba(255,255,255,0.15)",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "white",
            cursor: "pointer",
            fontSize: "15px",
            transition: "0.2s ease",
        },
    };

    return (
        <>
            {/* Background for this section */}
            <div style={styles.bgLayer}></div>
            <div style={styles.overlay}></div>

            {/* Main Content */}
            <section ref={sectionRef} style={styles.section}>
                <h2 style={styles.title}>{title}</h2>

                <div style={styles.wrapper}>
                    <div style={styles.track}>
                        {items.map((item, idx) => (
                            <div key={idx} style={styles.cardWrapper}>
                                <div
                                    style={styles.card}
                                    onMouseEnter={(e) => {
                                        if (window.innerWidth > 768) {
                                            e.currentTarget.style.transform = "scale(1.05)";
                                            e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                                            e.currentTarget.style.border =
                                                "1px solid rgba(255,255,255,0.25)";
                                            e.currentTarget.style.boxShadow =
                                                "0 8px 20px rgba(0,0,0,0.25)";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (window.innerWidth > 768) {
                                            e.currentTarget.style.transform = "scale(1)";
                                            e.currentTarget.style.background =
                                                "rgba(255,255,255,0.07)";
                                            e.currentTarget.style.border =
                                                "1px solid rgba(255,255,255,0.12)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }
                                    }}
                                >
                                    <img src={item.img} alt={item.name} style={styles.img} />
                                    <h3>{item.name}</h3>

                                    {/* Auto Modal Button */}
                                    <button
                                        style={styles.learnBtn}
                                        onClick={() => openModal(item)}
                                    >
                                        {getButtonText(item)}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {items.length > visibleCount && (
                    <div style={styles.buttons}>
                        <button style={styles.btn} onClick={prev}>← Previous</button>
                        <button style={styles.btn} onClick={next}>Next →</button>
                    </div>
                )}
            </section>

            {/* Auto Modal Renderer */}
            {modalOpen && modalType === "gallery" && (
                <GalleryModal item={modalData} onClose={() => setModalOpen(false)} />
            )}

            {modalOpen && modalType === "learn" && (
                <LearnMoreModal item={modalData} onClose={() => setModalOpen(false)} />
            )}
        </>
    );
}
