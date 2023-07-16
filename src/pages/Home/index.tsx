import { useState, useEffect } from 'react';

import './styles.css';

import { Card, CardProps } from '../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState({ name: '', avatar: '' });

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

  useEffect(() => {
    async function getUserDataOfGitHub() {
      const response = await fetch(
        'https://api.github.com/users/LucasAnselmoSilva12345'
      );
      const data = await response.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    getUserDataOfGitHub();
  }, []);

  return (
    <div id="container">
      <header className="header-container">
        <h1>Lista de presença</h1>
        <div className="dataProfile">
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil da rede social GitHub" />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite seu nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}
