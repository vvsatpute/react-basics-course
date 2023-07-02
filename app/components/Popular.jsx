import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchPopularRepositories } from "../utils/api";
import Table from "./Table";

const Languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

const LanguageNav = ({ selectectLang, handleLangChange }) => {
  return (
    <select
      selected={selectectLang}
      onChange={(e) => handleLangChange(e.target.value)}
    >
      {Languages.map((lang, index) => {
        return (
          <option key={index} value={lang}>
            {lang}
          </option>
        );
      })}
    </select>
  );
};

LanguageNav.propTypes = {
  selectectLang: PropTypes.string.isRequired,
  handleLangChange: PropTypes.func.isRequired,
};

const Popular = () => {
  const [language, setLanguage] = useState("All");
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // load the repositories
    fetchPopularRepositories(language)
      .then((res) => {
        setRepos(res);
      })
      .catch((error) => {
        setError("There is problem in fetching repositories.");
      });
  });

  return (
    <main className="stack main-stack animate-in">
      <div className="split">
        <h1>Popular</h1>
        <LanguageNav selectectLang={language} handleLangChange={setLanguage} />
      </div>
      {error && <p className="text-center error">{error}</p>}
      {repos && <Table repos={repos}/>}
    </main>
  );
};

export default Popular;
