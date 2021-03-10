import React from "react";

function Revenue() {
  return (
    <>
      <div style={{ backgroundColor: "#fff", padding: "40px" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h5>Monthly Revenue Summary</h5>
          </div>
          <br />

          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Service/Product</th>
                <th colSpan="2">PO</th>
                <th colSpan="3">Invoice</th>
                <th colSpan="3">Payment</th>
                <th>Payment Delay</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <th>Invoice</th>
                <th>Date Received</th>
                <th>No.</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Received</th>
                <th>Due</th>
                <th>Date</th>
                <th></th>
              </tr>

              <tr>
                <td>XYZ</td>
                <td>MixIT</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>ABC</td>
                <td>MixIT</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>123</td>
                <td>MixIT</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Revenue;
