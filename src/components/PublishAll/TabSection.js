import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";

const Photo = () => {
  return (
    <div>
      <Card
        style={{ height: "130px", width: "139%", marginLeft: "-20%" }}
      ></Card>
      <Card
        style={{
          display: "flex",
          borderColor: "#fff",
          borderWidth: 1,
          width: "139%",
          marginLeft: "-20%",
        }}
      >
        <div style={{backgroundColor: ''}}>

        </div>
      </Card>
    </div>
  );
};

const Video = () => {};

const Link = () => {};

const Text = () => {};

export default function TabSection() {
  const [key, setKey] = useState("photo");

  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      defaultActiveKey="photo"
      className="mb-3 gbcolor"
      fill
    >
      <Tab eventKey="photo" title="Photo">
        <Photo />
      </Tab>
      <Tab eventKey="video" title="Video">
        <Video />
      </Tab>
      <Tab eventKey="link" title="Link">
        <Link />
      </Tab>
      <Tab eventKey="text" title="Text">
        <Text />
      </Tab>
    </Tabs>
  );
}
