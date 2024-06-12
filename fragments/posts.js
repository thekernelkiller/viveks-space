export const postsFragment = `
pageInfo {
    hasNextPage
    endCursor
}
postsArray: edges {
    cursor
    post: node {
        title
        slug
        id
        excerpt
        createdAt
        content
    }
}`;

export const postFragment = `
title
id
slug
excerpt
content
createdAt
`;
