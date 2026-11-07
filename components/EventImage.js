"use client";

import Image from "next/image";
import { useState } from "react";

const FALLBACK_IMAGE = "/event-image-fallback.svg";

export default function EventImage({ src, alt, ...imageProps }) {
  const [failedSource, setFailedSource] = useState(null);
  const source = failedSource === src ? FALLBACK_IMAGE : src;

  return (
    <Image
      {...imageProps}
      src={source}
      alt={alt}
      unoptimized
      onError={() => setFailedSource(src)}
    />
  );
}
