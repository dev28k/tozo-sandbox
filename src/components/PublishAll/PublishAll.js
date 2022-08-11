import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import TabSection from "./TabSection";

const cardStyle = {
  display: "flex",
  // alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  marginTop: "10%",
  height: "800px",
};

export default function PublishAll() {
  return (
    <div className="col-sm-12">
      <div className="col-sm-12 g-0">
        <div className="row">
          <div
            className="col-sm-1"
            style={{
              marginLeft: "1.26%",
              marginRight: "-4.68%",
              marginTop: "0.46%",
              // marginBottom: "96.8%",
            }}
          >
            <img src={require("../../assets/images/Frame.png")} />
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
            Publish Content
          </div>

          <div
            className="col-sm-1"
            style={{
              marginTop: "0.46%",
              // marginBottom: "96.8%",
            }}
          >
            <img src={require("../../assets/images/edit.png")} />
          </div>

          <div
            className="col-sm-3"
            style={{
              fontFamily: "Poppins'",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "18px",
              color: "#5578EB",
              marginTop: "0.4%",
              marginLeft: "-5%",
            }}
          >
            New Post
          </div>
        </div>
      </div>

      <div className="col-sm-12" style={{ marginTop: "1%" }}>
        <div
          className="row"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <Card className="col-sm-3 publishCardBackground col-sm-3-tab">
            <div style={cardStyle}>
              <div
                style={{
                  backgroundColor: "#F5F5F5",
                  border: "1px dashed #343A40",
                  borderRadius: "8px",
                  width: "95%",
                  height: "30%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={require("../../assets/images/addaccount.png")}
                  alt=""
                />
                <Button
                  style={{
                    marginTop: "15%",
                    backgroundColor: "#000000 69%",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "21px",

                    /* identical to box height */

                    color: "#FFFFFF",

                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

                    /* Inside auto layout */
                    flex: "none",
                    order: 0,
                    flexGrow: 0,
                  }}
                  variant="dark"
                  size="lg"
                >
                  Add Account
                </Button>
              </div>
            </div>
          </Card>

          <Card className="col-sm-5 publishCardBackground col-sm-4-tab ">
            <div style={cardStyle}>
              <div
              style={{width: '70%'}}
                // style={{
                //   backgroundColor: "#F5F5F5",
                //   border: "1px dashed #343A40",
                //   borderRadius: "8px",
                //   width: "95%",
                //   height: "30%",
                //   display: "flex",
                //   flexDirection: "column",
                //   alignItems: "center",
                //   justifyContent: "center",
                // }}
              >
                <TabSection />
              </div>
            </div>
          </Card>
          <Card className="col-sm-3 publishCardBackground"></Card>
        </div>
      </div>
    </div>
  );
}
