import React from "react";

export default class NotificationService extends React.Component {
    state = {
      notifications: [],
      loading: true,
      error: false,
      error_msg: null
    }
  
    componentDidMount () {
      fetch('https://9wu903ropa.execute-api.us-east-2.amazonaws.com/users/c5f145bc-7705-4204-a0b5-c4dc68266e6e/notifications')
        .then(response => response.json())
        .then(response => this.setState({ 
          notifications: response.notifications,
          loading: false
        }))
        .catch(error => this.setState({ 
          loading: false, 
          error: true,
          error_msg: error
        }));
    }
  
    render () {
      const { notifications, loading, error, error_msg } = this.state;
      if (loading){
          return <div>Loading...</div>
      }
      if (error){
          return <div>{error_msg}</div>
      }
      return (
        <div>
            <table id="notifications">
                <thead>
                    <tr>
                        <th>Date Posted</th>
                        <th>Funder Name</th>
                        <th>Max Opportunity Amount</th>
                        <th>Target Industries</th>
                    </tr>
                </thead>
                <tbody>
                {
                notifications.map(note => {
                    return <tr key={note.id}>
                        <td>{new Date(note.timestamp).toLocaleDateString('en-us')}</td>
                        <td>{note.funder.name}</td>
                        <td>{note.currency}: {note.max_opportunity}</td>
                        <td>{note.funder.industries.join(", ")}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
    }
  };