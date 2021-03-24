import React from "react";
import "./styles/BadgeList.css";
import twitterLogo from '../images/twitter-logo.png';
import Gravatar from "./Gravatar";
import { Link } from "react-router-dom";

class BadgesListItem extends React.Component{
  render(){
    return (
      <>
        <Gravatar 
          className="BadgeList__img"
          email={this.props.badge.email}
          alt="Avatar"
        />
        <div className="BadgeList__info">
            <label className="font-weight-bold BadgeList__title">
              {this.props.badge.firstName} {this.props.badge.lastName}
            </label>
            <div className="BadgeList__twitter"> 
              <img src={twitterLogo} alt=""/>
              <a href={'https://www.twitter.com/@' + this.props.badge.twitter} target="_blank">@{this.props.badge.twitter}</a>
            </div>
            <label className="BadgeList__job">
                {this.props.badge.jobTitle}
            </label>
        </div>
      </>
    )
  }
}

class BadgesList extends React.Component {
  render() {
    if(this.props.badges.length === 0) {
      return(
        <div>
          <h3 className="text-center">No encontramos ningún badge</h3>
        </div>
      )
    }

    const badgeList = [...this.props.badges].reverse();
    
    return (
      <ul className="list-unstyled">
        {badgeList.map((badge) => {
          return (
            <li key={badge.id}>
              <Link 
                className="BadgeList__container text-reset text-decoration-none" 
                to={`/badges/${badge.id}/edit`} >
                <BadgesListItem badge={badge}/>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
