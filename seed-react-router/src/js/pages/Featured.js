import React from "react";

import Article from "../components/Article"; 
import ArticleAbout from "../components/ArticleAbout";
import ArticleAboutImg from "../components/ArticleAboutImg";
import ArticleHighlights from "../components/ArticleHighlights";
 

export default class Featured extends React.Component {
  render() {
    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
    ].map((title, i) => <Article key={i} title={title}/> );

    const adText = [
      "Ad spot #1",
      "Ad spot #2",
      "Ad spot #3",
      "Ad spot #4",
      "Ad spot #5",
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
    console.log("featured");
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>
		<ArticleAbout aa='bb' />
		<ArticleAboutImg aa='bb' />
		<ArticleHighlights aa='bb' />
		
		<ArticleAbout aa='bb' />
		<ArticleAbout aa='bb' />
		<ArticleAbout aa='bb' />
		<ArticleAbout aa='bb' />
		<ArticleAbout aa='bb' /> 

        <div class="row">{Articles}</div>
      </div>
    );
  }
}
