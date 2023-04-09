export const environment = {
  production: false,
  rest_api: {
    login: `http://188.166.245.130:1323/api/v1/backoffice/auth/login`,
    check: `http://188.166.245.130:1323/api/v1/backoffice/token/validation/su`,
    register: `http://188.166.245.130:1323/api/v1/backoffice/auth/register`,
    news: {
      get_all: `http://188.166.245.130:1323/api/v1/backoffice/news/get_all`,
      get: `http://188.166.245.130:1323/api/v1/backoffice/news/get/`,
      create: `http://188.166.245.130:1323/api/v1/backoffice/news/create`,
      update: `http://188.166.245.130:1323/api/v1/backoffice/news/update/`,
      delete: `http://188.166.245.130:1323/api/v1/backoffice/news/delete/`,
    },
    activity: {
      get_all: `http://188.166.245.130:1323/api/v1/backoffice/activity/get_all`,
      get: `http://188.166.245.130:1323/api/v1/backoffice/activity/get/`,
      create: `http://188.166.245.130:1323/api/v1/backoffice/activity/create`,
      update: `http://188.166.245.130:1323/api/v1/backoffice/activity/update/`,
      delete: `http://188.166.245.130:1323/api/v1/backoffice/activity/delete/`,
      delete_image: `http://188.166.245.130:1323/api/v1/backoffice/activity/delete_image/`,
    },
    user: {
      get_all: `http://188.166.245.130:1323/api/v1/backoffice/superuser/get_all`,
      get: `http://188.166.245.130:1323/api/v1/backoffice/superuser/get/`,
      create: `http://188.166.245.130:1323/api/v1/backoffice/auth/register`,
      update: `http://188.166.245.130:1323/api/v1/backoffice/superuser/update/`,
      delete: `http://188.166.245.130:1323/api/v1/backoffice/superuser/delete/`,
      change_avatar: 'http://188.166.245.130:1323/api/v1/backoffice/superuser/change/avatar/',

    },
    keycloak: {
      get_all: `http://188.166.245.130:1323/api/v1/backoffice/users/get_all`,
      get: `http://188.166.245.130:1323/api/v1/backoffice/users/get/`,
      create: `http://188.166.245.130:1323/api/v1/backoffice/auth_users/register`,
      delete: `http://188.166.245.130:1323/api/v1/backoffice/users/delete`,
      update: `http://188.166.245.130:1323/api/v1/backoffice/users/update/`,
      change_avatar: 'http://188.166.245.130:1323/api/v1/backoffice/superuser/change/avatar/users/',
      banned: "http://188.166.245.130:1323/api/v1/backoffice/superuser/user_banned/",
      unbanned: "http://188.166.245.130:1323/api/v1/backoffice/superuser/user_unbanned/",
    },
    dashboard : "http://188.166.245.130:1323/api/v1/backoffice/dashboard",
    get_all : {
      user : "http://188.166.245.130:1323/api/v1/backoffice/users/get/all",
      superuser: "http://188.166.245.130:1323/api/v1/backoffice/superuser/get/all",
      activity: "http://188.166.245.130:1323/api/v1/backoffice/activity/get/all",
      news: "http://188.166.245.130:1323/api/v1/backoffice/news/get/all"
    }
  }
};

// export const environment = {
//   production: false,
//   rest_api: {
//     login: `https://dev.apigw.pencarian.me/api/v1/backoffice/auth/login`,
//     register: `https://dev.apigw.pencarian.me/api/v1/backoffice/auth/register`,
//     check: `http://188.166.245.130:1323/api/v1/backoffice/token/validation/su`,

//     news: {
//       get_all: `https://dev.apigw.pencarian.me/api/v1/backoffice/news/get_all`,
//       get: `https://dev.apigw.pencarian.me/api/v1/backoffice/news/get/`,
//       create: `https://dev.apigw.pencarian.me/api/v1/backoffice/news/create`,
//       update: `https://dev.apigw.pencarian.me/api/v1/backoffice/news/update/`,
//       delete: `https://dev.apigw.pencarian.me/api/v1/backoffice/news/delete/`,
//     },
//     activity: {
//       get_all: `https://dev.apigw.pencarian.me/api/v1/backoffice/activity/get_all`,
//       get: `https://dev.apigw.pencarian.me/api/v1/backoffice/activity/get/`,
//       create: `https://dev.apigw.pencarian.me/api/v1/backoffice/activity/create`,
//       update: `https://dev.apigw.pencarian.me/api/v1/backoffice/activity/update/`,
//       delete: `https://dev.apigw.pencarian.me/api/v1/backoffice/activity/delete/`,
//       delete_image: `https://dev.apigw.pencarian.me/api/v1/backoffice/activity/delete_image/`,
//     },
//     user: {
//       get_all: `https://dev.apigw.pencarian.me/api/v1/backoffice/superuser/get_all`,
//       get: `https://dev.apigw.pencarian.me/api/v1/backoffice/superuser/get`,
//       create: `https://dev.apigw.pencarian.me/api/v1/backoffice/auth/register`,
//       update: `https://dev.apigw.pencarian.me/api/v1/backoffice/superuser/update/`,
//       delete: `https://dev.apigw.pencarian.me/api/v1/backoffice/superuser/delete/`,
//       operator: `https://dev.apigw.pencarian.me/api/v1/backoffice/superuser/get_user_roles/2`,
//       admin: `api/v1/backoffice/superuser/get_user_roles/1`,
//     },
//     keycloak: {
//       get_all: `https://dev.apigw.pencarian.me/api/v1/backoffice/users/get_all`,
//       get: `https://dev.apigw.pencarian.me/api/v1/backoffice/user/get`,
//       create: `https://dev.apigw.pencarian.me/api/v1/backoffice/auth_users/register`,
//       delete: `https://dev.apigw.pencarian.me/api/v1/backoffice/users/delete`,
//       update: `https://dev.apigw.pencarian.me/api/v1/backoffice/users/update/`,
//       change_avatar: '/api/v1/backoffice/users/change_avatar/'
//     },
//   }
// };
