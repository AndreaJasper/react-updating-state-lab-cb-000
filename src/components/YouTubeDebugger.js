import React from 'react';
 
class YouTubeDebugger extends React.Component {
  
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }
 
  bitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }
 
  render() {
    return (
      <div>
        <h3>click to change bitrate to 12</h3>
        <button className='bitrate' onClick={this.bitrateClick}>{this.state.settings.bitrate}</button>
        <h3>click to change resolution to 720p</h3>
        <button className='resolution' onClick={this.resolutionClick}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}
 
export default YouTubeDebugger;