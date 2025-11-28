import React, { useReducer } from "react";
import studentsData from "./studentsData";
import { attendanceReducer } from "./attendanceReducer";

export default function AttendanceApp() {
  const [students, dispatch] = useReducer(attendanceReducer, studentsData);

  return (
    <div style={{ padding: 20 }}>
      <h2>Attendance Manager (useReducer)</h2>

      {students.map((student) => (
        <div key={student.id} style={{ marginBottom: 10 }}>
          <strong>{student.name}</strong>

          <button
            onClick={() => dispatch({ type: "MARK_PRESENT", id: student.id })}
            style={{ marginLeft: 10 }}
          >
            Present
          </button>

          <button
            onClick={() => dispatch({ type: "MARK_ABSENT", id: student.id })}
            style={{ marginLeft: 10 }}
          >
            Absent
          </button>
        </div>
      ))}

      <button
        onClick={() => dispatch({ type: "RESET" })}
        style={{
          marginTop: 20,
          padding: "8px 12px",
          background: "orange",
          border: "none",
          cursor: "pointer",
        }}
      >
        Reset Attendance
      </button>

      <h3 style={{ marginTop: 25 }}>Final Attendance</h3>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Student</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
