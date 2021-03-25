import React from "react";
import "./styles/BadgeList.css";
import twitterLogo from "../images/twitter-logo.png";
import Gravatar from "./Gravatar";
import { Link } from "react-router-dom";

class BadgesListItem extends React.Component {
  render() {
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
            <img src={twitterLogo} alt="" />
            <a
              href={"https://www.twitter.com/@" + this.props.badge.twitter}
              target="_blank"
            >
              @{this.props.badge.twitter}
            </a>
          </div>
          <label className="BadgeList__job">{this.props.badge.jobTitle}</label>
        </div>
      </>
    );
  }
}

//custom hook
function useSearchBadges(badges){
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges)

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result)
  }, [badges, query]);

  return {query, setQuery, filteredBadges}
}

function BadgesList(props) {
  const badges = props.badges;
  const {query, setQuery, filteredBadges} = useSearchBadges(badges);
  
  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3 className="text-center">No encontramos ningún badge</h3>
      </div>
    );
  }

  const badgeList = [...filteredBadges].reverse();

  return (
    <div>
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {badgeList.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                className="BadgeList__container text-reset text-decoration-none"
                to={`/badges/${badge.id}/`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
