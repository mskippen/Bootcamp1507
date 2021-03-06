import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
// TODO: Import the IssueList component here

let container = null;

beforeEach(() => {
  // Setup a DOM element as the target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Cleanup on exiting to prevent this test from altering the results of future tests
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Renders a list of issues', () => {
  const issues = [
    {
      url: 'https://api.github.com/repos/microsoft/vscode/issues/68',
      html_url: 'https://github.com/microsoft/vscode/issues/68',
      id: 117635943,
      node_id: 'MDU6SXNzdWUxMTc2MzU5NDM=',
      number: 68,
      title: 'Git: Support git history in VSCode',
    },
    {
      url: 'https://api.github.com/repos/microsoft/vscode/issues/127',
      html_url: 'https://github.com/microsoft/vscode/issues/127',
      id: 117711073,
      node_id: 'MDU6SXNzdWUxMTc3MTEwNzM=',
      number: 127,
      title: 'Provide option to opt out of line ending normalisation for files',
    },
  ];

  it('renders', () => {
    act(() => {
      // TODO: Add code to check whether or not the component renders properly
      render();
    });
    expect(container.textContent).toContain('Git: Support git history in VSCode');
  });

  it('matches snapshot', () => {
    act(() => {
      // TODO: Add code to check whether or not the rendered component matches the snapshot
      render();
    });
    expect(container.innerHTML).toMatchSnapshot();
  });
});
