import './LecturerForm.css';
import { FaUndo } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


function LecturerForm(){
    return(
        <div id="lecturer-form-container">

            <nav id='top-heading'>
                <h2>Lecturer Form</h2>

            </nav>
            <div id='bottom-border'></div>


            <div id='main-content-container'>

                <h3 id='instr'>Enter details</h3>
                <br />
                <form action="">
                    <section id='lecturer-field-container'>
                        <label htmlFor="lecturer-id">Lecturer ID</label>
                        <input type="text" id="lecturer-id" placeholder='Enter your Lecturer ID  ' />
                    
                    </section>
                    <section id='lecturer-field-container'>
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" id="name" placeholder='Enter full name' />
                    
                    </section>


                    <section id='lecturer-field-container'>
                        <label htmlFor="department">Department</label>
                        <select name="department" id="department">
                            <option value="">--Select Department--</option>
                            <option value="computer-science">Computer Science</option>
                            <option value="mathematics">Mathematics</option>
                            <option value="physics">Physics</option>
                        </select>
                    </section>
                    

                    <section id='lecturer-field-container'>
                        <label htmlFor="">Current Part</label>
                        <select name="" id="">
                            <option value="">1.1</option>
                            <option value="">1.2</option>
                            <option value="">2.1</option>
                            <option value="">2.2</option>
                            <option value="">3.1</option>
                            <option value="">3.2</option>
                            <option value="">4.1</option>
                            <option value="">4.2</option>
                        </select>
                    </section>
                    <section id='lecturer-field-container'>
                        <label htmlFor="current-module">Course Code</label>
                        <input type="text" id="name" placeholder='Enter course code' />
                    </section>

                    <section id='lecturer-field-container'>
                        <label htmlFor="current-module">Current Module</label>
                        <select name="current-module" id="current-module">
                            <option value="">--Select Current Module--</option>
                            <option value="data-structures">Data Structures</option>
                            <option value="algorithms">Algorithms</option>
                            <option value="database-systems">Database Systems</option>
                        </select>
                    </section>
                    

                    <section id='lecturer-field-container'>
                        <label htmlFor="">Current Year</label>
                        <input type="text" name="" id="" value={"2026"} readOnly />
                    </section>

                 
                </form>
                   <div id='lecturer-btn-container'>
                        <button><FaSave /> Submit</button>
                        <button><FaUndo /> Reset</button>

                    </div>

            </div>


            <div id='students-details-container'>
                <div id='students-input-container'>
                    <div>
                        <h2>Student Details</h2>
                    </div>
                    <br />
                    <form action="">

                        <section id='student-field-container'>
                            <label htmlFor="student-id">Student ID</label>
                            <input type="text" id="student-id" placeholder='Enter the Student ID  ' />
                        </section>
                        <section id='student-field-container'>
                            <label htmlFor="student-name">Full Name</label>
                            <input type="text" id="student-name" value={"Promise Siafwiyo"} placeholder='Student Name will appear here  ' readOnly />
                        </section>
                        <section id='student-field-container'>
                            <label htmlFor="current-module">Current Part</label>
                            <input type="text" id="current-module" placeholder='Enter current part' value={"2.1"} readOnly />
                        </section>
                        <section id='student-field-container'>
                            <label htmlFor="current-module">Course Code</label>
                            <input type="text" id="current-module" placeholder='Course Code will appear here' value={"SCS2104"} readOnly/>
                        </section>
                        <section id='student-field-container'>
                            <label htmlFor="current-module">Current Module</label>
                            <input type="text" id="current-module" placeholder='Current Module will appear here' value={"Data structures"} readOnly/>
                        </section>

                        <section id='student-field-container'>
                            <label htmlFor="current-module">Final Mark</label>
                            <input type="text" id="current-module" placeholder='Enter final mark' value={"74"} />
                        </section>
                        
                        <section id='student-field-container'>
                            <label htmlFor="current-module">Grade</label>
                            <input type="text" id="current-module" placeholder='Grade will be shown here' value={"2.1"} readOnly />
                        </section>
                    </form>

                    <div id='lecturer-btn-container'>
                        <button><FaSave /> Save</button>
                        <button><FaUndo /> Update</button>
                        <button><FaUndo /> Reset</button>

                    </div>


                </div>
                

                <div id='students-info-container'>

                    <div id='student-search-container'>
                        <form action="">
                            <span>
                                <label htmlFor="">Search by</label>
                                <select name="" id="">
                                    <option value="">--Select a field--</option>
                                    <option value="">Student ID</option>
                                    <option value="">Full Name</option>
                                    <option value="">Final Mark</option>
                                    <option value="">Grade</option>
                                    
                                </select>

                            </span>
                            <span>
                                <label htmlFor="">Search For</label>
                                <input type="text" placeholder='Search for ' />
                            
                            </span>

                            <button><FaSearch /> Search</button>
                            <button><FaSearch /> Reset</button>

                        </form>
                    </div>

                    <div id='student-table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Student ID</th>
                                    <th>Full Name</th>
                                    <th>Current Part</th>
                                    <th>Course Code</th>
                                    <th>Current Module</th>
                                    <th>Final Mark</th>
                                    <th>Grade</th>
                                    
                                </tr>
                                                    
                            </thead>
                            <tbody>
                                <tr>
                                    <td>111111111</td>
                                    <td>Promise Siafwiyo</td>
                                    <td>2.1</td>
                                    <td>SCS2104</td>
                                    <td>Web development</td>
                                    <td>74</td>
                                    <td>2.1</td>
                                </tr>
                                <tr>
                                    <td>222222222</td>
                                    <td>John Doe</td>
                                    <td>2.1</td>
                                    <td>SCS2104</td>
                                    <td>Web development</td>
                                    <td>85</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>333333333</td>
                                    <td>Jane Smith</td>
                                    <td>2.1</td>
                                    <td>SCS2104</td>
                                    <td>Web development</td>
                                    <td>90</td>
                                    <td>1</td>
                                </tr>
                                        <tr>
                                    <td>333333333</td>
                                    <td>Jane Smith</td>
                                    <td>2.1</td>
                                    <td>SCS2104</td>
                                    <td>Web development</td>
                                    <td>90</td>
                                    <td>1</td>
                                </tr>
                                        <tr>
                                    <td>333333333</td>
                                    <td>Jane Smith</td>
                                    <td>2.1</td>
                                    <td>SCS2104</td>
                                    <td>Web development</td>
                                    <td>90</td>
                                    <td>1</td>
                                </tr>
                                        <tr>
                                    <td>333333333</td>
                                    <td>Jane Smith</td>
                                    <td>2.1</td>
                                    <td>SCS2104</td>
                                    <td>Web development</td>
                                    <td>90</td>
                                    <td>1</td>
                                </tr>
                                        <tr>
                                    <td>333333333</td>
                                    <td>Jane Smith</td>
                                    <td>2.1</td>
                                    <td>SCS2104</td>
                                    <td>Web development</td>
                                    <td>90</td>
                                    <td>1</td>
                                </tr>
                                        <tr>
                                    <td>333333333</td>
                                    <td>Jane Smith</td>
                                    <td>2.1</td>
                                    <td>SCS2104</td>
                                    <td>Web development</td>
                                    <td>90</td>
                                    <td>1</td>
                                </tr>
                                        <tr>
                                    <td>333333333</td>
                                    <td>Jane Smith</td>
                                    <td>2.1</td>
                                    <td>SCS2104</td>
                                    <td>Web development</td>
                                    <td>90</td>
                                    <td>1</td>
                                </tr>
                                        <tr>
                                    <td>333333333</td>
                                    <td>Jane Smith</td>
                                    <td>2.1</td>
                                    <td>SCS2104</td>
                                    <td>Web development</td>
                                    <td>90</td>
                                    <td>1</td>
                                </tr>
                   
                 
                            </tbody>
                        </table>
                    </div>

                </div>

                
            </div>

        </div>
    )
}

export default LecturerForm
