import React from "react";

export default function NewsGrid({ imgPath, articleLink, text }) {
  return (
    <div className="flex mb-4 w-8/12 h-fit border-2 border-slate-700">
      <div className="w-3/5 left-0 top-0">
        <a href={articleLink}>
          <img className="h-fit" src={imgPath} />
        </a>
      </div>
      <div className="w-2/5">
        <a className="w-full h-full" href={articleLink}>
          <div>
            <p className="text-lg mt-4 text-center mx-4 ">{text}</p>
          </div>
        </a>
      </div>
    </div>
  );
}
