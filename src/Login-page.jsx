import './Login-page.css'

function LoginPage() {
  return (
        <>
            <div id='loginpage'>
                <nav>
                    <img src="/logo_nust_png.png" alt="" id='nust-logo' />
                    <h2>NATIONAL UNIVERSITY OF SCIENCE AND TECHNOLOGY</h2>
                </nav>

                <div id='main-login-body'>

                    <div>

                    </div>
                    <div id='login-container'>

                        <h3>STUDENTS PORTAL</h3>
                        <br />
                        <form action="">
                            <div id='textbox-container'>
                                <input type="text" placeholder='Student Number' />
                                <input type="password" placeholder='Password' />


                            </div>
                            <br />
                            <input type="submit" value={"LOG IN"} id='login-btn'/>


                        </form>


                    </div>

                    <div id='bottom-nust-banner'>
                        <h4>2026 National University of Science and Technology</h4>
                    </div>
                     
                </div>
            </div>

        </>
  );
}

export default LoginPage;