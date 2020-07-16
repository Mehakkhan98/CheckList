import React from 'react';
import { SliderBox } from "react-native-image-slider-box";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1561346745-5db62ae43861?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://freedesignfile.com/upload/2017/01/Children-who-listen-to-the-teacher-in-the-classroom-HD-picture.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0N2qdsGOwzgRO3aJg9nYGhrgavlK7T8FR3Oe04ZuQTPNwYShP&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5ks_-bi7g2K6aodFmh9Lt5Vq6OYEp3K7Br6OLdVTxN6r6Zqtm&usqp=CAU", // Network image
       // require('./assets/images/girl.jpg'),          // Local image
      ]
    };
  }
  render()
  {
      return(
        <SliderBox
        images={this.state.images}
        sliderBoxHeight={250}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        autoplay
        circleLoop
      />
      )
  }
}