import React, { useState } from "react";

export default function ContactForm({ buttonText = "Submit Inquiry", showAttachment = true }) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        whatsapp: "",
        subject: "",
        message: "",
        attachment: null,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFile = (e) => {
        setForm({ ...form, attachment: e.target.files[0] });
    };

    const styles = {
        wrapper: {
            padding: "40px 20px",
            maxWidth: "900px",
            margin: "0 auto",
            backgroundColor: "#111a24",
            borderRadius: "12px",
            color: "white",
            fontFamily: "Inter, sans-serif",
        },

        title: {
            fontSize: "24px",
            fontWeight: "700",
            marginBottom: "25px",
        },

        row2: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "20px",
        },

        row1: {
            marginBottom: "20px",
        },

        fullInput: {
            width: "100%",
            padding: "14px",
            backgroundColor: "#0E151F",
            border: "1px solid #2c3e50",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "15px",
        },

        fileInputWrapper: {
            backgroundColor: "#0E151F",
            border: "1px solid #2c3e50",
            borderRadius: "8px",
            padding: "12px",
            color: "#9aaec5",
            fontSize: "15px",
        },

        textarea: {
            width: "100%",
            height: "150px",
            padding: "14px",
            backgroundColor: "#0E151F",
            border: "1px solid #2c3e50",
            borderRadius: "8px",
            color: "white",
            fontSize: "15px",
        },

        button: {
            width: "100%",
            marginTop: "30px",
            padding: "16px",
            background: "linear-gradient(90deg,#0e9bff,#00d1ff)",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontSize: "17px",
            fontWeight: "600",
            cursor: "pointer",
        },

        fileName: {
            marginTop: "6px",
            fontSize: "13px",
            opacity: 0.8,
        },
    };

    return (
        <form style={styles.wrapper}>
            {/* First & Last Name */}
            <div style={styles.row2}>
                <input
                    style={styles.fullInput}
                    name="firstName"
                    placeholder="First Name *"
                    onChange={handleChange}
                    required
                />
                <input
                    style={styles.fullInput}
                    name="lastName"
                    placeholder="Last Name *"
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Email */}
            <div style={styles.row1}>
                <input
                    style={styles.fullInput}
                    name="email"
                    placeholder="Email Address *"
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Phone + WhatsApp */}
            <div style={styles.row2}>
                <input
                    style={styles.fullInput}
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                />
                <input
                    style={styles.fullInput}
                    name="whatsapp"
                    placeholder="WhatsApp Number"
                    onChange={handleChange}
                />
            </div>

            {/* Subject */}
            <div style={styles.row1}>
                <select
                    name="subject"
                    style={styles.fullInput}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a subject</option>
                    <option>Partnership Inquiry</option>
                    <option>Software Development</option>
                    <option>Consultation</option>
                    <option>Other</option>
                </select>
            </div>

            {/* Attachment — now conditional */}
            {showAttachment && (
                <div style={styles.row1}>
                    <label style={{ marginBottom: "8px", display: "block" }}>
                        Attachment (Optional)
                    </label>

                    <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                        style={styles.fileInputWrapper}
                        onChange={handleFile}
                    />

                    {form.attachment && (
                        <div style={styles.fileName}>📎 {form.attachment.name}</div>
                    )}
                </div>
            )}

            {/* Message */}
            <div style={styles.row1}>
                <textarea
                    name="message"
                    placeholder="Message *"
                    style={styles.textarea}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            {/* Submit Button — text controlled by props */}
            <button style={styles.button}>{buttonText}</button>
        </form>
    );
}
