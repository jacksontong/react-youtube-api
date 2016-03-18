import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyAAb7eSMxZZ5dL_low26wdGT1Hi4qiRfUs';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({
            key: API_KEY,
            term: 'surfboards'
        }, videos => this.setState({
            videos,
            selectedVideo: videos[0]
        }));
    }
    render() {
        const state = this.state;

        return (
            <div>
                <SearchBar />
                <VideoDetail video={state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={state.videos} />
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));