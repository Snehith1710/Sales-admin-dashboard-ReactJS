import React from "react";

function Expenses() {
  return (
    <>
      <div style={{ backgroundColor: "#fff", padding: "40px" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h5>Monthly Expenses Summary</h5>
          </div>
          <br />
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>BOI Salary</th>
                <th>Non-BOI Salary</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>January</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>February</td>

                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>March</td> <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>April</td> <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>May</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>June</td> <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>July</td> <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>August</td> <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>September</td> <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>October</td> <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>November</td> <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>December</td>
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

export default Expenses;
