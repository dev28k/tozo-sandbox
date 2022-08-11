import React from "react";
import Card from "react-bootstrap/Card";
import ReportSelector from "./DashboardComponents/ReportSelector";
import Charts from "./charts/Charts";
import DoughnutChart from "./charts/ Doughnut";
import { RiTelegramLine } from "react-icons/ri";
import { BiErrorCircle } from "react-icons/bi";
// import { ImSigma } from "react-icons/im";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Dashboard() {
  return (
    <div className="col-sm-12 g-0">
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
            <img src={require("../assets/images/vector_ek12.png")} alt="" />
          </div>

          <div
            className="col-sm-3"
            style={{
              // backgroundColor: '#000',
              // width: "138px",
              // height: "33px",
              // left: "4px",
              fontFamily: "Poppins'",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "22px",
              lineHeight: "33px",
              color: "#5578EB",
              marginRight: "55%",
              marginTop: "0.3%",
            }}
          >
            All Report
          </div>
        </div>
      </div>

      <div className="col-sm-12 g-0">
        <div className="row" style={{ width: "100%", marginLeft: "0.09%" }}>
          <div className="col-sm-3">
            <ReportSelector />
          </div>

          <div className="col-sm-9 g-0">
            <div
              className="row"
              style={{ width: "100%", marginBottom: "21px", marginTop: "-2%" }}
            >
              <div
                className="col-sm-10"
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "21px",
                  textTransform: "capitalize",
                  color: "#ACACAC",
                  textAlign: "right",
                }}
              >
                Show{" "}
              </div>
              <div
                className="col-sm-2"
                style={{
                  // width: "100%",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "21px",
                  textTransform: "capitalize",

                  color: "#253D4E",
                }}
              >
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="This Month"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="#action/3.1">
                    This Month
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Last Month
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Last 6 Months
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>

            <Card
              className="col-sm-12 g-0"
              style={{
                boderColor: "#fff",
                borderRadius: "25px",
                width: "99.5%",
              }}
            >
              <div className="row" style={{ width: "100%" }}>
                <div className="col-sm-8">
                  <Card style={{ border: "none", borderRadius: "25px" }}>
                    <Card.Body>
                      <Card.Title
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "20px",

                          /* identical to box height, or 111% */
                          textTransform: "capitalize",

                          color: "#5578EB",
                        }}
                      >
                        Post Status
                      </Card.Title>
                      <Charts />
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-sm-4">
                  <Card
                    style={{
                      width: "100%",
                      border: "none",
                      // backgroundColor: '#000',
                      height: "100%",
                    }}
                  >
                    <Card.Body>
                      <Card.Title
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "20px",

                          /* identical to box height, or 111% */
                          textTransform: "capitalize",

                          color: "#5578EB",
                        }}
                      >
                        Post Type
                      </Card.Title>
                      <DoughnutChart />
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Card>

            <div
              className="col-sm-12 row justify-content-space-between"
              style={{ justifyContent: "space-between", alignItems: "center", marginLeft: '0.09%', marginTop: '1%' }}
            >
              <Card
                className="col-sm-4"
                style={{ borderRadius: "25px"}}
              >
                <div className="row  dashboard_Bottom_card">
                  <div
                    className="col"
                    style={{
                      width: "28px",
                      height: "36px",
                      marginLeft: "30px",
                      marginTop: "21px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "24px",
                      lineHeight: "36px",
                      /* identical to box height */
                      color: "#5578EB",
                    }}
                  >
                    22
                    <div
                      style={{
                        fontFamily: "'Roboto'",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "12px",
                        lineHeight: "22px",
                        textTransform: "capitalize",
                        color: "#717479",
                      }}
                    >
                      Successed
                    </div>
                  </div>

                  <div className="col">
                    <RiTelegramLine
                      style={{ marginTop: "7px", marginLeft: "10%" }}
                      color="#5578EB"
                      size={75}
                    />
                  </div>
                </div>
              </Card>

              <Card
                className="col-sm-4"
                style={{ borderRadius: "25px"}}
              >
                <div className="row  dashboard_Bottom_card1">
                  <div
                    className="col"
                    style={{
                      width: "28px",
                      height: "36px",
                      marginLeft: "30px",
                      marginTop: "21px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "24px",
                      lineHeight: "36px",
                      /* identical to box height */
                      color: "#FFCF6D",
                    }}
                  >
                    22
                    <div
                      style={{
                        fontFamily: "'Roboto'",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "12px",
                        lineHeight: "22px",
                        textTransform: "capitalize",
                        color: "#717479",
                      }}
                    >
                      Successed
                    </div>
                  </div>

                  <div className="col">
                    <BiErrorCircle
                      style={{ marginTop: "10px", marginLeft: "10%" }}
                      color="#FFCF6D"
                      size={75}
                    />
                  </div>
                </div>
              </Card>

              <Card
                className="col-sm-4"
                style={{ borderRadius: "25px"}}
              >
                <div className="row  dashboard_Bottom_card2">
                  <div
                    className="col"
                    style={{
                      width: "28px",
                      height: "36px",
                      marginLeft: "30px",
                      marginTop: "21px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "24px",
                      lineHeight: "36px",
                      /* identical to box height */
                      color: "#3BB77E",
                    }}
                  >
                    22
                    <div
                      style={{
                        fontFamily: "'Roboto'",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "12px",
                        lineHeight: "22px",
                        textTransform: "capitalize",
                        color: "#717479",
                      }}
                    >
                      Successed
                    </div>
                  </div>

                  <div className="col">
                    {/* <RiTelegramLine
                      style={{ marginTop: "10px", marginLeft: "10%" }}
                      color="#3BB77E"
                      size={75}
                    /> */}
                    <img src={require('../assets/images/sigmaIcon.png')} width={"65%"} style={{marginTop: '12px'}} />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
