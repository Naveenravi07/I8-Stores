import React from 'react';

const navStyle = {
  position: 'relative',
};

const columnStyle = {
  backgroundColor: '#fff',
  marginTop: '-123px',
};

const sliderStyle = {
  width: '100%',
  height: '1000px',
  marginTop: '80px',
};

const paraStyle = {
  textAlign: 'center',
  fontSize: '30px',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontWeight: 'bold',
};

const servicesStyle = {
  padding: '20px 0',
  textAlign: 'center',
};

const servicesH3Style = {
  fontSize: '30px',
  color: '#000',
  marginBottom: '20px',
};

const titleBeforeStyle = {
  content: '""',
  display: 'block',
  width: '50px',
  height: '3px',
  backgroundColor: '#a517ba',
  margin: '0 auto 20px auto',
};

const titleAfterStyle = {
  content: '""',
  display: 'block',
  width: '50px',
  height: '3px',
  backgroundColor: '#a517ba',
  margin: '0 auto 20px auto',
};

const serviceHeadButtonStyle = {
  backgroundColor: '#a517ba',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  textDecoration: 'none',
};

const servicesDivStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};

const bannerStyle = {
  marginTop: '-25px',
};

const containerStyle = {
  margin: '0 auto',
  maxWidth: '1200px',
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const colMd6Style = {
  flex: '0 0 calc(50% - 1em)',
  maxWidth: 'calc(50% - 1em)',
};

const bottomImgStyle = {
  height: '100px',
};

const contactStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '25rem',
  width: '100%',
  justifyContent: 'space-evenly',
  backgroundColor: '#f8f9fa',
  paddingTop: '80px',
};

const containerContactStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '25rem',
  width: '100%',
  justifyContent: 'space-evenly',
  backgroundColor: '#f8f9fa',
  paddingTop: '80px',
};

const footerBoxStyle = {
  textAlign: 'center',
};

const hrStyle = {
  borderTop: '1px solid #a517ba',
  margin: '10px 0',
};

const bottomTextStyle = {
  textAlign: 'center',
  color: '#000',
  backgroundColor: 'linear-gradient(to right, #a517ba, #5f1782)',
  padding: '20px 0',
};

const App = () => {
  return (
    <div>
      <nav id="example-1" style={navStyle}>
        <span style={paraStyle}>Innove</span>
        <ul style={{ position: 'absolute', top: 0, right: '30px' }}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div style={columnStyle} className="coulmn"></div>

      <div style={sliderStyle} className="slider"></div>

      <div id="para" style={paraStyle}></div>

      <div style={servicesStyle} className="services">
        <h3 style={servicesH3Style}>WHAT WE DO ?</h3>
        <div className="title">
          <div style={titleBeforeStyle}></div>
          <div style={titleAfterStyle}></div>
        </div>
        <div id="service-head">
          <a href="#" style={serviceHeadButtonStyle}>Service Head Button</a>
        </div>
        <div style={servicesDivStyle} className="servicesssss">
          {/* Services content */}
        </div>
      </div>

      <div id="banner" style={bannerStyle}>
        <div style={containerStyle} className="container">
          <div style={rowStyle} className="row">
            <div style={colMd6Style} className="col-md-6"></div>
            <div style={colMd6Style} className="col-md-6"></div>
          </div>
        </div>
      </div>

      <div className="bottom-img" style={bottomImgStyle}></div>

      <div className="contact" style={contactStyle}>
        <div style={containerContactStyle} className="containercontact">
          <div style={rowStyle} className="row">
            <div style={footerBoxStyle} className="footer-box">
              <hr style={hrStyle} />
            </div>
            <div style={footerBoxStyle} className="footer-box">
              <hr style={hrStyle} />
            </div>
            <div style={footerBoxStyle} className="footer-box">
              <hr style={hrStyle} />
            </div>
          </div>
        </div>
      </div>

      <div style={bottomTextStyle} className="bottom-text">

      </div>
    </div>
  );
};

export default App;

