import React from "react";

const Layout = ({ label, image, calories }) => {
  return (
    <div className="Layout_wraper">
      <h1>{label}!</h1>
      <div>
        <p> {calories} </p>
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default Layout;
