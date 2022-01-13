import React from "react";
import Header from "../Components/Header";
import { Container, Row, Col, Image, Card, CardGroup } from "react-bootstrap";
import styles from "../Css/Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <div className={styles.warnaHero}>
        <Container>
          {/* Hero Section */}
          <Row>
            <Col md lg="4" className="mt-5">
              <p className={styles.textHero}>Dashboard App</p>
              <p className={`mb-4 ${styles.textSlogan}`}>
                "Test Code Frontend Developer by Qlue."
              </p>
            </Col>
            <Col md lg="8" className="mt-3">
              <Image
                className={`ms-5 ${styles.imgHero}`}
                src="../Assets/Dashboard.png"
              />
            </Col>
          </Row>

          {/* Features */}
          <CardGroup className="mt-2 mb-5">
            <Card
              className={`me-4 bg-transparent text-center ${styles.borderNone}`}
            >
              <div className="d-flex justify-content-center">
                <Card.Img
                  className={styles.imgFeature}
                  variant="top"
                  src="../Assets/table.png"
                />
              </div>
              <Card.Body>
                <Card.Title className="text-white">Table</Card.Title>
              </Card.Body>
            </Card>
            <Card
              className={`me-4 bg-transparent text-center ${styles.borderNone}`}
            >
              <div className="d-flex justify-content-center">
                <Card.Img
                  className={styles.imgFeature}
                  variant="top"
                  src="../Assets/bar-graph.png"
                />
              </div>
              <Card.Body>
                <Card.Title className="text-white">Graph</Card.Title>
              </Card.Body>
            </Card>
            <Card
              className={`me-4 bg-transparent text-center ${styles.borderNone}`}
            >
              <div className="d-flex justify-content-center">
                <Card.Img
                  className={styles.imgFeature}
                  variant="top"
                  src="../Assets/map.png"
                />
              </div>
              <Card.Body>
                <Card.Title className="text-white">Map / Location</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </div>
    </>
  );
}

export default Home;
