import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (<div>

            <section className="jumbotron">
                <h2><img src="https://cdn.auth0.com/website/styleguide/getting-started-icon.svg" alt="Jumbotron image" /></h2>
                <h1>Jumbotron</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quis risus eget urna mollis consectetur adipiscing elit.</p>
                <a className="btn btn-success btn-lg" href="/tickets">View your tickets</a>
            </section>
        </div>)
    }
}

export default Home