import React from 'react';

class Settings extends React.Component {
    render() {
        return (
            <div>
                <h1>Settings page</h1>
                <form>
                    <p>
                        First name: <input type="text"/>
                    </p>
                    <p>
                        Last name: <input type="text"/>
                    </p>
                    <p>
                        Email: <input type="text"/>
                    </p>
                    <p>
                        Password: <input type="password"/>
                    </p>
                </form>
            </div>
        )
    }
}

export default Settings;
