import Image from 'next/image';
import React from 'react'

export default function AboutUsImage() {
  return (
    <>
      <Image
        className="number1img"
        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET32.jpg"
        alt="number1img"
        width={200}
        height={200}
      />

      <Image
        className="number2img"
        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d14.png"
        alt="number1img"
        width={200}
        height={200}
      />
      <Image
        className="number3img"
        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b245.png"
        alt="number1img"
        width={200}
        height={200}
      />
      <Image
        className="number5img"
        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png"
        alt="number1img"
        width={200}
        height={200}
      />
      <iframe
        className="number4vid"
        //   poster="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b242.png"
        src="https://www.youtube.com/embed/svg%3E?"
      ></iframe>
      <Image
        className="number7img"
        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d51.png"
        alt="number1img"
        width={200}
        height={200}
      />
      <Image
        className="number6img"
        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d12.png"
        alt="number1img"
        width={200}
        height={200}
      />
    </>
  );
}
