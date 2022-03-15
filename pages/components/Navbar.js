export default function Navbar(props) {
  return (
    <nav className="bg-blue-500 sticky top-0 mt-0 w-full py-1 shadow-lg navbar z-10">
      <div className="px-5">
        <div className="flex justify-between">
          <div className="flex space-x-6 items-center">
            <h1 className="text-white text-2xl relative hover:text-gray-200 font-bold">
              <a href="/">Intellegence Report</a>
            </h1>
            <div className="flex space-x-4 items-center ">
              <a
                href="./legislation/"
                className="text-white text-xl hover:text-gray-200"
              >
                Legislation
              </a>
              <a
                href="./policy/"
                className="text-white text-xl hover:text-gray-200"
              >
                Policy
              </a>
              <a
                href="./agencies/"
                className="text-white text-xl hover:text-gray-200"
              >
                Agencies
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
