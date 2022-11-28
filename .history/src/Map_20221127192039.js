import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken='pk.eyJ1Ijoic2FtZWVoc3VoYWlsIiwiYSI6ImNsYXltY3YwMjEwZWwzbm44NWNrZDFuNHIifQ.TxMGHqwzrfCJ81W-H0xI5w';

const data = [
	{
		"location": "West Seattle",
		"city": "Seattle",
		"state": "Washington",
		"coordinates": [-122.3868,47.5667],
	},
	{
		"location": "Central District",
		"city": "Seattle",
		"state": "Washington",
		"coordinates": [-122.2964,47.6088],
	},
	{
		"location": "Capitol hill",
		"city": "Seattle",
		"state": "Washington",
		"coordinates": [-122.3222,47.6253],
	}
]

class Mapcomp extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			lng: -122.3321,
			lat: 47.6062,
			zoom: 12
		}
	}

	componentDidMount(){
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/sameehsuhail/claymls6e004115mxig2eme72', 
            width:"900vw",
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

		data.forEach((location) => {
			console.log(location)
			var marker = new mapboxgl.Marker()
							.setLngLat(location.coordinates)
							.setPopup(new mapboxgl.Popup({ offset: 30 })
							.setHTML('<h4>' + location.city + '</h4>' + location.location))
							.addTo(map);

		})
	}

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'100vw', height:'100vh'}}/>
			</div>
		)
	}
}

export default Mapcomp;