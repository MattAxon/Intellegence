import Link from "next/link";
export default function Timebar({ color, hoverColor, year }) {
  const style = `${color} w-full h-8 z-50 ${hoverColor}`;
  const url = `/${year}`
  return (
    <div  className="w-1/6">
      <Link href={url}>
        <a>
          <div className={style}></div>
        </a>
      </Link>

      <p className="text-sm md:text-base">{year + "'s"}</p>
    </div>
  );
}
