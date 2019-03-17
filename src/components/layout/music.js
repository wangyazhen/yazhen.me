import React from 'react'

class Music extends React.Component {

  state = {
    musicUrl: 'https://surmon.me/proxy/music/m7c.music.126.net/20190317220735/5bbff1568029d50904bac118b6b9ce12/ymusic/4df7/09df/b604/511bd32ad36fbf0e06bd02caaf7125f8.mp3',
    isPlaying: true,
  }

  componentDidMount() {
    // console.log("music ", this.refs.audio_element)
    // this.refs.audio_element.play()
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
