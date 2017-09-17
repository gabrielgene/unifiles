import React from 'react';
import FileCard from '../FileCard';
import './style.css';
import Search from '../Search';

const files = [
  { type: "Discussão", subject: "Cálculo IV", subtitle: "Derivadas e funções p...", likes: "35", time: "Há 2 semanas", lenght: "1,2 mb" },
  { type: "Discussão", subject: "Cálculo IV", subtitle: "Todos assuntos da u...", likes: "800", time: "Há 4 meses", lenght: "6 gb" },
  { type: "Discussão", subject: "Cálculo IV", subtitle: "Esbolçar gráficos", likes: "86", time: "Há 3 dias", lenght: "5,6 mb" },
  // { type: "Discussão", subject: "Cálculo IV", subtitle: "Derivadas e funções p...", likes: "35", time: "Há 2 semanas", lenght: "1,2 mb" },
  // { type: "Discussão", subject: "Cálculo IV", subtitle: "Esbolçar gráficos", likes: "86", time: "Há 3 dias", lenght: "5,6 mb" },
  // { type: "Discussão", subject: "Cálculo IV", subtitle: "Derivadas e funções p...", likes: "35", time: "Há 2 semanas", lenght: "1,2 mb" },
  // { type: "Discussão", subject: "Cálculo IV", subtitle: "Derivadas e funções p...", likes: "35", time: "Há 2 semanas", lenght: "1,2 mb" },
  // { type: "Discussão", subject: "Cálculo IV", subtitle: "Esbolçar gráficos", likes: "86", time: "Há 3 dias", lenght: "5,6 mb" },
  // { type: "Discussão", subject: "Cálculo IV", subtitle: "Todos assuntos da u...", likes: "800", time: "Há 4 meses", lenght: "6 gb" },
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


export class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  hideList = () => {
    console.log('hide list');
    this.setState({visible: false});
  }

  showList = () => {
    console.log('show list');
    this.setState({visible: true});
  }

  render() {
    return (
      <div className="filesWrapper">
        <div className="FileSearch-wrapper">
          <Search
            placeholder="Pesquisar itens desta categoria..."
            data={files}
            hasCallback={true}
            onSearch={this.hideList}
            onClear={this.showList}
          />
        </div>
        <div className="FilesList">
          {this.state.visible ? filesList : ''}
        </div>
      </div>
    );
  }
}

export default Messages;
