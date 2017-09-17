import React from 'react';
import FileCard from '../FileCard';
import './style.css';

const files = [
  { type: "Discussão", subject: "Cálculo IV", subtitle: "Derivadas e funções p...", likes: "35", time: "Há 2 semanas", lenght: "1,2 mb" },
  { type: "Discussão", subject: "Cálculo IV", subtitle: "Todos assuntos da u...", likes: "800", time: "Há 4 meses", lenght: "6 gb" },
  { type: "Discussão", subject: "Cálculo IV", subtitle: "Esbolçar gráficos", likes: "86", time: "Há 3 dias", lenght: "5,6 mb" },
  { type: "Discussão", subject: "Cálculo IV", subtitle: "Derivadas e funções p...", likes: "35", time: "Há 2 semanas", lenght: "1,2 mb" },
  { type: "Discussão", subject: "Cálculo IV", subtitle: "Esbolçar gráficos", likes: "86", time: "Há 3 dias", lenght: "5,6 mb" },
  { type: "Discussão", subject: "Cálculo IV", subtitle: "Derivadas e funções p...", likes: "35", time: "Há 2 semanas", lenght: "1,2 mb" },
  { type: "Discussão", subject: "Cálculo IV", subtitle: "Derivadas e funções p...", likes: "35", time: "Há 2 semanas", lenght: "1,2 mb" },
  { type: "Discussão", subject: "Cálculo IV", subtitle: "Esbolçar gráficos", likes: "86", time: "Há 3 dias", lenght: "5,6 mb" },
  { type: "Discussão", subject: "Cálculo IV", subtitle: "Todos assuntos da u...", likes: "800", time: "Há 4 meses", lenght: "6 gb" },
  { type: "Discussão", subject: "Cálculo IV", subtitle: "Todos assuntos da u...", likes: "800", time: "Há 4 meses", lenght: "6 gb" },
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

const Messages = () => (
  <div className="filesWrapper">
    {filesList}
  </div>
)

export default Messages;
