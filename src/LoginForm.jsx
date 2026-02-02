

import { useState } from "react";


export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const loginData = { username, password };
    console.log(loginData);
  };

  const footerLinks = [
    "Meta", "About", "Blog", "Jobs", "Help", "API", "Privacy", "Terms",
    "Locations", "Instagram Lite", "Threads", "Contact uploading and non-users", "Meta Verified"
  ];

  return (
    <div className="page-wrapper">
      <div className="main-container">
        <div className="phone-visuals">
          <img
            src="./images/img.png"
            alt="Instagram App Preview"
          />
        </div>

        <div className="auth-wrapper">
          <div className="card">
            <h1 className="instagram-logo">Instagram</h1>
            <form onSubmit={handleFormSubmit} className="login-form">
              <input
                type="text"
                placeholder="Phone number, username, or email"
                name="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="login-btn">Log in</button>
              <div className="separator">
                <div className="line"></div>
                <div className="or-text">OR</div>
                <div className="line"></div>
              </div>
              <button type="button" className="fb-login-btn">
                <span className="fb-icon">f</span> Log in with Facebook
              </button>
              <a href="#" className="forgot-password">Forgotten your password?</a>
            </form>
          </div>

          <div className="card signup-card">
            <p>Don't have an account? <a href="# " target="blank">Sign up</a></p>
          </div>

          <div className="get-app-section">
            <p>Get the app.</p>
            <div className="app-buttons">

              <div className="google-div">

                <a href="https://play.google.com/store/search?q=instagram&c=apps&hl=en_IN" target="blank"> <img src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-play-app-icon-vector-png-image_12256664.png" alt="Google Play" /></a>
              </div>

              <div className="micro-div">

                <a href="https://apps.microsoft.com/detail/9nblggh5l9xt?hl=en-US&gl=IN" target="blank">
                  <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="Microsoft" />
                </a>
              </div>


            </div>
          </div>
        </div>
      </div>


      <footer className="footer-section">
        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={link} href="#">{link}</a>
          ))}
        </div>
        <div className="footer-copyright">
          <span>English (UK) © 2026 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
};
