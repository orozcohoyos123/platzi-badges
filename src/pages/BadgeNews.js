import React from 'react';
import '../components/styles/BadgeNews.css';
import ConfLogo from '../images/platziconf-logo.svg';
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
            <>
                <div className="BadgeNew__hero">
                    <div className="BadgeNew__logoContainer">
                        <img 
                            className="img-fluid" 
                            src={ConfLogo}
                            alt="Logo"
                        />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName|| 'LAST_NAME'}
                                twitter={this.state.form.twitter|| 'twitter'}
                                jobTitle={this.state.form.jobTitle|| 'JOB_TITLE'}
                                email={this.state.form.email|| '@email'}
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

            </>
        )
    }
}

export default BagdeNews;