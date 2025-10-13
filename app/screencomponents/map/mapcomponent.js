"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./map"), { ssr: false });

export default function MapComponent({ start, end }) {
  return <Map start={start} end={end} />;
}
