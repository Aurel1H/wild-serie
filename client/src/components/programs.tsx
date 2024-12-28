import { useEffect, useState } from "react";

// Définition du type des données des programmes
interface Program {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Programs() {
  const [programsData, setProgramsData] = useState<Program[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      const response = await fetch("http://localhost:3310/api/programs");
      const data: Program[] = await response.json();
      setProgramsData(data);
    };

    fetchPrograms();
  }, []);

  return (
    <div>
      <h1>Programs</h1>
      <ul>
        {programsData.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <p>{program.synopsis}</p>
            <img
              src={program.poster}
              alt={`${program.title} Poster`}
              width="200"
            />
            <p>Country: {program.country}</p>
            <p>Year: {program.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Programs;
