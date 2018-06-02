import React, {Component} from 'react';
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import axios from 'axios';
import VideoDetail from '../components/video-detail';

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY = "api_key=fb32c1b6b2f144f9404dd6757c23361d"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {currentMovie:{}, movieList:{}};
    }

    componentWillMount() {
      this.initMovies();
    }

    initMovies() {
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(response){
            this.setState({currentMovie: response.data.results[0], movieList: response.data.results.slice(1,6)})  
          }.bind(this));
    }

    render() {
        const renderVideoList = () => {
            if(this.state.movieList.length>=5) {
                return <VideoList movieList={this.state.movieList}/> 
            }
        }

        return(
            <div>
                <SearchBar/>
                {renderVideoList()}  
                <VideoDetail 
                    title={this.state.currentMovie.title} 
                    description={this.state.currentMovie.overview}/>      
            </div>
        )
    }
     
}

export default App;