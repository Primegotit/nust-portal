import './Student-Dashboard.css'
import { FaBars } from "react-icons/fa";   
import { MdLogout } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";  
function MyButtons(MyContent){
    return(
        <>
            <button id='btns'> {MyContent.icon} {MyContent.name}  </button>

        </>
    )
}


function StudentDashboard(){

    return(
        <>
            <div id='student-dashboard-page'>
                <header>
                    <div id='header-things'>
                        <div id='left-top-container'>
                            <FaBars id='top-icons'></FaBars>
                            <h3 >STUDENT PORTAL <img src="/logo_nust_png.png" alt="" id='uni-logo' /></h3>
                    
                        </div>

                        <div id='right-top-container'>
                            <FaEnvelope id='top-icons'></FaEnvelope>                        
                            <button id='logout-btn'>Logout<MdLogout id='logout-btn-icon'></MdLogout></button>
                    
                        </div>
                    </div>
                    <div id='bottom-border'>

                    </div>
       

                </header>
                
                <div  id='main-content'>
                    <aside>
                        <div id='student-card'>
                            <div id='dp-container'>
                                <img src="/me1.png" alt="" id='student-dp' />
                            </div>
                            <h4>N02528961Y</h4>
                            <h4>Promise Siafwiyo</h4>

                        </div>
                        <MyButtons icon={<FaBars id='btns-icons'></FaBars>} name="Portal Dashboard" ></MyButtons>
                        <MyButtons icon={<MdLogout id='btns-icons'></MdLogout>} name="New Registration" ></MyButtons>
                        <MyButtons icon={<MdLogout id='btns-icons'></MdLogout>} name="Payments History" ></MyButtons>
                        <MyButtons icon={<MdLogout id='btns-icons'></MdLogout>} name="Continous Assessement" ></MyButtons>
                        <MyButtons icon={<MdLogout id='btns-icons'></MdLogout>} name="Examinations Results" ></MyButtons>
                        <MyButtons icon={<MdLogout id='btns-icons'></MdLogout>} name="Modules Information" ></MyButtons>

                    </aside>

                    <section id='content-container'>

                        <div id='person-information' className='content-box'>
                            
                            <div id='top-banner'>
                                <h3>Personal Information about</h3>
                            </div>

                            <div id='person-container'>
                                    
                                <div id='person-img'>
                                    <img src="/me1.png" alt="" id='student-dp' />

                                </div>

                                <div id='person-info'>
                                    <table>

                                        <tbody>
                                            <tr>
                                                <td id='hh1'>Name   </td>
                                                <td id='hh1'>Promise Siafwyo</td>
                                            </tr>
                                            <tr >
                                                <td id='hh2'>ID Number</td>
                                                <td id='hh2'>{"08-9905455555"}</td>
                                            </tr>

                                            <tr >
                                                <td id='#labell' >City</td>
                                                <td id='#labell'>{"Bulawayo"} , {"Nkulumane"}</td>
                                            </tr>

                                            <tr>
                                                <td id='#labell'>Country</td>
                                                <td id='#labell'>{"Zimbabwe"}</td>

                                            </tr>


                                            <tr>
                                                <td id='#labell'>Phone Number</td>
                                                <td id='#labell'>{"07899999999"}</td>
                                            </tr>

                                            <tr>
                                                <td id='#labell'>Gender</td>
                                                <td id='#labell'>{"Male"}</td>
                                            </tr>

                                            <tr>
                                                <td id='#labell'>Date of Birth</td>
                                                <td id='#labell'>{"05-04-2005"}</td>
                                            </tr>

                                            <tr>
                                                <td id='#labell'>Place of Birth</td>
                                                <td id='#labell'>{"Zimbabwe"}</td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>

                            </div>

                        </div>

                        <div id='academic-details' className='content-box'>
                            <div id='top-banner'>
                                <h3>Currently registred courses</h3>
                            </div>


                            <div id='person-container'>
                                    
                                <div id='person-img'>
                                    <img src="/me1.png" alt="" id='student-dp' />

                                </div>

                                <div id='person-info'>
                                    <table>

                                        <tbody>
                                            <tr>
                                                <td id='hh1'>Name   </td>
                                                <td id='hh1'>Promise Siafwyo</td>
                                            </tr>
                                            <tr >
                                                <td id='hh2'>ID Number</td>
                                                <td id='hh2'>{"08-9905455555"}</td>
                                            </tr>

                                            <tr >
                                                <td id='#labell' >City</td>
                                                <td id='#labell'>{"Bulawayo"} , {"Nkulumane"}</td>
                                            </tr>

                                            <tr>
                                                <td id='#labell'>Country</td>
                                                <td id='#labell'>{"Zimbabwe"}</td>

                                            </tr>


                                            <tr>
                                                <td id='#labell'>Phone Number</td>
                                                <td id='#labell'>{"07899999999"}</td>
                                            </tr>

                                            <tr>
                                                <td id='#labell'>Gender</td>
                                                <td id='#labell'>{"Male"}</td>
                                            </tr>

                                            <tr>
                                                <td id='#labell'>Date of Birth</td>
                                                <td id='#labell'>{"05-04-2005"}</td>
                                            </tr>

                                            <tr>
                                                <td id='#labell'>Place of Birth</td>
                                                <td id='#labell'>{"Zimbabwe"}</td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>

                            </div>

                        </div>

                        
                        <div id='registered-courses' className='content-box'>
                            <div id='top-banner'>
                                <h3>Financial Details</h3>
                            </div>


                                       <div id='person-container'>
                                    
                                <div id='person-img'>
                                    <img src="/me1.png" alt="" id='student-dp' />

                                </div>

                                <div id='person-info'>
                                    <table>

                                        <tbody>
                                            <tr>
                                                <td id='hh1'>Name   </td>
                                                <td id='hh1'>Promise Siafwyo</td>
                                            </tr>
                                            <tr >
                                                <td id='hh2'>ID Number</td>
                                                <td id='hh2'>{"08-9905455555"}</td>
                                            </tr>

                                            <tr >
                                                <td id='#labell' >City</td>
                                                <td id='#labell'>{"Bulawayo"} , {"Nkulumane"}</td>
                                            </tr>

                                            <tr>
                                                <td id='#labell'>Country</td>
                                                <td id='#labell'>{"Zimbabwe"}</td>

                                            </tr>


                                            <tr>
                                                <td id='#labell'>Phone Number</td>
                                                <td id='#labell'>{"07899999999"}</td>
                                            </tr>

                                            <tr>
                                                <td id='#labell'>Gender</td>
                                                <td id='#labell'>{"Male"}</td>
                                            </tr>

                                            <tr>
                                                <td id='#labell'>Date of Birth</td>
                                                <td id='#labell'>{"05-04-2005"}</td>
                                            </tr>

                                            <tr>
                                                <td id='#labell'>Place of Birth</td>
                                                <td id='#labell'>{"Zimbabwe"}</td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>

                            </div>

                        </div>

                        <div id='financial-details' className='content-box'>
                            <div id='top-banner'>
                                <h3>Academic Details</h3>
                            </div>


                                       <div id='person-container'>
                                    
                                <div id='person-img'>
                                    <img src="/me1.png" alt="" id='student-dp' />

                                </div>

                                <div id='person-info'>
                                    <table>

                                        <tbody>
                                            <tr>
                                                <td id='hh1'>Name   </td>
                                                <td id='hh1'>Promise Siafwyo</td>
                                            </tr>
                                            <tr >
                                                <td id='hh2'>ID Number</td>
                                                <td id='hh2'>{"08-9905455555"}</td>
                                            </tr>

                                            <tr >
                                                <td id='#labell' >City</td>
                                                <td id='#labell'>{"Bulawayo"} , {"Nkulumane"}</td>
                                            </tr>

                                            <tr>
                                                <td id='#labell'>Country</td>
                                                <td id='#labell'>{"Zimbabwe"}</td>

                                            </tr>


                                            <tr>
                                                <td id='#labell'>Phone Number</td>
                                                <td id='#labell'>{"07899999999"}</td>
                                            </tr>

                                            <tr>
                                                <td id='#labell'>Gender</td>
                                                <td id='#labell'>{"Male"}</td>
                                            </tr>

                                            <tr>
                                                <td id='#labell'>Date of Birth</td>
                                                <td id='#labell'>{"05-04-2005"}</td>
                                            </tr>

                                            <tr>
                                                <td id='#labell'>Place of Birth</td>
                                                <td id='#labell'>{"Zimbabwe"}</td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>

                            </div>

                        </div>

                        

                    </section>
                
                </div>
                
            </div>
        </>
    )
}


export default StudentDashboard;