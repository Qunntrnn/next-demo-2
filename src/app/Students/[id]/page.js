'use client';



import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AppButton } from "../../components/app-button";
import { studentService } from "../../services/student.services";

export default function EditStudent({ params }) {
  console.log(params.id);
  const router = useRouter();
  const [student, setStudent] = useState({
    id: undefined,
    name: "",
    age: "",
    gender: "M",
  });

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!student.name.trim()) {
        alert("Please input name");
        return;
      }
      if (!student.age) {
        alert("Please enter age");
        return;
      }
      await studentService.updateStudent(student);
      alert("Save success!");
      router.push("/Students");
    } catch (e) {
      alert("Save Fail");
      console.error(e);
    }
  };

  useEffect(() => {
    const findStudent = async () => {
      const student = await studentService.findStudentById(+params.id);
      if (!student) {
        alert("Student not found");
        return;
      }
      setStudent(student);
    }
    findStudent();
  }, []);

  if (!student.id) {
    return <div></div>;
  }
  return (
    <div className="bg-lime-300 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Edit Student</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="id" className="inline-block w-20">
              Id
            </label>
            <input
              className="border border-gray-300 px-3 py-2 rounded w-500 font-bold text-black"
              type="text"
              name="id"
              id="id"
              value={student.id}
              disabled
            />
          </div>          
          <div className="mb-4">
            <label htmlFor="name" className="inline-block w-20">
              Name
            </label>
            <input
              className="border border-gray-300 px-3 py-2 rounded w-500 font-bold text-black"
              type="text"
              name="name"
              id="name"
              value={student.name}
              onChange={(e) => {
                setStudent({
                  ...student,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="inline-block w-20">
              Age
            </label>
            <input
              className="border border-gray-300 px-3 py-2 rounded w-500 text-black font-bold"
              id="age"
              name="age"
              type="number"
              value={student.age}
              onChange={(e) => {
                setStudent({
                  ...student,
                  age: +e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-4">
            <label className="inline-block w-20">Gender</label>
        
              <label htmlFor="rdMale" className="inline-block mr-2">
                <input
                  id="rdMale"
                  name="gender"
                  type="radio"
                  className="mr-2"
                  value="M"
                  checked={student.gender === "M"}
                  onChange={(e) => {
                    setStudent({
                      ...student,
                      gender: e.target.value,
                    });
                  }}
                />
                Male
              </label>
              <label htmlFor="rdFemale" className="inline-block">
                <input
                  id="rdFemale"
                  name="gender"
                  type="radio"
                  className="mr-2"
                  value="F"
                  checked={student.gender === "F"}
                  onChange={(e) => {
                    setStudent({
                      ...student,
                      gender: e.target.value,
                    });
                  }}
                />
                Female
              </label>
          </div>
          <AppButton type="submit" color="blue">
            Save
          </AppButton>
        </form>
      </div>
    </div>
  );
}