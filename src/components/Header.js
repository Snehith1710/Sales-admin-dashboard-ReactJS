import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "../styles/header.css";
import "./Expenses";

function Header() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div>
        <h5 style={{ padding: "20px 0 0 20px", color: "rgb(4,16,179)" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            Tech Curve AI & Innovations
          </a>
        </h5>
        <div className="row px-5 py-5 heading">
          <div className="col-lg-3">
            <div className="box">
              <p style={{ fontWeight: 600 }}>
                <a href="/Profitandloss">PROFIT/LOSS</a>
              </p>
              <p>
                <b>40,000,00.00 THB</b>
              </p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div className="col-lg-3">
            <div className="box">
              <div>
                <p style={{ fontWeight: 600 }}>
                  <a href="/Revenue">REVENUE</a>
                </p>
                <p>
                  <b>60,000,00.00 THB</b>
                </p>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="box">
              <p style={{ fontWeight: 600 }}>
                <a href="/Expenses">EXPENSES</a>
              </p>
              <p>
                <b>20,000,00.00 THB</b>
              </p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div className="col-lg-3">
            <div className="box">
              <p style={{ fontWeight: 600 }}>BANK BALANCE</p>
              <p>
                <b>40,000,00.00 THB</b>
              </p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
