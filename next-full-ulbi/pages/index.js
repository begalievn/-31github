import React from 'react'
import Link from "next/link";

function index() {
  return (
    <div>
      <div className="navbar">
        <Link href="/">
          <span className="link">Main</span>
        </Link>
        <Link href="/users">
          <span className="link">Users</span>
        </Link>
      </div>
      <h1>
        Main page
      </h1>
      <style jxs>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }

          .link {
            text-decoration: none;
            margin: 15px;
            font-size: 20px;
          }
        `}
      </style>
    </div>
  )
}

export default index