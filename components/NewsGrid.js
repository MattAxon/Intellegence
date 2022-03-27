import React from "react";

export default function NewsGrid({ imgPath, articleLink, text }) {
  return (
    <div className="md:flex mx-auto mb-4 md:w-8/12 w-96 h-fit border-2 border-slate-700">
      <div className="md:w-3/5">
        <a href={articleLink}>
          <img className="w-fit md:h-fit" src={imgPath} />
        </a>
      </div>
      <div className="w-full md:w-2/5">
        <a className="w-full h-full" href={articleLink}>
          <div>
            <p className="text-lg mt-4 text-center mx-4 ">{text}</p>
          </div>
        </a>
      </div>
    </div>
  );
}
