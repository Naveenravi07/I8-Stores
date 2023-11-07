export default function Index() {
    const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '15px',
  display: 'flex',
};

const leftColumnStyle = {
  width: '65%',
  position: 'relative',
};

const productDescriptionStyle = {
  borderBottom: '1px solid #E1E8EE',
  marginBottom: '20px',
};

const productDescriptionSpanStyle = {
  fontSize: '12px',
  color: '#358ED7',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  textDecoration: 'none',
};

const productDescriptionH1Style = {
  fontWeight: 300,
  fontSize: '52px',
  color: '#43484D',
  letterSpacing: '-2px',
};

const productDescriptionPStyle = {
  fontSize: '16px',
  fontWeight: 300,
  color: '#86939E',
  lineHeight: '24px',
};

// Define other styles in a similar manner

  return (
    <main className="container" style={containerStyle}>
      {/* Left Column / Headphones Image */}
      <div className="left-column" style={leftColumnStyle}>
      <img data-image="black" src="images/black.png" alt=""/>
      <img data-image="blue" src="images/blue.png" alt=""/>
      <img data-image="red" class="active" src="images/red.png" alt=""/>
        {/* Your image elements here with inline styles */}
      </div>
      {/* Right Column */}
      <div className="right-column" style={{ width: '35%', marginTop: '60px' }}>
        {/* Product Description */}
        <div className="product-description" style={productDescriptionStyle}>
          <span style={productDescriptionSpanStyle}>Headphones</span>
          <h1 style={productDescriptionH1Style}>Beats EP</h1>
          <p style={productDescriptionPStyle}>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
        </div>
        {/* Rest of your component */}
      </div>
    </main>
  );
}

