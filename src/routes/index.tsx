import { Route } from '@tanstack/react-location';

const routes: Route[] = [
  {
    path: '/',
    element: () =>
      import('../pages/index').then((module) => <module.default />),
  },
  {
    path: '/auth/signup',
    element: () =>
      import('../pages/Auth/SignUp').then((module) => <module.default />),
  },
  {
    path: '/auth/signin',
    element: () =>
      import('../pages/Auth/SignIn').then((module) => <module.default />),
  },

  {
    path: '/d',
    element: () =>
      import('../pages/Dashboard').then((module) => <module.default />),
    children: [
      {
        path: '/',
        element: () =>
          import('../pages/Dashboard/Home').then((module) => (
            <module.default />
          )),
      },
      {
        path: '/quiz',
        element: () =>
          import('../pages/Dashboard/Quiz').then((module) => (
            <module.default />
          )),
        children: [
          {
            path: '/',
            element: () =>
              import('../pages/Dashboard/Quiz/components/ViewQuestion').then(
                (module) => <module.default />
              ),
          },
          {
            path: '/create',
            element: () =>
              import('../pages/Dashboard/Quiz/components/CreateQuestion').then(
                (module) => <module.default />
              ),
          },
        ],
      },
    ],
  },
  {
    path: '/*',
    element: () =>
      import('../pages/NotFound').then((module) => <module.default />),
  },
];

export default routes;
