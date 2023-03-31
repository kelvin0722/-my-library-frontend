import { gql } from '@apollo/client';

export const GET_BOOK = gql`
  query Book($id: Int!) {
    book(id: $id) {
      id
      title
      author
      coverImage
    }
  }
`;

export const GET_BOOKS = gql`
  query Books {
    books {
      id
      title
      author
      coverImage
    }
  }
`;

export const SEARCH_BOOK = gql`
  query SearchBook($term: String!) {
    searchBook(term: $term) {
      id
      title
      author
      coverImage
    }
  }
`;
