import * as React from 'react';
import Card from 'react-bootstrap/Card';


export default function Project({project}){
    // console.log("final en project",project);
    const founders = ['Founders: '];
    const ods = ['ODS: '];

    if(project.ods !== ''){
        project.ods.forEach( o => {
            ods.push(o + ' - ');
        })
    }

    if(project.founders !== ''){
        project.founders.forEach( i => {
            founders.push(i + ' / ');
        })
    }

    return (
        <>
        <Card style={{ width: '18rem' }}>
            {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <div>
                    <Card.Text>
                        {project.description}
                    </Card.Text>
                </div>
                <div>
                    <div><p> <span>{ods}</span></p></div>
                    <div><p>{founders}</p></div>
                </div>

                {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>
        </>
    )
}