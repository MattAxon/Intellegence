import React from "react";
import NewsGrid from "../components/NewsGrid";
import Head from "next/head";
export default function currentEvents() {
  return (
    <div>
      <Head>
        <title>Current Events</title>
      </Head>
      <div className="grid grid-cols-1 justify-items-center mt-8">
        <h1 className="text-center text-lg mb-8">Current Events</h1>
        <NewsGrid
          className=""
          articleLink="https://www.cnn.com/2022/02/26/politics/us-intelligence-ukraine-russia/index.html"
          imgPath="/HowUSIntelligenceGotItRight.jpg"
          text=" In the lead up to Russia's invasion of Ukraine, US Intelligence
      agencies were able to warn Ukraine of an impending invasion despite
      the Russian government insisting otherwise. Here's how they did it."
        />
        <NewsGrid
          articleLink="https://www.wsj.com/articles/four-u-s-intelligence-agencies-produced-extensive-reports-on-afghanistan-but-all-failed-to-predict-kabuls-rapid-collapse-11635415201"
          imgPath="/afganistan.jpg"
          text="Prior to pulling out of Afganistan, US intelligence wrote extensive reports on the stability of Afganistan but none predicted Kabul's almost immediate collapse."
        />
      </div>
    </div>
  );
}
