import Link from "next/link";
import { Fragment } from "react";

function AboutUs() {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  return (
    <Fragment>
      <h1>The About Us Page</h1>
      <ul>
        {details.map((list) => {
          return (
            <li key={list.id}>
              <Link href={`/aboutus/${list.id}`}>{list.name}</Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}
export default AboutUs;
