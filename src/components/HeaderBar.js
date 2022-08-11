/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Button from "react-bootstrap/Button";
import { Badge } from "customizable-react-badges";
import { MdViewModule, MdStarRate, MdFeed } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { TbBellRinging2 } from "react-icons/tb";

export default function HeaderBar() {
  return (
    <div className="header col-sm-12">
      <div className="row col-sm-12 header-content g-0">
        <div className="col-sm-2 header-heading">Dashboard</div>

        {/* Search Input */}
        <div className="col-sm-2">
          <div className="row search-wrapper" style={{ marginTop: "5%" }}>
            <div
              className="col-sm-9"
              style={{
                // width:'50%',
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: 10,
                // lineHeight: "32px",
                color: "#fff",
                // backgroundColor: "#fff"
              }}
            >
              <input
                className="searchInput col-sm-12"
                placeholder="Search Items..."
                style={{ color: "#fff", height: "100%" }}
              />
            </div>
            <div
              className="col-sm-3"
              // style={{backgroundColor: "#fff" }}
            >
              <FaSearch color="#fff" style={{ marginTop: "47%" }} />
            </div>
          </div>
        </div>

        {/* Notifications icons */}
        <div className="col-sm-3">
          <div className="row col-sm-12" style={{ marginTop: "2.5%" }}>
            <div className="col-sm-3">
              <Badge
                content={4}
                verticalAlignment="top"
                horizontalAlignment="right"
                bgColor="#FFA7D7"
                contentColor="#fff"
                max="99"
                style={{ width: "26px", height: "12px" }}
              >
                <MdStarRate
                  style={{ marginTop: "30%" }}
                  color="#000"
                  size="30px"
                />
              </Badge>
            </div>

            <div className="col-sm-3">
              <Badge
                content={4}
                verticalAlignment="top"
                horizontalAlignment="right"
                bgColor="#FFCF6D"
                contentColor="#fff"
                max="99"
                style={{ width: "26px", height: "12px" }}
              >
                <img
                  style={{ marginTop: "30%" }}
                  // style={{ width: "100%", height: "100%" }}
                  src={require("../assets/images/bell.png")}
                />
              </Badge>
            </div>

            <div className="col-sm-3">
              <Badge
                content={4}
                verticalAlignment="top"
                horizontalAlignment="right"
                bgColor="#FC2E54"
                contentColor="#fff"
                max="99"
                style={{ width: "26px", height: "12px" }}
              >
                <img
                  style={{ marginTop: "30%" }}
                  // style={{ width: "100%", height: "100%" }}
                  src={require("../assets/images/msg.png")}
                />
              </Badge>
            </div>

            <div className="col-sm-3">
              <Badge
                content={4}
                verticalAlignment="top"
                horizontalAlignment="right"
                bgColor="#09BD3D"
                contentColor="#fff"
                max="99"
                style={{ width: "26px", height: "12px" }}
              >
                <MdFeed style={{ marginTop: "30%" }} color="#000" size="30px" />
              </Badge>
            </div>

            {/* <img
              className="col-sm-3"
              style={{ width: "25%", height: "25%" }}
              src={require("../assets/images/bell.png")}
            />
            <img
              className="col-sm-3"
              style={{ width: "25%", height: "25%" }}
              src={require("../assets/images/msg.png")}
            />
            <img
              className="col-sm-3"
              style={{ width: "25%", height: "25%" }}
              src={require("../assets/images/feed.png")}
            /> */}
          </div>
        </div>

        {/* right items */}
        <div className="col-sm-5">
          <div className="col-sm-12 g-0">
            <div className="row" style={{ width: "100%" }}>
              <div className="col-sm-4">
                <Button
                  style={{ width: "100%", marginTop: "5%", height: "100%" }}
                  size="sm"
                  variant="dark"
                >
                  Upgrade Now
                </Button>
              </div>

              <div className="col-sm-1" style={{ marginTop: "3%" }}>
                {/* <img
                  style={{ width: "auto", height: "40%", marginTop: '10%' }}
                  src={require("../assets/images/modules.png")}
                /> */}
                <MdViewModule
                  style={{ height: "100%" }}
                  color="#fff"
                  size="30px"
                />
              </div>

              <div className="col-sm-1" style={{ marginTop: "3%" }}>
                <IoMdSettings
                  style={{ height: "100%", marginLeft: '50%' }}
                  color="#fff"
                  size="27px"
                />
              </div>

              <div className="col-sm-6" style={{ marginTop: "2%" }}>
                <div
                  className="row"
                  style={{width: "100%", marginLeft: '10%' }}
                >
                  <div
                    className="col-sm-6"
                    style={{
                      marginTop: "5%",
                      color: "#fff",
                      fontFamily: "Poppins",
                      fontSize: 14,
                      fontWeight: 600,
                      // lineHeight: "20px",
                    }}
                  >
                    Hi, Sameer
                  </div>
                  <div className="col-sm-4">
                    <div style={{ height: "100%", marginTop: "4%", marginLeft: '35%' }}>
                      <FaUserCircle
                        style={{ height: "100%" }}
                        color="#fff"
                        size="35px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
