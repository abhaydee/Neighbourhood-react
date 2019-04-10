import React, { Component } from 'react';


import escapeRegExp from 'escape-string-regexp';

import {withGoogleMap,GoogleMap,InfoWindow} from 'react-google-maps';
import {Marker} from 'react-google-maps';
import Sidebar from "react-sidebar";
import Navbar from "react-bootstrap/Navbar"

class Gmaps extends Component {

    locations =[
        {title: 'Bangalore Palace', location: {lat: 12.9988, lng: 77.5921}},
        {title: 'Tippu Sultan Palace', location: {lat: 12.9595, lng: 77.5738}},
        {title: 'Lal Bagh', location: {lat: 12.9507, lng: 77.5848}},
        {title: 'Vishweshwaraiah Museum', location: {lat: 12.9752, lng: 77.5963}},
        {title: 'Vidhana Sowdha', location: {lat: 12.9779, lng: 77.5896}},
        {title:'Mumbai',location:{lat:19.076090,lng:72.877426}},
        {title:'Chennai',location:{lat:13.08784,lng:80.27847}},
        {title:'Delhi',location:{lat:28.65381,lng:77.22897}},
        {title:'Hyderabad',location:{lat:17.38405,lng:78.45636}},
        {title:'Kolkata',location:{lat:22.56263,lng:88.36304}}
    ];


    state = {
        isopen:false,
        sidebaropen:false,
        query:' '
    };

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    };

    clearQuery = () => {
        this.setState({ query: '' })
    };

    onclicksidebaropen=(e)=>{
        this.setState({sidebaropen:e})
    };
    handletoggleopen=()=>{
        this.setState({isopen:true});
        console.log(this.state.isopen)
    };
    handletoggleclose=()=>{
        this.setState({isopen:false});
    };
     showingtitles=[

     ];

    render() {

        const { query } = this.state;


        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');
            this.showingtitles = this.locations.filter((titles) => match.test(titles.title))
        } else {
            this.showingtitles = this.locations;
        }
       // console.log(this.showingtitles);


        const Googlemapexample=withGoogleMap(props=>(
            <div>
                <GoogleMap
                    defaultCenter={{ lat: 12.9716, lng: 77.5946 }}
                    defaultZoom={13} >
                </GoogleMap>

                {this.locations.map((location,i)=>{
                    //console.log(location);
                    return (
                        <div>
                            {console.log(this.state.isopen)}
                            {!this.state.open &&
                                <Marker onClick={this.handletoggleopen}
                                    title = { this.locations[i].title }

                                    position = { this.locations[i].location}



                            />}
                            { this.state.isopen&&
                            <InfoWindow onCloseClick={this.handletoggleclose}
                                        position={ this.showingtitles[i].location}
                            >
                                <p>this.showingtitles[i].title}</p>
                            </InfoWindow>
                            }





                        </div>
                    )
                })
                }
                {
                    <Sidebar
                        sidebar={
                            <div>
                                <h1>Map-Locations</h1>
                                <input type="text" placeholder="enter the location" value={this.state.query}
                                       onChange={(event) => this.updateQuery(event.target.value)}
                                       className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-white"  style={{color:'black'}}>

                                </input>


                                {

                                    this.showingtitles.map((location,i)=>{
                                        return 	<ul>
                                            <li>
                                                {console.log(this.state.isopen)}
                                                <button class="f6 link dim br3 ph3 pv2 mb2 dib white bg-mid-gray"> { this.showingtitles[i].title}</button>
                                                {
                                                <Marker onClick={this.handletoggleopen}
                                                        title = { this.showingtitles[i].title }

                                                        position = { this.showingtitles[i].location}



                                                />}






                                            </li>
                                        </ul>

                                    })
                                }

                            </div>

                        }
                        open={this.state.sidebaropen}
                        onSetOpen={this.onclicksidebaropen}
                        styles={{sidebar:{background:'black',color:'white',}}}
                    >
                        <Navbar expand="lg"  bg="dark">
                        <button    onClick={()=>this.onclicksidebaropen(true)} style={{position:'absolute',top:'5px',left:'10px'}} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black">
                            Open Sidebar
                        </button>
                            <Navbar.Brand href="#" id="nav">Map</Navbar.Brand>
                        </Navbar>
                    </Sidebar>


                }
            </div>
        ));


        return (
            <div className="renderingmaps">
                <Googlemapexample containerElement={ <div style={{height: `800px`, width: '900px'}} />}
                                  mapElement={<div style={{height: `100%`}} />}
                />

            </div>
        )
        setInterval(this.render,50)
    }
}

export default Gmaps;
