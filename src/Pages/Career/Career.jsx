import ContactForm from "../ContactForm";

export default function Career() {
    const styles = {
        wrapper: {
            width: "100%",
            padding: "80px 20px",
            backgroundColor: "#0E151F",
            color: "white",
            textAlign: "center",
        },
        title: {
            fontSize: "34px",
            fontWeight: 800,
            color: "#1fb8ff",
            marginBottom: "10px",
        },
        subtitle: {
            fontSize: "16px",
            opacity: 0.8,
            marginBottom: "50px",
            maxWidth: "600px",
            marginInline: "auto",
        },
    };

    // Custom fields only for career form
    const careerFields = (
        <>
            {/* Designation */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    name="designation"
                    placeholder="Designation * (e.g. Frontend Developer)"
                    style={{
                        width: "100%",
                        padding: "14px",
                        backgroundColor: "#0E151F",
                        border: "1px solid #2c3e50",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "15px",
                    }}
                    required
                />
            </div>

            {/* Cover Message */}
            <div style={{ marginBottom: "20px" }}>
                <textarea
                    name="coverMessage"
                    placeholder="Cover Message (Why you'd be a great fit...)"
                    style={{
                        width: "100%",
                        height: "140px",
                        padding: "14px",
                        backgroundColor: "#0E151F",
                        border: "1px solid #2c3e50",
                        borderRadius: "8px",
                        color: "white",
                        fontSize: "15px",
                    }}
                    required
                ></textarea>
            </div>
        </>
    );

    return (
        <div style={styles.wrapper}>
            <h2 style={styles.title}>Join Our Team</h2>
            <p style={styles.subtitle}>
                We’re always looking for talented individuals to join our growing team.
                Submit your application and we’ll get back to you soon.
            </p>

            <ContactForm
                buttonText="Submit Application"
                showAttachment={true}
                extraFields={careerFields}
            />
        </div>
    );
}
