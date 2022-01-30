import React, { useState } from 'react';
import '../Assates/Style/Home.css';
import Typewriter from 'typewriter-effect';
import Row from 'react-bootstrap/Row'
import { Container, Col } from 'react-bootstrap'
import Collapse from 'react-bootstrap/Collapse'

const Home = () => {

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("Show More");

  const TextChange = () => {
    if (!open) {
      setOpen(true);
      setText("Show Less");
    }
    else {
      setText("Show More");
      setOpen(false);     
    }
  }



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
        <Row className='mt-5'>
          <Col lg={5} md={10} col={5} className="m-auto content">
            <b>Robotics club</b>, RTU Kota is the first official club of RTU.
            It was established by our respected and talented seniors in the direction to impart the knowledge
            of robotics to every student who seems to be interested in it. <span id="dots">...</span> <span id="more">
              The main motto of this club is ‘We learn We share'. We believe in sharing of the knowledge about
              robotics with our mates and juniors. By sharing knowledge with each other we open the gates to outshine
              our skills in this wonderful world of robotics. Every year, our club organises the robotics workshop for
              the fresher’s to welcome them in the vast community of robotics club. With this workshop, they step in
              the enlightening world of robotics. Those who are the selected get the golden opportunity to become the
              face of RTU in various technical fests
              <Collapse in={open}>
                <span id="example-collapse-text">
                  organised by leading IITs and NITs under the guidance of our worthy seniors. At present, there are more than 50 active members in the club from all years. Being a member of this club provides you with a huge exposure to participate in various competitionslike Robowar, IOT/AI challenge, Hackathons etc. along with workshops.
                </span>
              </Collapse>
              

              <span
                style={{ color: 'blue', cursor: 'pointer' }}
                onClick={() => TextChange()}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              > {text}</span>
              </span>
            
          </Col>

          <Col lg={5} md={10} col={6} className="video">
            <iframe className='video-frame' src="https://www.youtube.com/embed/vz7XR_aiG-g" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default Home;


