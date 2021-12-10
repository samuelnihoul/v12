import React from "react";
import Link from "next/link";

const DropdownSubItem = ({ item }) => (
  <ul className="dropdown-menu dropdown-item" style={{ display: "none" }}>
    {item.map((val, i) => (
      <li key={i}>
        <Link href={val.link}>


          <a className="dropdown-item"> {val.title}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default DropdownSubItem;
