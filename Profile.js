import React from 'react';

export default class Profile extends React.Component {
    render() {
      return (
        <div>
          <img style = { {width: "160px", height: "160px", borderRadius: "80px", marginLeft: "28%", marginTop: "20%"}}
          src = "https://media.istockphoto.com/id/1353173739/photo/green-textured-cardboard-background.jpg?b=1&s=170667a&w=0&k=20&c=lSfku0dZuNLZl6x8lU-QCDEL5_JzUT3VK9aji82IzBs="/>
          <h2 style = {{marginLeft: "44%", marginTop: "-29%", color: 'white'}}> 20 </h2>
          <h2 style = {{ position: 'abstract', marginLeft: "40%", marginTop: "-6%", color: 'white'}}> MILES </h2>
        </div>

      );
    }
  }