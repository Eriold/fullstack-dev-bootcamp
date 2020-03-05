import React from "react";

function MainLayout({ content }) {
  return (
    <div>
      <h1 className="main-title">Mini Translator</h1>
      <div>{content}</div>
    </div>
  );
}

export default MainLayout;
