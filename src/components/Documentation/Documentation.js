import React from 'react';
import './Documentation.css';

const Documentation = () => {
    return (
        <div className='doc-container'>
             <h2>How does react work </h2>
            <p><b>Answer : </b> React is a declarative, efficient, and flexible JavaScript library for building user interfaces.React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred. React does not commit state changes one after the other if there are multiple state changes. Instead, React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. </p><br />


            <h2>Difference between props and state</h2>
               <b> State:</b>
            <ol>
                <li>states are mutable.</li>
                <li> states are associated with the individual components can't be used by other components.</li>
                <li>states are initialize on component mount.</li>
                <li>states are used for rendering dynamic changes within component</li>
            </ol><br />
            <ol>
              <b> props:</b>
                <li>props are immutable.</li>
                <li>you can pass props between components.</li>
                <li>props are mostly used to communicate between components.You can pass from parent to child</li>
                <li> directly. For passing from child to parent you need use concept of lifting up states</li>
            </ol>
        </div>
    );
};

export default Documentation;