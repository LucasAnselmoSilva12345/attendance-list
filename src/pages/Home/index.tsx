import { useState } from 'react';
import { Card, CardProps } from '../../components/Card';
import { ProfileGitHub } from '../../components/ProfileGitHub';

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState<CardProps[]>([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    };

    setStudents((rest) => [...rest, newStudent]);
  }

  return (
    <div className="flex flex-col items-center">
      <header className="w-3/4 md:w-1/2 mt-84 mx-0 mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-astral-950">Attendance list</h1>
        <ProfileGitHub />
      </header>
      <input
        className="w-3/4 md:w-1/2 p-6 rounded-md border-none bg-astral-50"
        type="text"
        placeholder="Enter your name..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button
        className="w-3/4 md:w-1/2 mt-3 mx-0 mb-84 p-6 font-bold rounded-md border-none cursor-pointer transition-opacity bg-astral-600 text-white hover:opacity-80"
        type="button"
        onClick={handleAddStudent}
      >
        Send
      </button>

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}
