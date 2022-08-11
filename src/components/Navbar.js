/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import ".././App.css";
import WebFont from "webfontloader";

const navbarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const logoImage = {
  width: "70%",
  marginBottom: "27px",
  marginTop: "10%",
};

const navItem = {
  marginLeft: "2%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const navItemIcon = {
  // width: "18px",
  height: "18px",
  marginLeft: "45%",
  marginTop: "1%",
};

const navItemText = {
  marginTop: "1%",
  // marginLeft: "10px",
  color: "#5578eb",
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "13px",
  lineHeight: "21px",
};

const navItemText1 = {
  marginTop: "1%",
  // marginLeft: "10px",
  color: "#fff",
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "13px",
  lineHeight: "21px",
};

const items = [
  {
    index: 0,
    icon: "../assets/images/Vectordashboardicon.png",
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    index: 1,
    icon: "../assets/images/Vectorpublishicon.png",
    title: "Publish All",
    path: "/publishall",
  },
];

export default function Navbar() {
  useEffect(() => {
    console.log(items);
    WebFont.load({
      google: {
        families: ["Poppins", "Chilanka"],
      },
    });
  }, []);

  return (
    <div className="col-sm-12 Navbar">
      {/* logo */}
      <div style={navbarStyle}>
        <img style={logoImage} src={require("../assets/images/logo.png")} />
      </div>

      <div className="main-menu-text">Main Menu</div>

      {/* Navbar Items */}
      <div style={navItem} className="row Nav-selector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/Vectordashboardicon.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText}>
          Dashboard
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/Vectorpublishicon.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Publish All
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/fa_feedrssfeed.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          RSS Feed
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/fbicon.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Facebook
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/instaicon.png")}
          />
        </div>
        <div className="col-sm-5" style={navItemText1}>
          Instagram
        </div>
        <div className="col-sm-4">
          <img
            style={{
              height: "95%",
              width: "95%",
              marginTop: "4px",
            }}
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/Vectortwitter.png")}
          />
        </div>
        <div className="col-sm-5" style={navItemText1}>
          Twitter
        </div>
        <div className="col-sm-4">
          <img
            style={{
              height: "95%",
              width: "95%",
              marginTop: "4px",
            }}
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/pinterest.png")}
          />
        </div>
        <div className="col-sm-5" style={navItemText1}>
          Pinterest
        </div>
        <div className="col-sm-4">
          <img
            style={{
              height: "95%",
              width: "95%",
              marginTop: "4px",
            }}
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/linkedin.png")}
          />
        </div>
        <div className="col-sm-5" style={navItemText1}>
          Linkedin
        </div>
        <div className="col-sm-4">
          <img
            style={{
              height: "95%",
              width: "95%",
              marginTop: "4px",
            }}
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/fa_telegram.png")}
          />
        </div>
        <div className="col-sm-5" style={navItemText1}>
          Telegram
        </div>
        <div className="col-sm-4">
          <img
            style={{
              height: "95%",
              width: "95%",
              marginTop: "4px",
            }}
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/tumbler.png")}
          />
        </div>
        <div className="col-sm-5" style={navItemText1}>
          Tumbler
        </div>
        <div className="col-sm-4">
          <img
            style={{
              height: "95%",
              width: "95%",
              marginTop: "4px",
            }}
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/reddit.png")}
          />
        </div>
        <div className="col-sm-5" style={navItemText1}>
          Reddit
        </div>
        <div className="col-sm-4">
          <img
            style={{
              height: "95%",
              width: "95%",
              marginTop: "4px",
            }}
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img style={navItemIcon} src={require("../assets/images/vk.png")} />
        </div>
        <div className="col-sm-5" style={navItemText1}>
          Vk
        </div>
        <div className="col-sm-4">
          <img
            style={{
              height: "95%",
              width: "95%",
              marginTop: "4px",
            }}
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/youtube.png")}
          />
        </div>
        <div className="col-sm-5" style={navItemText1}>
          Youtube
        </div>
        <div className="col-sm-4">
          <img
            style={{
              height: "95%",
              width: "95%",
              marginTop: "4px",
            }}
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/store.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Google My Business
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/people-team.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Team Manager
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/proxy.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Advance Proxy Manager
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/coupanmanager.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Coupan Manager
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/scheduler.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Schedules
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/account.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Account Manager
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/fileManager.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          File Manager
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/groupmanager.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Group Manager
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/caption.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Caption
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/watermark.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Watermark
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/package.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Package Manage
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/proxymanager.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Proxy Manage
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img style={navItemIcon} src={require("../assets/images/user.png")} />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          User Management
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/language.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Language
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/payment.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Payment Manager
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img style={navItemIcon} src={require("../assets/images/blog.png")} />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Blog Manager
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img style={navItemIcon} src={require("../assets/images/faq.png")} />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          FAQs Manager
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/modules.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Modules & Themes
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/payment.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Payment Manager
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img
            style={navItemIcon}
            src={require("../assets/images/settings.png")}
          />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Settings
        </div>
      </div>

      <div style={navItem} className="row Nav-nonselector">
        <div className="col-sm-3">
          <img style={navItemIcon} src={require("../assets/images/cron.png")} />
        </div>
        <div className="col-sm-9" style={navItemText1}>
          Cronjobs
        </div>
      </div>

      <div className="col-sm-12">
        <img
          style={{
            // width: "18px",
            // height: "200px",
            marginTop: "15px",
          }}
          className="col-sm-12"
          src={require("../assets/images/navFooter.png")}
        />
      </div>
    </div>
  );
}
