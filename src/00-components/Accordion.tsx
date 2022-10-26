import React from 'react';
export type AccordionBodyType={
    body:Array<number>
}
export type AccordionTitleType={
    title:string,
}
export type AccordionType={
    body:Array<number>,
    title:string,
}
function Accordion(props:AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody body={props.body} />
        </div>
    );
}
function AccordionTitle(props:AccordionTitleType) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    );
}
function AccordionBody(props:AccordionBodyType) {
    return (
        <div>
            <ul>
                {
                    props.body.map(t=>{
                        return <li>{t}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default Accordion;