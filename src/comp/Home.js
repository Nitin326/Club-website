import React from 'react';
import '../Assates/Style/Home.css';
import Typewriter from 'typewriter-effect';
import Row from 'react-bootstrap/Row'
import { Container, Col, Card } from 'react-bootstrap';
import profile from '../Assates/Images/Bhatiya.jpg';
import Footer from '../comp/Footer';

const Home = () => {

  return (
    <>

      {/* Landing Page  */}
      <div className="landing-page">
        <div className='landing-text' >
          <h1 className='typing-text' style={{ paddingTop: '3rem', margin: 'auto 0', fontWeight: '500' }}>
            <Typewriter
              options={{
                strings: ['We Learn We Share'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>

      {/* About Us */}
      <Container className='mb-5 mt-5'>
        <h2 className="text-center">About Us</h2>
        <Row className='mt-3'>
          <Col lg={5} md={10} sm={10} xs= {10} className="m-auto content mt-5">
            Robotics club, RTU Kota is the first official club of RTU.It was established by our respected and talented
            seniors in the direction to impart the knowledge of robotics to every student who seems to be interested in it.
            The main motto of this club is We learn We share. We believe in sharing of the knowledge about robotics with
            our mates and juniors. By sharing knowledge with each other we open the gates to outshineour skills in this
            wonderful world of robotics. Every year, our club organises the robotics workshop for the fresher s to welcome
            them in the vast community of robotics club. With this workshop, they step in the enlightening world of robotics.
            Those who are the selected get the golden opportunity to become the face of RTU in various technical fests
            organised by leading IITs and NITs under the guidance of our worthy seniors.  {/* At present, there are more than
            50 active members in the club from all years. Being a member of this club provides you with a huge exposure to
            participate in various competitionslike Robowar, IOT/AI challenge, Hackathons etc. along with workshops. */}
          </Col>

          <Col lg={5} md={10} sm={10} xs= {10} className='m-auto mt-5'>
            <div className="profilecard">
              <Card className="card">
                <Card.Img variant="top" src={profile} className='profile' />
                <Card.Body>
                  <Card.Title className='text-center'>Dr. Deepak Bhatia</Card.Title>
                  <Card.Text className='text-center '>
                    <p>Faculty Coordinator</p>
                    Dept. of Electronics & communication Engineering
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Achievement and Highlights Section */}
      <Container className='mb-5'>
        <Row className='mt-5'>
          <Col lg={5} md={10} sm={10} xs= {10} className="m-auto achievement mt-5">
            <p className='title'>Achievement</p>
            The Robotics club in RTU Kota has been established in the year 2007. From the beginning of the club,
            its journey is full of achievements and glory.Every time we have continued the legacy of our achievements.
            Members of robotics club have glorified RTU by winning various hackathons and competitions conducted by the
            leading technical institutions of India at the national level. The worthy members of robotics club have not
            left any stone unturned when it comes to winning the competitions and hackathons.
            {/* One of achievement which glorified the club was that one team of our worthy seniors made a product. Their
            hard work and dedication got it patent which is a remarkable milestone in the history of RTU Kota.
            "Work speaks more than the words" this can be reflected by the work of our worthy seniors. Who have secured
            positions in various inter-college championships like Robowar Hackathons, etc.
            organised by leading IITs and NITs under the guidance of our worthy seniors. 
            At present, there are more than 50 active members in the club from all years. 
            Being a member of this club provides you with a huge exposure to participate in various competitionslike Robowar, IOT/AI challenge, Hackathons etc. along with workshops. */}
          </Col>

          <Col lg={5} md={10} sm={10} xs= {10} className="m-auto highlights mt-5">
            <p className='title'>Some Highlights</p>
            <p class="card-text">
              <li>Khad Selector: First patent of club</li>
              <li>Frequent Hackathon Winners from club</li>
              <li>Oldest club of RTU Kota</li>
              <li>50+ active members</li>
              <li>Regular Classes</li>
              <li>50+ different projects</li>
              <li>Free workshops are organised every year</li>
              <li>Separate Room for Work</li>
              <li>Wi-Fi Facility</li>
              <li>Own Component Library</li>
            </p>
          </Col>
        </Row>
      </Container>
      {/* Footer component */}
      <Footer/>

    </>
  )
};

export default Home;