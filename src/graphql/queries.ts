import { gql } from '@apollo/client';

export const Books = gql`
  query Books {
    books {
      id
      title
      author
      coverImage
    }
  }
`;

export const SearchBook = gql`
  query SearchBook($term: String!) {
    searchBook(term: $term) {
      id
      title
      author
      coverImage
    }
  }
`;
