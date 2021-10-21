import React, {Component} from "react";
import {Map, Marker, GoogleApiWrapper, Polyline} from "google-maps-react";

export class CustomMap extends Component {
    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }

    google = this.props.google;

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    render() {
        if (!this.props.google) {
            return <div>Loading...</div>;
        }
        const triangleCoords = [
            {
                "lat": 20.605280,
                "lng": 78.974491,
            },
            {
                "lat": 20.595176,
                "lng": 78.962339,
            },
            {
                "lat": 20.578315,
                "lng": 78.955262,
            }
        ];

        const triangleCoords2 = [
            {
                "lat": 20.600921,
                "lng": 78.936633,
            },
            {
                "lat": 20.594242,
                "lng": 78.983647,
            },
            {
                "lat": 20.596773,
                "lng": 79.016724,
            }
        ];
        return (
            <div
                className="map"
                style={{
                    marginBottom : "100px",
                    position: "relative",
                    height: "calc(80vh)"
                }}
            >
                <Map
                    style={{
                        height: "545px",
                        width: "98%"
                    }}
                    google={this.props.google} zoom={13}>

                    <Polyline
                        path={triangleCoords}
                        strokeColor="#202E55"
                        style={{width: "5px"}}
                        strokeOpacity={1}
                        strokeWeight={3}/>
                    <Polyline
                        path={triangleCoords2}
                        strokeColor="#2DCC70"
                        style={{width: "5px"}}
                        strokeOpacity={1}
                        strokeWeight={3}/>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyA1h0-QnzboBDfNQsYRebc-we-R4_tQwLk",
    v: "3.30"
})(CustomMap);
