import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgeDetails.css";
import ConfLogo from "../images/platziconf-logo.svg";
import PageLoading from "../components/PageLoading";
import Badge from "../components/Badge";
import Error from "../pages/Error";
import DeleteBadgeModal from "../components/DeleteBadgeModal";
import api from "../api";

class BadgeDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  hadleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  };

  hadleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  };

  handleDeleteBadge = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      await api.badges.remove(this.props.match.params.badgeId)
      this.setState({ loading: false, error: null });
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <Error />;
    }

    const badge = this.state.data;

    return (
      <>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={ConfLogo} alt="Logo Conferencia" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {badge.firstName} {badge.firstName}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                twitter={badge.twitter}
                jobTitle={badge.jobTitle}
                email={badge.email}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link
                    className="btn btn-primary mb-4"
                    to={`/badges/${badge.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>
                <div>
                  <button
                    onClick={this.hadleOpenModal}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <DeleteBadgeModal
                    isOpen={this.state.modalIsOpen}
                    onClose={this.hadleCloseModal}
                    onDeleteBadge={this.handleDeleteBadge}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeDetails;
