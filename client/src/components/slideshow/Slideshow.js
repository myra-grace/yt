import React, { useEffect, useState, useRef } from "react";
import { Icon } from "react-icons-kit";
import { angleDoubleRight } from "react-icons-kit/fa/angleDoubleRight";

//  PUT A LIMIT ON HOW MANY SLIDES ARE SHOWN. THE REST GO TO A NEW PAGE.

const Slideshow = (props) => {
  const [square, setSquare] = useState();
  const [theArray, setTheArray] = useState(props.theArray);
  const [pageLink, setPageLink] = useState(props.pageLink);
  const [keyWord, setKeyWord] = useState(props.keyWord);

  useEffect(() => {
    if (props.vw >= props.vh) {
      setSquare(props.vh - 300);
    } else {
      setSquare(props.vw - 100);
    }
    if (pageLink === "" || pageLink == undefined) {
      setPageLink("https://www.youtube.com/channel/UCUXucjJ4j_Xc9UP7GpY-f9w");
    }
    if (keyWord === "" || keyWord == undefined) {
      setKeyWord("please!");
    }
  }, []);

  console.log("props: ", props);

  return (
    <div className="slider">
      {!theArray ? (
        <div></div>
      ) : (
        theArray.map((obj) => {
          let palt = obj.alt;
          let psrc = obj.src;
          let plink = obj.link;
          let origin = obj.origin;
          let title = obj.title;
          let splurge = obj.splurge;
          if (plink === "") {
            plink = "https://www.youtube.com/channel/UCUXucjJ4j_Xc9UP7GpY-f9w";
          }
          return (
            <div className="general-container" style={{
              minWidth: `${square}px`,
              minHeight: `${square}px`,
            }}>
            <a
              className={origin}
              href={plink}
              style={{
                background: `url("${psrc}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="info">
              <h3 className="alt-title">{palt}</h3>
              <h3 className="title">{title}</h3>
              <p className="splurge">{splurge}</p>
              </div>
            </a>
            </div>
          );
        })
      )}
      <a className="moreA" href={pageLink}>
        <Icon size={`${square}px`} icon={angleDoubleRight} />
        <h2>More {keyWord}</h2>
      </a>
    </div>
  );
};

export default Slideshow;
