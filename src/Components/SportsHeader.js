import SportButton from "./SportButton";
import React from 'react';

class SportsHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: null};
      }

    updateSelected = (selected) => {
        this.setState({
            selected: selected
        })
    }
    render(){
        return (
            <div>
                <SportButton text="NBA" isSelected={this.state.selected == "NBA"} onClick={this.updateSelected}/>
                <SportButton text="NFL" isSelected={this.state.selected == "NFL"} onClick={this.updateSelected}/>
                <SportButton text="MLB" isSelected={this.state.selected == "MLB"} onClick={this.updateSelected}/>
                <SportButton text="NHL" isSelected={this.state.selected == "NHL"} onClick={this.updateSelected}/>
            </div>
        );
    }
}

export default SportsHeader;