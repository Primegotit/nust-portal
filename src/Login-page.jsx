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
                    <div id='login-container'>
                        <h3>STUDENTS PORTAL</h3>
                        <input type="text" placeholder='Student Number' />
                        <input type="text" placeholder='Password' />

                    </div>
                </div>
            </div>

        </>
  );
}

export default LoginPage;