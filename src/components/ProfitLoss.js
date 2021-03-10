import React from "react";
import "../styles/header.css";

function ProfitLoss() {
  return (
    <>
      <div style={{ backgroundColor: "#fff", padding: "40px" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}>
            <h5>Profit/Loss Monthly Summary</h5>
          </div>

          <table className="align-items-center">
            <thead>
              <tr>
                <th>Month</th>
                <th>Revenue</th>
                <th>Expenses</th>
                <th>Profit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JAN</td>
                <td>4,000,000</td>
                <td>1,200.000</td>
                <td>3,800,000</td>
              </tr>
              <tr>
                <td>FEB</td>
                <td>5,000,000</td>
                <td>2,000,000</td>
                <td>3,000,000</td>
              </tr>
              <tr>
                <td>MAR</td>
                <td>5,000,000</td>
                <td>1,000,000</td>
                <td>4,000,000</td>
              </tr>
              <tr>
                <td>APR</td>
                <td>6,000,000</td>
                <td>1,000,000</td>
                <td>5,000,000</td>
              </tr>
              <tr>
                <td>MAY</td>
                <td>7,000,000</td>
                <td>1,000,000</td>
                <td>6,000,000</td>
              </tr>
              <tr>
                <td>JUN</td>
                <td>4,000,000</td>
                <td>1,000,000</td>
                <td>3,000,000</td>
              </tr>
              <tr>
                <td>JUL</td>
                <td>6,000,000</td>
                <td>3,000,000</td>
                <td>3,000,000</td>
              </tr>
              <tr>
                <td>AUG</td>
                <td>7,000,000</td>
                <td>1,000,000</td>
                <td>6,000,000</td>
              </tr>
              <tr>
                <td>SEP</td>
                <td>8,000,000</td>
                <td>2,000,000</td>
                <td>6,000,000</td>
              </tr>
              <tr>
                <td>OCT</td>
                <td>9,000,000</td>
                <td>2,000,000</td>
                <td>7,000,000</td>
              </tr>
              <tr>
                <td>NOV</td>
                <td>10,000,000</td>
                <td>2,000,000</td>
                <td>8,000,000</td>
              </tr>
              <tr>
                <td>DEC</td>
                <td>7,000,000</td>
                <td>2,000,000</td>
                <td>5,000,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProfitLoss;
