import React from "react";
import "./styles/Badges.css";
import "./styles/SkeletonBadges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import Error from "../pages/Error";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import api from "../api";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.error) {
      return (
        <div>
          <Error />
        </div>
      );
    }

    return (
      <>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} alt="" className="Badges_conf-logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          {this.state.loading ? (
            <>
              <div className="Badges__buttons">
                <span className="btn btn-primary">New Badge</span>
              </div>
              <ul>
                {[1, 1, 1, 1].map((number) => (
                  <li className="skeleton-item">
                    <div>
                      <div className="skeleton-img" />
                    </div>
                    <div className="skeleton-info">
                      <p className="skeleton-name" />
                      <p className="skeleton-email" />
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <div className="Badges__buttons">
                <Link to="/badges/new" className="btn btn-primary">
                  New Badge
                </Link>
              </div>
              <div className="Badges__list">
                <div className="Badges__container">
                  <BadgesList badges={this.state.data} />
                </div>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Badges;
