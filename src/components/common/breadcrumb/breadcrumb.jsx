import Link from "next/link";
import React from "react";
import Image from "next/image";
import bg from "@assets/img/bg/breadcrumb-bg.jpg";
import line_1 from "@assets/img/shape/white-curved-line.png";
import line_2 from "@assets/img/shape/curved-line-2.png";
import { useSelector } from "react-redux";

const Breadcrumb = ({ title, subTitle }) => {
  const { languageLabel } = useSelector((state) => state.language);
  const labels = languageLabel ?? {};
  return (
    <section className="bd-breadcrumb-area p-relative fix theme-bg">
      <div
        className="bd-breadcrumb-bg"
        // style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="bd-breadcrumb-wrapper mb-60 p-relative">
        <div className="container">
          <div className="bd-breadcrumb-shape d-none d-sm-block p-relative">
            <div className="bd-breadcrumb-shape-1">
              <Image
                src={line_2}
                style={{ width: "100%", height: "100%" }}
                alt="img not found"
              />
            </div>
            <div className="bd-breadcrumb-shape-2">
              <Image
                src={line_1}
                style={{ width: "100%", height: "100%" }}
                alt="img not found"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="bd-breadcrumb d-flex align-items-center justify-content-center">
                <div className="bd-breadcrumb-content text-center">
                  {/* <h1 className="bd-breadcrumb-title">{title}</h1> */}
                  <div className="bd-breadcrumb-list">
                    <span>
                      <Link href="/">
                        <i className="flaticon-hut"></i>
                        {labels.schoolName}
                      </Link>
                    </span>
                    <span>{subTitle}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bd-wave-wrapper bd-wave-wrapper-3">
        <div className="bd-wave bd-wave-3"></div>
        <div className="bd-wave bd-wave-3"></div>
      </div>
    </section>
  );
};

export default Breadcrumb;
