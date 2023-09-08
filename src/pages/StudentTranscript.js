import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function calculateGP(grade) {
  switch (grade) {
    case 'A+':
      return 5.0;
    case 'A':
      return 4.0;
    case 'B+':
      return 3.5;
    case 'B':
      return 3.0;
    case 'C+':
      return 2.5;
    case 'C':
      return 2.0;
    case 'D':
      return 1.0;
    case 'F':
      return 0.0;
    default:
      return 0.0; // Default to 0.0 for unrecognized grades.
  }
}

const StudentTranscript = () => {
  const studentInfo =[
    {
      fullName: 'John Doe',
      dateOfBirth: '01/01/1990',
      department: 'Computer Science',
      faculty: 'Science',
      entryYear: '2018',
      graduationYear: '2022',
      registrationNumber: '001',
      matricNumber: 'bsu/cmp/19/1000',
      semester: 'First',
      level: '100',
      session: '2018',
      courses: [
            {
              id: 1,
              courseCode: 'CMP101',
              courseTitle: 'Introduction to Computer Science',
              status: 'Pass',
              grade: 'A',
              score: 85,
              creditHours: 3, // Add credit hours for the course.
            },
            {
              id: 2,
              courseCode: 'PHY101',
              courseTitle: 'Physics II',
              status: 'Pass',
              grade: 'A',
              score: 90,
              creditHours: 3, // Add credit hours for the course.
            },
            {
              id: 3,
              courseCode: 'MAT101',
              courseTitle: 'Advanced Mathematics',
              status: 'Fail',
              grade: 'F',
              score: 40,
              creditHours: 3, // Add credit hours for the course.
            },
           ],
      
    }, 

    {
      fullName: 'John Doe',
      dateOfBirth: '01/01/1990',
      department: 'Computer Science',
      faculty: 'Science',
      entryYear: '2018',
      graduationYear: '2022',
      registrationNumber: '001',
      matricNumber: 'bsu/cmp/19/1000',
      semester: 'second',
      level: '100',
      session: '2018',
      courses: [
        // Question 1
        {
        id: 1,
        courseCode: 'ENG201',
         courseTitle: 'English Literature', 
        status: 'Pass', 
        grade: 'B',
         score: 75,
         creditHours: 3, // Add credit hours for the course.
        },
        // Question 2
        {
          id: 2,
          courseCode: 'PHY202', 
          courseTitle: 'Physics II', 
          status: 'Pass', 
          grade: 'A', 
          score: 90 ,
          creditHours: 3, // Add credit hours for the course.

        },
    
        {
          id: 3,
          courseCode: 'MAT201', 
          courseTitle: 'Advanced Mathematics', 
          status: 'Fail', 
          grade: 'F', 
          score: 40,
          creditHours: 3, // Add credit hours for the course.

        },
    
    ],
      
    }, 

    {
      fullName: 'John Doe',
      dateOfBirth: '01/01/1990',
      department: 'Computer Science',
      faculty: 'Science',
      entryYear: '2018',
      graduationYear: '2022',
      registrationNumber: '001',
      matricNumber: 'bsu/cmp/19/1000',
      semester: 'First',
      level: '200',
      session: '2019',
      courses: [
        // Question 1
        {
        id: 1,
        courseCode: 'CMP201',
        courseTitle: 'Introduction to Computer Science', 
        status: 'Pass',
        grade: 'A',
        score: 85,
        creditHours: 3, // Add credit hours for the course.

  
        },
        // Question 2
        {
          id: 2,
          courseCode: 'PHY201', 
          courseTitle: 'Physics II', 
          status: 'Pass', 
          grade: 'A', 
          score: 90,
          creditHours: 3, // Add credit hours for the course.
 
        },
    
        {
          id: 3,
          courseCode: 'MAT201', 
          courseTitle: 'Advanced Mathematics', 
          status: 'Fail', 
          grade: 'F', 
          score: 40,
          creditHours: 3, // Add credit hours for the course.

        },
    
    ],
      
    }, 

    {
      fullName: 'John Doe',
      dateOfBirth: '01/01/1990',
      department: 'Computer Science',
      faculty: 'Science',
      entryYear: '2018',
      graduationYear: '2022',
      registrationNumber: '001',
      matricNumber: 'bsu/cmp/19/1000',
      semester: 'second',
      level: '200',
      session: '2019',
      courses: [
        // Question 1
        {
        id: 1,
        courseCode: 'CMP202',
        courseTitle: 'Introduction to Computer Science', 
        status: 'Pass',
        grade: 'A',
        score: 85,
        creditHours: 3, // Add credit hours for the course.
 
  
        },
        // Question 2
        {
          id: 2,
          courseCode: 'PHY202', 
          courseTitle: 'Physics II', 
          status: 'Pass', 
          grade: 'A', 
          score: 90,
          creditHours: 3, // Add credit hours for the course.
 
        },
    
        {
          id: 3,
          courseCode: 'MAT202', 
          courseTitle: 'Advanced Mathematics', 
          status: 'Fail', 
          grade: 'F', 
          score: 40,
          creditHours: 3, // Add credit hours for the course.

        },
    
    ],
    }, 

    {
      fullName: 'John Doe',
      dateOfBirth: '01/01/1990',
      department: 'Computer Science',
      faculty: 'Science',
      entryYear: '2018',
      graduationYear: '2022',
      registrationNumber: '001',
      matricNumber: 'bsu/cmp/19/1000',
      semester: 'First',
      level: '300',
      session: '2020',
      courses: [
        // Question 1
        {
        id: 1,
        courseCode: 'CMP301',
        courseTitle: 'Introduction to Computer Science', 
        status: 'Pass',
        grade: 'A',
        score: 85,
        creditHours: 3, // Add credit hours for the course.

  
        },
        // Question 3
        {
          id: 2,
          courseCode: 'PHY301', 
          courseTitle: 'Physics II', 
          status: 'Pass', 
          grade: 'A', 
          score: 90,
          creditHours: 3, // Add credit hours for the course.
 
        },
    
        {
          id: 3,
          courseCode: 'MAT301', 
          courseTitle: 'Advanced Mathematics', 
          status: 'Fail', 
          grade: 'F', 
          score: 40,
          creditHours: 3, // Add credit hours for the course.

        },
    
    ],
      
    }, 

    {
      fullName: 'John Doe',
      dateOfBirth: '01/01/1990',
      department: 'Computer Science',
      faculty: 'Science',
      entryYear: '2018',
      graduationYear: '2022',
      registrationNumber: '001',
      matricNumber: 'bsu/cmp/19/1000',
      semester: 'second',
      level: '300',
      session: '2020',
      courses: [
        // Question 1
        {
        id: 1,
        courseCode: 'CMP302',
        courseTitle: 'Introduction to Computer Science', 
        status: 'Pass',
        grade: 'A',
        score: 85,
        creditHours: 3, // Add credit hours for the course.
 
  
        },
        // Question 2
        {
          id: 2,
          courseCode: 'PHY302', 
          courseTitle: 'Physics II', 
          status: 'Pass', 
          grade: 'A', 
          score: 90,
          creditHours: 3, // Add credit hours for the course.
 
        },
    
        {
          id: 3,
          courseCode: 'MAT302', 
          courseTitle: 'Advanced Mathematics', 
          status: 'Fail', 
          grade: 'F', 
          score: 40,
          creditHours: 3, // Add credit hours for the course.

        },
    
    ],
      
    }, 

    {
      fullName: 'John Doe',
      dateOfBirth: '01/01/1990',
      department: 'Computer Science',
      faculty: 'Science',
      entryYear: '2018',
      graduationYear: '2022',
      registrationNumber: '001',
      matricNumber: 'bsu/cmp/19/1000',
      semester: 'First',
      level: '400',
      session: '2022',
      courses: [
        // Question 1
        {
        id: 1,
        courseCode: 'CMP401',
        courseTitle: 'Introduction to Computer Science', 
        status: 'Pass',
        grade: 'A',
        score: 85,
        creditHours: 3, // Add credit hours for the course.

  
        },
        // Question 2
        {
          id: 2,
          courseCode: 'PHY401', 
          courseTitle: 'Physics II', 
          status: 'Pass', 
          grade: 'A', 
          score: 90,
          creditHours: 3, // Add credit hours for the course.
 
        },
    
        {
          id: 3,
          courseCode: 'MAT401', 
          courseTitle: 'Advanced Mathematics', 
          status: 'Fail', 
          grade: 'F', 
          score: 40,
          creditHours: 3, // Add credit hours for the course.

        },
    
    ],
      
    }, 

    {
      fullName: 'John Doe',
      dateOfBirth: '01/01/1990',
      department: 'Computer Science',
      faculty: 'Science',
      entryYear: '2018',
      graduationYear: '2022',
      registrationNumber: '001',
      matricNumber: 'bsu/cmp/19/1000',
      semester: 'second',
      level: '400',
      session: '2022',
      courses: [
        // Question 1
        {
        id: 1,
        courseCode: 'CMP402',
        courseTitle: 'Introduction to Computer Science', 
        status: 'Pass',
        grade: 'A',
        score: 85,
        creditHours: 3, // Add credit hours for the course.
 
  
        },
        // Question 2
        {
          id: 2,
          courseCode: 'PHY402', 
          courseTitle: 'Physics II', 
          status: 'Pass', 
          grade: 'A', 
          score: 90,
          creditHours: 3, // Add credit hours for the course.
 
        },
    
        {
          id: 3,
          courseCode: 'MAT402', 
          courseTitle: 'Advanced Mathematics', 
          status: 'Pass', 
          grade: 'A', 
          score: 70,
          creditHours: 3, // Add credit hours for the course.

        },
    
    ],
    },  
  
  ]
  
  const calculateGPA = (semester) => {
    const totalCreditHours = semester.courses.reduce(
      (total, course) => total + course.creditHours,
      0
    );

    const totalGP = semester.courses.reduce((total, course) => {
      const gp = calculateGP(course.grade);
      return total + gp * course.creditHours;
    }, 0);

    return (totalGP / totalCreditHours).toFixed(2);
  };

  const calculateWGPA = (semester) => {
    const totalWeightedGP = semester.courses.reduce((total, course) => {
      const gp = calculateGP(course.grade);
      return total + gp * course.creditHours;
    }, 0);

    const totalCreditHours = semester.courses.reduce(
      (total, course) => total + course.creditHours,
      0
    );

    if (totalCreditHours === 0) {
      return '0.00'; // Return '0.00' if no credit hours are present.
    }

    return (totalWeightedGP / totalCreditHours).toFixed(2);
  };

  const calculateCGPA = () => {
    const totalCreditHours = studentInfo.reduce(
      (total, semester) =>
        total +
        semester.courses.reduce(
          (semesterTotal, course) => semesterTotal + course.creditHours,
          0
        ),
      0
    );

    const totalGP = studentInfo.reduce((total, semester) => {
      return (
        total +
        semester.courses.reduce((semesterTotal, course) => {
          const gp = calculateGP(course.grade);
          return semesterTotal + gp * course.creditHours;
        }, 0)
      );
    }, 0);

    return (totalGP / totalCreditHours).toFixed(2);
  };

  const calculateYearlyValues = () => {
    let cumulativeCredits = 0;
    let cumulativeGP = 0;

    return studentInfo.map((semester) => {
      const earnedCredits = semester.courses.reduce(
        (total, course) => total + course.creditHours,
        0
      );

      const semesterGP = semester.courses.reduce((total, course) => {
        const gp = calculateGP(course.grade);
        return total + gp * course.creditHours;
      }, 0);

      cumulativeCredits += earnedCredits;
      cumulativeGP += semesterGP;

      const cgpa = (cumulativeGP / cumulativeCredits).toFixed(2);
      const wgpa = calculateWGPA(semester);

      return {
        year: semester.entryYear,
        earnedCredits,
        cgpa,
        wgpa,
      };
    });
  };

  const remarks = 'Excellent performance throughout the program.';

// Define an array to store the semester-wise total credits
const semesterTotalCredits = [];

// Iterate through the studentInfo array
studentInfo.forEach((student) => {
  // Calculate the total credits for each semester
  const semesterCredits = student.courses.reduce(
    (totalCredits, course) => totalCredits + course.creditHours,
    0
  );

  // Push the result into the semesterTotalCredits array
  semesterTotalCredits.push(semesterCredits);
});

// Now, semesterTotalCredits contains the total credits for each semester

  const totalCreditsCompleted = studentInfo.reduce(
    (totalCredits, semester) =>
      totalCredits +
      semester.courses.reduce(
        (semesterTotal, course) => semesterTotal + course.creditHours,
        0
      ),
    0
  );

  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1>[University Name]</h1>
        <h2>STUDENT ACADEMIC TRANSCRIPT</h2>
      </header>

      <section className="row">
        <div className="col-md-6">
          <h3>Student Information</h3>
          <ul className="list-unstyled">
            {studentInfo.length > 0 && (
              <li>
                <strong>Student Name:</strong> {studentInfo[0].fullName}
              </li>
            )}
            {studentInfo.length > 0 && (
              <li>
                <strong>Student ID:</strong> {studentInfo[0].studentID}
              </li>
            )}
            {studentInfo.length > 0 && (
              <li>
                <strong>Date of Birth:</strong> {studentInfo[0].dateOfBirth}
              </li>
            )}
            {studentInfo.length > 0 && (
              <li>
                <strong>Department:</strong> {studentInfo[0].department}
              </li>
            )}
            {studentInfo.length > 0 && (
              <li>
                <strong>Faculty:</strong> {studentInfo[0].faculty}
              </li>
            )}
            {studentInfo.length > 0 && (
              <li>
                <strong>Entry Year:</strong> {studentInfo[0].entryYear}
              </li>
            )}
            {studentInfo.length > 0 && (
              <li>
                <strong>Graduation Year:</strong>{' '}
                {studentInfo[0].graduationYear}
              </li>
            )}
          </ul>
        </div>
        <div className="col-md-6">
          {/* Additional student information, if needed */}
        </div>
      </section>

      <section>
        <h3>Academic Record</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Semester</th>
              <th>Course Code</th>
              <th>Session</th>
              <th>Course Title</th>
              <th>Credit Unit</th>
              <th>Grade</th>
              <th>Earned Credits</th>
              <th>GPA</th>
            </tr>
          </thead>
          <tbody>
            {studentInfo.map((semester, semesterIndex) =>
              semester.courses.map((course, courseIndex) => (
                <tr key={`${semesterIndex}-${courseIndex}`}>
                  {courseIndex === 0 && (
                    <td rowSpan={semester.courses.length}>
                      {semester.semester}
                    </td>
                  )}
                  <td>{course.courseCode}</td>
                  <td>{semester.session}</td>
                  <td>{course.courseTitle}</td>
                  <td>{course.creditHours}</td>
                  <td>{course.grade}</td>
                  <td>{semesterTotalCredits}</td>
                  <td>{calculateGPA(semester)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>

      <section>
        <h3>Cumulative Summary</h3>
        <p>Total Credits Completed: {totalCreditsCompleted}</p>
        <p>Cumulative GPA (CGPA): {calculateCGPA()}</p>
      </section>

      <section>
        <h3>Yearly CGPA and WGPA</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Entry Year</th>
              <th>Graduation Year</th>
              {/* <th>Earned Credits</th> */}
              <th>CGPA (Yearly)</th>
              <th>Weighted GPA (WGPA)</th>
            </tr>
          </thead>
          <tbody>
            {calculateYearlyValues().map((yearlyValue, index) => (
              <tr key={index}>
                <td>{yearlyValue.year}</td>
               
                {studentInfo.length > 0 && (
              <td>
              
                {studentInfo[0].graduationYear}
              </td>
            )}
                
                {/* <td>{yearlyValue.graduationYear}</td> */}
                {/* <td>{yearlyValue.earnedCredits}</td> */}
                <td>{yearlyValue.cgpa}</td>
                <td>{yearlyValue.wgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h3>Remarks</h3>
        <p>{remarks}</p>
      </section>

      <footer className="text-end">
        <p>Transcript Issued On: [Date of Issuance] (dd/mm/yyyy)</p>
      </footer>
    </div>
  );
};

export default StudentTranscript;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function calculateGP(grade) {
//   switch (grade) {
//     case 'A+':
//       return 5.0;
//     case 'A':
//       return 4.0;
//     case 'B+':
//       return 3.5;
//     case 'B':
//       return 3.0;
//     case 'C+':
//       return 2.5;
//     case 'C':
//       return 2.0;
//     case 'D':
//       return 1.0;
//     case 'F':
//       return 0.0;
//     default:
//       return 0.0; // Default to 0.0 for unrecognized grades.
//   }
// }

// const StudentTranscript = () => {
//   const studentInfo =[
//     {
//       fullName: 'John Doe',
//       studentID: '123456',
//       dateOfBirth: '01/01/1990',
//       department: 'Computer Science',
//       faculty: 'Science',
//       entryYear: '2018',
//       graduationYear: '2022',
//       registrationNumber: '001',
//       matricNumber: 'bsu/cmp/19/1000',
//       courses: [
//         {
//           semester: 'First',
//           level: '100',
//           session: '2019',
//           courses: [
//             {
//               id: 1,
//               courseCode: 'CMP101',
//               courseTitle: 'Introduction to Computer Science',
//               status: 'Pass',
//               grade: 'A',
//               score: 85,
//               creditHours: 3, // Add credit hours for the course.
//             },
//             {
//               id: 2,
//               courseCode: 'PHY101',
//               courseTitle: 'Physics II',
//               status: 'Pass',
//               grade: 'A',
//               score: 90,
//               creditHours: 3, // Add credit hours for the course.
//             },
//             {
//               id: 3,
//               courseCode: 'MAT101',
//               courseTitle: 'Advanced Mathematics',
//               status: 'Fail',
//               grade: 'F',
//               score: 40,
//               creditHours: 3, // Add credit hours for the course.
//             },
//           ],
//         },
//         // Add more semesters and courses here...
//       ],
//     }, 


//     {
//       fullName: 'John Doe',
//       studentID: '123456',
//       dateOfBirth: '01/01/1990',
//       department: 'Computer Science',
//       faculty: 'Science',
//       entryYear: '2018',
//       graduationYear: '2022',
//       registrationNumber: '001',
//       matricNumber: 'bsu/cmp/19/1000',
//       courses: [
//         // Question 1
//         {
//         id: 1,
//         courseCode: 'ENG201',
//          courseTitle: 'English Literature', 
//         status: 'Pass', 
//         grade: 'B',
//          score: 75,
//          creditHours: 3, // Add credit hours for the course.

//         },
//         // Question 2
//         {
//           id: 2,
//           courseCode: 'PHY202', 
//           courseTitle: 'Physics II', 
//           status: 'Pass', 
//           grade: 'A', 
//           score: 90,
//           creditHours: 3, // Add credit hours for the course.

//         },
    
//         {
//           id: 3,
//           courseCode: 'MAT201', 
//           courseTitle: 'Advanced Mathematics', 
//           status: 'Fail', 
//           grade: 'F', 
//           score: 40,
//           creditHours: 3, // Add credit hours for the course.

//         },
    
//     ],
//     },
    
//     {
//       fullName: 'John Doe',
//       studentID: '123456',
//       dateOfBirth: '01/01/1990',
//       department: 'Computer Science',
//       faculty: 'Science',
//       entryYear: '2018',
//       graduationYear: '2022',
//       registrationNumber: '001',
//       matricNumber: 'bsu/cmp/19/1000',
//       courses: [
//         {
//           semester: 'First',
//           level: '100',
//           session: '2019',
//           courses: [
//             {
//               id: 1,
//               courseCode: 'CMP201',
//               courseTitle: 'Introduction to Computer Science',
//               status: 'Pass',
//               grade: 'A',
//               score: 85,
//               creditHours: 3, // Add credit hours for the course.
//             },
//             {
//               id: 2,
//               courseCode: 'PHY201',
//               courseTitle: 'Physics II',
//               status: 'Pass',
//               grade: 'A',
//               score: 90,
//               creditHours: 3, // Add credit hours for the course.
//             },
//             {
//               id: 3,
//               courseCode: 'MAT101',
//               courseTitle: 'Advanced Mathematics',
//               status: 'Fail',
//               grade: 'F',
//               score: 40,
//               creditHours: 3, // Add credit hours for the course.
//             },
//           ],
//         },
//         // Add more semesters and courses here...
//       ],
//     },
    
//     {
//       fullName: 'John Doe',
//       studentID: '123456',
//       dateOfBirth: '01/01/1990',
//       department: 'Computer Science',
//       faculty: 'Science',
//       entryYear: '2018',
//       graduationYear: '2022',
//       registrationNumber: '001',
//       matricNumber: 'bsu/cmp/19/1000',
//       courses: [
//         {
//           semester: 'First',
//           level: '100',
//           session: '2019',
//           courses: [
//             {
//               id: 1,
//               courseCode: 'CMP101',
//               courseTitle: 'Introduction to Computer Science',
//               status: 'Pass',
//               grade: 'A',
//               score: 85,
//               creditHours: 3, // Add credit hours for the course.
//             },
//             {
//               id: 2,
//               courseCode: 'PHY101',
//               courseTitle: 'Physics II',
//               status: 'Pass',
//               grade: 'A',
//               score: 90,
//               creditHours: 3, // Add credit hours for the course.
//             },
//             {
//               id: 3,
//               courseCode: 'MAT101',
//               courseTitle: 'Advanced Mathematics',
//               status: 'Fail',
//               grade: 'F',
//               score: 40,
//               creditHours: 3, // Add credit hours for the course.
//             },
//           ],
//         },
//         // Add more semesters and courses here...
//       ],
//     },  
  
//   ]
  
//   const calculateGPA = (semester) => {
//     const totalCreditHours = semester.courses.reduce(
//       (total, course) => total + course.creditHours,
//       0
//     );

//     const totalGP = semester.courses.reduce((total, course) => {
//       const gp = calculateGP(course.grade);
//       return total + gp * course.creditHours;
//     }, 0);

//     return (totalGP / totalCreditHours).toFixed(2);
//   };

//   const calculateWGPA = (semester) => {
//     const totalCreditHours = semester.courses.reduce(
//       (total, course) => total + course.creditHours,
//       0
//     );

//     const totalWeightedGP = semester.courses.reduce((total, course) => {
//       const gp = calculateGP(course.grade);
//       return total + gp * course.creditHours;
//     }, 0);

//     return (totalWeightedGP / totalCreditHours).toFixed(2);
//   };

//   const calculateCGPA = () => {
//     const totalCreditHours = studentInfo.reduce(
//       (total, semester) =>
//         total +
//         semester.courses.reduce(
//           (semesterTotal, course) => semesterTotal + course.creditHours,
//           0
//         ),
//       0
//     );

//     const totalGP = studentInfo.reduce((total, semester) => {
//       return (
//         total +
//         semester.courses.reduce((semesterTotal, course) => {
//           const gp = calculateGP(course.grade);
//           return semesterTotal + gp * course.creditHours;
//         }, 0)
//       );
//     }, 0);

//     return (totalGP / totalCreditHours).toFixed(2);
//   };

//   const remarks = 'Excellent performance throughout the program.';

//   return (
//     <div className="container mt-5">
//       <header className="text-center mb-4">
//         <h1>[University Name]</h1>
//         <h2>STUDENT ACADEMIC TRANSCRIPT</h2>
//       </header>

//       <section className="row">
//         <div className="col-md-6">
//           <h3>Student Information</h3>
//           <ul className="list-unstyled">
//             {studentInfo.length > 0 && (
//               <li>
//                 <strong>Student Name:</strong> {studentInfo[0].fullName}
//               </li>
//             )}
//             {studentInfo.length > 0 && (
//               <li>
//                 <strong>Student ID:</strong> {studentInfo[0].studentID}
//               </li>
//             )}
//             {studentInfo.length > 0 && (
//               <li>
//                 <strong>Date of Birth:</strong> {studentInfo[0].dateOfBirth}
//               </li>
//             )}
//             {studentInfo.length > 0 && (
//               <li>
//                 <strong>Department:</strong> {studentInfo[0].department}
//               </li>
//             )}
//             {studentInfo.length > 0 && (
//               <li>
//                 <strong>Faculty:</strong> {studentInfo[0].faculty}
//               </li>
//             )}
//             {studentInfo.length > 0 && (
//               <li>
//                 <strong>Entry Year:</strong> {studentInfo[0].entryYear}
//               </li>
//             )}
//             {studentInfo.length > 0 && (
//               <li>
//                 <strong>Graduation Year:</strong> {studentInfo[0].graduationYear}
//               </li>
//             )}
//           </ul>
//         </div>
//         <div className="col-md-6">
//           {/* Additional student information, if needed */}
//         </div>
//       </section>

//       <section>
//         <h3>Academic Record</h3>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Semester</th>
//               <th>Course Code</th>
//               <th>Course Title</th>
//               <th>Credit Unit</th>
//               <th>Grade</th>
//               <th>GP</th>
//             </tr>
//           </thead>
//           <tbody>
//             {studentInfo.map((semester, semesterIndex) =>
//               semester.courses.map((course, courseIndex) => (
//                 <tr key={`${semesterIndex}-${courseIndex}`}>
//                   {courseIndex === 0 && (
//                     <td rowSpan={semester.courses.length}>
//                       {semester.semester}
//                     </td>
//                   )}
//                   <td>{course.courseCode}</td>
//                   <td>{course.courseTitle}</td>
//                   <td>{course.creditHours}</td>
//                   <td>{course.grade}</td>
//                   <td>{calculateGP(course.grade).toFixed(2)}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </section>

//       <section>
//         <h3>Cumulative Summary</h3>
//         <p>Total Credits Completed: {studentInfo.reduce((totalCredits, semester) => totalCredits + semester.courses.reduce((semesterTotal, course) => semesterTotal + course.creditHours, 0), 0)}</p>
//         <p>Cumulative GPA (CGPA): {calculateCGPA()}</p>
//       </section>

//       <section>
//         <h3>Yearly CGPA</h3>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Year</th>
//               <th>Earned Credits</th>
//               <th>CGPA (Yearly)</th>
//               <th>Weighted GPA (WGPA)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {studentInfo.reduce((yearlyCGPAs, semester, index) => {
//               const cumulativeTotalGP = semester.courses.reduce(
//                 (total, course) =>
//                   total + calculateGP(course.grade) * course.creditHours,
//                 0
//               );

//               const cumulativeTotalCreditHours = semester.courses.reduce(
//                 (total, course) => total + course.creditHours,
//                 0
//               );

//               if (index === 0) {
//                 return [
//                   ...yearlyCGPAs,
//                   {
//                     year: `Year ${index + 1}`,
//                     earnedCredits: cumulativeTotalCreditHours,
//                     cgpa: (cumulativeTotalGP / cumulativeTotalCreditHours).toFixed(2),
//                     wgpa: calculateWGPA(semester),
//                   },
//                 ];
//               } else {
//                 const previousYear = yearlyCGPAs[index - 1];
//                 return [
//                   ...yearlyCGPAs,
//                   {
//                     year: `Year ${index + 1}`,
//                     earnedCredits:
//                       previousYear.earnedCredits + cumulativeTotalCreditHours,
//                     cgpa: (
//                       (previousYear.earnedCredits * previousYear.cgpa +
//                         cumulativeTotalGP) /
//                       (previousYear.earnedCredits + cumulativeTotalCreditHours)
//                     ).toFixed(2),
//                     wgpa: calculateWGPA(semester),
//                   },
//                 ];
//               }
//             }, []).map((yearlyCGPA, index) => (
//               <tr key={index}>
//                 <td>{yearlyCGPA.year}</td>
//                 <td>{yearlyCGPA.earnedCredits}</td>
//                 <td>{yearlyCGPA.cgpa}</td>
//                 <td>{yearlyCGPA.wgpa}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>

//       <section>
//         <h3>Remarks</h3>
//         <p>{remarks}</p>
//       </section>

//       <footer className="text-end">
//         <p>Transcript Issued On: [Date of Issuance] (dd/mm/yyyy)</p>
//       </footer>
//     </div>
//   );
// };

// export default StudentTranscript;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function calculateGP(grade) {
//   switch (grade) {
//     case 'A+':
//       return 5.0;
//     case 'A':
//       return 4.0;
//     case 'B+':
//       return 3.5;
//     case 'B':
//       return 3.0;
//     case 'C+':
//       return 2.5;
//     case 'C':
//       return 2.0;
//     case 'D':
//       return 1.0;
//     case 'F':
//       return 0.0;
//     default:
//       return 0.0; // Default to 0.0 for unrecognized grades.
//   }
// }

// const StudentTranscript = () => {
//   // Update the studentInfo object with creditHours and calculate GPs.
//   const studentInfo =[
//     {
//       fullName: 'John Doe',
//       studentID: '123456',
//       dateOfBirth: '01/01/1990',
//       department: 'Computer Science',
//       faculty: 'Science',
//       entryYear: '2018',
//       graduationYear: '2022',
//       registrationNumber: '001',
//       matricNumber: 'bsu/cmp/19/1000',
//       courses: [
//         {
//           semester: 'First',
//           level: '100',
//           session: '2019',
//           courses: [
//             {
//               id: 1,
//               courseCode: 'CMP101',
//               courseTitle: 'Introduction to Computer Science',
//               status: 'Pass',
//               grade: 'A',
//               score: 85,
//               creditHours: 3, // Add credit hours for the course.
//             },
//             {
//               id: 2,
//               courseCode: 'PHY101',
//               courseTitle: 'Physics II',
//               status: 'Pass',
//               grade: 'A',
//               score: 90,
//               creditHours: 3, // Add credit hours for the course.
//             },
//             {
//               id: 3,
//               courseCode: 'MAT101',
//               courseTitle: 'Advanced Mathematics',
//               status: 'Fail',
//               grade: 'F',
//               score: 40,
//               creditHours: 3, // Add credit hours for the course.
//             },
//           ],
//         },
//         // Add more semesters and courses here...
//       ],
//     }, 


//     {
//       fullName: 'John Doe',
//       studentID: '123456',
//       dateOfBirth: '01/01/1990',
//       department: 'Computer Science',
//       faculty: 'Science',
//       entryYear: '2018',
//       graduationYear: '2022',
//       registrationNumber: '001',
//       matricNumber: 'bsu/cmp/19/1000',
//       courses: [
//         // Question 1
//         {
//         id: 1,
//         courseCode: 'ENG201',
//          courseTitle: 'English Literature', 
//         status: 'Pass', 
//         grade: 'B',
//          score: 75,
//          creditHours: 3, // Add credit hours for the course.

//         },
//         // Question 2
//         {
//           id: 2,
//           courseCode: 'PHY202', 
//           courseTitle: 'Physics II', 
//           status: 'Pass', 
//           grade: 'A', 
//           score: 90,
//           creditHours: 3, // Add credit hours for the course.

//         },
    
//         {
//           id: 3,
//           courseCode: 'MAT201', 
//           courseTitle: 'Advanced Mathematics', 
//           status: 'Fail', 
//           grade: 'F', 
//           score: 40,
//           creditHours: 3, // Add credit hours for the course.

//         },
    
//     ],
//     },
    
//     {
//       fullName: 'John Doe',
//       studentID: '123456',
//       dateOfBirth: '01/01/1990',
//       department: 'Computer Science',
//       faculty: 'Science',
//       entryYear: '2018',
//       graduationYear: '2022',
//       registrationNumber: '001',
//       matricNumber: 'bsu/cmp/19/1000',
//       courses: [
//         {
//           semester: 'First',
//           level: '100',
//           session: '2019',
//           courses: [
//             {
//               id: 1,
//               courseCode: 'CMP201',
//               courseTitle: 'Introduction to Computer Science',
//               status: 'Pass',
//               grade: 'A',
//               score: 85,
//               creditHours: 3, // Add credit hours for the course.
//             },
//             {
//               id: 2,
//               courseCode: 'PHY201',
//               courseTitle: 'Physics II',
//               status: 'Pass',
//               grade: 'A',
//               score: 90,
//               creditHours: 3, // Add credit hours for the course.
//             },
//             {
//               id: 3,
//               courseCode: 'MAT101',
//               courseTitle: 'Advanced Mathematics',
//               status: 'Fail',
//               grade: 'F',
//               score: 40,
//               creditHours: 3, // Add credit hours for the course.
//             },
//           ],
//         },
//         // Add more semesters and courses here...
//       ],
//     },
    
//     {
//       fullName: 'John Doe',
//       studentID: '123456',
//       dateOfBirth: '01/01/1990',
//       department: 'Computer Science',
//       faculty: 'Science',
//       entryYear: '2018',
//       graduationYear: '2022',
//       registrationNumber: '001',
//       matricNumber: 'bsu/cmp/19/1000',
//       courses: [
//         {
//           semester: 'First',
//           level: '100',
//           session: '2019',
//           courses: [
//             {
//               id: 1,
//               courseCode: 'CMP101',
//               courseTitle: 'Introduction to Computer Science',
//               status: 'Pass',
//               grade: 'A',
//               score: 85,
//               creditHours: 3, // Add credit hours for the course.
//             },
//             {
//               id: 2,
//               courseCode: 'PHY101',
//               courseTitle: 'Physics II',
//               status: 'Pass',
//               grade: 'A',
//               score: 90,
//               creditHours: 3, // Add credit hours for the course.
//             },
//             {
//               id: 3,
//               courseCode: 'MAT101',
//               courseTitle: 'Advanced Mathematics',
//               status: 'Fail',
//               grade: 'F',
//               score: 40,
//               creditHours: 3, // Add credit hours for the course.
//             },
//           ],
//         },
//         // Add more semesters and courses here...
//       ],
//     },  
  
//   ]
  
//   const calculateGPA = (semester) => {
//     const totalCreditHours = semester.courses.reduce(
//       (total, course) => total + course.creditHours,
//       0
//     );

//     const totalGP = semester.courses.reduce((total, course) => {
//       const gp = calculateGP(course.grade);
//       return total + gp * course.creditHours;
//     }, 0);

//     return (totalGP / totalCreditHours).toFixed(2);
//   };

//   const calculateWGPA = (semester) => {
//     const totalCreditHours = semester.courses.reduce(
//       (total, course) => total + course.creditHours,
//       0
//     );

//     const totalWeightedGP = semester.courses.reduce((total, course) => {
//       const gp = calculateGP(course.grade);
//       return total + gp * course.creditHours;
//     }, 0);

//     return (totalWeightedGP / totalCreditHours).toFixed(2);
//   };

//   const calculateCGPA = () => {
//     const totalCreditHours = studentInfo.reduce(
//       (total, semester) =>
//         total +
//         semester.courses.reduce(
//           (semesterTotal, course) => semesterTotal + course.creditHours,
//           0
//         ),
//       0
//     );

//     const totalGP = studentInfo.reduce((total, semester) => {
//       return (
//         total +
//         semester.courses.reduce((semesterTotal, course) => {
//           const gp = calculateGP(course.grade);
//           return semesterTotal + gp * course.creditHours;
//         }, 0)
//       );
//     }, 0);

//     return (totalGP / totalCreditHours).toFixed(2);
//   };

//   const remarks = 'Excellent performance throughout the program.';

//   return (
//     <div className="container mt-5">
//       <header className="text-center mb-4">
//         <h1>[University Name]</h1>
//         <h2>STUDENT ACADEMIC TRANSCRIPT</h2>
//       </header>

//       <section className="row">
//         <div className="col-md-6">
//           <h3>Student Information</h3>
//           <ul className="list-unstyled">
//             {studentInfo.length > 0 && (
//               <li>
//                 <strong>Student Name:</strong> {studentInfo[0].fullName}
//               </li>
//             )}
//             {studentInfo.length > 0 && (
//               <li>
//                 <strong>Student ID:</strong> {studentInfo[0].studentID}
//               </li>
//             )}
//             {studentInfo.length > 0 && (
//               <li>
//                 <strong>Date of Birth:</strong> {studentInfo[0].dateOfBirth}
//               </li>
//             )}
//             {studentInfo.length > 0 && (
//               <li>
//                 <strong>Department:</strong> {studentInfo[0].department}
//               </li>
//             )}
//             {studentInfo.length > 0 && (
//               <li>
//                 <strong>Faculty:</strong> {studentInfo[0].faculty}
//               </li>
//             )}
//             {studentInfo.length > 0 && (
//               <li>
//                 <strong>Entry Year:</strong> {studentInfo[0].entryYear}
//               </li>
//             )}
//             {studentInfo.length > 0 && (
//               <li>
//                 <strong>Graduation Year:</strong> {studentInfo[0].graduationYear}
//               </li>
//             )}
//           </ul>
//         </div>
//         <div className="col-md-6">
//           {/* Additional student information, if needed */}
//         </div>
//       </section>

//       <section>
//         <h3>Academic Record</h3>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Semester</th>
//               <th>Course Code</th>
//               <th>Course Title</th>
//               <th>Credit Unit</th>
//               <th>Grade</th>
//               <th>GP</th>
//             </tr>
//           </thead>
//           <tbody>
//             {studentInfo.map((semester, semesterIndex) =>
//               semester.courses.map((course, courseIndex) => (
//                 <tr key={`${semesterIndex}-${courseIndex}`}>
//                   {courseIndex === 0 && (
//                     <td rowSpan={semester.courses.length}>
//                       {semester.semester}
//                     </td>
//                   )}
//                   <td>{course.courseCode}</td>
//                   <td>{course.courseTitle}</td>
//                   <td>{course.creditHours}</td>
//                   <td>{course.grade}</td>
//                   <td>{calculateGP(course.grade).toFixed(2)}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </section>

//       <section>
//         <h3>Cumulative Summary</h3>
//         <p>Total Credits Completed: {studentInfo.length > 0 && calculateCGPA()}</p>
//       </section>

//       <section>
//         <h3>Yearly CGPA</h3>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Year</th>
//               <th>Earned Credits</th>
//               <th>CGPA (Yearly)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {studentInfo.reduce((yearlyCGPAs, semester, index) => {
//               const cumulativeTotalGP = semester.courses.reduce(
//                 (total, course) =>
//                   total + calculateGP(course.grade) * course.creditHours,
//                 0
//               );

//               const cumulativeTotalCreditHours = semester.courses.reduce(
//                 (total, course) => total + course.creditHours,
//                 0
//               );

//               if (index === 0) {
//                 return [
//                   ...yearlyCGPAs,
//                   {
//                     year: `Year ${index + 1}`,
//                     earnedCredits: cumulativeTotalCreditHours,
//                     cgpa: (cumulativeTotalGP / cumulativeTotalCreditHours).toFixed(2),
//                   },
//                 ];
//               } else {
//                 const previousYear = yearlyCGPAs[index - 1];
//                 return [
//                   ...yearlyCGPAs,
//                   {
//                     year: `Year ${index + 1}`,
//                     earnedCredits:
//                       previousYear.earnedCredits + cumulativeTotalCreditHours,
//                     cgpa: (
//                       (previousYear.earnedCredits * previousYear.cgpa +
//                         cumulativeTotalGP) /
//                       (previousYear.earnedCredits + cumulativeTotalCreditHours)
//                     ).toFixed(2),
//                   },
//                 ];
//               }
//             }, []).map((yearlyCGPA, index) => (
//               <tr key={index}>
//                 <td>{yearlyCGPA.year}</td>
//                 <td>{yearlyCGPA.earnedCredits}</td>
//                 <td>{yearlyCGPA.cgpa}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>

//       <section>
//         <h3>Remarks</h3>
//         <p>{remarks}</p>
//       </section>

//       <footer className="text-end">
//         <p>Transcript Issued On: [Date of Issuance] (dd/mm/yyyy)</p>
//       </footer>
//     </div>
//   );
// };

// export default StudentTranscript;

// import React from 'react';

// // Function to calculate GP based on grade
// function calculateGP(grade) {
//   switch (grade) {
//     case 'A+':
//       return 5.0;
//     case 'A':
//       return 4.0;
//     case 'B+':
//       return 3.5;
//     case 'B':
//       return 3.0;
//     case 'C+':
//       return 2.5;
//     case 'C':
//       return 2.0;
//     case 'D':
//       return 1.0;
//     case 'F':
//       return 0.0;
//     default:
//       return 0.0; // Default to 0.0 for unrecognized grades.
//   }
// }

// const StudentTranscript = () => {
//   // Update the studentInfo object with creditHours and calculate GPs.
//   const studentInfo = {
//     fullName: 'John Doe',
//     studentID: '123456',
//     dateOfBirth: '01/01/1990',
//     department: 'Computer Science',
//     faculty: 'Science',
//     entryYear: '2018',
//     graduationYear: '2022',
//     registrationNumber: '001',
//     matricNumber: 'bsu/cmp/19/1000',
//     courses: [
//       {
//         semester: 'First',
//         level: '100',
//         session: '2019',
//         courses: [
//           {
//             id: 1,
//             courseCode: 'CMP101',
//             courseTitle: 'Introduction to Computer Science',
//             status: 'Pass',
//             grade: 'A',
//             score: 85,
//             creditHours: 3, // Add credit hours for the course.
//           },
//           {
//             id: 2,
//             courseCode: 'PHY101',
//             courseTitle: 'Physics II',
//             status: 'Pass',
//             grade: 'A',
//             score: 90,
//             creditHours: 3, // Add credit hours for the course.
//           },
//           {
//             id: 3,
//             courseCode: 'MAT101',
//             courseTitle: 'Advanced Mathematics',
//             status: 'Fail',
//             grade: 'F',
//             score: 40,
//             creditHours: 3, // Add credit hours for the course.
//           },
//         ],
//       },
//       // Add more semesters and courses here...
//     ],
//   };

//   // Function to calculate GPA for a semester
//   const calculateGPA = (semester) => {
//     const totalCreditHours = semester.courses.reduce(
//       (total, course) => total + course.creditHours,
//       0
//     );

//     const totalGP = semester.courses.reduce((total, course) => {
//       const gp = calculateGP(course.grade);
//       return total + gp * course.creditHours;
//     }, 0);

//     return totalGP / totalCreditHours;
//   };

//   // Function to calculate WGPA for a semester
//   const calculateWGPA = (semester) => {
//     const totalCreditHours = semester.courses.reduce(
//       (total, course) => total + course.creditHours,
//       0
//     );

//     const totalWeightedGP = semester.courses.reduce((total, course) => {
//       const gp = calculateGP(course.grade);
//       return total + gp * course.creditHours;
//     }, 0);

//     return totalWeightedGP / totalCreditHours;
//   };

//   // Calculate CGPA
//   const calculateCGPA = () => {
//     const totalCreditHours = studentInfo.courses.reduce(
//       (total, semester) =>
//         total +
//         semester.courses.reduce(
//           (semesterTotal, course) => semesterTotal + course.creditHours,
//           0
//         ),
//       0
//     );

//     const totalGP = studentInfo.courses.reduce((total, semester) => {
//       return (
//         total +
//         semester.courses.reduce((semesterTotal, course) => {
//           const gp = calculateGP(course.grade);
//           return semesterTotal + gp * course.creditHours;
//         }, 0)
//       );
//     }, 0);

//     return totalGP / totalCreditHours;
//   };

//   // Calculate GPA for each semester and WGPA for each semester
//   const semesterGPAs = studentInfo.courses.map((semester) =>
//     calculateGPA(semester).toFixed(2)
//   );
//   const semesterWGPAs = studentInfo.courses.map((semester) =>
//     calculateWGPA(semester).toFixed(2)
//   );

//   // Define remarks
//   const remarks = 'Excellent performance throughout the program.';

//   // Define totalCreditsCompleted
//   const totalCreditsCompleted = studentInfo.courses.reduce(
//     (total, semester) =>
//       total +
//       semester.courses.reduce(
//         (semesterTotal, course) => semesterTotal + course.creditHours,
//         0
//       ),
//     0
//   );

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center">[University Name]</h1>
//       <h1 className="text-center">STUDENT ACADEMIC TRANSCRIPT </h1>

//       <div className="row">
//         <div className="col-md-6">
//           <h2>Student Information</h2>
//           <ul className="list-unstyled">
//             <li>
//               <strong>Student Name:</strong> {studentInfo.fullName}
//             </li>
//             <li>
//               <strong>Student ID:</strong> {studentInfo.studentID}
//             </li>
//             <li>
//               <strong>Date of Birth:</strong> {studentInfo.dateOfBirth}
//             </li>
//             <li>
//               <strong>Department:</strong> {studentInfo.department}
//             </li>
//             <li>
//               <strong>Faculty:</strong> {studentInfo.faculty}
//             </li>
//             <li>
//               <strong>Entry Year:</strong> {studentInfo.entryYear}
//             </li>
//             <li>
//               <strong>Graduation Year:</strong> {studentInfo.graduationYear}
//             </li>
//           </ul>
//         </div>
//         <div className="col-md-6">
//           {/* Additional student information, if needed */}
//         </div>
//       </div>

//       <h2>Academic Record</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Semester</th>
//             <th>Course Code</th>
//             <th>Course Title</th>
//             <th>Credit Unit</th>
//             <th>Grade</th>
//             <th>GP</th>
//           </tr>
//         </thead>
//         <tbody>
//           {studentInfo.courses.map((semester, semesterIndex) =>
//             semester.courses.map((course, courseIndex) => (
//               <tr key={`${semesterIndex}-${courseIndex}`}>
//                 <td>{semester.semester}</td>
//                 <td>{course.courseCode}</td>
//                 <td>{course.courseTitle}</td>
//                 <td>{course.creditHours}</td>
//                 <td>{course.grade}</td>
//                 <td>{calculateGP(course.grade).toFixed(2)}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//       {/* Display Total Credits Completed and CGPA */}
//       <h2>Cumulative Summary</h2>
//       <p>Total Credits Completed: {totalCreditsCompleted}</p>
//       <p>CGPA: {calculateCGPA().toFixed(2)}</p>

//       {/* Display Semester GPAs */}
//       <h2>Semester GPAs</h2>
//       <ul>
//         {semesterGPAs.map((gpa, index) => (
//           <li key={index}>
//             Semester {index + 1} GPA: {gpa}
//           </li>
//         ))}
//       </ul>

//       {/* Display Semester WGPA */}
//       <h2>Semester WGPA</h2>
//       <ul>
//         {semesterWGPAs.map((wgpa, index) => (
//           <li key={index}>
//             Semester {index + 1} WGPA: {wgpa}
//           </li>
//         ))}
//       </ul>

//       {/* Display Remarks */}
//       <h2>Remarks</h2>
//       <p>{remarks}</p>

//       <p className="text-end">
//         Transcript Issued On: [Date of Issuance] (dd/mm/yyyy)
//       </p>
//     </div>
//   );
// };

// export default StudentTranscript;



// import React from 'react';

// // Function to calculate GP based on grade
// function calculateGP(grade) {
//   switch (grade) {
//     case 'A+':
//       return 5.0;
//     case 'A':
//       return 4.0;
//     case 'B+':
//       return 3.5;
//     case 'B':
//       return 3.0;
//     case 'C+':
//       return 2.5;
//     case 'C':
//       return 2.0;
//     case 'D':
//       return 1.0;
//     case 'F':
//       return 0.0;
//     default:
//       return 0.0; // Default to 0.0 for unrecognized grades.
//   }
// }

// const StudentTranscript = () => {
//   // Update the studentInfo object with creditHours and calculate GPs.
//   const studentInfo = {
//     fullName: 'John Doe',
//     studentID: '123456',
//     dateOfBirth: '01/01/1990',
//     department: 'Computer Science',
//     faculty: 'Science',
//     entryYear: '2018',
//     graduationYear: '2022',
//     registrationNumber: '001',
//     matricNumber: 'bsu/cmp/19/1000',
//     courses: [
//       {
//         semester: 'First',
//         level: '100',
//         session: '2019',
//         courses: [
//           {
//             id: 1,
//             courseCode: 'CMP101',
//             courseTitle: 'Introduction to Computer Science',
//             status: 'Pass',
//             grade: 'A',
//             score: 85,
//             creditHours: 3, // Add credit hours for the course.
//           },
//           {
//             id: 2,
//             courseCode: 'PHY101',
//             courseTitle: 'Physics II',
//             status: 'Pass',
//             grade: 'A',
//             score: 90,
//             creditHours: 3, // Add credit hours for the course.
//           },
//           {
//             id: 3,
//             courseCode: 'MAT101',
//             courseTitle: 'Advanced Mathematics',
//             status: 'Fail',
//             grade: 'F',
//             score: 40,
//             creditHours: 3, // Add credit hours for the course.
//           },
//         ],
//       },
//       // Add more semesters and courses here...
//     ],
//   };

//   // Function to calculate GPA for a semester
//   const calculateGPA = (semester) => {
//     const totalCreditHours = semester.courses.reduce(
//       (total, course) => total + course.creditHours,
//       0
//     );

//     const totalGP = semester.courses.reduce((total, course) => {
//       const gp = calculateGP(course.grade);
//       return total + gp * course.creditHours;
//     }, 0);

//     return totalGP / totalCreditHours;
//   };

//   // Function to calculate WGPA for a semester
//   const calculateWGPA = (semester) => {
//     const totalCreditHours = semester.courses.reduce(
//       (total, course) => total + course.creditHours,
//       0
//     );

//     const totalWeightedGP = semester.courses.reduce((total, course) => {
//       const gp = calculateGP(course.grade);
//       return total + gp * course.creditHours;
//     }, 0);

//     return totalWeightedGP / totalCreditHours;
//   };

//   // Calculate CGPA
//   const calculateCGPA = () => {
//     const totalCreditHours = studentInfo.courses.reduce(
//       (total, semester) =>
//         total +
//         semester.courses.reduce(
//           (semesterTotal, course) => semesterTotal + course.creditHours,
//           0
//         ),
//       0
//     );

//     const totalGP = studentInfo.courses.reduce((total, semester) => {
//       return (
//         total +
//         semester.courses.reduce((semesterTotal, course) => {
//           const gp = calculateGP(course.grade);
//           return semesterTotal + gp * course.creditHours;
//         }, 0)
//       );
//     }, 0);

//     return totalGP / totalCreditHours;
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center"> [University Name]</h1>
//       <h1 className="text-center">STUDENT ACADEMIC TRANSCRIPT </h1>

//       <div className="row">
//         <div className="col-md-6">
//           <h2>Student Information</h2>
//           <ul className="list-unstyled">
//             <li>
//               <strong>Student Name:</strong> {studentInfo.fullName}
//             </li>
//             <li>
//               <strong>Student ID:</strong> {studentInfo.studentID}
//             </li>
//             <li>
//               <strong>Date of Birth:</strong> {studentInfo.dateOfBirth}
//             </li>
//             <li>
//               <strong>Department:</strong> {studentInfo.department}
//             </li>
//             <li>
//               <strong>Faculty:</strong> {studentInfo.faculty}
//             </li>
//             <li>
//               <strong>Entry Year:</strong> {studentInfo.entryYear}
//             </li>
//             <li>
//               <strong>Graduation Year:</strong> {studentInfo.graduationYear}
//             </li>
//           </ul>
//         </div>
//         <div className="col-md-6">
//           {/* Additional student information, if needed */}
//         </div>
//       </div>

//       <h2>Academic Record</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Semester</th>
//             <th>Course Code</th>
//             <th>Course Title</th>
//             <th>Credit Unit</th>
//             <th>Grade</th>
//             <th>GP</th>
//           </tr>
//         </thead>
//         <tbody>
//           {studentInfo.courses.map((semester, semesterIndex) =>
//             semester.courses.map((course, courseIndex) => (
//               <tr key={`${semesterIndex}-${courseIndex}`}>
//                 <td>{semester.semester}</td>
//                 <td>{course.courseCode}</td>
//                 <td>{course.courseTitle}</td>
//                 <td>{course.creditHours}</td>
//                 <td>{course.grade}</td>
//                 <td>{calculateGP(course.grade).toFixed(2)}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//       {/* Display Total Credits Completed and CGPA */}
//       <h2>Cumulative Summary</h2>
//       <p>Total Credits Completed: {totalCreditsCompleted}</p>
//       <p>CGPA: {calculateCGPA().toFixed(2)}</p>

//       {/* Yearly CGPA */}
//       <h2>Yearly CGPA</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Year</th>
//             <th>Earned Credits</th>
//             <th>GPA (Yearly)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {studentInfo.courses.map((semester, semesterIndex) => (
//             <tr key={`yearly-${semesterIndex}`}>
//               <td>{semester.semester}</td>
//               <td>
//                 {semester.courses.reduce(
//                   (total, course) => total + course.creditHours,
//                   0
//                 )}
//               </td>
//               <td>{calculateGPA(semester).toFixed(2)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Remarks */}
//       <h2>Remarks</h2>
//       <p>{remarks}</p>

//       <p className="text-end">
//         Transcript Issued On: [Date of Issuance] (dd/mm/yyyy)
//       </p>
//     </div>
//   );
// };

// export default StudentTranscript;

 


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const StudentTranscript = () => {
//   // Replace these with actual student data
//   const studentInfo = {
//     fullName: 'John Doe',
//     studentID: '123456',
//     dateOfBirth: '01/01/1990',
//     department: 'Computer Science',
//     faculty: 'Science',
//     entryYear: '2018',
//     graduationYear: '2022',
//   };

//   // Replace this with actual course data
//   const courses = [
//     {
//       semester: 'Semester 1',
//       courseCode: 'CSC101',
//       courseTitle: 'Introduction to Computer Science',
//       creditHours: 3,
//       grade: 'A',
//       gp: 4.0,
//     },
//     {
//       semester: 'Semester 2',
//       courseCode: 'CSC102',
//       courseTitle: 'Introduction to Computer Science',
//       creditHours: 3,
//       grade: 'B',
//       gp: 3.0,
//     },
//     {
//       semester: 'Semester 3',
//       courseCode: 'CSC201',
//       courseTitle: 'Introduction to Computer Science',
//       creditHours: 3,
//       grade: 'C',
//       gp: 2.0,
//     },
//     // Add more courses for other semesters
//   ];

//   // Calculate Total Credits Completed and CGPA
//   const totalCreditsCompleted = courses.reduce(
//     (total, course) => total + course.creditHours,
//     0
//   );

//   const cgpa =
//     courses.reduce((total, course) => total + course.gp * course.creditHours, 0) /
//     totalCreditsCompleted;

//   // Replace this with actual yearly CGPA data
//   const yearlyCGPA = [
//     { year: 'Year 1', earnedCredits: 30, cgpa: 3.5 },
//     // Add more yearly CGPA data
//   ];

//   // Additional remarks
//   const remarks = 'Excellent performance throughout the program.';

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center"> [University Name]</h1>
//       <h1 className="text-center">STUDENT ACADEMIC TRANSCRIPT </h1>

//       <div className="row">
//         <div className="col-md-6">
//           <h2>Student Information</h2>
//           <ul className="list-unstyled">
//             <li>
//               <strong>Student Name:</strong> 
//                 {studentInfo.fullName}
//             </li>
//             <li>
//               <strong>Student ID:</strong> {studentInfo.studentID}
//             </li>
//             <li>
//               <strong>Date of Birth:</strong> {studentInfo.dateOfBirth}
//             </li>
//             <li>
//               <strong>Department:</strong> {studentInfo.department}
//             </li>
//             <li>
//               <strong>Faculty:</strong> {studentInfo.faculty}
//             </li>
//             <li>
//               <strong>Entry Year:</strong> {studentInfo.entryYear}
//             </li>
//             <li>
//               <strong>Graduation Year:</strong> {studentInfo.graduationYear}
//             </li>
//           </ul>
//         </div>
//         <div className="col-md-6">
//           {/* Additional student information, if needed */}
//         </div>
//       </div>

//       <h2>Academic Record</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Semester</th>
//             <th>Course Code</th>
//             <th>Course Title</th>
//             <th>Credit Unit</th>
//             <th>Grade</th>
//             <th>GP</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((course, index) => (
//             <tr key={index}>
//               <td>{course.semester}</td>
//               <td>{course.courseCode}</td>
//               <td>{course.courseTitle}</td>
//               <td>{course.creditHours}</td>
//               <td>{course.grade}</td>
//               <td>{course.gp}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Display Total Credits Completed and CGPA */}
//       <h2>Cumulative Summary</h2>
//       <p>Total Credits Completed: {totalCreditsCompleted}</p>
//       <p>CGPA: {cgpa.toFixed(2)}</p>

//       <h2>Yearly CGPA</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Year</th>
//             <th>Earned Credits</th>
//             <th>CGPA (Yearly)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {yearlyCGPA.map((yearly, index) => (
//             <tr key={index}>
//               <td>{yearly.year}</td>
//               <td>{yearly.earnedCredits}</td>
//               <td>{yearly.cgpa.toFixed(2)}</td>
//             </tr>
//           ))}
        
//         </tbody>
//       </table>

//       {/* Display Remarks */}
//       <h2>Remarks</h2>
//       <p>{remarks}</p>

//       <p className="text-end">Transcript Issued On: [Date of Issuance] (dd/mm/yyyy)</p>
//     </div>
//   );
// };

// export default StudentTranscript;
