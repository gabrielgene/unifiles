import React from 'react';
import FileCard from '../FileCard';
import './style.css';

const files = [
  { type: "Avaliação", subject: "Cálculo I", subtitle: "Derivadas e funções p...", likes: "35", time: "Há 2 semanas", lenght: "1,2 mb" },
  { type: "Apostila", subject: "Cálculo I", subtitle: "Todos assuntos da u...", likes: "800", time: "Há 4 meses", lenght: "6 gb" },
  { type: "Atividade", subject: "Cálculo I", subtitle: "Esbolçar gráficos", likes: "86", time: "Há 3 dias", lenght: "5,6 mb" },
  { type: "Avaliação", subject: "Cálculo I", subtitle: "Derivadas e funções p...", likes: "35", time: "Há 2 semanas", lenght: "1,2 mb" },
  { type: "Atividade", subject: "Cálculo I", subtitle: "Esbolçar gráficos", likes: "86", time: "Há 3 dias", lenght: "5,6 mb" },
  { type: "Avaliação", subject: "Cálculo I", subtitle: "Derivadas e funções p...", likes: "35", time: "Há 2 semanas", lenght: "1,2 mb" },
  { type: "Avaliação", subject: "Cálculo I", subtitle: "Derivadas e funções p...", likes: "35", time: "Há 2 semanas", lenght: "1,2 mb" },
  { type: "Atividade", subject: "Cálculo I", subtitle: "Esbolçar gráficos", likes: "86", time: "Há 3 dias", lenght: "5,6 mb" },
  { type: "Apostila", subject: "Cálculo I", subtitle: "Todos assuntos da u...", likes: "800", time: "Há 4 meses", lenght: "6 gb" },
  { type: "Apostila", subject: "Cálculo I", subtitle: "Todos assuntos da u...", likes: "800", time: "Há 4 meses", lenght: "6 gb" },
]

const filesList = files.map((file, i) => (
  <div key={i}>
    <FileCard
      type={file.type}
      subject={file.subject}
      subtitle={file.subtitle}
      likes={file.likes}
      time={file.time}
      lenght={file.lenght}
    />
  </div>
));

const Files = () => (
  <div className="filesWrapper">
    {filesList}
  </div>
)

export default Files;
