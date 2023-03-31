import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($input: AuthInput!) {
    login(input: $input) {
      token
      user {
        id
        email
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp($input: UserInput!) {
    signup(input: $input) {
      id
      email
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook($input: AddBookInput!) {
    addBook(input: $input) {
      id
      title
      author
      coverImage
    }
  }
`;
