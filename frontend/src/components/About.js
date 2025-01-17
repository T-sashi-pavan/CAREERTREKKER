import React from "react";

function About() {
    return (
        <div style={styles.pageBackground}>
            <div style={styles.container}>
                <h1 style={styles.heading}>About Us ✨</h1>
                <h2 style={styles.subHeading}>Welcome to Our Career Development Platform 🌐</h2>

                <p style={styles.paragraph}>
                    At <strong>CARRER-TREKKER </strong>, we aim to simplify the process of creating professional and tailored resumes for job seekers. Whether you're looking to land your first job, switch careers, or advance in your current role, our platform helps you design a resume that highlights your skills, experiences, and qualifications.
                </p>

                <h3 style={styles.sectionHeading}>Why Choose Us? 🚀</h3>
                <p style={styles.paragraph}>
                    🔹 Quick Resume Maker: Build your resume in minutes with our user-friendly interface.
                </p>
                <p style={styles.paragraph}>
                    🔹 Rapid Portfolio Creator: Showcase your work and achievements with our customizable portfolio templates.
                </p>
                <p style={styles.paragraph}>
                    🔹 Famous MNC-Shortlisted Resume Templates: We provide editable options for templates that top companies prefer, ensuring your resume stands out.
                </p>

                <h3 style={styles.sectionHeading}>Additional Features 🌟</h3>
                <p style={styles.paragraph}>
                    🔹 Editable Templates: Tailor your resume or portfolio to suit your unique style and needs.
                </p>
                <p style={styles.paragraph}>
                    🔹 Skill-Oriented Resume Options: Highlight your strengths effectively to make a lasting impression.
                </p>
                <p style={styles.paragraph}>
                    🔹 Career Guidance: Access tips and resources to help you excel in your job search.
                </p>
                <p style={styles.paragraph}>
                    🔹 Multi-Language Support: Create resumes in multiple languages to cater to global opportunities.
                </p>
                <p style={styles.paragraph}>
                    🔹 AI-Powered Suggestions: Receive personalized recommendations to improve your resume content.
                </p>

                <h3 style={styles.sectionHeading}>Join Us Today! 🎉</h3>
                <p style={styles.paragraph}>
                    Start building the perfect resume, creating stunning portfolios, and accessing top-notch templates to take your career to the next level. Let's make your career dreams a reality! 
                </p>
                <p style={styles.paragraph}>
                    Together, we empower job seekers to achieve their aspirations and succeed in the competitive job market. Your career journey starts here! 🌟
                </p>
            </div>
        </div>
    );
}

const styles = {
    pageBackground: {
        backgroundImage: "linear-gradient(to right, #1c92d2, #f2fcfe)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Poppins', sans-serif",
    },
    container: {
        padding: "40px",
        maxWidth: "800px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        fontFamily: "'Poppins', sans-serif",
        color: "#333",
    },
    heading: {
        fontSize: "36px",
        color: "#1c1c1c",
        textAlign: "center",
        marginBottom: "20px",
        fontFamily: "'Roboto Slab', serif",
    },
    subHeading: {
        fontSize: "24px",
        color: "#555",
        textAlign: "center",
        marginBottom: "20px",
        fontFamily: "'Roboto Slab', serif",
    },
    sectionHeading: {
        fontSize: "20px",
        color: "#444",
        marginTop: "20px",
        marginBottom: "10px",
        textDecoration: "underline",
        fontFamily: "'Poppins', sans-serif",
    },
    paragraph: {
        fontSize: "16px",
        lineHeight: "1.8",
        color: "#333",
        textAlign: "justify",
        marginBottom: "15px",
        padding: "0 10px",
        fontFamily: "'Poppins', sans-serif",
    },
};

export default About;
