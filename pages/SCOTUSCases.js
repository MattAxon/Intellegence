import React from "react";
import Head from 'next/head'
export default function SCOTUSCases() {
  return (
    <div>
      <Head>
        <title>Supreme Court Cases</title>
      </Head>
      <div className="text-center mx-8 lg:mx-32">
        <h1 className="text-lg my-6">SCOTUS Cases</h1>
        <div>
          <h1 className="mb-5"><b>Federal Bureau of Investigation v. Fazaga</b></h1>
          <p >The Federal Bureau of Investigation v. Fazaga case was argued in November of 2021. The argument originated from 3 Muslim residents of Southern California. They filed that the FBI conducted surveillance on their regularly attended religious services at the Islamic Center of Irvine for 14 days. They claimed this violated several acts and rights against them solely due to the fact that they were Muslim. Violations include the First Amendment, Free Exercise Clauses; the Religious Freedom Restoration Act, the equal protection component of the Fifth Amendment's Due Process Clause; the Privacy Act, the Fourth Amendment; and the Foreign Intelligence Surveillance Act. The question yet to be asked is whether Section 1806f of the Foreign Intelligence Surveillance Act of 1978 displace the state-secrets privilege and authorize a district court to resolve the merits of a lawsuit challenging the lawfulness of government surveillance by considering the privileged evidence? The first finding was that, “the text of FISA lacks any reference to the state secrets privilege, suggesting that its passage did not alter the privilege at all. Regardless of whether the privilege arises from common law or the Constitution, Congress could not have abrogated it without clear statutory language.” And secondly, “a procedure under which a trial-level court may consider the legality of electronic surveillance conducted under FISA, is not incompatible with the state secrets privilege. They involve different inquiries, award different forms of relief, and different procedures.” </p>
        </div>
        <div>
          <h1 className="my-5"><b>Central Intelligence Agency v. Sims</b></h1>
          <p >The Central Intelligence Agency v. Sims case was argued from 1953 to 1966. During this time the CIA (central intelligence agency) funded a project that would be used to torture people for information, phycologically. MKUltra methods to manipulate people with information about their care, mental states and brain functions. It was said they used high doses of psychoactive drugs (especially LSD) and other chemicals, electroshocks, hypnosis,sensory deprivation, isolation, and verbal and sexual abuse, in addition to other forms of torture. Even the basic Oyez website that normally displays the description of every case, has in fact hidden every detail on this case to the public. The trial was a major one sided decision to shut down the CIA’s brainwashing program.</p>
        </div>
      </div>
    </div>
  );
}
