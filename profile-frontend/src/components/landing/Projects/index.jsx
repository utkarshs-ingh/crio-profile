
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card } from "components/common";
import Star from "components/common/Icons/Star";
import Fork from "components/common/Icons/Fork";
import axios from "axios";
import { Wrapper, Grid, Item, Content, Stats } from "./styles";

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const [repos, setRepos] = useState([]);
  // console.log(process.env.GITHUB_TOKEN);
  useEffect(() => {
    axios
      .get("https://api.github.com/user/repos", {
        params: {
          visibility: "public",
          per_page: 100,
          affiliation: "owner,collaborator",
        },
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      })
      .then((response) => response.data)
      .then((repoData) => {
        repoData.sort((a, b) =>
          a.stargazers_count < b.stargazers_count ? 1 : -1
        );
        console.log(repoData);
        repoData = repoData.slice(0, 8);
        setRepos(repoData);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Wrapper as={Container} id="projects">
      {repos.length > 0 && <h2>Projects</h2>}
      <Grid>
        {repos.map((node) => (
          <Item
            key={node.id}
            as="a"
            href={node.svn_url}
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            <Card theme={theme}>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === "light" ? "#000" : "#fff"} />
                  <span>{node.stargazers_count}</span>
                </div>
                <div>
                  <Fork color={theme === "light" ? "#000" : "#fff"} />
                  <span>{node.forks_count}</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
