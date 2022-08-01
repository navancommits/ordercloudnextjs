/* eslint-disable react/display-name */
import React, { Component } from 'react'
import fetch from 'node-fetch'


export async function getServerSideProps() {
  let res = await fetch(
    "https://catfact.ninja/fact"
  );
  let data = await res.json();

  return {
    props: {
      fact: data.fact,
      length: data.length
    },
  };
}

export default class extends Component {	
  render () {	  
    return (      
      <div>
		  <div>{this.props.fact}</div>		  
		  <div>{this.props.length}</div>
	  </div>
    )
  }
}
