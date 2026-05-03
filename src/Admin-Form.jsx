import './Admin-Form.css';
import { FaEnvelope } from "react-icons/fa";  
import { FiSearch } from "react-icons/fi";
import { MdLogout } from "react-icons/md";

function AdminForm() {
    return (
        <div id='Admin-form-page'>
            <nav>

                <div style={{display:'flex', alignItems:'center', gap:'20px', padding:'4px 20px'}}>
                    <h2>Admin Form</h2>
                    <img src="/logo_nust_png.png" alt="" id='nust-logo'  />
       
                </div>

                <div id='bottom-border'></div>
            </nav>

        <div id='top-heading'>
            <h2>Student Management <FaEnvelope></FaEnvelope>  </h2>
        </div>
            <main>

                <section id='input-form-container'>

                    <form action="" id='Student-personal-details'>
                        <div id='personal-heading'>
                            <h2>Personal Details <MdLogout></MdLogout></h2>
                        </div>

                        <div id='input-field-container'>

                            <div className='input-field'>
                                <label htmlFor="">National ID</label>
                                <input type="text" placeholder='National ID' />
                            </div>                        
                            <div className='input-field'>
                                <label htmlFor="">First Name</label>
                                <input type="text" placeholder='First Name' />
                            </div>

                            <div className='input-field'>
                                <label htmlFor="">Middle Name</label>
                                <input type="text" placeholder='(Optional)' />
                            </div>

                            <div className='input-field'>
                                <label htmlFor="">Last Name</label>
                                <input type="text" placeholder='Last Name' />
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
                                <input type="text" placeholder='Country' />
                            </div>

                            <div className='input-field'>
                                <label htmlFor="">City</label>
                                <input type="text" placeholder='City' />
                            </div>


                            
                            <div className='input-field'>
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder='Address' />
                            </div>

                            <div className='input-field'>
                                <label htmlFor="">Phone Number</label>
                                <input type="tel" placeholder='Phone Number' />
                            </div>

                            <div className='input-field'>
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder='Email' />
                            </div>

                        </div>
                        
                    </form>

                    <form action="" id='student-enrollment-information'>
                        <div id='personal-heading'>
                            <h2>Enrollment Information <MdLogout></MdLogout></h2>
                        </div>
                        <div id='input-field-container'>
                                      
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
                            <input type="text" placeholder='Student Number will be generated automatically' readOnly/><br />
                            <button>Generate Student ID</button>

                        </div>

                        
                        <div className='input-field'>
                            <label htmlFor="">Auto Generate Password for Portal</label>
                            <input type="text" placeholder='Password will be generated automatically' readOnly/><br />
                            <button>Generate Password</button>
                        
                        </div>

  
                        </div>


                    </form>

                    <div id='button-container'>

                        <form action="">
                            <h2 style={{fontSize:'17px', fontWeight:'300'}}>Choose an operation :</h2>
                            <input type="submit" value={"Save"} />
                            <input type="submit" value={"Delete"} />
                            <input type="submit" value={"Update"} />


                        </form>

                        <div id='search-container'>
                            <div id='search-inputs'>
                                <span>
                                <div className='input-field'>
                                
                                    <label htmlFor="">Search using</label>
                                    <select name="search-criteria" id="search-criteria">
                                        <option value="">-- Select Search Criteria --</option>
                                        <option value="student-id">Student ID</option>
                                        <option value="national-id">National ID</option>
                                        <option value="email">First Name</option>
                                        <option value="phone">Middle Number</option>
                                        <option value="phone">Last Name</option>
                                        <option value="phone">Gender</option>
                                        <option value="phone">DOB</option>
                                        <option value="phone">Country</option>
                                        <option value="phone">City</option>
                                        <option value="phone">Address</option>
                                        <option value="phone">Phone Number</option>
                                        <option value="phone">Email</option>
                                        <option value="phone">Department</option>
                                        <option value="phone">Degree</option>

                                        <option value=""></option>
                                    </select>
                                </div>
                                </span>
                                  
                                <span>
                                    <label htmlFor="">Search for </label>
                                    <input  type="text" placeholder='Password will be generated automatically' />
                               
                                </span>
                            </div>
         
                                <button id='search-btn'>Search 
                                    <FiSearch fontSize={20}></FiSearch>

                                </button>

 

                        </div>
                    </div>

             
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
                                <td>123456789</td>
                                <td>Promise</td>
                                <td>Doe</td>
                                <td>Siafwiyo</td>
                                <td>Male</td>   
                                <td>22/10/2005</td>
                                <td>Pakistan</td>
                                <td>Karachi</td>
                                <td>123 Main Street</td>
                                <td>+92 300 1234567</td>
                                <td>john.doe@example.com</td>
                                <td>Computer Science</td>
                                <td>Computer Science</td>
                                <td>CS123456</td>
                                <td>password123</td>
                            </tr>

                            <tr>
                                <td>987654321</td>
                                <td>Jane</td>
                                <td>Smith</td>
                                <td>Doe</td>
                                <td>Female</td>
                                <td>15/05/2004</td>
                                <td>USA</td>
                                <td>New York</td>
                                <td>456 Oak Avenue</td>
                                <td>+1 555 9876543</td>
                                <td>jane.smith@example.com</td>
                                <td>Mathematics</td>
                                <td>Mathematics</td>
                                <td>MATH654321</td>
                                <td>password456</td>
                            </tr>

                            <tr>
                                <td>555555555</td>
                                <td>Michael</td>
                                <td>Johnson</td>
                                <td>Williams</td>
                                <td>Male</td>
                                <td>10/12/2003</td>
                                <td>Canada</td>
                                <td>Toronto</td>
                                <td>789 Pine Street</td>
                                <td>+1 416 555 9876</td>
                                <td>michael.williams@example.com</td>
                                <td>Physics</td>
                                <td>Physics</td>
                                <td>PHYS987654</td>
                                <td>password789</td>
                            </tr>

                            <tr>
                                <td>111111111</td>
                                <td>Emily</td>
                                <td>Brown</td>
                                <td>Davis</td>
                                <td>Female</td>
                                <td>20/08/2004</td>
                                <td>USA</td>
                                <td>Los Angeles</td>
                                <td>321 Elm Street</td>
                                <td>+1 213 555 9876</td>
                                <td>emily.davis@example.com</td>
                                <td>Biology</td>
                                <td>Biology</td>
                                <td>BIO654321</td>
                                <td>password123</td>
                            </tr>

                            <tr>
                                <td>222222222</td>
                                <td>David</td>
                                <td>Wilson</td>
                                <td>Garcia</td>
                                <td>Male</td>
                                <td>15/07/2004</td>
                                <td>USA</td>
                                <td>Chicago</td>
                                <td>654 Maple Avenue</td>
                                <td>+1 312 555 9876</td>
                                <td>david.garcia@example.com</td>
                                <td>Chemistry</td>
                                <td>Chemistry</td>
                                <td>CHM987654</td>
                                <td>password456</td>
                            </tr>

                            <tr>
                                <td>333333333</td>
                                <td>Sarah</td>
                                <td>Lee</td>
                                <td>Martinez</td>
                                <td>Female</td>
                                <td>25/11/2004</td>
                                <td>USA</td>
                                <td>Los Angeles</td>
                                <td>987 Oak Street</td>
                                <td>+1 213 555 9876</td>
                                <td>sarah.martinez@example.com</td>
                                <td>English</td>
                                <td>English</td>
                                <td>ENG654321</td>
                                <td>password789</td>
                            </tr>

                            <tr>
                                <td>444444444</td>
                                <td>James</td>
                                <td>Miller</td>
                                <td>Taylor</td>
                                <td>Male</td>
                                <td>10/10/2004</td>
                                <td>USA</td>
                                <td>Houston</td>
                                <td>147 Cedar Road</td>
                                <td>+1 713 555 9876</td>
                                <td>james.taylor@example.com</td>
                                <td>History</td>
                                <td>History</td>
                                <td>HIST987654</td>
                                <td>password123</td>
                            </tr>
                        </tbody>

                    </table>
                </section>
            </main>
        </div>
    );

}

export default AdminForm;