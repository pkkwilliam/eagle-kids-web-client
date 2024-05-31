import React from "react";
import faqImg from "@assets/img/faq/1.jpg";
import policyImg from "@assets/img/faq/2.jpg";
import trippleLine from "@assets/img/shape/tripple-line.png";
import Image from "next/image";
import { useSelector } from "react-redux";

const ClassDisclaimerBanner = () => {
  const { languageLabel } = useSelector((state) => state.language);
  // const labels = languageLabel?.home?.about ?? {};
  const labels = languageLabel?.component?.classDisclaimerBanner ?? {};
  return (
    <>
      <section className="bd-faq-area pt-120 pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="bd-faq-content mb-60">
                <div
                  className="bd-section-title-wrapper mb-25 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  <h2
                    className="bd-section-title mb-0"
                    dangerouslySetInnerHTML={{ __html: labels.title }}
                  />
                </div>
                <div
                  className="bd-faq wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  <div className="accordion" id="accordionExample">
                    {labels.disclaimers.map((disclaimer, index) => {
                      return (
                        <div
                          className="accordion-item"
                          key={"disclaimer" + index}
                        >
                          <h2
                            className="accordion-header"
                            id={`heading${index}`}
                          >
                            <button
                              className={`accordion-button${
                                index === 0 ? "" : " collapsed"
                              }`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse${index}`}
                              aria-expanded={index === 0 ? "true" : "false"}
                              aria-controls={`collapse${index}`}
                            >
                              {disclaimer.title}
                            </button>
                          </h2>
                          <div
                            id={`collapse${index}`}
                            className={`accordion-collapse${
                              index === 0 ? " collapse show" : " collapse"
                            }`}
                            aria-labelledby={`heading${index}`}
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <ul>
                                {disclaimer.contents.map(
                                  (content, contentIndex) => {
                                    return (
                                      <p
                                        key={"disclaimerContent" + contentIndex}
                                        style={{
                                          display: "list-item",
                                          marginLeft: "1em",
                                        }}
                                      >
                                        {content}
                                      </p>
                                    );
                                  }
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div
                className="bd-faq-thumb-wrapper mb-70 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="bd-faq-thumb">
                  <div
                    className="bd-faq-thumb-mask p-relative wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    <Image
                      src={policyImg}
                      style={{ width: "100%", height: "100%" }}
                      alt="faq img"
                    />
                    <div className="panel-2 wow"></div>
                  </div>
                </div>
                <div className="bd-faq-shape d-none p-relative d-lg-block">
                  <Image
                    src={trippleLine}
                    style={{ width: "100%", height: "100%" }}
                    alt="shape not found"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClassDisclaimerBanner;
