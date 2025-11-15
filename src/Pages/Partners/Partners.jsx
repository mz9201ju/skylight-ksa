import React from "react";
import PartnersVideoSection from "./PartnersVideoSection";
import PartnerActionSection from "./PartnerActionSection";
import ContactForm from "../ContactForm";

const styles = {
    sectionWrapper: {
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px 20px",
        textAlign: "center",
    },

    ctaTitle: {
        fontSize: "28px",
        fontWeight: "700",
        marginBottom: "20px",
        color: "#1fb8ff",
    },
};

export default function Partners() {
    return (
        <div className="partners-page">
            <PartnersVideoSection />
            <PartnerActionSection />

            {/* Fixed container for title + form */}
            <div style={styles.sectionWrapper}>
                <div style={styles.ctaTitle}>Get In Touch</div>

                <ContactForm
                    buttonText={"Submit Inquiry"}
                    showAttachment={false}
                />
            </div>
        </div>
    );
}
