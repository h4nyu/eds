import React, { CSSProperties } from "react";
import PageLayout from ".";

const Mock = (props: { name?: string; style?: CSSProperties }) => {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div
      className="card"
      style={{
        backgroundColor: `#${color}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...props.style,
      }}
    >
      {props.name ? props.name : "Mock Component"}
    </div>
  );
};

export default {
  title: "PageLayout",
  component: PageLayout,
};

export const Primary = (args) => <PageLayout 
  header={<Mock name="header" />}  
  content={<Mock name="content" style={{height: 2000 }}/>}  
  sidebar={<Mock name="sidebar" style={{height: 2000 }}/>}  
/>;
