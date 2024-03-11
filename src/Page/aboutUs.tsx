// import { Card } from "@mui/material";
import { Card } from "antd";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <div>
        <h4 style={{ color: "navy" }}>What is Eclipse Bookstore ?</h4>

        <Card
          title={<h4 style={{ color: "#ffffff" }}>Eclipse Bookstore</h4>}
          style={{
            height: "auto",
            padding: "2%",
            margin: "2%",
            backgroundColor: "#343434",
            border: "2px solid grey",
          }}
        >
          <h5 style={{ color: "#ffffff" }}>
            <b>History rich bookstore</b>
          </h5>
          <p
            style={{
              marginTop: "1%",
              color: "#ffffff",
              fontSize: "14pt",
              fontFamily: "sans-serif",
              textAlign: "justify",
            }}
          >
            Founded at 1999, we are the first bookstore in Jakarta to be
            established. We have been serving our customers with a wide range of
            books and other related items established with a history of over 20
            years. We have been serving customers all across Indonesia since
            then and our mission is still focused on providing quality books to
            our clients while maintaining an excellent customer service. Our
            team consists of experienced staffs who are passionate about books
            and knowledge sharing. They strive to provide the best possible
            services for their customers by always being up-to-date with the
            latest trends in the industry.
          </p>
          <h5 style={{ color: "#ffffff" }}>
            <b>More than just bookstore</b>
          </h5>
          <p
            style={{
              marginTop: "1%",
              color: "#ffffff",
              fontSize: "13pt",
              fontFamily: "sans-serif",
              textAlign: "justify",
            }}
          >
            Nestled in the heart of our community, Eclipse Bookstore is more
            than just a bookstore; it's a sanctuary for book lovers, a hub for
            literary exploration, and a gathering place for like-minded
            individuals. Eclipse Bookstore is more than just a place to find
            your next great read. It's a hub of activity, where book clubs meet,
            author signings take place, and literary events come to life.
            Whether you're seeking inspiration, information, or simply a quiet
            corner to lose yourself in a good book, Eclipse Bookstore has
            something for everyone. Our knowledgeable staff is always on hand to
            offer recommendations, provide assistance, and ensure that your
            experience at Eclipse Bookstore is nothing short of extraordinary.
            So whether you're a lifelong bookworm or just discovering the joys
            of reading,
          </p>
          <h4 style={{ color: "#ffffff" }}>
            <b>Join us!</b>
          </h4>
          <p
            style={{
              marginTop: "1%",
              color: "#ffffff",
              fontSize: "13pt",
              fontFamily: "sans-serif",
              textAlign: "justify",
            }}
          >
            We invite you to explore all that Eclipse Bookstore has to offer.
            Welcome to a world of wonder, discovery, and endless possibilities.
            Welcome to Eclipse Bookstore.
          </p>
        </Card>
      </div>

      <div>
        <h4 style={{ color: "navy" }}>What is Eclipse Analytics Hub ?</h4>

        <Card
          title={<h4 style={{ color: "#ffffff" }}>Web Purpose</h4>}
          style={{
            height: "auto",
            padding: "2%",
            margin: "2%",
            backgroundColor: "#343434",
            border: "2px solid grey",
          }}
        >
          <h5 style={{ color: "#ffffff" }}>
            <b>Developing a better bookstore</b>
          </h5>
          <p
            style={{
              marginTop: "1%",
              color: "#ffffff",
              fontSize: "14pt",
              fontFamily: "sans-serif",
              textAlign: "justify",
            }}
          >
            The purpose of this website is to provide transparent and accessible
            access to the sales data of Eclipse Bookstore. By showcasing this
            information, we aim to offer valuable insights into the performance
            of our bookstore, fostering transparency and accountability within
            our community. Our website serves multiple stakeholders, including
            customers, investors, and internal stakeholders, by providing a
            comprehensive overview of sales trends, popular titles, and
            financial performance.
          </p>
          <p
            style={{
              marginTop: "1%",
              color: "#ffffff",
              fontSize: "14pt",
              fontFamily: "sans-serif",
              textAlign: "justify",
            }}
          >
            For customers, our website offers a glimpse into the popularity of
            various books and genres, helping them make informed decisions about
            their purchases. By highlighting bestselling titles and trending
            genres, customers can discover new reads and stay up-to-date with
            the latest literary trends.
          </p>
          <p
            style={{
              marginTop: "1%",
              color: "#ffffff",
              fontSize: "14pt",
              fontFamily: "sans-serif",
              textAlign: "justify",
            }}
          >
            Investors and stakeholders can utilize our website to track the
            financial performance of Eclipse Bookstore over time. By presenting
            sales data in a clear and digestible format, we enable investors to
            assess the bookstore's growth trajectory and make informed decisions
            about their investments.
          </p>
          <p
            style={{
              marginTop: "1%",
              color: "#ffffff",
              fontSize: "14pt",
              fontFamily: "sans-serif",
              textAlign: "justify",
            }}
          >
            Internally, our website serves as a valuable tool for monitoring
            sales performance, identifying patterns, and making data-driven
            decisions. By analyzing sales data, we can optimize inventory
            management, tailor marketing strategies, and enhance overall
            operational efficiency.
          </p>
          <p
            style={{
              marginTop: "1%",
              color: "#ffffff",
              fontSize: "14pt",
              fontFamily: "sans-serif",
              textAlign: "justify",
            }}
          >
            Overall, our website is designed to promote transparency, facilitate
            informed decision-making, and enhance the overall experience for
            customers, investors, and internal stakeholders alike.
          </p>
        </Card>
      </div>

      <div className="d-flex flex-direction-column justify-content-center pt-3">
        <h4 style={{ color: "red" }}>
          "The more that you read, the more things you will know. The more that
          you learn, the more places you’ll go."
        </h4>
      </div>
      <div className="d-flex flex-direction-column justify-content-center p-2">
        <h4 style={{ color: "navy" }}>-Dr. Seuss</h4>
      </div>
    </>
  );
}
