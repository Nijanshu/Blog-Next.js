import { redirect } from 'next/dist/server/api-utils';
import React from 'react'

import Placeholder from 'react-bootstrap/Placeholder';

function Place(props) {

    // setTimeout(() => {
    //   redirect(`/blogpost/${props.id}`)
    // }, 2000);
  return (
    <div className='tw-grid tw-justify-center tw-w-full'>
     <Placeholder as="img" variant="top" height={`400px`} width={`900px`} style={{'text-align':'center'}} animation="glow"/>
     
     <Placeholder as="h1" animation="glow">
        <Placeholder xs={12} className="w-25"/>
        </Placeholder>
     <Placeholder as="p" animation="glow">
        <br />
        <Placeholder xs={12} style={{width:'90%',displpay:'inline', marginLeft:'30px'}}>
        {/* &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;spaces */}
        </Placeholder>
        <Placeholder xs={12} style={{width:'95%'}}/>
        <Placeholder xs={12} style={{width:'96%'}}/>
        <Placeholder xs={12} style={{width:'79%'}}/> 
        <br />
        
        <br />
        <Placeholder xs={12} style={{width:'98%'}}/>
        <Placeholder xs={12} style={{width:'99%'}}/>
        <Placeholder xs={12} style={{width:'97%'}}/>
        <Placeholder xs={12} style={{width:'98%'}}/>
        <Placeholder xs={12} style={{width:'97%'}}/>
        <Placeholder xs={12} style={{width:'97%'}}/>
        <Placeholder xs={12} style={{width:'96%'}}/>
        <Placeholder xs={12} style={{width:'97%'}}/>
        <Placeholder xs={12} style={{width:'98%'}}/>
        <br />
        <br />
        <Placeholder xs={12} style={{width:'99%'}}/>
        <Placeholder xs={12} style={{width:'98%'}}/>
        <Placeholder xs={12} style={{width:'99%'}}/>
        <Placeholder xs={12} style={{width:'97%'}}/>
        <Placeholder xs={12} style={{width:'96%'}}/>
      </Placeholder>

    </div>
  );
}

export default Place;