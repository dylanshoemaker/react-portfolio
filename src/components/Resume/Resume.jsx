import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

export default function Resume() {
  const [file] = useState(
    "https://dylanshoemaker.github.io/dylan-shoemaker-portfolio/assets/resume/dylan-shoemaker-resume.pdf"
  );
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="Resume">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
      <div className="hero-text">
        <h3>
          <a href="https://dylanshoemaker.github.io/dylan-shoemaker-portfolio/assets/resume/dylan-shoemaker-resume.pdf">
            Click Me to be taken to web hosted pdf
          </a> 
        </h3>
      </div>
    </div>
  );
}
