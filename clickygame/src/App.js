import React, { Component } from 'react';
import './App.css';
import Header from "./component/header"
import Wrapper from "./component/Wrapper";
import images from "./images/img.json"
import ImgCard from "./component/ImgCard"

let repeated = false
class App extends Component {
  state = {
    images,
    clicked: [],
    repeated: false,
    score: 0,
  }

  componentDidMount() {
    this.setState({
      images: images
    });
  }

  handleClick = (event) => {

    const { id, name } = event.target
    this.state.clicked.forEach(function (element) {
      if (element === id) {
        repeated = true
      }
    })
    this.state.clicked.push(id)

    const imagesArr = this.state.images

    for (let i = 0; i < imagesArr.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      let x = imagesArr[i];
      imagesArr[i] = imagesArr[j];
      imagesArr[j] = x;
    }
    if (repeated === false) {
      this.setState({
        score: this.state.score + 1,
        repeated: repeated,
        images: imagesArr
      })
      
      if((this.state.score+1) === 10){
      alert("congrats, you have won!")
      this.setState({
        repeated: true
      })
      }
    }
    else if(repeated === true){
      alert("you have lost :(\nYour final score was " + this.state.score)
      this.setState({
        score: this.state.score + 1,
        repeated: repeated,
        images: images
      })
    }
  }
  render() {

    return (
      
      !this.state.repeated?
        (<Wrapper>
          <Header score={this.state.score}>Welcome To The Clicky Game</Header>
          {this.state.images.map(image => (

            <ImgCard
              pos={image.id}
              clicked={false}
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
              onClick={this.handleClick}
            />
          ))}
        </Wrapper>
        )
        :
        window.location.reload()
        (<Wrapper>
          <Header score={0}>Welcome To The Clicky Game</Header>
          {this.state.images.map(image => (

            <ImgCard
              pos={image.id}
              clicked={false}
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
              onClick={this.handleClick}
            />
          ))}
        </Wrapper>
        ))
  }
}

export default App;
