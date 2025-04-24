// src/config/github.js
import { Octokit } from '@octokit/rest';

import { Buffer } from 'buffer/';

export const REPO_OWNER = 'jmccumberio';
export const REPO_NAME = 'portfolio';
export const GITHUB_BASE_URL = 'https://api.github.com';

export const getOctokit = (token) => {
  return new Octokit({
    auth: token,
    baseUrl: GITHUB_BASE_URL,
  });
};

export const authConfig = {
  clientId: import.meta.env.VITE_GITHUB_CLIENT_ID,
  redirectUri: import.meta.env.VITE_GITHUB_REDIRECT_URI,
  scope: import.meta.env.VITE_GITHUB_SCOPE,
  authUrl: `https://github.com/login/oauth/authorize`,
};

export const createOAuthUrl = () => {
  const params = new URLSearchParams({
    client_id: authConfig.clientId,
    redirect_uri: authConfig.redirectUri,
    scope: authConfig.scope,
  });
  return `${authConfig.authUrl}?${params.toString()}`;
};

export const getFileContent = async (octokit, path) => {
  try {
    const response = await octokit.rest.repos.getContent({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path,
    });
    
    return {
      content: Buffer.from(response.data.content, 'base64').toString(),
      sha: response.data.sha,
    };
  } catch (error) {
    console.error('Error fetching file content:', error);
    throw error;
  }
};

export const updateFile = async (octokit, path, content, sha) => {
  try {
    await octokit.rest.repos.createOrUpdateFileContents({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path,
      message: `Update ${path}`,
      content: Buffer.from(content).toString('base64'),
      sha,
    });
  } catch (error) {
    console.error('Error updating file:', error);
    throw error;
  }
};