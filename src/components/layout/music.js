import React from 'react'


let musicIsLoaded = false

class Music extends React.Component {

  state = {
    musicUrl: '/images/site-icons/bg.mp3',
    isPlaying: true,
  }

  componentDidMount() {
    // console.log("music ", this.refs.audio_element)
    // this.refs.audio_element.play()
    // musicIsLoaded = true
  }

  shouldComponentUpdate() {
    return !musicIsLoaded
  }

  changePlayState = () => {
    this.setState({
      isPlaying: !this.state.isPlaying,
    })
    if (this.state.isPlaying) {
      this.refs.audio_element.pause()
    } else {
      this.refs.audio_element.play()
    }
  }

  render() {
    const { isPlaying, musicUrl } = this.state

    // console.log("sss", isPlaying)
    return (
      <div id="audio-box">
        { !isPlaying && <span className="audio-muted" /> }
        
        <a className="audio-btn" onClick={this.changePlayState} />
        <audio ref="audio_element" autoPlay controls loop src={musicUrl} />
      </div>
    )
  }
}

export default Music
