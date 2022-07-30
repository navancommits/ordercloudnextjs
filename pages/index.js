/* eslint-disable react/display-name */
import React, { Component } from 'react'
import fetch from 'node-fetch'

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

export async function getStaticProps() {
  const res = await fetch(
    "https://catfact.ninja/fact"
  );
  const data = await res.json();

  return {
    props: {
      fact: data.fact,
      length: data.length
    },
  };
}