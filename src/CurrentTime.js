import React from 'react';


class CurrentTime extends React.Component {
    state={
      curTime : new Date().toLocaleString(),
    }
    render(){
      return (
        <div className="CurrentTime">
          <p>Current Time : {this.state.curTime}</p>
        </div>
      );
    }
  }

  export default CurrentTime;