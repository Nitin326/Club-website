import React from 'react';
import '../Assates/Style/Home.css';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
      {/* Landing Page  */}

      <div className="landing-page">
        <div className='landing-text' >
          <h1 className='typing-text' style={{ paddingTop: '3rem', margin: 'auto 0', fontWeight: '500', fontSize: '50px' }}>
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

      {/* About Section  */}

      <div className="about-section">
        <div className="container mt-5 mb-5">
          <h2 className="text-center">About Us</h2>
          <div className="row mx-auto mt-5">
            <div className="col-lg-5  mx-auto content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rem, expedita facilis officiis excepturi unde, minus voluptas eaque exercitationem repellendus veritatis eius, doloremque possimus iste iusto sint aut ab beatae!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem exercitationem soluta laboriosam iure unde, minus perspiciatis aliquid cum ducimus, eum iusto numquam reprehenderit odio perferendis asperiores labore provident impedit vero.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, vitae explicabo sit magnam necessitatibus ratione velit laudantium delectus nulla labore ipsum reiciendis veritatis optio rem autem debitis qui quam temporibus?
            </div>
            <div className="col-lg-5 mx-auto video">
              <iframe width="400" height="300" src="https://www.youtube.com/embed/tgbNymZ7vqY">
              </iframe>
            </div>
          </div>
        </div>
      </div>
      
      

    </>
  )
};

export default Home;
