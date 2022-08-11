import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Button from "react-bootstrap/Button";

export default function RSSFeed() {
  return (
    <div className="col-sm-12">
      <div className="col-sm-12 g-0" style={{ padding: "1%" }}>
        <div className="row">
          <div
            className="col-sm-1"
            style={{
              marginLeft: "2.26%",
              marginRight: "-4.68%",
              marginTop: "0.46%",
              // marginBottom: "96.8%",
            }}
          >
            <img src={require("../../assets/images/rss.png")} />
          </div>

          <div
            className="col-sm-3"
            style={{
              fontFamily: "Poppins'",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "22px",
              lineHeight: "33px",
              color: "#5578EB",
              //   marginRight: "55%",
              marginTop: "0.3%",
            }}
          >
            RSS Feed
          </div>
        </div>
      </div>

      <div
        className="col-sm-12"
        style={{
          marginTop: "1.5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="col-sm-12"
          style={{
            backgroundColor: "#9BBEFF",
            width: "70%",
            borderRadius: "20px",
          }}
        >
          <div className="row">
            <div
              className="col-sm-7"
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "16px",
                textTransform: "capitalize",
                color: "#5578EB",
                marginLeft: "2%",
                marginTop: "1%",
              }}
            >
              Add RSS Feed
            </div>
            <div className="col-sm-4" style={{ textAlign: "right" }}>
              {/* <AiOutlineCloseCircle
                color="#000"
                size="22px"
                style={{ marginTop: "3%", marginLeft: "100%" }}
              /> */}
              <img style={{ marginTop: "3%", marginLeft: "100%", width: '10%' }} src={require('../../assets/images/close.png')} alt="" />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "8%",
            }}
          >
            <input
              type={"text"}
              placeholder="Enter Clickable Link"
              value="Clickback URL: http//tozo.social/facebook_profiles"
              style={{
                width: "90%",
                borderRadius: "8px",
                height: "35px",
                color: "#5578EB",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "13px",
                textAlign: "center",
              }}
            />
          </div>

          <div
            className="col-sm-12"
            style={{
              //   width: "60%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "98px",
            }}
          >
            <div className="row" style={{ width: "100%", marginBottom: '3%' }}>
              <div className="col-sm-6">
                <Button style={{marginLeft: '12%'}} variant="outline-primary" size={"md"}>
                  <div style={{ fontSize: "12px" }}>Close</div>
                </Button>{" "}
              </div>

              <div className="col-sm-6">
                <Button
                  style={{ marginLeft: "70%", backgroundColor: '#5578EB' }}
                  variant="info"
                  size={"lg"}
                >
                  <div style={{ fontSize: "12px" }}>Submit</div>
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
