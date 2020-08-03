import React, {useState} from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'


const items = [

    {
        title: 'What is React?',
        content: 'React is a front end js framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite js library among engineers'
    },
    {
        title: 'Why do you useReact?',
        content: 'For creating components to show content for user '
    }
]

const options = [
    {
        label: 'the color Red',
        value: 'red'

    },
    {
        label: 'the color green',
        value: 'green'


    },
    {
        label: 'the color blue',
        value: 'blue'
    }

]


const App = () => {
    const [selected,setSelected]=useState(options[0])
    return (
        <div>
            <br />
            {/* <Accordion items={items}/> */}
            {/* <Search/> */}
            <Dropdown options={options} 
            onSelectedChange={setSelected}
            selected={selected}/>

        </div>
    )
}

export default App;
