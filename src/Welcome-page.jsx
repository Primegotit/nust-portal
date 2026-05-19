import './Welcome-page.css'

function WelcomePage() {
  return (
    <div id='welcome-page-container'>

        <div id='heading-container'>
          <img src="/logo_nust_png.png" alt="" id='nust-logo' />
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Developers</a></li>

          </ul>
          <img src="/logo_nust_png.png" alt="" id='nust-logo' />

        </div>

        <div id='welcome-content-container'>

          <div id='content-container-welcome'>
            <h1>Welcome to the Nust System</h1>
            <p>This is a replica of the Nust portal but it only has few features and is actually designed more cooler than the official.
              The system allows students and lectures and the admin, to log in , check results, manage students, allocate marks, manage modules and etc.
              The most important part about this system is that it offers robust security and is impenetrable to hacking or any type of digital maliciuos act.
            </p>
          </div>

          <div id='image-container'>
            {/* <img src="/logo_nust_png.png" alt="" id='nust-logo' /> */}
          </div>
        </div>

    </div>
  );
}

export default WelcomePage;