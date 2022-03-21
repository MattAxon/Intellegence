import React from "react";
import Head from "next/head";

export default function legislation() {
  return (
    <div>
      <Head>
        <title>legislation</title>
      </Head>
      <body>
        <h1 className="text-center text-lg my-8">Legislation</h1>
        <div className="mb-8">
          <h1 className="text-center text-lg mb-4">
            <b>Patriot Act</b>
          </h1>
          <p className="text-center mx-20">
            The Patriot Act was introduced by Republican Representative Jim
            Sensenbrenner on October 23, 2001. Since it was proposed by a member
            of the house, it went through the house first. The house at the time
            was comprised of 211 Democrats, 220 Republicans and 2 independents.
            The bill passed the house by a vote of 357-66 the next day with the
            majority of its opposition coming from Democrats (only three
            Republicans opposed). One day later the act passed the senate by a
            vote of 98-1. In a senate with 49 Democrats, 49 Republicans and 1
            Independent, only Russ Feingold (D-WI) voted no.
            <div className="mb-6">
              <img className="w-96 m-auto" src="/senate2.png" />
              <i>Political makeup of the Senate in October 2001</i>
            </div>{" "}
            Republican President George W. Bush signed the bill into law the day
            after that. The Patriot act was passed as a response to the
            September 11 attacks and the 2001 anthrax attacks. The act expanded
            the surveillance capabilities of law enforcement domestically and
            internationally by enabling surveillance techniques such as roving
            wiretaps. It also continued the trend of increased interagency
            communications. Along with that it increased penalties for terrorism
            and designated more activities as terrorism. The patriot act has
            been criticized for violating civil liberties by many special
            interest organizations, most notably the ACLU and EFF.
          </p>
          <div className="mb-6">
            <img className="w-96 m-auto" src="/patriotAct.jpg" />
            <p className="text-center mx-96">
              <i>
                This political cartoon comments on how the Patriot act forced
                America to weight how much it values privacy and security by
                putting the two values at odds
              </i>
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h1 className="text-center text-lg mb-4">
            <b>Intelligence Reform and Terrorism Prevention Act</b>
          </h1>
          <p className="text-center mx-20">
            The Intelligence Reform and Terrorism Prevention Act was introduced
            by Republican Senator Susan Collins of Maine. Since it was proposed
            by a Senator it went through the Senate first. The Senate, made up
            of 48 Democrats, 51 Republicans and Bernie Sanders, approved the
            bill 96-2 on October 6, 2004. The house, made up of 209 Democrats,
            223 Republicans and 1 independent, approved the bill 336-75 on
            October 16, 2004. Republican President George W Bush signed the bill
            into law on December 17, 2004.
            <div className="mb-6">
              <img className="w-96 m-auto" src="/senate.png" />
              <i>Political makeup of the Senate in 2004</i>
            </div>
            As shown by the overwhelming support the bill recieved in the house
            and senate, it was popular among both parties. The bill, passed in
            response to 9/11, aimed to reorganize the intelligence community to
            better respond to the threat of terrorism by establishing the
            Director of National Inteligence, establishing the National
            Counterterrorism Center, creating the Joint Intelligence Community
            Council and much more. Support from special interest groups didn't
            play a noteable part in getting the Intelligence Reform and
            Terrorism Prevention Act passed but it was opposed by the{" "}
            <a href="https://en.wikipedia.org/wiki/Electronic_Frontier_Foundation">
              Electronic Frontier Foundation
            </a>{" "}
            on the grounds that it violated civil liberties.
          </p>
        </div>
      </body>
    </div>
  );
}
