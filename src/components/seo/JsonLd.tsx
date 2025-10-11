"use client";

import Script from "next/script";

export default function JsonLd({ id, data }: { id: string; data: any }) {
  return (
    <Script id={id} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(data)}
    </Script>
  );
}

