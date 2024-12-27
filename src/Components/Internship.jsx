import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
// import headerImage from "../assets/tcet header.jpg";
// import copytoimage from "../assets/pmt-placement_drive_copytoImage.png";

const Internship = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState({
    srNo: "",
    to: "",
    subject: "",
    date: new Date().toISOString().split("T")[0],
    Intro: "",
    Eligibility_Criteria: "",
    Role: "",
    Job_Designation: "",
    Job_Location: "",
    Skills_Required: "",
    Stipend: "",
    Duration: "",
    Company_registration_Link: "",
    College_registration_Link: "",
    Note: "",
    From: "",
    From_designation: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const printContent = () => {
    const previewContent = editor.current?.value || content;
    const newWindow = window.open("", "_blank", "width=800,height=600");
    newWindow.document.write(`
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
              margin: 0;
              line-height: 1.6;
            }
            .header-image {
              object-fit: contain;
              margin-bottom: 20px;
            }
            .content-header {
              text-align: center;
              margin-bottom: 20px;
              font-size: 24px;
              font-weight: bold;
            }
            .flex-container {
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
            }
            .main-body {
              margin-bottom: 30px;
            }
            .main-body p {
              margin-bottom: 10px;
            }
            .notice-content {
              margin-bottom: 30px;
              border-top: 1px solid #ccc;
              padding-top: 20px;
            }
            .fromto {
              text-align: right;
            }
            .footer-image {
              // width: 100%;
              max-height: 100px;
              object-fit: contain;
              margin-top: 30px;
            }
          </style>
        </head>
        <body>
          <img src="${headerImage}" alt="Header" class="header-image" />
          <h2 class="content-header">NOTICE</h2>
          <div class="flex-container">
            <p><strong>Serial No:</strong> ${formData.srNo}</p>
            <p><strong>Date:</strong> ${formData.date}</p>
          </div>
          <div class="main-body">
            <p><strong>To:</strong> ${formData.to}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Intro:</strong> ${formData.Intro}</p>
            <p><strong>Eligibility Criteria:</strong> ${formData.Eligibility_Criteria}</p>
            <p><strong>Role:</strong> ${formData.Role}</p>
            <p><strong>Job Designation:</strong> ${formData.Job_Designation}</p>
            <p><strong>Job Location:</strong> ${formData.Job_Location}</p>
            <p><strong>Skills Required:</strong> ${formData.Skills_Required}</p>
            <p><strong>Stipend:</strong> ${formData.Stipend}</p>
            <p><strong>Duration:</strong> ${formData.Duration}</p>
            <p><strong>Company Registration Link:</strong> ${formData.Company_registration_Link}</p>
            <p><strong>College Registration Link:</strong> ${formData.College_registration_Link}</p>
            <p><strong>Note:</strong> ${formData.Note}</p>
          </div>
          <div class="fromto">
            <p>${formData.From}</p>
            <p>${formData.From_designation}</p>
          </div>
          <img src="${copytoimage}" alt="Footer" class="footer-image" />
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        NOTICE DETAILS : INTERNSHIP
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "20px",
        }}
      >
        {Object.keys(formData).map((key) => (
          <div key={key} style={{ display: "flex", flexDirection: "column" }}>
            <label
              htmlFor={key}
              style={{
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#555",
              }}
            >
              {key.replace(/_/g, " ").toUpperCase()}:
            </label>
            <input
              type={key === "date" ? "date" : "text"}
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleInputChange}
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderStyle: "solid",
                padding: "10px",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={printContent}
          style={{
            marginTop: "20px",
            padding: "10px 25px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#4CAF50",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Print Content
        </button>
      </div>
    </div>
  );
};

export default Internship;