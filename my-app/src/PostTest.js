import React, { Component } from 'react';

class testinput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        };
        this.onChangeId.bind(this);
    }
    testsubmit = () => {
        var datas = {
            firstname: document.getElementById("first_name").value,
            lastname: document.getElementById("last_name").value,
        }

        fetch('/post-test', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datas),
        }).then(function (res) { return res.json(); })
            .then(function (data) { alert(JSON.stringify(data)) })
    }

    testsubmit2 = () => {
        var datas = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
        }

        fetch('auth', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datas),
        }).then(function (res) {
            if (res.redirected) {
                window.location.href = res.url;
            }
        })
    }
    onChangeId = (event) => {
        this.setState({ id: event.target.value })
    }
    render() {
        return (
            <div>
                <input id="username" type="text" name="username" placeholder="Username" autoComplete="username" required />
                <input id="password" type="password" name="password" placeholder="Password" autoComplete="current-password" required />
                <button onClick={this.testsubmit2}>submit</button>
                {/* <input value={this.state.id} onChange={this.onChangeId}></input>
                <button onClick={console.log(this.state.id)}>submit</button>
                <form action="/post-test" method="POST">
                    First Name: <input type="text" name="first_name" id="first_name"/>  <br/>
                        Last Name: <input type="text" name="last_name" id="last_name"/>
                            <input type="submit" value="Submit"/>  
                </form>
                <p>   
                    First Name: <input type="text" name="first_name" id="first_name"/>  <br/>
                    Last Name: <input type="text" name="last_name" id="last_name"/> <br/>
                    <button onClick={this.testsubmit}>submit</button>
                </p> */}
            </div>
        );
    }
}

export default testinput;