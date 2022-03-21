import Link from "next/link";
export default function Navbar(props) {
  return (
    <nav className="bg-blue-500 sticky top-0 mt-0 w-full shadow-lg navbar z-10 py-3">
      <div className="px-5">
        <div className="flex justify-between">
          <div className="flex space-x-6 items-center">
            <h1 className="text-white text-2xl relative hover:text-gray-200 font-bold">
              <Link href="/">
                <a >Intelligence Report</a>
              </Link>
            </h1>
            <div className="flex space-x-4 items-center ">
              <Link href="/legislation">
                <a
                  className="text-white text-lg hover:text-gray-200"
                >
                  Legislation
                </a>
              </Link>
              <Link href="/policy">
                <a
                  
                  className="text-white text-lg hover:text-gray-200"
                >
                  Policy
                </a>
              </Link>
              <Link href="/currentEvents">
                <a
                  
                  className="text-white text-lg hover:text-gray-200"
                >
                  Current Events
                </a>
              </Link>
              <Link href="/worksCited">
                <a
                  
                  className="text-white text-lg hover:text-gray-200"
                >
                  Works Cited
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
