import React from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'


const items=[

    {
        title:'What is React?',
        content: 'React is a front end js framework'
    },
    {
        title:'Why use React?',
        content: 'React is a favourite js library among engineers'
    },
    {
        title:'Why do you useReact?',
        content: 'For creating components to show content for user '
    }
]

const App=()=> {
    return (
        <div>
            <br/>
        {/* <Accordion items={items}/> */}
        <Search/>

        </div>
    )
}

export default App;
