import React from "react";
import BookTable from "../components/Table/bookTable.tsx";
import { Card } from "antd";
import MagazineTable from "../components/Table/magazineTable.tsx";
import ComicTable from "../components/Table/comicTable.tsx";
import JournalTable from "../components/Table/journalTable.tsx";

export default function BookList() {
  return (
    <>
      <div>
        <Card
          title={<h4 style={{ color: "#000000" }}>Top 10 Book sales</h4>}
          style={{
            marginBottom: "2%",
            backgroundColor: "#cccccc",
            border: "2px solid grey",
          }}
        >
          <BookTable />
        </Card>

        <Card
          title={<h4 style={{ color: "#000000" }}>Top 10 Magazine sales</h4>}
          style={{
            marginBottom: "2%",
            backgroundColor: "#cccccc",
            border: "2px solid grey",
          }}
        >
          <MagazineTable />
        </Card>

        <Card
          title={<h4 style={{ color: "#000000" }}>Top 10 Journal sales</h4>}
          style={{
            marginBottom: "2%",
            backgroundColor: "#cccccc",
            border: "2px solid grey",
          }}
        >
          <JournalTable />
        </Card>

        <Card
          title={<h4 style={{ color: "#000000" }}>Top 10 Comics sales</h4>}
          style={{
            marginBottom: "2%",
            backgroundColor: "#cccccc",
            border: "2px solid grey",
          }}
        >
          <ComicTable />
        </Card>
      </div>
      <div className="d-flex flex-direction-column pt-3">
        <h5 style={{ color: "red" }}>
          * EBIN stands for Eclipse Bookstore Identification Number, an
          identifier for all items sold at Eclipse bookstore.
        </h5>
      </div>
    </>
  );
}
