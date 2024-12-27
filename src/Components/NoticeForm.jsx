import React, { useState, useRef } from "react";
import { TextField, Button, Box, Grid, Typography, ThemeProvider, createTheme, FormHelperText } from "@mui/material";
import headerImage from "./tcet_header.jpg";
import copytoimage from "./pmt-placement_drive_copy.png";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#ff6600", // Custom Orange color
    },
    secondary: {
      main: "#cc5200",
    },
  },
  typography: {
    fontFamily: "Verdana, Geneva, sans-serif",
  },
});

const NoticeForm = () => {
  const editor = useRef(null);
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

  const [errors, setErrors] = useState({
    Company_registration_Link: "",
    College_registration_Link: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateURL = (url) => {
    const regex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm;
    return regex.test(url);
  };

  const handleURLChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation of URL fields
    if (value && !validateURL(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Please enter a valid URL.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleFormSubmit = () => {
    const errors = {};

    // Validate URLs before submission
    if (formData.Company_registration_Link && !validateURL(formData.Company_registration_Link)) {
      errors.Company_registration_Link = "Please enter a valid URL.";
    }

    if (formData.College_registration_Link && !validateURL(formData.College_registration_Link)) {
      errors.College_registration_Link = "Please enter a valid URL.";
    }

    // If there are errors, set the errors state and return
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Proceed with generating the preview if no errors
    generatePreview();
  };

  const generatePreview = () => {
    const previewContent = editor.current?.value || "";
    const newWindow = window.open("", "_blank", "width=800,height=600");
    newWindow.document.write(`
      <html>
        <head>
          <style>
            body {
              font-family: Verdana, Geneva, sans-serif;
              padding: 20px;
              background-color: #f4f4f4;
              margin: 0;
            }
            .header-img {
              width: 100%;
              object-fit: contain;
            }
            .content-header {
              text-align: center;
              color: #ff6600;
              font-size: 26px;
              font-weight: bold;
              margin-top: 10px;
            }
            .details {
              margin-top: 20px;
              display: flex;
              justify-content: space-between;
            }
            .main-section {
              margin-top: 30px;
            }
            .main-section p {
              margin-bottom: 12px;
              line-height: 1.5;
            }
            .signature {
              margin-top: 30px;
              text-align: right;
            }
            .footer-img {
              width: 100%;
              max-height: 120px;
              object-fit: contain;
              margin-top: 30px;
            }
          </style>
        </head>
        <body>
          <img src="${headerImage}" alt="Header" class="header-img" />
          <h2 class="content-header">INTERNSHIP NOTICE</h2>
          <div class="details">
            <p><strong>Serial No:</strong> ${formData.srNo}</p>
            <p><strong>Date:</strong> ${formData.date}</p>
          </div>
          <div class="main-section">
            <p><strong>To:</strong> ${formData.to}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Intro:</strong> ${formData.Intro}</p>
            <p><strong>Eligibility:</strong> ${formData.Eligibility_Criteria}</p>
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
          <div class="signature">
            <p>${formData.From}</p>
            <p>${formData.From_designation}</p>
          </div>
          <img src="${copytoimage}" alt="Footer" class="footer-img" />
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          position: "absolute",
          top: "100px",
          right: "170px",
          padding: "20px",
          maxWidth: "800px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          color="primary"
          gutterBottom
        >
          INTERNSHIP NOTICE FORM
        </Typography>
        <Grid container spacing={3}>
          {Object.keys(formData).map((key) => (
            <Grid item xs={12} sm={6} key={key}>
              <TextField
                fullWidth
                label={key.replace(/_/g, " ").toUpperCase()}
                name={key}
                value={formData[key]}
                onChange={key === "Company_registration_Link" || key === "College_registration_Link" ? handleURLChange : handleInputChange}
                type={key === "date" ? "date" : key === "Company_registration_Link" || key === "College_registration_Link" ? "url" : "text"}
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!errors[key]}
                helperText={errors[key] || ""}
              />
            </Grid>
          ))}
        </Grid>
        <Box display="flex" justifyContent="flex-end" mt={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#cc5200")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6600")}
          >
            Generate & Print Notice
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default NoticeForm;
