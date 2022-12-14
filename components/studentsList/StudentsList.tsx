// import { Button } from "@chakra-ui/react";
import Button from "../button/Button";
import { useState } from "react";

type sutdentType={
    no: string,
    name:string,
    rollNo: number,
    studentClass:string,
    batchNo:number,
}
const StudentsList =()=>{
    const [students, setstudents]=useState<sutdentType[]>([{
        no: "01",
        name: "mudusar",
        rollNo: 12,
        studentClass:"one",
        batchNo:1,

    },])
    const addStudentInList=()=>{
        const newStudent: sutdentType={
            no: "02",
        name: "malik",
        rollNo: 1,
        studentClass:"two",
        batchNo:1,
 
        }
        setstudents([...students,newStudent])
    }
    return(
<div>
<h1>student list</h1>
<table>
    <tr>
        <th>No</th>
        <th>Name</th>
        <th>Roll No</th>
        <th>Class</th>
        <th>batch</th>
    </tr>
    {
        students.map((student)=>{
            return(
                <tr>
                    <td>{student.no}</td>
                    <td>{student.name}</td>
                    <td>{student.rollNo}</td>
                    <td>{student.studentClass}</td>
                    <td>{student.batchNo}</td>
                </tr>
            )
        })
    }
</table>
{/* <Button buttonTitle="Add student" onClick={addStudentInList} color="red"/> */}
{/* <button onClick={addStudentInList}>Add Students</button> */}
<Button buttonTitle="Add Students" color="red"  onClickHandler={addStudentInList}   />

</div>

    )
}

export default StudentsList