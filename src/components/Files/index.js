import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import './style.css';

const files = [
  { name: 'calculo', file: 'calculo.pdf' },
  { name: 'calculo', file: 'calculo.pdf' },
  { name: 'calculo', file: 'calculo.pdf' },
  { name: 'calculo', file: 'calculo.pdf' },
  { name: 'calculo', file: 'calculo.pdf' },
]

const filesList = files.map((file, i) => (
  <Card key={i} className="cardFiles" >
    <CardHeader
      title={file.file}
      subtitle={file.name}
      avatar="https://image.flaticon.com/icons/svg/179/179483.svg"
    />
  </Card>
));

const Files = () => (
  <div className="filesWrapper">
    {filesList}
  </div>
)

export default Files;
