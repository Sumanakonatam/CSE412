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
			zoom: 12,
			neighborhoods:props.props[0],
			data:props.props[1]
		}
	}

	componentWillReceiveProps(props) {
		this.setState({
			lng: -122.3321,
			lat: 47.6062,
			zoom: 12,
			neighborhoods:props.props[0],
			data:props.props[1]
		});  
		if (Object.keys(this.state.data).length == 16) {
		this.map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/sameehsuhail/claymls6e004115mxig2eme72', 
            width:"900vw",
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

		for(let n=0;n<this.state.neighborhoods.length;n++)
		{
		let lati=this.state.neighborhoods[n].latitude
		let long = this.state.neighborhoods[n].longitude
		let name= this.state.neighborhoods[n].neighborhood_group
		//alert(name)
		//alert(this.state.data[name])

		var myCircle = new MapboxCircle({lat: lati, lng:long }, this.state.data[name] , {		//this.state.data[name]
			editable: false,
			minRadius: 150,
			fillColor: '#880808'
		}).addTo(this.map);
}
	  }}
	
	componentDidMount(){


		this.map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/sameehsuhail/claymls6e004115mxig2eme72', 
            width:"900vw",
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

		/*for(let n=0;n<this.state.neighborhoods.length;n++)
		{
		let lati=this.state.neighborhoods[n].latitude
		let long = this.state.neighborhoods[n].longitude
		let name= this.state.neighborhoods[n].neighborhood_group
		//alert(name)
		//alert(this.state.data[name])

		var myCircle = new MapboxCircle({lat: lati, lng:long }, this.state.data[name] , {		//this.state.data[name]
			editable: false,
			minRadius: 150,
			fillColor: '#880808'
		}).addTo(this.map);*/
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