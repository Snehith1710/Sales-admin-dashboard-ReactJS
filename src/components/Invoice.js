import React from "react";
import "../styles/header.css";
import QuickBooks from "./Quickbooks";

function Invoice() {
  return (
    <>
      <div className="main">
        <div>
          <h5>INVOICE SUMMARY</h5>
        </div>

        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Customer Name</th>
              <th>Invoice Number</th>
              <th>Amount(THB)</th>
              <th>Invoice date</th>
              <th>Payment date</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>XYZ</td>
              <td>TC/16/11/20</td>
              <td>4,000,000</td>
              <td>2/02/2021</td>
              <td>2/02/2021</td>
              <td>Paid</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>ABC</td>
              <td>TC/16/11/20</td>
              <td>80,000,00</td>
              <td>1/03/2021</td>
              <td>2/02/2021</td>
              <td>Paid</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>123</td>
              <td>TC/16/11/20</td>
              <td>2,000,000</td>
              <td>3/03/2021</td>
              <td>2/02/2021</td>
              <td>Paid</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>12ABC</td>
              <td>TC/16/11/20</td>
              <td>1,100,000</td>
              <td>4/04/2021</td>
              <td>2/02/2021</td>
              <td>Paid</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <QuickBooks />
      </div>
    </>
  );
}

export default Invoice;
