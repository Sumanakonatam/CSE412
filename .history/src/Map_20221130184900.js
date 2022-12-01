import React from 'react';
import mapboxgl from 'mapbox-gl';
import {neighborhoods,data} from './App.js'


mapboxgl.accessToken='pk.eyJ1Ijoic2FtZWVoc3VoYWlsIiwiYSI6ImNsYXltY3YwMjEwZWwzbm44NWNrZDFuNHIifQ.TxMGHqwzrfCJ81W-H0xI5w';

const MapboxCircle = require('mapbox-gl-circle');
//const [data, setData] = useState()
//const [neighborhoods, setNeighborhoods] = useState()


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


		var myCircle = new MapboxCircle({lat: 47.6062, lng: -122.3321}, 2500, {
			editable: false,
			minRadius: 1500,
			fillColor: '#29AB87'
		}).addTo(map);

	}

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'100vw', height:'100vh', position:'static', zIndex:2}}/>
			</div>
		)
	}
}

export default Mapcomp;


/*
data.forEach((location) => {
			console.log(location)
			var marker = new mapboxgl.Marker()
							.setLngLat(location.coordinates)
							.setPopup(new mapboxgl.Popup({ offset: 30 })
							.setHTML('<h4>' + location.city + '</h4>' + location.location))
							.addTo(Mapcomp);

		})*/