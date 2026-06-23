import React from 'react';
import './CvDownloadButton.css';

const CvDownloadButton = ({ href = '#', text = 'Descargar CV' }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (!href || href === '#') return;

    const isExternal = /^https?:\/\//i.test(href);
    if (isExternal) {
      window.open(href, '_blank');
      return;
    }

    const link = document.createElement('a');
    link.href = href;
    link.download = 'cv_jefry_andre_cruz_yuman.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="button--cv-download" type="button" onClick={handleClick}>
      <span className="button__text">{text}</span>
      <span className="button__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" className="svg">
          <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z" />
          <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z" />
          <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z" />
        </svg>
      </span>
    </button>
  );
};

export default CvDownloadButton;
