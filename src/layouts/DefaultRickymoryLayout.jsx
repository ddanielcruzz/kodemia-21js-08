import React, { Fragment } from "react";
import { Navbar } from "../components/Navbar";

export const DefaultRickymoryLayout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <div className="flex flex-col items-center text-center space-y-4 pt-10">
          {props.children}
        </div>
      </main>
      <footer className="mx-auto w-max py-10">Footer perrón 🐩</footer>
    </Fragment>
  );
};
