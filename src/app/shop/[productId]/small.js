"use client";
import PhotoSlider from "@/app/component/photoslider";

export default function Photo({ image = [] }) {
  return <PhotoSlider images={image} />;
}
