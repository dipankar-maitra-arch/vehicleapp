import React, { useState, useRef } from "react";
import "./App.css";
import { Container, Row, Col, Button, Card, CloseButton } from "react-bootstrap";
import GaugeChart from "react-gauge-chart";



function App() {
 const chartStyle = {
    height: 250,
 };



 const chartValues = {
   MIL: "On",
   DistanceWithMIL: 30,
   IgnitionType: "spark",
   FuelStatus: "low",
   EngineLoad: 50,
   CoolantTemperature: 85,
   FuelPressure: 410,
   EngineSpeed: 1000,
   MAF: "10",
 };



 const [distanceWithMIL, setDistanceWithMIL] = useState(30);
 const [engineLoad, setEngineLoad] = useState(50);
 const [isChartShow, setIsChartShow] = useState(false);
 const increment = useRef(null);



 const blank = async() => {

 }

 const subscribe = async () => {
   await setIsChartShow(true);
   window.scrollTo(0, 700);
   increment.current = setInterval(() => {
   setDistanceWithMIL(Math.floor(Math.random() * (70 - 35 + 1)) + 35)
   setEngineLoad(Math.floor(Math.random() * (70 - 35 + 1)) + 35)
   }, 3000)
 }



 const closeChart = async () => {
   await setIsChartShow(false);
   window.scrollTo(0, 0);
   clearInterval(increment.current);
  }



 return (
    <div className="App">
      <Container>
        <div className="columnsWrapper">
          <Row>
            <Col xs={12} lg={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Roadside assistance</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Fastest service as we already have data from your car. Check our report exclusively for your car to prevent breakdown
                  </Card.Subtitle>
                  {/* <Card.Text>
                  </Card.Text> */}
                  <ul className="cardlist">
                    <li>$10 (Offer Price) per month for Preventive Service Report</li>
                  </ul> 
                  <Button variant="primary" onClick={subscribe}>Demo</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Know Your Driving Score</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Keep driving!! We are here to watch your car data and share vital tips on improving your driving skills
                  </Card.Subtitle>
                  {/* <Card.Text>
                  </Card.Text> */}
                  <ul className="cardlist">
                    <li>Pay only $2 per mile you drive</li>
                    <li>1st 50 miles free</li>
                  </ul>
                  <Button variant="primary" onClick={blank}>Subscribe</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Body> ``
                  <Card.Title>Predict your car insurance premium</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Know the usage based premium and compare attractive offers
                  </Card.Subtitle>
                  {/* <Card.Text>
                  </Card.Text> */}
                  <ul className="cardlist">
                    <li>Free</li>
                    </ul>
                    <Button variant="primary" onClick={blank}>Subscribe</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} lg={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Share Vehicle Data and get paid</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Anonymity of your data is guaranteed
                  </Card.Subtitle>
                  {/* <Card.Text>
                  </Card.Text> */}
                  <ul className="cardlist">
                    <li>Get $2 per 100 GB of engine performance data</li>
                  </ul>
                  <Button variant="primary" onClick={blank}>Subscribe</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      {isChartShow &&
      <div className="chartsContainer">
        <Container>
          <CloseButton className="close" variant="white" onClick={closeChart}/>
          <Row>
            <Col xs={12} lg={6}>
              {/* <h6>GaugeChart with default props</h6> */}
              <h6>GaugeChart with Distance With MIL</h6>
              <GaugeChart
                id="gauge-chart1"
                style={chartStyle}
                // nrOfLevels={20}
                percent={distanceWithMIL / 100}
                needleColor="#345243"
                fontSize="40px"
              />
            </Col>
            <Col xs={12} lg={6}>
              {/* <h6>GaugeChart with 20 levels</h6> */}
              <h6>GaugeChart with EngineLoad</h6>
              <GaugeChart
                id="gauge-chart2"
                style={chartStyle}
                nrOfLevels={20}
                percent={engineLoad / 100}
                needleColor="#345243"
                fontSize="40px"
              />
            </Col>
          </Row>
        </Container>
      </div>
      }

    </div>
 );
}

export default App;