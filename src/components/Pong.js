import React from 'react'
import Action from './Action';


export default class Pong extends React.Component{
  constructor(props){
    super(props);
    this.actionFunction = this.actionFunction.bind(this);
    this.state ={
    xPos: this.props.width/2, 
    yPos: this.props.height/2,
    dx: 5 * (Math.random() < 0.5 ? 1 : -1),
    dy: 5 * (Math.random() < 0.5 ? 1 : -1),
    player1Pos: this.props.height/2,
    player2Pos: this.props.height/2,
  }
}


  actionFunction(event){
    if(event.keyCode === 38 && this.state.player1Pos > 0) {
      console.log('up')
      const {player1Pos} = this.state
          this.setState({
            player1Pos: player1Pos - 5
          })
        }  
        if(event.keyCode === 40 && this.state.player1Pos < this.props.height - playerHeight) {
          console.log('down')
          const {player1Pos} = this.state
              this.setState({
                player1Pos: player1Pos + 5
              })
            }  
            
        if(event.keyCode === 87 && this.state.player2Pos > 0) {
          console.log('w')
          const {player2Pos} = this.state
              this.setState({
                player2Pos: player2Pos - 5
              })
            }  

        if(event.keyCode === 83 && this.state.player2Pos < this.props.height - playerHeight) {
          console.log('s')
          const {player2Pos} = this.state
              this.setState({
                player2Pos: player2Pos + 5
              })
            }  

    }
  




  componentDidMount(){
    this.movement = setInterval(()=>{
      this.nextStep()
    }, 40)
    document.addEventListener("keydown", this.actionFunction, false);
  }


  componentDidUpdate(prevProps, prevState){
    if(prevState.xPos < 0 ){
      this.setState({
        dx:5 * (Math.random() < 0.5 ? 1 : -1),
        xPos:1,
      })
    }

      if(prevState.yPos < 0){
        this.setState({
          dy:5 * (Math.random() < 0.5 ? 1 : -1),
          yPos:1,
        })
      }

      if (prevState.xPos > this.props.width - boxWidth){
        this.setState({
          dx: -5 * (Math.random() < 0.5 ? 1 : -1),
          xPos: this.props.width - boxWidth
        })
      }

      if (prevState.yPos > this.props.height - boxHeight){
        this.setState({
          dy: -5 * (Math.random() < 0.5 ? 1 : -1),
          yPos: this.props.height - boxHeight
        })
      }
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.upFunction, false);
  }


  nextStep(){
    const{xPos, dx, yPos, dy} = this.state
    this.setState({
      xPos: xPos + dx,
      yPos: yPos + dy,
    })
  }


  render(){
    const{width, height} = this.props;
    const{xPos, yPos, player1Pos, player2Pos} = this.state

    return(
      <div style={{...styles.container, width, height}}>
        <div style={{...styles.ball, left: xPos, top:yPos}}></div>
        <div style={{...styles.player, top:player1Pos}} ></div>
        <div style={{...styles.player, top:player2Pos, right: 0, background:'red'}} ></div>
        {/* <Action player1={this.state.player1Pos} player2={this.state.player2Pos} width ={window.innerWidth/2} height={window.innerHeight/2} playerHeight = {playerHeight}/> */}
      </div>
    )
  }
}




const playerHeight = (window.innerHeight/8)
const boxWidth = 20
const boxHeight = 20
const styles = {
  container: {
    border: '1px solid',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(162,162,236,1) 0%, rgba(0,212,255,1) 100%)',

    position: 'relative' 
    // have to do relative if do absolute in child
  },
  ball:{
    position:'absolute',
    height: boxHeight,
    width: boxWidth,
    borderRadius: '50%',
    backgroundColor: '#67fe28',
    // marginLeft: '100px',
    // marginTop: '100px'
    // top: 20,
    // left: 20,
  },

  player:{

    position:'absolute',
    height: playerHeight,
    width: '15px',
    background: 'grey'

  }

}