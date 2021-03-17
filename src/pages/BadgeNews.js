import React from 'react';
import '../components/styles/BadgeNews.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';

class BagdeNews extends React.Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img 
                        className="img-fluid" 
                        src={header}
                        alt="Logo"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatarUrl="https://s.gravatar.com/avatar/e86b8756af9728554dafcd1ca9233fe1?s=80"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BagdeNews;