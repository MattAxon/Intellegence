import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-blue-500 flex px-4 sticky w-full shadow-lg z-10 py-3">
        <h1 className="text-white text-2xl mr-6 relative hover:text-gray-200 font-bold">
          <Link href="/">
            <a>Intelligence Report</a>
          </Link>
        </h1>
        <div className="md:flex space-x-4 items-center hidden md:visible">
          <Link href="/legislation">
            <a className="text-white text-lg hover:text-gray-200">
              Legislation
            </a>
          </Link>
          <Link href="/policy">
            <a className="text-white text-lg hover:text-gray-200">Policy</a>
          </Link>
          <Link href="/currentEvents">
            <a className="text-white text-lg hover:text-gray-200">
              Current Events
            </a>
          </Link>
          <Link href="/SCOTUSCases">
            <a className="text-white text-lg hover:text-gray-200">
              SCOTUS Cases
            </a>
          </Link>
          <Link href="/worksCited">
            <a className="text-white text-lg hover:text-gray-200">
              Works Cited
            </a>
          </Link>
        </div>
        <div className="absolute px-0 right-8 py-1 visible md:hidden">
          <button
            className="hover:bg-blue-400 p-1 mr-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon size="lg" color="white" icon={faBars} />
          </button>
        </div>
      </nav>
      {isOpen ? <div className={"bg-blue-500 flex flex-col space-y-2 md:hidden"}>
        <Link href="/legislation">
          <a className="text-white text-lg hover:text-gray-50">
            <div className="hover:bg-blue-700 pl-3 cursor-pointer ">Legislation</div>
          </a>
        </Link>

        <Link href="/policy">
          <a className="text-white text-lg hover:text-gray-50">
            <div className="hover:bg-blue-700 cursor-pointer pl-3">Policy </div>
          </a>
        </Link>

        <Link href="/currentEvents">
          <a className="text-white text-lg hover:text-gray-50">
            <div className="hover:bg-blue-700 cursor-pointer pl-3">
              Current Events{" "}
            </div>
          </a>
        </Link>

        <Link href="/SCOTUSCases">
          <a className=" text-white text-lg hover:text-gray-50">
            <div className="hover:bg-blue-700 cursor-pointer pl-3">
              SCOTUS Cases{" "}
            </div>
          </a>
        </Link>

        <Link href="/worksCited">
          <a className="text-white text-lg hover:text-gray-50">
            <div className="hover:bg-blue-700 pb-2 cursor-pointer pl-3">
              Works Cited{" "}
            </div>
          </a>
        </Link>
      </div>:<div className="hidden"> </div> }
      
    </div>
  );
}
