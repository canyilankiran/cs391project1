import React, {Component} from 'react'
import CheckBox from './CheckBox'

class checkbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fruites: [
                {id: 1, value: "Booking.com", isChecked: false},
                {id: 2, value: "trivago.com", isChecked: false},
                {id: 3, value: "hotels.com", isChecked: false},
            ]
        }
    }

    handleAllChecked = (event) => {
        let fruites = this.state.fruites
        fruites.forEach(fruite => fruite.isChecked = event.target.checked)
        this.setState({fruites: fruites})
    }

    handleCheckChieldElement = (event) => {
        let fruites = this.state.fruites
        fruites.forEach(fruite => {
            if (fruite.value === event.target.value)
                fruite.isChecked = event.target.checked
        })
        this.setState({fruites: fruites})
    }

    render() {
        return (
            <div className="App">
                <h1> Check and Uncheck All Example </h1>
                <input type="checkbox" onClick={this.handleAllChecked} value="checkedall"/> Check / Uncheck All
                <ul>
                    {
                        this.state.fruites.map((fruite) => {
                            return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...fruite} />)
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default checkbox