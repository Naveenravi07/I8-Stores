export default function Index() {
  return (
    <>
      <nav id="example-1" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 20px", backgroundColor: "#333" }}>
        <span style={{ fontSize: "30px", fontFamily: "Verdana, Geneva, Tahoma, sans-serif", color: "#fff", marginLeft: "30px", marginTop: "5px" }}>Innove</span>
        <ul style={{ display: "flex", listStyle: "none", marginRight: "30px" }}>
          <li style={{ margin: "0 10px" }}><a href="#" style={{ textDecoration: "none", color: "#fff" }}>Home</a></li>
          <li style={{ margin: "0 10px" }}><a href="#" style={{ textDecoration: "none", color: "#fff" }}>About</a></li>
          <li style={{ margin: "0 10px" }}><a href="#" style={{ textDecoration: "none", color: "#fff" }}>Shop</a></li>
          <li style={{ margin: "0 10px" }}><a href="#" style={{ textDecoration: "none", color: "#fff" }}>Contact</a></li>
        </ul>
      </nav>

      <br />

      <section id="banner" style={{ marginTop: "-25px", backgroundColor: "#f4f4f4", padding: "20px" }}>
        <div className="container">
          <div className="row" style={{ display: "flex", alignItems: "center" }}>
            <div className="col-md-6">
              <p id="para" style={{ fontWeight: 500, fontSize: "20px", marginBottom: "20px" }}>Best Digital Agency</p>
              <p style={{ fontWeight: 400 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde vel error incidunt numquam minus, odio quam Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium provident harum obcaecati quia. Perferendis minima, fugit omnis vitae laborum, explicabo commodi sint debitis temporibus quasi dolor nulla corrupti ab illo! Unde sed doloremque placeat</p>
              <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", color: "#333" }}>
                <img src="/play.png" alt="Play Icon" style={{ width: "45px", marginRight: "10px" }} />
                <span>Watch Tutorial</span>
              </a>
            </div>
            <div className="col-md-6">
              <img src="/home2.png" alt="Image" className="img-fluid" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
        <img src="/wave1.png" alt="Wave Image" className="bottom-img" style={{ height: "100px", width: "100%", marginTop: "20px" }} />
      </section>

      {/* Add other sections similarly using the same structure */}

      <div style="background-color: #fff; margin-top: -123px;">


        <br />
        <div style="width: 100%; height: 1000px; margin-top: 80px;">
          <h1 class="title" style="text-align: center;">WHAT WE DO ?</h1>
          <div class="servicesssss">
            <div class="services" style="padding-left: 200px;">
              <img style="width: 100px; margin-top: 20px;" src="/service1.png" alt="" />
              <h3>Growing Marketing</h3>
              <p style="width: 200px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, doloribus? Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="services" style="padding-left: 200px;">
              <img style="width: 100px; margin-top: 20px;" src="/service2.png" alt="" />
              <h3>online branding</h3>
              <p style="width: 200px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, doloribus? Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="services" style="padding-left: 200px;">
              <img style="width: 100px; margin-top: 20px;" src="/service3.png" alt="" />
              <h3>Animated ads</h3>
              <p style="width: 200px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, doloribus? Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <section id="about-us " style="margin-top: -360px; background-color: #f8f9fa; ">
        <div class="container" style="margin-top: 30px; margin-bottom: 30px;">
          <h1 class="title text-center " style="font-size: 30px; text-align: center; padding-top:30px ;">WHY CHOOSE ?</h1>
          <div class="row">
            <div class="col-md-6">
              <p class="about-title" style="font-size: 25px;">Why we're different</p>
              <br />
              <ul>
                <li>Understand our client's business goal first</li>
                <li>Believe in doing business with honesty</li>
                <li>We deliver on time</li>
                <li>We create a winning content startagy</li>
                <li>We protect your online reputation</li>
                <li>We create a winning content system</li>
                <li>We Aperacated your skill presenteation etc..</li>
              </ul>



            </div>
            <div class="" style="padding-bottom: 100px;">
              <img src="/network.png" alt="" class="img-fluid" />
            </div>

          </div>
        </div>

      </section>


      <section class="contact" style="margin-top: -30px;" >
        <div class="containercontact" style="display: flex; flex-direction: column; align-items: center; height: 25rem; width: 100%; justify-content: space-evenly;background-color: #f8f9fa ; padding-top: 80px;" >
          <div class="div">
            <h1 style="font-family: Arial, Helvetica, sans-serif; font-size: 30px; color: #000000; padding-top: 100px;">Contact Us</h1>
          </div>
          <br />
          <div class="div">
            <input type="text" placeholder="Enter Your Name" style="width: 60.5rem; height: 2.5rem; border-radius: 0.5rem; border: none; outline: none; padding-left: 1rem;" />
          </div>
          <br />
          <div class="div">
            <input type="text" placeholder="Enter a valid email address" style="width: 60.5rem; height: 2.5rem; border-radius: 0.5rem; border: none; outline: none; padding-left: 1rem;" />
          </div>
          <br />

          <div class="div">
            <textarea name="" id="" cols="30" rows="6" style="border-radius: 0.5rem; padding: 1rem; width: 60.5rem;"></textarea>
          </div>
          <div class="div" style="margin-bottom: 200px; padding-bottom: 100px;" >
            <button style="height: 2rem; width: 5rem; border: none; outline: none; border-radius: 1rem; background-color: rgba(133, 129, 133, 0.805)">Submit</button>
          </div>
        </div>
      </section >

      <section id="footer" style="margin-top: 80px; padding-top: 0px;   background-image:linear-gradient(to right, #a517ba,#5f1782);   ">

        <img src="/wave2.png" alt="" />


        <div class="container">
          <div class="row">
            <div class="footer-box">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi quibusdam repellat omnis repellendus, molestiae aperiam modi ut aliquid nihil totam.</p>
            </div>
            <div class="footer-box">
              <p><b>Contact Us</b></p>
              <p><i class="fa fa-map-marker"></i>&nbsp;&nbsp; Vaikom, Kerala</p>
              <p><i class="fa fa-phone"></i>&nbsp;&nbsp; 8136860631</p>
              <p><i class="fa fa-envelope"></i>&nbsp;&nbsp; manumanuvkm123@gmail.com</p>
            </div>
            <div class="footer-box">
              <p><b>Subscribe</b></p>
              <input type="email" class="form-control" placeholder="Enter your email" style="max-width: 250px;" /><br />
              <button id="btn-s" type="button" class="btn btn-primary">Subscribe</button>
            </div>
          </div>
          <br />
          <div class="bottom-text">
            <p>Website developed by manu</p>
          </div>
        </div>


      </section>

    </>
  );
}


