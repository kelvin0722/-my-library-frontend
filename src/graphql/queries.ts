import { gql } from "@apollo/client";

export const Books = gql`
  query Books {
    books {
        id
        title
        author
        coverImage
    }
  }
`