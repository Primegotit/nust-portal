import './LecturerForm.css';


function LecturerForm(){
    return(
        <div id="lecturer-form-container">

            <nav id='top-heading'>
                <h2>Lecturer Form</h2>

            </nav>
            <div id='bottom-border'></div>


            <div id='main-content-container'>
                <form action="">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter your name' />

                </form>
            </div>

        </div>
    )
}

export default LecturerForm
