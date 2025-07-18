import * as React from 'react';

interface EmailTemplateProps{
    name:string,
    email:string,
    message:string
}

export function EmailTemplate({name}:EmailTemplateProps){
    return(<div>
        <h1>Welcome,{name}</h1>
    </div>)
}