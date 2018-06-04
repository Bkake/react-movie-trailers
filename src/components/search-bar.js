import React, {Component} from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText:"", 
            placeHolder:"Tapez votre film ...",
            intervalBeforeRquest:1000,
            lockedRequest: false
        };
    }
    
    render() {
        return(
            <div className="searchbar">
                <div className="row">
                    <div className="col-md-8 input-group">
                        <input className="form-control input-lg" onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" onClick={this.handleOnClick.bind(this)}>Go</button>
                        </span>
                    </div>
                </div>
            </div>
            
        ) 
    }

    handleChange(event) {
        this.setState({searchText:event.target.value})
        if(!this.state.lockedRequest) {
            this.setState({lockedRequest:true});
            setTimeout(function(){this.search()}.bind(this), this.state.intervalBeforeRquest);
        }
    }

    handleOnClick() {
      this.search();     
    }

    search() {
       this.props.callBack(this.state.searchText);
       this.setState({lockedRequest:false});
    }
}


export default SearchBar;