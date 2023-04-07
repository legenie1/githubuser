import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaGlobe, FaTwitter } from "react-icons/fa";

const Card = ({ count, label }) => {
  return (
    <div className="card">
      <span className="count">{count ? count : 0}</span>
      <span className="label">{label ? label : ""}</span>
    </div>
  );
};

const SocialCard = ({ website, websiteUrl, link, icon }) => {
  return (
    <Link className="card">
      <div className="icon">{icon}</div>
      {website ? (
        <Link
          to={websiteUrl ? websiteUrl : null}
          target="_blank"
          onClick={() => window.open(`https://${websiteUrl}`, "_blank")}
        >
          {website}
        </Link>
      ) : null}
      {link ? (
        <Link
          to={`https://twitter.com/${link}`}
          onClick={() => window.open(`https://twitter.com/${link}`)}
        >
          {link ? "@" + link : "Website"}
        </Link>
      ) : null}
    </Link>
  );
};

function Landingpage() {
  const [exist, setExist] = useState(false);
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [company, setCompany] = useState("");
  const [repos, setRepos] = useState(47);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [bio, setBio] = useState("");
  const [githuburl, setGithuburl] = useState("");
  const [profile, setProfile] = useState("");
  const [website, setWebsite] = useState("");
  const [twitter, setTwitter] = useState("");

  useEffect(() => {
    getProfile("legenie1");
  }, []);

  const getProfile = async (username) => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.data.login) {
          console.log(response.data);
          setExist(true);
          setData(response.data);
          setUsername(response.data.login);
          setName(response.data.name);
          setRepos(response.data.public_repos);
          setBio(response.data.bio);
          setCompany(response.data.company);
          setFollowers(response.data.followers);
          setFollowing(response.data.following);
          setGithuburl(response.data.html_url);
          setProfile(response.data.avatar_url);
          setTwitter(response.data.twitter_username);
          setWebsite(response.data.blog);
        } else {
          alert("Hey");
          setExist(false);
        }
      })
      .catch((error) => {
        setExist(false);
        console.log(error.response.data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getProfile(username);
  };

  return (
    <div className="body">
      <div className="container">
        <h2>
          Find a <span className="gradient">GitHub</span> profil
        </h2>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />
          <button type="submit">Search</button>
        </form>

        {exist ? (
          <div className="content">
            <div className="profile">
              <div className="avatar">
                <img src={profile ? profile : ""} alt="" width="100%" />
              </div>
              <div className="info">
                <span className="name">{name ? name : ""}</span>
                <Link to={githuburl ? githuburl : ""} className="username">
                  @{username ? username : ""}
                </Link>
                <span className="company">
                  <i>{company ? company : ""}</i>
                </span>
              </div>
            </div>

            <div className="description">{bio ? bio : ""}</div>

            <div className="statistics">
              <Card count={repos ? repos : 0} label="Repos" />
              <Card count={followers ? followers : 0} label="Followers" />
              <Card count={following ? following : 0} label="Following" />
            </div>

            {website || twitter ? (
              <div className="sociallinks">
                {website ? (
                  <SocialCard
                    icon={<FaGlobe color="white" />}
                    website="Website"
                    websiteUrl={website}
                  />
                ) : null}

                {twitter ? (
                  <SocialCard
                    icon={<FaTwitter color="white" />}
                    link={twitter}
                  />
                ) : null}
              </div>
            ) : null}
          </div>
        ) : (
          <div className="notexist">Sorry This user does not exist</div>
        )}

        <div className="submit">
          <button
            onClick={() =>
              window.open("https://www.buymeacoffee.com/sergeomoffo2", "_blank")
            }
          >
            Buy me a coffee
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
