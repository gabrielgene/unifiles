import React from 'react';
import Topbar from '../../components/Topbar';
import './style.css';

const Atendimento = () => (
  <div>
    <div className="atTopBar">
      <Topbar showSearch={true} />
    </div>
    <iframe style={{ border: 'white', width: '100%', height: 617}} src="http:\\localhost:3030" />
  </div >
)

export default Atendimento;
