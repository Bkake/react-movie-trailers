import React, {Component} from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {searchText:"", placeHolder:"Tapez votre film ..."};
    }
    
    render() {
        return(
            <div className="searchbar">
                <div className="row">
                    <div className="col-md-8">
                        <input className="form-control input-lg" onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
                    </div>
                </div>
            </div>
            
        ) 
    }

    handleChange(event) {
        this.setState({searchText:event.target.value})
    }
}


export default SearchBar;