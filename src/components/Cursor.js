import React from 'react';


export default class Cursor extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      xPosCursor: 0,
      yPosCursor: 0,
    }
  }

  
  
  updateCursorDimensions = (e) => {
    
    this.setState({
      // xPosCursor: window.MouseEvent.prototype.x,
      xPosCursor: e.nativeEvent.offsetX,
      yPosCursor: e.nativeEvent.offsetY
    })
  }

 

  // componentDidMount = () => {
  //   this._updateCursorDimensions.bind(this)
  //   window.addEventListener('mousemove',this._updateCursorDimensions)
  // }

  render(){
    const{width, height} = this.props;

      const {xPosCursor, yPosCursor} = this.state
    return(
      <div >
       <div style= {{...styles.container,  backgroundColor:'red', width, height}} onMouseMove={this.updateCursorDimensions.bind(this)}  >

        <p> mouse x pos: {xPosCursor}</p>
        <p> mouse y pos: {yPosCursor}</p>

        </div>

      </div>
    )
  }
}


const styles = {
  container: {
    border: '1px solid',
    // backgroundColor: 'f1f1f1',
    position: 'relative' 
    // have to do relative if do absolute in child
  },
}