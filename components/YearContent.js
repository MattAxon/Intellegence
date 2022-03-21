export default function YearContent({ heading, text, cartoon }) {
  if (cartoon) {
    return (
      <div>
        <img className="w-80 m-auto" src={cartoon} />
        <p className="">
          <i>{text}</i>
        </p>
      </div>
    );
  } else {
    return (
      <p>
        <b>{heading} - </b>
        {text}
      </p>
    );
  }
}
