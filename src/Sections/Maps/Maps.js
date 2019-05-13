import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import ShuttleIcon from "../../assets/ic_shuttle.png";
import firebase from "../../config/fbconfig";

class Maps extends Component {

  constructor(props){
    super(props);
    this.state = {
      lat: 44.693544,
      long: -73.469660
    };
  }

  componentDidMount = () => { 
    const database = firebase.database();
    var starCountRef = database.ref('Drivers/' + "WeudDDhBAKPeBGLNCwzGvs4vn4F2");
    var self = this;
    starCountRef.on('value', function(snapshot) {
      self.setState({
        lat: snapshot.val().l[0],
        long: snapshot.val().l[1]
      });
    });
  }

  render() {
    const mapStyles = {
        width: '100%',
        height: '100%'
    };
    const google = window.google;

    return (
      //44.695756, -73.456463
        <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{
            lat: 44.693544, 
            lng: -73.469660
        }}
      > 
      <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        icon={{
          url: ShuttleIcon,
          scaledSize: new google.maps.Size(32,45)
        }}
        position={{lat: this.state.lat, lng: this.state.long}} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBgD068RgxVZl4JPABCxUXl88F-jLjX_nI'
  })(Maps);