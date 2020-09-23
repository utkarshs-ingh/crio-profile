import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import { name, githubUrl } from 'data/config';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>{name}</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made by&nbsp;
          <a href="https://smakosh.com/?ref=portfolio-dev" rel="noopener noreferrer" target="_blank">
            Smakosh
          </a>
        </span>
      </Details>
      <Links>
        <a key='0' href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Follow me on GitHub`}>
          <img width="24" src='/icons/github.svg' alt='GitHub' />
        </a>
      </Links>
    </Flex>
  </Wrapper>
);
