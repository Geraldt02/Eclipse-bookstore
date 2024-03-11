import React from "react";
import { Typography } from "antd";

const { Link } = Typography;

export default function FooterCopyright(props) {
  return (
    <Typography
      variant="body2"
      style={{ padding: "2%", textAlign: "center", fontSize: "15pt" }}
      {...props}
    >
      {`Copyright © `}
      <Link href="https://google.com/" style={{ fontSize: "15pt" }}>
        Eclipse Bookstore
      </Link>{" "}
      {new Date().getFullYear() - 1}
      {"."}
    </Typography>
  );
}
