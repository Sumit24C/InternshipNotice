import React, { useState } from "react";
import "./Top.css"; // Import the CSS file

const Table = () => {
  const [data, setData] = useState([
    {
      id: 1,
      Batch: 1,
      CompanyName: "TCS",
      OfferLetter: "https://www.tcs.com",
      Verified: "Yes",
      Selected: true,
    },
    {
      id: 2,
      Batch: 1,
      CompanyName: "TCS",
      OfferLetter: "https://www.google.com",
      Verified: "Yes",
      Selected: false,
    },
  ]);

  const handleCheckboxChange = (id) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, Selected: !row.Selected } : row
      )
    );
  };

  const handleVerifySubmit = () => {
    data.filter(row => row.Selected).forEach((row) => {
      console.log(`ID: ${row.id}, Selected: ${row.Selected}, Company Name: ${row.CompanyName}`);
    });
  };

  return (
    <>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Batch</th>
              <th>Company Name</th>
              <th>Offer Letter</th>
              <th>Verified</th>
              <th>Selected</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.Batch}</td>
                <td>{row.CompanyName}</td>
                <td><a href={row.OfferLetter}>Offer Letter</a></td>
                <td>{row.Verified}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={row.Selected}
                    onChange={() => handleCheckboxChange(row.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="verify-button" onClick={handleVerifySubmit}>&#x2713; Verify Selected</button>
      </div>
    </>
  );
};

export default Table;