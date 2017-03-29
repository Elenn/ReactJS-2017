import React from "react";

export default class Article extends React.Component {
  render() {
    const { title } = this.props; 
	
    return (
      <div class="col-md-6">
        <h4>{title}</h4>
		<h4>Highlights</h4>
        <p> 
            In addition to complete end-to-end policy processing, the Insight Policy Cloud platform enables insurance carriers to:
        </p>
		<ul>
		    <li>Integrate underwriting, financial and operational risk</li>
			<li>Score and manage a portfolio of property catastrophe business in real-time</li>
			<li>Calculate profit requirements, ROE, capital consumption, reinsurance utilization, rate adequacy and other metrics</li>
			<li>Improve data integrity</li>  
		</ul> 
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}
