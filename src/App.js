import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import RepoPage from './RepoPage';

const App = () => {
  const [repos, setRepos] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const dummyData = [
      {
        name: "OpenWISP",
        description: "The Hackable Network Management System",
        category: "End user applications",
        technologies: ["python", "javascript", "django", "lua", "openwrt"],
        topics: ["networking", "network management system", "vpn", "sdn"],
        link: "https://api.github.com/repos/openwisp/ansible-openwisp2/issues"
      },
      {
        name: "Stellar Group",
        description: "Shaping a Scalable Future",
        category: "Science and medicine",
        technologies: ["C++", "hpc"],
        topics: ["library", "optimization", "parallel algorithms", "hpx", "application"],
        link: "https://api.github.com/repos/tardis-sn/carsus/issues"
      },
      {
        name: "TARDIS RT Collaboration",
        description: "Exploring supernovae made easy",
        category: "Science and medicine",
        technologies: ["python", "numba", "numpy", "jupyter", "pandas"],
        topics: ["visualization", "big data", "simulation", "astrophysics"],
        link: "https://api.github.com/repos/stellar-group/BlazeIterative/issues"
      },
    ];
    setRepos(dummyData);
  }, []);

  const handleClick = (repoIndex, link) => {
    navigate(`/repo/${repoIndex}`, { state: { link } }); // Use navigate to go to the RepoPage with state
  };

  return (
    <>
      <header className="p-6 bg-blue-600 text-white text-center shadow-lg">
        <h1 className="text-3xl font-extrabold tracking-wide">GSOC Issue Tracker</h1>
      </header>
      <main className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">{repo.name}</h2>
            <p className="text-gray-700 mb-4">{repo.description}</p>
            <div className="mb-4">
              <span className="block text-sm font-semibold text-gray-800">Category:</span>
              <span className="text-gray-600">{repo.category}</span>
            </div>
            <div className="mb-4">
              <span className="block text-sm font-semibold text-gray-800">Technologies:</span>
              <div className="flex flex-wrap mt-2">
                {repo.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-white bg-blue-500 rounded-full px-3 py-1 m-1 font-semibold shadow-md transition duration-200 transform hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <span className="block text-sm font-semibold text-gray-800">Topics:</span>
              <div className="flex flex-wrap mt-2">
                {repo.topics.map((topic, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-white bg-yellow-500 rounded-full px-3 py-1 m-1 font-semibold shadow-md transition duration-200 transform hover:scale-105"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => handleClick(index, repo.link)} // Call handleClick on button click
              className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              View Details
            </button>
          </div>
        ))}
      </main>
      <Routes>
        <Route path="/repo/:repoId" element={<RepoPage />} />
      </Routes>
    </>
  );
};

export default App;