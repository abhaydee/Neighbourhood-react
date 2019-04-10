import React, { Component } from 'react';


import escapeRegExp from 'escape-string-regexp';

import {withGoogleMap,GoogleMap,InfoWindow} from 'react-google-maps';
import {Marker} from 'react-google-maps';
import Sidebar from "react-sidebar";
import Navbar from "react-bootstrap/Navbar"

class Gmaps extends Component {
    constructor( props ){
        super( props );
        this.handletoggleopen = this.handletoggleopen.bind(this);
        this.handletoggleclose=this.handletoggleclose.bind(this)
    }

    locations =[
        
        {title: 'Tippu Sultan Palace', location: {lat: 12.9595, lng: 77.5738}},
        {title: 'Lal Bagh', location: {lat: 12.9507, lng: 77.5848}},
        {title: 'Vishweshwaraiah Museum', location: {lat: 12.9752, lng: 77.5963}},
        {title: 'Vidhana Sowdha', location: {lat: 12.9779, lng: 77.5896}},
         {title: 'Amith mane', location: {lat: 	12.9166, lng: 77.6101}},
        
        
        
        
    ];


    state = {
        isopen:false,
        sidebaropen:false,
        query:' ',
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };
    onMarkerClick = (props, marker, e) =>

        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true


        });

    updateQuery = (query) => {
        this.setState({ query:query.trim() })
    };

    clearQuery = () => {
        this.setState({ query: '' })
    };

    onclicksidebaropen=(e)=>{
        this.setState({sidebaropen:e})
    };
    handletoggleopen=(e)=>{
        this.setState({isopen:true});

    };
    handletoggleclose=()=>{
        this.setState({isopen:false});
    };
     showingtitles=[

     ];

    render() {
        console.log(this.state.isopen);
        const { query } = this.state;


        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');
            this.showingtitles = this.locations.filter((titles) => match.test(titles.title))
        } else {
            this.showingtitles = this.locations;
        }
        console.log(this.showingtitles);


        const Googlemapexample=withGoogleMap(props=>(
            <div>
                <GoogleMap
                    defaultCenter={{ lat: 12.9769, lng: 77.5946 }}
                    defaultZoom={12} >


                {this.locations.map((location,i)=>{
                    //console.log(location);
                    return (
                        <div>


                            {/*{ this.state.isopen&&
                            <InfoWindow onCloseClick={this.handletoggleclose}
                                        position={ this.showingtitles[i].location}
                            >
                                <p>this.showingtitles[i].title}</p>
                            </InfoWindow>
                            }*/}





                        </div>
                    )
                })
                }
                {
                    <Sidebar className="abcd"
                        sidebar={
                            <div>
                                <h1>Map-Locations</h1>
                                <input type="text" placeholder="enter the location" value={this.state.query}
                                       onChange={(event) => this.updateQuery(event.target.value)}
                                       className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-white"  style={{color:'black'}}/>




                                {

                                    this.showingtitles.map((location,i)=>{
                                        return 	<ul>
                                            <li>

                                                <button class="f6 link dim br3 ph3 pv2 mb2 dib white bg-mid-gray"> { this.showingtitles[i].title}</button>
                                                {


                                                }
                                                {
                                                }

                                            </li>
                                        </ul>

                                    })
                                }

                            </div>

                        }












                        open={this.state.sidebaropen}
                        onSetOpen={this.onclicksidebaropen}
                        styles={{sidebar:{background:'black',color:'white'}}}
                    >
                        <Navbar expand="lg"  bg="dark">
                        <button    onClick={()=>this.onclicksidebaropen(true)} style={{position:'absolute',top:'5px',left:'10px'}} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black">
                            Open Sidebar
                        </button>
                            <Navbar.Brand href="#" id="nav">Map</Navbar.Brand>
                        </Navbar>
                    </Sidebar>





                }

                    {
                        this.showingtitles.map((location,i)=>{
                           return  <Marker onClick={ this.handletoggleopen}
                                    title = { this.showingtitles[i].title }

                                    position = { this.showingtitles[i].location}



                            />
                        })
                    }
                    {this.state.showingInfoWindow &&
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.title}</h1>
                        </div>
                    </InfoWindow>
                    }



                </GoogleMap>
            </div>
        ));


        return (
            <div className="renderingmaps">
                <Googlemapexample containerElement={ <div style={{height: `800px`, width: '100%'}} />}
                                  mapElement={<div style={{height: `100%`}} />}
                />

            </div>
        )
       
    }
}

export default Gmaps;
