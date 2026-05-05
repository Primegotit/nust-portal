import './Student-Results.css'
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";

function StudentResults() {
    return (
        <>
            <div id='student-results-container'>

                <nav id='top-heading'>
                    <h2>Student Results <FaSearch></FaSearch></h2>
                </nav>
                <div id='bottom-border'></div>

                <div id='student-results-envelope'>

                    <div id='student-results-personal-info'>
                        <section>
                            <h2><FiUser fontSize={30}/> Personal Information </h2>
                        </section>
                        <section id='results-table-con'>
                            <table>
                                <thead>

                                <th id='image-con'>
                                    <img src="/logo_nust_png.png" alt="" id='nust-logo' />

                                </th>

                                <th>
                                    <tr>
                                        <td>National ID : {"123456"}</td>
                                    </tr>

                                    <tr>
                                        <td>Name : {"Promise Siafwiyo"}</td>

                                    </tr>

                                    <tr>
                                        <td>Department : {"Computer Science"}</td>


                                    </tr>

                                    <tr>
                                        <td>DOB : {"05/04/2005"}</td>

                                    </tr>

                                    <tr>
                                        <td>Gender : {"Male"}</td>

                                    </tr>



                                    <tr>
                                        <td>Degree : {"Bachelor's Degree in Computer Science"}</td>

                                    </tr>
                                </th>

                                <th>

                                    <tr>
                                        <td>Student Number : {"123456"}</td>
                                    </tr>

                               
                                    

                                    <tr>
                                        <td>Country : {"Zimbabwe"}</td>

                                    </tr>

                                    <tr>
                                        <td>City : {"Bulawayo "}</td>

                                    </tr>
                                    
                                    <tr>
                                        <td>Address : {"Magwegwe North"}</td>

                                    </tr>

                                    <tr>
                                        <td>Phone Number : 0789880071</td>
                                    </tr>
                                
                                </th>
                                </thead>
                            </table>
                        </section>

                    </div>

                    <div id='students-results-table-container'>

                        <section id='examination-heading'>
                            <h2><FiBarChart2 fontSize={30}/> Examination Results </h2>
                            <span>
                                <button>Screenshot</button>
                                <button>Print</button>

                            </span>

                        </section>

                        <section id='exam-table-con'>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Academic Year</th>
                                        <th>Semester & Part</th>
                                        <th>Course Code</th>
                                        <th>Course Name</th>
                                        <th>Mark</th>
                                        <th>Classification</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>2026</td>
                                        <td>2.1</td>
                                        <td>SCS2104</td>
                                        <td>Web development</td>
                                        <td>78</td>
                                        <td>1</td>
                                    </tr>

                                    <tr>
                                        <td>2026</td>
                                        <td>2.1</td>
                                        <td>SCS2100</td>
                                        <td>Introduction to Statistics</td>
                                        <td>78</td>
                                        <td>1</td>
                                        
                                    </tr>

                                    <tr>
                                        <td>2026</td>
                                        <td>2.1</td>
                                        <td>SCS2100</td>
                                        <td>Introduction to Statistics</td>
                                        <td>78</td>
                                        <td>1</td>
                                        
                                    </tr>



                                    <tr>
                                        <td>2026</td>
                                        <td>2.1</td>
                                        <td>SCS2100</td>
                                        <td>Introduction to Statistics</td>
                                        <td>78</td>
                                        <td>1</td>
                                        
                                    </tr>


                                    <tr>
                                        <td>2026</td>
                                        <td>2.1</td>
                                        <td>SCS2100</td>
                                        <td>Introduction to Statistics</td>
                                        <td>78</td>
                                        <td>1</td>
                                        
                                    </tr>



                                    <tr>
                                        <td>2026</td>
                                        <td>2.1</td>
                                        <td>SCS2100</td>
                                        <td>Introduction to Statistics</td>
                                        <td>78</td>
                                        <td>1</td>
                                        
                                    </tr>



                                    <tr>
                                        <td>2026</td>
                                        <td>2.1</td>
                                        <td>SCS2100</td>
                                        <td>Introduction to Statistics</td>
                                        <td>78</td>
                                        <td>1</td>
                                        
                                    </tr>



                                    <tr>
                                        <td>2026</td>
                                        <td>2.1</td>
                                        <td>SCS2100</td>
                                        <td>Introduction to Statistics</td>
                                        <td>78</td>
                                        <td>1</td>
                                        
                                    </tr>

                                    <tr>
                                        <td>2026</td>
                                        <td>2.1</td>
                                        <td>SCS2100</td>
                                        <td>Introduction to Statistics</td>
                                        <td>78</td>
                                        <td>1</td>
                                        
                                    </tr>

                                    <tr>
                                        <td>2026</td>
                                        <td>2.1</td>
                                        <td>SCS2100</td>
                                        <td>Introduction to Statistics</td>
                                        <td>78</td>
                                        <td>1</td>
                                        
                                    </tr>

                                    <tr>
                                        <td>2026</td>
                                        <td>2.1</td>
                                        <td>SCS2100</td>
                                        <td>Introduction to Statistics</td>
                                        <td>78</td>
                                        <td>1</td>
                                        
                                    </tr>

                                    <tr>
                                        <td>2026</td>
                                        <td>2.1</td>
                                        <td>SCS2100</td>
                                        <td>Introduction to Statistics</td>
                                        <td>78</td>
                                        <td>1</td>
                                        
                                    </tr>

                                    <tr>
                                        <td>2026</td>
                                        <td>2.1</td>
                                        <td>SCS2100</td>
                                        <td>Introduction to Statistics</td>
                                        <td>78</td>
                                        <td>1</td>
                                        
                                    </tr>



                                </tbody>
                            </table>
                            
                        </section>
                    </div>
                </div>

            </div>
        </>
    )
}

export default StudentResults;