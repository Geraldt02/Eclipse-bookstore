import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import axios from "axios";
import "../../components/Table/tableCss.css";

interface Book {
  title: string;
  ebin: string;
  price: string;
  url: string;
}

const ComicTable: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://api.itbook.store/1.0/search/di")
      .then((response) => {
        setBooks(
          response.data.books.map((book, index) => ({
            key: index.toString(),
            title: book.title,
            ebin: book.isbn13,
            price: book.price,
            url: book.url,
          }))
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const columns: TableColumnsType<Book> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "40%",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "EBIN",
      dataIndex: "ebin",
      key: "ebin",
      width: "20%",
      sorter: (a, b) => a.ebin.localeCompare(b.ebin),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "15%",
      sorter: (a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
        const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
        return priceA - priceB;
      },
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
      width: "35%",
      render: (url: string) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      ),
    },
  ];

  const onChange: TableProps<Book>["onChange"] = (
    pagination,
    sorter,
    extra
  ) => {
    console.log("params", pagination, sorter, extra);
  };

  return (
    <Table
      columns={columns}
      dataSource={books}
      loading={loading}
      onChange={onChange}
      bordered
      size="middle"
      pagination={{ pageSize: 5 }}
      className="custom-table"
    />
  );
};

export default ComicTable;
