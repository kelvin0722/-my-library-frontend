import { useRouter } from 'next/router';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';

interface Props {
  [key: string]: any;
}

export default function withAuth<T extends Props>(
  WrappedComponent: React.ComponentType<T>
) {
  return function WithAuth(props: T) {
    const router = useRouter();
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    const decoded: any = token ? jwt_decode(token) : null;

    useEffect(() => {
      if (!token) {
        router.push('/login');
      } else if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        router.push('/login');
      }
    }, [router, token, decoded]);

    return <WrappedComponent {...props} />;
  };
}
