import React, { ReactElement, useState, useEffect } from "react";

//import styled from "@emotion/styled";
import { gsap } from "gsap";

import "../index.scss";
import { useNavigate } from "react-router-dom";

type HeadingProps = {
  title: string;
  fillColor: string;
  loggedIn: boolean;
};


const Heading = ({
  title,
  fillColor,
  loggedIn,
}: HeadingProps): ReactElement => {
  const navigate = useNavigate();
  useEffect(() => {
   
    gsap.to(".titleDiv", {
      duration: 2,
      ease: "power2.in",
      opacity: 1,
      delay: 0,
      onComplete: () => {
        setTimeout(() => {
          gsap.to(".titleDiv", {
            opacity: 0,
            duration: 2,
            onComplete: () => {
              setTimeout(() => {
                navigate("/react-ty-7/canvas");
              }, 1000);
            },
          });
        }, 3000);
      },
    });
  }, [navigate]);

  return (
    <>
      <div className="opener">
        <div className="titleDiv">
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Heading;
