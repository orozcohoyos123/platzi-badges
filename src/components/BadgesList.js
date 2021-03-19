import React from "react";
import "./styles/BadgeList.css";
import twitterLogo from '../images/twitter-logo.png';

class BadgesList extends React.Component {
  render() {
    if(this.props.badges.length === 0) {
      return(
        <div>
          <h3 className="text-center">No encontramos ningún badge</h3>
        </div>
      )
    }
    
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li className="BadgeList__container" key={badge.id}>
              <img
                className="BadgeList__img" 
                src={badge.avatarUrl} 
                alt="" 
              />
              <div className="BadgeList__info">
                  <label className="font-weight-bold BadgeList__title">
                    {badge.firstName} {badge.lastName}
                  </label>
                  <div className="BadgeList__twitter"> 
                    <img src={twitterLogo} alt=""/>
                    <a href={'https://www.twitter.com/@' + badge.twitter} target="_blank">@{badge.twitter}</a>
                  </div>
                  <label className="BadgeList__job">
                      {badge.jobTitle}
                  </label>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
