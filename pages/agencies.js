import React from "react";
import Head from "next/head";
import CIA from "../public/Seal_of_the_Central_Intelligence_Agency.svg.png";
import Image from "next/image";
import DFI from "../public/Seal_of_the_U.S._Defense_Intelligence_Agency.png";
import NSA from "../public/Seal_of_the_U.S._National_Security_Agency.png";
export default function agencies() {
  return (
    <div>
      <Head>
        <title>agencies</title>
      </Head>
      <body>
        <div className="text-center">
          <div className="mt-12">
            <Image src={CIA} height={600} width={600} />
            <Image src={DFI} height={600} width={600} />
            <Image src={NSA} height={600} width={600} />
          </div>
        </div>
      </body>
    </div>
  );
}
