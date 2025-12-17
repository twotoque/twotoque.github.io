"use client";

import { useState } from "react";
import Header from "@/components/Header";
import CustomButton from "@/components/Button";

import { Document, Page, pdfjs } from "react-pdf";

// PDF worker (Vite-compatible)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const RESUME_URL = "/Derek Song Resume December 2025.pdf";

export default function Resume() {
  const [numPages, setNumPages] = useState<number>(0);

  return (
    <>
      <Header />

      {/* ----------------------------- */}
      {/* RESUME HEADER */}
      {/* ----------------------------- */}
      <section className="headerBody  pb-10">
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
          <div className="w-full max-w-[900px] bg-white border border-black/10 rounded-xl shadow-sm p-4 md:p-6">
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
                    width={850}
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
