import class_data from "@data/class-data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getClasses } from "src/middleware/apiDataService";
import { store } from "src/redux/store";
import img_1 from "@assets/img/class/6.jpg";
import author_1 from "@assets/img/teacher/small-1.png";
import { TRIAL_TYPE_FREE } from "src/enum/TrialType";
import SmallPrimaryButton from "@components/common/SmallPrimaryButton";
import { getServerLocalizedLabel } from "@utils/localized-util";

const ClassPageMain = ({ trialPage = false }) => {
  const { languageLabel, selectedLanguage } = useSelector(
    (state) => state.language
  );
  const [classes, setClasses] = useState([]);

  const labels = languageLabel?.component?.classPageMain ?? {};
  const enumLabels = languageLabel?.enum ?? { priceUnit: {} };

  const fetchClasses = async () => {
    const classes = await getClasses(store);
    setClasses(classes.filter((clazz) => !trialPage || clazz.trialAvailable));
  };
  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <section className="bd-class-area pt-110 pb-70">
      <div className="container">
        <div className="row">
          {classes.map((item) => {
            // const clazz = item?.localized?.[selectedLanguage] ?? {};
            const clazz = getServerLocalizedLabel(item, selectedLanguage);
            const instructor = item.instructor;
            const localizedInstructor =
              instructor?.localized?.[selectedLanguage];
            return (
              <div className="col-xl-4 col-lg-6 col-md-6" key={item.id}>
                <div
                  className="bd-class-3 fix radius-24 p-relative mb-50 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={item.delay}
                >
                  <div className="bd-class-thumb">
                    <Image
                      src={item?.imageUrls?.[0] ? item.imageUrls?.[0] : img_1}
                      // style={{ width: "100%", height: "100%" }}
                      height={1}
                      width={1}
                      alt="img not found"
                    />
                  </div>
                  <div className="bd-class-content-3 theme-bg-6 ">
                    <h3 className="bd-class-title-3">
                      <Link
                        href={`/class-details/${item.codeName}`}
                        dangerouslySetInnerHTML={{ __html: clazz.name }}
                      ></Link>
                    </h3>
                    <p className="mb-20">{clazz.teaser}</p>
                    <div className="bd-class-meta-wrapper d-flex justify-content-between align-items-center flex-wrap">
                      <div className="bd-class-meta d-flex align-items-center flex-wrap">
                        {/* <div className="bd-class-meta-thumb">
                          <Link href={`/class-details/${item.codeName}`}>
                            <Image
                              src={
                                instructor?.imageUrls?.[0]
                                  ? instructor.imageUrls[0]
                                  : author_1
                              }
                              // style={{ width: "100%", height: "100%" }}
                              height={1}
                              width={1}
                              alt="img not found"
                            />
                          </Link>
                        </div>
                        <span>
                          <Link href={`/teacher-details/${instructor.name}`}>
                            {localizedInstructor.name}
                          </Link>
                        </span> */}
                      </div>
                      <div
                        className="bd-class-meta"
                        style={{
                          alignItems: "end",
                          display: "flex",
                          flexDirection: "column",

                          gap: 0,
                        }}
                      >
                        <div className="bd-class-meta-price">
                          <span>${item.price}/</span>
                          {enumLabels.priceUnit[item.priceUnit]}
                        </div>
                        {item.trialAvailable && (
                          <TrialButton clazz={item} labels={labels} />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="bd-class-btn-3 theme-bg-2 text-center">
                    <Link href={`/class-details/${item.codeName}`}>
                      {labels.viewDetail}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TrialButton = ({ clazz, labels }) => {
  return <SmallPrimaryButton>{labels.trialAvailable}</SmallPrimaryButton>;
};

export default ClassPageMain;
