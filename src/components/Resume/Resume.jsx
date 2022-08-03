import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./Resume.css";
const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

export default function Resume() {
  const [file] = useState(
    "https://dylanshoemaker.github.io/react-portfolio/resume/resume_dylan_shoemaker.pdf"
  );
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <section className="resume">
      <div id="resume">
        <div className="container">
          <div className="column is-12 is-12-mobile white resume">
            <h1 className="title  is-1 has-text-centered section-title ">
              Resume
            </h1>
          </div>
          <div className="container" data-aos="fade-down">
            <Document
              className="document"
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
            <div className="hero-text">
              <h3 className="button thisIsTheWay">
                <a href="https://dylanshoemaker.github.io/react-portfolio/resume/resume_dylan_shoemaker.pdf">
                  Download Resume&emsp;<i className="fad fa-download fa-lg"></i>
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
