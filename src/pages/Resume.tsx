"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import CustomButton from "@/components/Button";

import { Document, Page, pdfjs } from "react-pdf";

// PDF worker (Vite-compatible)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const RESUME_URL = "/Derek Song Resume January 2026.pdf";

export default function Resume() {
  const [numPages, setNumPages] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(850);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle responsiveness
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Subtract padding/margins of the parent container
        const newWidth = containerRef.current.offsetWidth - 48; // Adjust based on p-4 or p-6
        setContainerWidth(newWidth > 850 ? 850 : newWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <>
      <Header />

      {/* ----------------------------- */}
      {/* RESUME HEADER */}
      {/* ----------------------------- */}
      <section className="headerBody pb-10">
        <div className="flex flex-wrap gap-3">
          <CustomButton
            href={RESUME_URL}
            label="Download Resume (PDF)"
          />
        </div>
      </section>

      {/* ----------------------------- */}
      {/* PDF RENDERER */}
      {/* ----------------------------- */}
      <section className="headerBody pb-24">
        <div className="flex justify-center">
          <div 
            ref={containerRef}
            className="w-full max-w-[900px] bg-white border border-black/10 rounded-xl shadow-sm p-4 md:p-6 overflow-hidden"
          >
            <Document
              file={RESUME_URL}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              loading={<p className="text-center py-10">Loading resume…</p>}
              error={<p className="text-center py-10">Could not load PDF.</p>}
            >
              <div className="flex flex-col gap-8">
                {Array.from({ length: numPages }, (_, i) => (
                  <Page
                    key={i}
                    pageNumber={i + 1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="mx-auto shadow border border-black/10"
                    // Use the dynamic width here
                    width={containerWidth}
                  />
                ))}
              </div>
            </Document>
          </div>
        </div>
      </section>
    </>
  );
}