import React, { Component } from 'react';

class Education extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <form>
                    <fieldset>
                        <legend>Education:</legend>
                        <div>
                            <label htmlFor="schoolName">Shool Name</label>
                            <input type="text" id="schoolName" placeholder='School Name'/>
                        </div>

                        <div>
                            <label htmlFor="degree">Degree:</label>
                            <input type="text" id='degree' placeholder='Degree'/>
                        </div>

                        <div>
                            <label htmlFor="from">From:</label>
                            <input type="text" id='from' placeholder='From'/>
                        </div>

                        <div>
                            <label htmlFor="to">To:</label>
                            <input type="text" inputMode='to' placeholder='To'/>
                        </div>
                    <button>Delete</button>
                    <button>Add</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}
 
export default Education;