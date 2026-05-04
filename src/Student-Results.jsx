import './Student-Results.css'
import { FaSearch } from "react-icons/fa";

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
                            <h3>Personal Information</h3>
                        </section>
                        <section>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Student ID : {"123456"}</td>
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
                                        <td>Address : {"Bulawayo Magwegwe North"}</td>

                                    </tr>

                                    <tr>
                                        <td>Degree : {"Bachelor's Degree in Computer Science"}</td>

                                    </tr>


                                </tbody>
                            </table>
                        </section>

                    </div>
                    <div id='students-results-table-container'>


                    </div>
                </div>

            </div>
        </>
    )
}

export default StudentResults;