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

                    <section>

                    </section>
                
                </div>
                
            </div>
        </>
    )
}


export default StudentDashboard;