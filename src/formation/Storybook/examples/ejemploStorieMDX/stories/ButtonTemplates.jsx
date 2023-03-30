import { useState } from "react";
import Button from "../Button";



export const Template = (args) => <div className='exampleBox'><Button setState={()=>{}} {...args} /></div>


export const TemplateFuncional = (args) => {
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


