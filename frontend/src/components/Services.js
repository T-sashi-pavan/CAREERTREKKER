import React, { useState } from 'react';

const Services = () => {
    const [selectedCompany, setSelectedCompany] = useState(null);

    const templates = {
      Google: [
        { name: "Google Template 1", img: "resume25.jpg", file: "resume25.html" },
        { name: "Google Template 2", img: "resume33.jpg", file: "resume33.html" },
        { name: "Google Template 3", img: "resume22.jpg", file: "resume22.html" },
        { name: "Google Template 4", img: "resume23.jpg", file: "resume23.html" },
        { name: "Google Template 5", img: "resume26.jpg", file: "resume26.html" },
        { name: "Google Template 6", img: "resume28.jpg", file: "resume28.html" }
    ],
    Facebook: [
        { name: "Facebook Template 1", img: "resume2.jpg", file: "resume2.html" },
        { name: "Facebook Template 2", img: "resume4.jpg", file: "resume4.html" },
        { name: "Facebook Template 3", img: "resume6.jpg", file: "resume6.html" },
        { name: "Facebook Template 4", img: "resume8.jpg", file: "resume8.html" },
        { name: "Facebook Template 5", img: "resume11.jpg", file: "resume11.html" },
        { name: "Facebook Template 6", img: "resume13.jpg", file: "resume13.html" }
    ],
    Tata: [
        { name: "Tata Template 1", img: "resume3.jpg", file: "resume3.html" },
        { name: "Tata Template 2", img: "resume9.jpg", file: "resume9.html" },
        { name: "Tata Template 3", img: "resume15.jpg", file: "resume15.html" },
        { name: "Tata Template 4", img: "resume17.jpg", file: "resume17.html" },
        { name: "Tata Template 5", img: "resume19.jpg", file: "resume19.html" },
        { name: "Tata Template 6", img: "resume21.jpg", file: "resume21.html" }
    ],
    Wipro: [
        { name: "Wipro Template 1", img: "resume10.jpg", file: "resume10.html" },
        { name: "Wipro Template 2", img: "resume20.jpg", file: "resume20.html" },
        { name: "Wipro Template 3", img: "resume32.jpg", file: "resume32.html" },
        { name: "Wipro Template 4", img: "resume3.jpg", file: "resume3.html" },
        { name: "Wipro Template 5", img: "resume8.jpg", file: "resume8.html" },
        { name: "Wipro Template 6", img: "resume19.jpg", file: "resume19.html" }
    ],
    "Nestle India": [
        { name: "Nestle India Template 1", img: "resume16.jpg", file: "resume16.html" },
        { name: "Nestle India Template 2", img: "resume24.jpg", file: "resume24.html" },
        { name: "Nestle India Template 3", img: "resume31.jpg", file: "resume31.html" },
        { name: "Nestle India Template 4", img: "resume1.jpg", file: "resume1.html" },
        { name: "Nestle India Template 5", img: "resume25.jpg", file: "resume25.html" },
        { name: "Nestle India Template 6", img: "resume6.jpg", file: "resume6.html" }
    ],
    "Aditya Birla": [
        { name: "Aditya Birla Template 1", img: "resume15.jpg", file: "resume15.html" },
        { name: "Aditya Birla Template 2", img: "resume17.jpg", file: "resume17.html" },
        { name: "Aditya Birla Template 3", img: "resume8.jpg", file: "resume8.html" },
        { name: "Aditya Birla Template 4", img: "resume13.jpg", file: "resume13.html" },
        { name: "Aditya Birla Template 5", img: "resume1.jpg", file: "resume1.html" },
        { name: "Aditya Birla Template 6", img: "resume16.jpg", file: "resume16.html" }
    ],
    Infosys: [
        { name: "Infosys Template 1", img: "resume33.jpg", file: "resume33.html" },
        { name: "Infosys Template 2", img: "resume14.jpg", file: "resume14.html" },
        { name: "Infosys Template 3", img: "resume17.jpg", file: "resume17.html" },
        { name: "Infosys Template 4", img: "resume16.jpg", file: "resume16.html" },
        { name: "Infosys Template 5", img: "resume15.jpg", file: "resume15.html" },
        { name: "Infosys Template 6", img: "resume22.jpg", file: "resume22.html" }
    ],
    "Tech Mahindra": [
        { name: "Tech Mahindra Template 1", img: "resume10.jpg", file: "resume10.html" },
        { name: "Tech Mahindra Template 2", img: "resume11.jpg", file: "resume11.html" },
        { name: "Tech Mahindra Template 3", img: "resume22.jpg", file: "resume22.html" },
        { name: "Tech Mahindra Template 4", img: "resume25.jpg", file: "resume25.html" },
        { name: "Tech Mahindra Template 5", img: "resume4.jpg", file: "resume4.html" },
        { name: "Tech Mahindra Template 6", img: "resume32.jpg", file: "resume32.html" }
    ],
    Deloitte: [
        { name: "Deloitte Template 1", img: "resume9.jpg", file: "resume9.html" },
        { name: "Deloitte Template 2", img: "resume15.jpg", file: "resume15.html" },
        { name: "Deloitte Template 3", img: "resume19.jpg", file: "resume19.html" },
        { name: "Deloitte Template 4", img: "resume4.jpg", file: "resume4.html" },
        { name: "Deloitte Template 5", img: "resume22.jpg", file: "resume22.html" },
        { name: "Deloitte Template 6", img: "resume16.jpg", file: "resume16.html" }
    ],
    Capgemini: [
        { name: "Capgemini Template 1", img: "resume19.jpg", file: "resume19.html" },
        { name: "Capgemini Template 2", img: "resume13.jpg", file: "resume13.html" },
        { name: "Capgemini Template 3", img: "resume15.jpg", file: "resume15.html" },
        { name: "Capgemini Template 4", img: "resume4.jpg", file: "resume4.html" },
        { name: "Capgemini Template 5", img: "resume5.jpg", file: "resume5.html" },
        { name: "Capgemini Template 6", img: "resume16.jpg", file: "resume16.html" }
    ]
};

const companyLogos = {
    Google: "https://tse2.mm.bing.net/th?id=OIP.yPmpH1ehhtnXjLcOvs_WVwHaDt&pid=Api&P=0&h=180",
    Facebook: "https://tse2.mm.bing.net/th?id=OIP.bD6otkD2EDUCHCDdXc03-gHaGK&pid=Api&P=0&h=180",
    Tata: "https://tse2.mm.bing.net/th?id=OIP.NtXk46ERIZV5GhyN1e4N-AHaEa&pid=Api&P=0&h=180",
    Wipro: "https://tse2.mm.bing.net/th?id=OIP.VcA4IfRLIfs_tTGTCSyI6gHaEY&pid=Api&P=0&h=180",
    "Nestle India": "https://tse1.mm.bing.net/th?id=OIP.x5g6Z8oeAIpD4P5Af9R1VAHaC3&pid=Api&P=0&h=180",
    "Aditya Birla": "https://tse2.mm.bing.net/th?id=OIP.SysyFLE3VghxJp-AcnqxfAHaEe&pid=Api&P=0&h=180",
    Infosys: "https://tse4.mm.bing.net/th?id=OIP.v4yEsg7g85Dft3EV7RbeYQHaEH&pid=Api&P=0&h=180",
    "Tech Mahindra": "https://tse3.mm.bing.net/th?id=OIP.qejz4yF9uttwkRCE3M0kNQHaFj&pid=Api&P=0&h=180",
    Deloitte: "https://tse3.mm.bing.net/th?id=OIP.roh9Ich5W2fgqYMF_uELCAHaGY&pid=Api&P=0&h=180",
    Capgemini: "https://tse4.mm.bing.net/th?id=OIP.OJ6hvrQ-emhEf1f9yfnoYwHaEK&pid=Api&P=0&h=180"
};

    const showTemplates = (company) => {
        setSelectedCompany(company);
    };

    const goBackToCompanyPage = () => {
        setSelectedCompany(null);
    };

    return (
        <div style={{         backgroundImage: "linear-gradient(to right, #6a11cb, #2575fc)",
            backgroundColor: '#f0f8ff', minHeight: '100vh', padding: '20px' }}>
        <div style={styles.container}>
            {selectedCompany ? (
                // Templates Page
                <div style={styles.templatesContainer}>
                    <h2 style={styles.templatesHeading}>{selectedCompany} Resume Templates</h2>
                    <div style={styles.templates}>
                        {templates[selectedCompany].map((template, index) => (
                            <div
                                key={index}
                                style={styles.template}
                                onClick={() => window.location.href = template.file}
                            >
                                <img src={template.img} alt={template.name} style={styles.templateImg} />
                                <p style={{color:'black'}}>{template.name}</p>
                            </div>
                        ))}
                    </div>
                    <button style={styles.backButton} onClick={goBackToCompanyPage}>
                        Back
                    </button>
                </div>
            ) : (
                // Company Selection Page
                <div style={styles.companyButtons}>
                    <h1 style={styles.heading}>Choose Famous Multi-National Companies Shortlisted Resume Templates</h1>
                    <div style={styles.gridContainer}>
                        {Object.keys(companyLogos).map((company, index) => (
                            <div key={index} style={styles.companyRow}>
                                <button
                                    style={styles.companyButton}
                                    onClick={() => showTemplates(company)}
                                >
                                    <img
                                        src={companyLogos[company]}
                                        alt={`${company} Logo`}
                                        style={styles.companyButtonImg}
                                    />
                                    <span>{company}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
        color: 'white',
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    },
    heading: {
        fontSize: '36px',
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: '#2c3e50',
        color: 'white',
        borderRadius: '10px',
        textShadow: '1px 1px 2px #000',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    templatesHeading: {
        fontSize: '32px',
        color: '#2c3e50',
        marginBottom: '20px',
        fontWeight: 'bold',
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',  // 2 columns per row
        gap: '20px',
        justifyItems: 'center',
        marginTop: '20px',
    },
    companyButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 30px',
        fontSize: '24px',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease, background-color 0.3s ease',
        width: '250px',  // Fixed width for all buttons
        height: '120px',  // Fixed height for all buttons
    },
    companyButtonImg: {
        maxWidth: '40px',
        maxHeight: '40px',
        marginRight: '15px',
        verticalAlign: 'middle',
    },
    companyRow: {
        marginBottom: '20px',
    },
    templatesContainer: {
        backgroundColor: 'linear-gradient(to right, #4e79a7, #f4a300)',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    templates: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',  // Two columns per row
        gap: '20px',
        justifyItems: 'center',
        marginTop: '20px',
    },
    template: {
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        height: 'auto',
    },
    templateImg: {
        width: '100%',
        height: 'auto',
        maxWidth: '250px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    backButton: {
        padding: '10px 20px',
        fontSize: '20px',
        backgroundColor: '#343a40',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        marginTop: '30px',
    },
};

export default Services;
