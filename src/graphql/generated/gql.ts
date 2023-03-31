import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  EmailAddress: any;
  Upload: any;
};

export type AddBookInput = {
  author: Scalars['String'];
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  genre?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type AddToCollectionInput = {
  bookId: Scalars['Int'];
  status?: InputMaybe<CollectionStatus>;
};

export type AddToCollectionPayload = {
  __typename?: 'AddToCollectionPayload';
  books?: Maybe<Array<Maybe<BookPayload>>>;
  id: Scalars['Int'];
  user?: Maybe<User>;
};

export type AuthInput = {
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String'];
  collectionStatus?: Maybe<CollectionStatus>;
  coverImage?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  rating?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type BookPayload = {
  __typename?: 'BookPayload';
  author?: Maybe<Scalars['String']>;
  collectionStatus?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  rating?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export enum CollectionStatus {
  Read = 'READ',
  Reading = 'READING',
  WantToRead = 'WANT_TO_READ'
}

export enum Genre {
  Fiction = 'FICTION',
  Nonfiction = 'NONFICTION',
  Romance = 'ROMANCE',
  Thriller = 'THRILLER'
}

export type Mutation = {
  __typename?: 'Mutation';
  addBook: BookPayload;
  addToCollection: AddToCollectionPayload;
  login: AuthPayload;
  rateBookInCollection: RatingPayload;
  removeBook: RemoveBookResponse;
  signup: User;
  updateBook: BookPayload;
  uploadFile: UploadFilePayload;
};


export type MutationAddBookArgs = {
  input: AddBookInput;
};


export type MutationAddToCollectionArgs = {
  input: AddToCollectionInput;
};


export type MutationLoginArgs = {
  input: AuthInput;
};


export type MutationRateBookInCollectionArgs = {
  input: RatingInput;
};


export type MutationRemoveBookArgs = {
  id: Scalars['Int'];
};


export type MutationSignupArgs = {
  input: UserInput;
};


export type MutationUpdateBookArgs = {
  input: UpdateBookInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};

export type Query = {
  __typename?: 'Query';
  book: Book;
  books: Array<Book>;
  viewCollection: ViewCollectionPayload;
};


export type QueryBookArgs = {
  id: Scalars['String'];
};

export type RatingInput = {
  bookId: Scalars['Int'];
  rating: Scalars['Int'];
};

export type RatingPayload = {
  __typename?: 'RatingPayload';
  books?: Maybe<Array<Maybe<BookPayload>>>;
  id: Scalars['Int'];
  user?: Maybe<User>;
};

export type RemoveBookResponse = {
  __typename?: 'RemoveBookResponse';
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateBookInput = {
  author: Scalars['String'];
  coverImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  genre?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type UploadFilePayload = {
  __typename?: 'UploadFilePayload';
  url: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  books?: Maybe<Array<Maybe<Book>>>;
  createdAt: Scalars['DateTime'];
  email: Scalars['EmailAddress'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: Maybe<Scalars['String']>;
};

export type UserInput = {
  email: Scalars['EmailAddress'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type ViewCollectionPayload = {
  __typename?: 'ViewCollectionPayload';
  books?: Maybe<Array<Maybe<BookPayload>>>;
  id: Scalars['Int'];
};

export type LoginMutationVariables = Exact<{
  input: AuthInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', id: number, email: any } } };

export type SignUpMutationVariables = Exact<{
  input: UserInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', id: number, email: any } };

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type UploadFileMutation = { __typename?: 'Mutation', uploadFile: { __typename?: 'UploadFilePayload', url: string } };

export type AddBookMutationVariables = Exact<{
  input: AddBookInput;
}>;


export type AddBookMutation = { __typename?: 'Mutation', addBook: { __typename?: 'BookPayload', id: number, title?: string | null, author?: string | null, coverImage?: string | null } };

export type BooksQueryVariables = Exact<{ [key: string]: never; }>;


export type BooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: number, title: string, author: string, coverImage?: string | null }> };


export const LoginDocument = gql`
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
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($input: UserInput!) {
  signup(input: $input) {
    id
    email
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UploadFileDocument = gql`
    mutation UploadFile($file: Upload!) {
  uploadFile(file: $file) {
    url
  }
}
    `;
export type UploadFileMutationFn = Apollo.MutationFunction<UploadFileMutation, UploadFileMutationVariables>;

/**
 * __useUploadFileMutation__
 *
 * To run a mutation, you first call `useUploadFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileMutation, { data, loading, error }] = useUploadFileMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadFileMutation(baseOptions?: Apollo.MutationHookOptions<UploadFileMutation, UploadFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadFileMutation, UploadFileMutationVariables>(UploadFileDocument, options);
      }
export type UploadFileMutationHookResult = ReturnType<typeof useUploadFileMutation>;
export type UploadFileMutationResult = Apollo.MutationResult<UploadFileMutation>;
export type UploadFileMutationOptions = Apollo.BaseMutationOptions<UploadFileMutation, UploadFileMutationVariables>;
export const AddBookDocument = gql`
    mutation AddBook($input: AddBookInput!) {
  addBook(input: $input) {
    id
    title
    author
    coverImage
  }
}
    `;
export type AddBookMutationFn = Apollo.MutationFunction<AddBookMutation, AddBookMutationVariables>;

/**
 * __useAddBookMutation__
 *
 * To run a mutation, you first call `useAddBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBookMutation, { data, loading, error }] = useAddBookMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddBookMutation(baseOptions?: Apollo.MutationHookOptions<AddBookMutation, AddBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBookMutation, AddBookMutationVariables>(AddBookDocument, options);
      }
export type AddBookMutationHookResult = ReturnType<typeof useAddBookMutation>;
export type AddBookMutationResult = Apollo.MutationResult<AddBookMutation>;
export type AddBookMutationOptions = Apollo.BaseMutationOptions<AddBookMutation, AddBookMutationVariables>;
export const BooksDocument = gql`
    query Books {
  books {
    id
    title
    author
    coverImage
  }
}
    `;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useBooksQuery(baseOptions?: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
      }
export function useBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
        }
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = Apollo.QueryResult<BooksQuery, BooksQueryVariables>;