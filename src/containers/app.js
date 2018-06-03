import React, {Component} from 'react';
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import axios from 'axios';
import VideoDetail from '../components/video-detail';
import Video from '../components/video';

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
            this.setState({currentMovie: response.data.results[0], movieList: response.data.results.slice(1,6)}, function(){
                this.applyVideoToCurrentMovie();
            })  
          }.bind(this));
    }

    applyVideoToCurrentMovie() {
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?append_to_response=videos&include_adult=false&${API_KEY}`).then(function(response){
            const youtubeKey = response.data.videos.results[0].key;
            let newCurrentMovie = this.state.currentMovie;
            newCurrentMovie.videoId = youtubeKey;
            this.setState({currentMovie: newCurrentMovie});
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
                <Video videoId={this.state.currentMovie.videoId}/>
                {renderVideoList()}  
                <VideoDetail 
                    title={this.state.currentMovie.title} 
                    description={this.state.currentMovie.overview}/>      
            </div>
        )
    }
     
}

export default App;