import React, { Component} from 'react';

class forgotPassword extends Component {
  render() {
  return (
    <div className="container">
  <form action="submit.php" method="post">
    <div className="row">
      <label htmlFor="email">Email: </label>
      <input type="text" name="email" id="email" placeholder="Enter your email" />
    </div>
    <div className="row">
      <input type="submit" className="btn" defaultValue="Send an account recovery link" />
    </div>
    <p className="text-center">
      <a href="sign_up.html">
        <span>Back to login</span>
      </a>
    </p>
  </form>
</div>

  );
}
}
export default forgotPassword;