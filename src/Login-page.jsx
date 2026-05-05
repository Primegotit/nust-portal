import './Login-page.css'

function LoginPage() {
  return (
        <>
            <div id='loginpage'>
                <nav>
                    <img src="/logo_nust_png.png" alt="" id='nust-logo' />
                    <h2>University management system</h2>
                </nav>

                <div id='main-login-body'>

                    <div>

                    </div>

                    <div id='login-container'>
                        <div id='logo-wrapper'>
                            <img src="/logo_nust_png.png" alt="" id='nust-logo' />
                        </div>

                        <h3>STUDENTS PORTAL</h3>
                        <br />
                        <form action="">
                            <div id='textbox-container'>
                                <input type="text" placeholder='Student Number' />
                                <input type="password" placeholder='Password' />


                            </div>
                            <br />
                            <button id='login-btn'>LOG IN</button>
                                
                        </form>


                    </div>

                    <div id='bottom-nust-banner'>
                        <h4>2026 University management system</h4>
                    </div>
                     
                </div>
                
            </div>

        </>
  );
}

export default LoginPage;