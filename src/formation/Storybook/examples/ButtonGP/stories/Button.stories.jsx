import React, { useState } from 'react';
import { Button } from '../Button';
import './ButtonStories.css' 
import { ejemploMKD } from './ejemploMKD';


export default {
  title: 'Formación/Storybook/Conocimientos - Basicos/Componentes.stories.tsx|.jsx/Componente de Ejemplo', 
  component: Button,  
};

export const MainStorie = ({label})=> <div className='exampleBox'><Button setState={()=>{}} label={label}></Button></div>



 //PODEMOS CREAR UN TEMPLATE QUE USAREMOS EN EL RESTO DE EJEMPLOS MODIFICANDO SOLO LOS ARGUMENTOS QUE NOS INTERESE.
 const Template = (args) => {
  const [name, setName] = useState('no name')

  return(
    <>
    <div className='exampleBox'>
      El nombre actual es: {name}
        <br/>
        <br/>
      <Button setState={setName} {...args}></Button>
      </div>
    </>
  )
};
//_________________________________________________________




//Storie con documentacion MKD.
export const TemplateYParametros = Template.bind({});
TemplateYParametros.parameters = {
  docs: {
    description: {
      story: ejemploMKD,
    },
}
}


//Storie modificando los argumentos del template.
export const TemplateYArgumentos = Template.bind({});
TemplateYArgumentos.args = {
  label: 'Sistituye nombre por',
};

//Storie con documentacion MKD y modificando los argumentos del template.
export const TemplateParametrosYArgumentos = Template.bind({});
TemplateParametrosYArgumentos.parameters = {
  docs: {
    description: {
      story: ejemploMKD,
    },
}
}
TemplateParametrosYArgumentos.args = {
  label: 'Remplazar nombre por',
};
  


