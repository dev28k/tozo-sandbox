/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Form from "react-bootstrap/Form";

const iconStyle = {
  // width: "18px",
  height: "18px",
  marginLeft: "2%",
  marginTop: "21px",
};

export default function ReportSelector() {
  return (
    <div
      className="col-sm-12"
      style={{ padding: "3%", backgroundColor: "#5578EB", borderRadius: 25 }}
    >
      <div style={{ padding: "1%", marginTop: "10%" }}>
        <div className="col-md-6 row">
          <div
            className="col-md-3"
            style={{ marginLeft: "20%", marginTop: "10%" }}
          >
            <img
              src={require("../../assets/images/Vector.png")}
              style={{ height: "70%" }}
              alt=""
            />
          </div>

          <div
            className="col-sm-3"
            style={{
              // backgroundColor: '#000',
              // width: "138px",
              // height: "33px",
              // left: "4px",
              marginTop: "13%",
              fontFamily: "Poppins'",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "14px",
              color: "#9BBEFF",
            }}
          >
            Report
          </div>
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={iconStyle}
          className="col-sm-2"
          src={require("../../assets/images/fbicon.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Facebook
          <div style={{ fontSize: "12px", fontWeight: "400" }}>Report</div>
        </div>
        <div className="col">
          {/* <img
            style={{
              height: "60px",
              width: "60px",
            }}
            className="col-sm-2"
            src={require("../../assets/images/noti.png")}
          /> */}
          <Form.Check
            style={{
              marginTop: "33%",
              marginLeft: "55%",
              // height: "15px",
              // width: "15px",
            }}
            name={"report_radio"}
            type={"radio"}
            // checked
            // label=}
            // id={`disabled-default-${type}`}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={iconStyle}
          className="col-sm-2"
          src={require("../../assets/images/instaicon.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Instagram
          <div style={{ fontSize: "12px", fontWeight: 400 }}>Report</div>
        </div>
        <div className="col">
          <Form.Check
            style={{
              marginTop: "33%",
              marginLeft: "55%",
              // height: "15px",
              // width: "15px",
            }}
            name={"report_radio"}
            type={"radio"}
            // label=}
            // id={`disabled-default-${type}`}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={iconStyle}
          className="col-sm-2"
          src={require("../../assets/images/Vectortwitter.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Twitter
          <div style={{ fontSize: "12px", fontWeight: 400 }}>Report</div>
        </div>
        <div className="col">
          <Form.Check
            style={{
              marginTop: "33%",
              marginLeft: "55%",
              // height: "15px",
              // width: "15px",
            }}
            name={"report_radio"}
            type={"radio"}
            // label=}
            // id={`disabled-default-${type}`}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={iconStyle}
          className="col-sm-2"
          src={require("../../assets/images/linkedin.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          LinkedIn
          <div style={{ fontSize: "12px", fontWeight: 400 }}>Report</div>
        </div>
        <div className="col">
          <Form.Check
            style={{
              marginTop: "33%",
              marginLeft: "55%",
              // height: "15px",
              // width: "15px",
            }}
            name={"report_radio"}
            type={"radio"}
            // label=}
            // id={`disabled-default-${type}`}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={iconStyle}
          className="col-sm-2"
          src={require("../../assets/images/pinterest.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Pinterest
          <div style={{ fontSize: "12px", fontWeight: 400 }}>Report</div>
        </div>
        <div className="col">
          <Form.Check
            style={{
              marginTop: "33%",
              marginLeft: "55%",
              // height: "15px",
              // width: "15px",
            }}
            name={"report_radio"}
            type={"radio"}
            // label=}
            // id={`disabled-default-${type}`}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={iconStyle}
          className="col-sm-2"
          src={require("../../assets/images/fa_telegram.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Telegram
          <div style={{ fontSize: "12px", fontWeight: 400 }}>Report</div>
        </div>
        <div className="col">
          <Form.Check
            style={{
              marginTop: "33%",
              marginLeft: "55%",
              // height: "15px",
              // width: "15px",
            }}
            name={"report_radio"}
            type={"radio"}
            // label=}
            // id={`disabled-default-${type}`}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={iconStyle}
          className="col-sm-2"
          src={require("../../assets/images/tumbler.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Tumbler
          <div style={{ fontSize: "12px", fontWeight: 400 }}>Report</div>
        </div>
        <div className="col">
          <Form.Check
            style={{
              marginTop: "33%",
              marginLeft: "55%",
              // height: "15px",
              // width: "15px",
            }}
            name={"report_radio"}
            type={"radio"}
            // label=}
            // id={`disabled-default-${type}`}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={iconStyle}
          className="col-sm-2"
          src={require("../../assets/images/reddit.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Reddit
          <div style={{ fontSize: "12px", fontWeight: 400 }}>Report</div>
        </div>
        <div className="col">
          <Form.Check
            style={{
              marginTop: "33%",
              marginLeft: "55%",
              // height: "15px",
              // width: "15px",
            }}
            name={"report_radio"}
            type={"radio"}
            // label=}
            // id={`disabled-default-${type}`}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={iconStyle}
          className="col-sm-2"
          src={require("../../assets/images/vk.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Vk
          <div style={{ fontSize: "12px", fontWeight: 400 }}>Report</div>
        </div>
        <div className="col">
          <Form.Check
            style={{
              marginTop: "33%",
              marginLeft: "55%",
              // height: "15px",
              // width: "15px",
            }}
            name={"report_radio"}
            type={"radio"}
            // label=}
            // id={`disabled-default-${type}`}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={iconStyle}
          className="col-sm-2"
          src={require("../../assets/images/youtube.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Youtube
          <div style={{ fontSize: "12px", fontWeight: 400 }}>Report</div>
        </div>
        <div className="col">
          <Form.Check
            style={{
              marginTop: "33%",
              marginLeft: "55%",
              // height: "15px",
              // width: "15px",
            }}
            name={"report_radio"}
            type={"radio"}
            // label=}
            // id={`disabled-default-${type}`}
          />
        </div>
      </div>

      <div
        style={{ marginLeft: "8px", marginBottom: "20%" }}
        className="row Nav-nonselector"
      >
        <img
          style={iconStyle}
          className="col-sm-2"
          src={require("../../assets/images/store.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // width: "100%",
            // backgroundColor: "#fff",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "12px",
            lineHeight: "21px",
          }}
        >
          Google My Business
          <div style={{ fontSize: "12px", fontWeight: 400 }}>Report</div>
        </div>
        <div className="col">
          <Form.Check
            style={{
              marginTop: "33%",
              marginLeft: "55%",
              // height: "15px",
              // width: "15px",
            }}
            name={"report_radio"}
            type={"radio"}
            // label=}
            // id={`disabled-default-${type}`}
          />
        </div>
      </div>
    </div>
  );
}
