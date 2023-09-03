import React from "react";
import SingleFollowing from "./SingleFollowing.jsx";

import { FaCertificate } from "react-icons/fa";

const data = [
  {
    title: "Node.js and 9 others follow",
    name: "freeCodeCamp.org",
    icon: <FaCertificate className="text-info" />,
    type: "@freeCodeCamp",
    text: "We're a community of millions of people who are building new skills and getting new jobs togethe. A 501(v)(3) public charity. Tweets by",
    img: "/assets/rf.png",
  },
  {
    title: "Node.js and 9 others follow",
    name: "TypeScript",
    type: "@typescript",
    text: "TypeScript is a language for application-scale javaScript devlopment. it's a typed superset of javascript that compiles to plain JavaScript.",
    img: "/assets/ts.png",
    icon: null,
  },
  {
    title: "Yazeed Obaid and 3 others follow",
    name: `Tailwind css <span>&#x1F5F9;</span>`,
    type: "@tailwindcss",
    text: "The utility-first CSS frawork. Rapidly build modern websites, without ever leaving your HTML.",
    img: "/assets/tw.jpeg",
    icon: <FaCertificate className="text-info" />,
  },
];
const Following = () => {
  return (
    <div>
      <h4 className="text-white m-0 mt-2 ms-2">Who to follow</h4>
      {data.map((e, indx) => (
        <SingleFollowing key={indx} item={e} />
      ))}
      <small className="text-info my-5">Show more</small>
    </div>
  );
};

export default Following;
