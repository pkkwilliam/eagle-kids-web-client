import React, { useEffect } from "react";
import { animationCreate } from "../utils/utils";
import BackToTopCom from "@components/common/scroll-to-top";

const Wrapper = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 200);
    loadGoogleAdTag();
  }, []);
  return (
    <>
      {children}
      <BackToTopCom />
    </>
  );
};

const loadGoogleAdTag = () => {
  // Create the script tag for gtag.js
  const scriptTag = document.createElement("script");
  scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=AW-16588567823";
  scriptTag.async = true;
  document.head.appendChild(scriptTag);

  // Create the inline script for initializing gtag
  const inlineScript = document.createElement("script");
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-16588567823');
  `;
  document.head.appendChild(inlineScript);
};

export default Wrapper;
