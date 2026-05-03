import './Admin-Form.css';
import { FaEnvelope } from "react-icons/fa";  

function AdminForm() {
    return (
        <div id='Admin-form-page'>
            <nav>

                <div style={{display:'flex', alignItems:'center', gap:'20PX', padding:'4px 20px'}}>
                    <h2>Admin Form</h2>
                    <img src="/logo_nust_png.png" alt="" id='nust-logo'  />
       
                </div>

                <div id='bottom-border'></div>
            </nav>

        <div id='input-form-container-header'>
            <h2>Student Management <FaEnvelope></FaEnvelope>  </h2>
        </div>
            <main>
                <section id='input-form-container'>
                 
                    <form action="" id='Student-personal-details'>
                        <div className='input-field'>
                            <label htmlFor="">National ID</label>
                            <input type="text" placeholder='Enter your National-ID' />
                        </div>                        
                        <div className='input-field'>
                            <label htmlFor="">First Name</label>
                            <input type="text" placeholder='Enter your First Name' />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="">Middle Name</label>
                            <input type="text" placeholder='Enter your Middle Name' />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="">Last Name</label>
                            <input type="text" placeholder='Enter your Last Name' />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="">Gender</label>
                            <select name="gender" id="gender" >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div className='input-field'>
                            <label htmlFor="">DOB</label>
                            <input type="date"  />
                        </div>

                         <div className='input-field'>
                            <label htmlFor="">Country</label>
                            <input type="text" placeholder='Enter your Country' />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="">City</label>
                            <input type="text" placeholder='Enter your City' />
                        </div>


                        
                        <div className='input-field'>
                            <label htmlFor="">Address</label>
                            <input type="text" placeholder='Enter your Address' />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="">Phone Number</label>
                            <input type="tel" placeholder='Enter your Phone Number' />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='Enter your Email' />
                        </div>

                    </form>

                    <form action="" id='student-enrollment-information'>
                        <div className='input-field'>
                            <label htmlFor="">Select Department</label>
                            <select name="department" id="department">
                                <option value="">-- Select Department --</option>
                                <option value="computer-science">Department of Computer Science</option>
                                <option value="mathematics">Department of Mathematics</option>
                                <option value="physics">Department of Physics</option>
                            </select>
                        </div>

                        <div className='input-field'>
                            <label htmlFor="">Select Degree</label>
                            <select name="degree" id="degree">
                                <option value="">-- Select Degree --</option>
                                <option value="bachelor">Bachelor's Degree in Computer Science</option>
                                <option value="master">Bachelor's Degree in Mathematics</option>
                                <option value="phd">Bachelor's Degree in Electrical Engineering</option>
                                <option value="phd">Bachelor's Degree in Informatics</option>
                                <option value="phd">Bachelor's Degree in Physics</option>

                            </select>
                        </div>

                        <div className='input-field'>
                            <label htmlFor="">Auto Generate Student Number</label>
                            <input type="text" placeholder='Student Number will be generated automatically' readOnly/>
                            <input type="submit" value={"Generate Student ID"} />
                        </div>

                        
                        <div className='input-field'>
                            <label htmlFor="">Auto Generate Password for Portal</label>
                            <input type="text" placeholder='Password will be generated automatically' readOnly/>
                            <input type="submit" value={"Generate Password"} />
                        
                        </div>



                    </form>
                </section>



                <section id='information-table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>{"National ID"}</th>
                                <th>{"First Name"}</th>
                                <th>{"Middle Name"}</th>
                                <th>{"Last Name"}</th>
                                <th>{"Gender"}</th>
                                <th>{"DOB"}</th>
                                <th>{"Country"}</th>
                                <th>{"City"}</th>
                                <th>{"Address"}</th>
                                <th>{"Phone Number"}</th>
                                <th>{"Email"}</th>
                                <th>{"Department"}</th> 
                                <th>{"Degree"}</th> 
                                <th>{"Student ID"}</th>
                                <th>{"Password"}</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>

                            </tr>
                        </tbody>

                    </table>
                </section>
            </main>
        </div>
    );

}

export default AdminForm;