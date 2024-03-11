// import { Card } from "@mui/material";
import { Card } from "antd";
import React from "react";
import { Col, Row } from "react-bootstrap";
import LineChart from "../components/Chart/lineChart.tsx";
import BarChart from "../components/Chart/soldChart.tsx";
import PieChart from "../components/Chart/pieChart.tsx";
import {
  bookCategoryData,
  bookMonthlyData,
  comicCategoryData,
  comicMonthlyData,
  journalCategoryData,
  journalMonthlyData,
  magazineCategoryData,
  magazineMonthlyData,
  totalMonthlyData,
} from "../components/Data/eclipseData.tsx";

function Dashboard() {
  return (
    <>
      <div style={{ gap: "1rem" }} className="d-flex flex-column">
        <h4 style={{ textAlign: "right" }} className="pe-4 pb-3">
          Last updated : 31 December 2023 23:59
        </h4>

        <Row>
          <Col sm={2}>
            <Card
              title={<h3 style={{ fontSize: "20px" }}>Category</h3>}
              className="h-100"
              style={{ position: "relative" }}
              styles={{ header: { border: 0 } }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h3 style={{ margin: 0 }}>Books</h3>
              </div>
            </Card>
          </Col>
          <Col sm={2}>
            <Card
              title={<h3 style={{ fontSize: "20px" }}>Total Sold</h3>}
              className="h-100"
              style={{ position: "relative" }}
              styles={{ header: { border: 0 } }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h3 style={{ margin: 0 }}>2745</h3>
              </div>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <LineChart title={"Books sold monthly"} data={bookMonthlyData} />
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <PieChart
                title={"Category of books sold"}
                data={bookCategoryData}
              />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={2}>
            <Card
              title={<h3 style={{ fontSize: "20px" }}>Category</h3>}
              className="h-100"
              style={{ position: "relative" }}
              styles={{ header: { border: 0 } }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h3 style={{ margin: 0 }}>Magazine</h3>
              </div>
            </Card>
          </Col>
          <Col sm={2}>
            <Card
              title={<h3 style={{ fontSize: "20px" }}>Total Sold</h3>}
              className="h-100"
              style={{ position: "relative" }}
              styles={{ header: { border: 0 } }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h3 style={{ margin: 0 }}>2689</h3>
              </div>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <LineChart
                title={"Magazine sold monthly"}
                data={magazineMonthlyData}
              />
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <PieChart
                title={"Category of magazines sold"}
                data={magazineCategoryData}
              />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={2}>
            <Card
              title={<h3 style={{ fontSize: "20px" }}>Category</h3>}
              className="h-100"
              style={{ position: "relative" }}
              styles={{ header: { border: 0 } }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h3 style={{ margin: 0 }}>Journal</h3>
              </div>
            </Card>
          </Col>
          <Col sm={2}>
            <Card
              title={<h3 style={{ fontSize: "20px" }}>Total Sold</h3>}
              className="h-100"
              style={{ position: "relative" }}
              styles={{ header: { border: 0 } }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h3 style={{ margin: 0 }}>2182</h3>
              </div>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <LineChart
                title={"Journals sold monthly"}
                data={journalMonthlyData}
              />
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <PieChart
                title={"Category of journals sold"}
                data={journalCategoryData}
              />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={2}>
            <Card
              title={<h3 style={{ fontSize: "20px" }}>Category</h3>}
              className="h-100"
              style={{ position: "relative" }}
              styles={{ header: { border: 0 } }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h3 style={{ margin: 0 }}>Comics</h3>
              </div>
            </Card>
          </Col>
          <Col sm={2}>
            <Card
              title={<h3 style={{ fontSize: "20px" }}>Total Sold</h3>}
              className="h-100"
              style={{ position: "relative" }}
              styles={{ header: { border: 0 } }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h3 style={{ margin: 0 }}>3058</h3>
              </div>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <LineChart
                title={"Comics sold monthly"}
                data={comicMonthlyData}
              />
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <PieChart
                title={"Category of comics sold"}
                data={comicCategoryData}
              />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <Card>
              <BarChart />
            </Card>
          </Col>
          <Col sm={6}>
            <Card>
              <LineChart
                title={"Total item sold monthly"}
                data={totalMonthlyData}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
