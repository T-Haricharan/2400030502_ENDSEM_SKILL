export function attendanceReducer(state, action) {
  switch (action.type) {
    case "MARK_PRESENT":
      return state.map((student) =>
        student.id === action.id ? { ...student, status: "Present" } : student
      );

    case "MARK_ABSENT":
      return state.map((student) =>
        student.id === action.id ? { ...student, status: "Absent" } : student
      );

    case "RESET":
      return state.map((student) => ({ ...student, status: "Not Marked" }));

    default:
      return state;
  }
}
