`use strict`;

let studentDetails = [
    {id: 1, firstname: 'jay', lastname: 'patel'},
    {id: 2, firstname: 'jay1', lastname: 'patel1'},
    {id: 3, firstname: 'jay2', lastname: 'patel2'},
    {id: 4, firstname: 'jay3', lastname: 'patel3'}
];

const getAllStudent = (req, res) => {
    try {
        if(studentDetails.length > 0)
            return res.status(200).send(JSON.stringify(studentDetails));
        return res.status(404).send({error: `data not found in student detail..`});
    }catch (error) {
        return res.status(500).send({error: `an error occurred while getting student record..${error}`});
    }
}

const upsertStudent = (req, res) => {
    try {
        console.log('data got...',typeof req.params.id, "req body------", req.body);
        const studentId = req.params.id;
        if ((studentId === "null")) {
            console.log('student ...........');
            studentDetails.push({id: studentDetails.length + 1,...req.body});
            console.log('students array...........',studentDetails);
            return res.status(201).send(JSON.stringify({id: studentDetails.length,...req.body}));
        }
        else {
            console.log('update data..');
            studentDetails[studentId] = req.body;
            return res.status(200).send(JSON.stringify({studentId,studentObject:studentDetails[studentId]}));
        }
    }catch (error) {
        console.log('error occured...');
        return res.status(500).send({error: `an error occurred while upsert student record..`});
    }
}

const deleteStudent = (req, res) => {
    try {
        const studentId = req.params.id;
        studentDetails = studentDetails.filter((student, index) => {
            return student.id != studentId;
        });
        return res.status(200).send({studentId});
    }catch (error) {
        return res.status(500).send({error: `an error occurred while delete student `});
    }
}

module.exports = {
    getAllStudent,
    upsertStudent,
    deleteStudent
}