const fs = require("fs");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;

const ERR = {
  noUserName:
    "GitHub username not found. Please set GITHUB_USERNAME in .env file",
  requestFailed:
    "GitHub API request failed. Please check your GitHub token and try again."
};

if (USE_GITHUB_DATA === "true") {
  if (GITHUB_USERNAME === undefined) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching GitHub profile data for ${GITHUB_USERNAME}...`);

  const query_pr = {
    query: `
      query {
        user(login: "${GITHUB_USERNAME}") {
          name
          bio
          avatarUrl
          location
          pinnedItems(first: 6, types: [REPOSITORY]) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  description
                  forkCount
                  stargazers {
                    totalCount
                  }
                  url
                  id
                  diskUsage
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `
  };

  const query_option = {
    method: "POST",
    headers: {
      Authorization: `bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(query_pr)
  };

  const getDataFromAPI = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/graphql",
        query_option
      );
      if (!response.ok) {
        throw new Error(ERR.requestFailed);
      }
      const data = await response.json();

      fs.writeFileSync(
        "./public/profile.json",
        JSON.stringify(data, null, 2)
      );
      console.log("GitHub profile data successfully fetched and saved!");
    } catch (error) {
      console.error("Error fetching GitHub data:", error.message);
      // Create empty profile to prevent build failures
      fs.writeFileSync(
        "./public/profile.json",
        JSON.stringify({ data: { user: null } }, null, 2)
      );
    }
  };

  getDataFromAPI();
} else {
  // Create placeholder file when GitHub data is disabled
  fs.writeFileSync(
    "./public/profile.json",
    JSON.stringify({ data: { user: null } }, null, 2)
  );
  console.log("GitHub data fetch disabled. Using placeholder.");
}
