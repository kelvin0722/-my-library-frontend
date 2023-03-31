import { ApolloLink, Observable } from '@apollo/client';

const logoutLink = (logoutFunction) => {
  return new ApolloLink((operation, forward) => {
    return new Observable((observer) => {
      let subscription;
      subscription = forward(operation).subscribe({
        next: (result) => {
          observer.next(result);
        },
        error: (error) => {
          if (
            error.graphQLErrors &&
            error.graphQLErrors.some(
              (e) => e.extensions?.code === 'UNAUTHENTICATED'
            )
          ) {
            logoutFunction();
          }
          observer.error(error);
        },
        complete: () => {
          observer.complete();
        },
      });

      return () => {
        if (subscription) subscription.unsubscribe();
      };
    });
  });
};

export default logoutLink;
