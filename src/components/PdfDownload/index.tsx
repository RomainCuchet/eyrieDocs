import React from 'react';
import styles from './styles.module.css';

interface PdfDownloadProps {
  title?: string;
  description?: string;
  pdfUrl: string;
  fileName?: string;
}

export default function PdfDownload({ 
  title = "Full Report",
  description = "Download the complete PDF report for detailed analysis",
  pdfUrl,
  fileName = "report.pdf"
}: PdfDownloadProps) {
  
  // Convert Google Drive view link to direct download link
  const getDirectDownloadUrl = (url: string): string => {
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
    }
    return url;
  };

  const directUrl = getDirectDownloadUrl(pdfUrl);

  return (
    <div className={styles.pdfDownloadContainer}>
      <div className={styles.pdfDownloadCard}>
        <div className={styles.iconWrapper}>
          <svg 
            className={styles.pdfIcon} 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M14 2v6h6M9 13h6M9 17h6" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={styles.textContent}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
        </div>
        <a 
          href={directUrl}
          className={styles.downloadButton}
          download={fileName}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg 
            className={styles.downloadIcon} 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          Download PDF
        </a>
      </div>
    </div>
  );
}
