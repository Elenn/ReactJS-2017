import React from "react"; 

export default class Article extends React.Component {
  render() {
    const { title } = this.props; 
	
    return (
      <div class="col-md-6">
        <h4>{title}</h4>
		<h4>About</h4>
        <p>
		    Program Management is provided by Insight through its wholly-owned subsidiary, SageSure Insurance Managers, LLC. 
		</p>
		<p>
            SageSure offers insurance programs on behalf of several highly-rated carriers to middle-market and high-value
			homeowners in multiple states.
        </p>
        <p>
            Through the patented proprietary web-based application suite used by SageSure, Insight Policy Cloud, 
			insurance carriers can apply sophisticated, state-of-the-art risk management techniques to the new business and renewal writing process.
		</p>
        <a class="btn btn-default" href="#">More Info</a> 
      </div> 
    );
  }
}
