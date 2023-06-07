export const environment = {
  production: false,
  rest_api: {
    login: "http://dev.apigw.pencarian.me/api/v1/backoffice/auth/login",
    check: "http://dev.apigw.pencarian.me/api/v1/backoffice/token/validation/su",
    register: "http://dev.apigw.pencarian.me/api/v1/backoffice/auth/register",
    news: {
      get_no_limit: "http://dev.apigw.pencarian.me/api/v1/backoffice/news/get/all",
      get_all: "http://dev.apigw.pencarian.me/api/v1/backoffice/news/get_all",
      get: "http://dev.apigw.pencarian.me/api/v1/backoffice/news/get/one/",
      create: "http://dev.apigw.pencarian.me/api/v1/backoffice/news/create",
      update: "http://dev.apigw.pencarian.me/api/v1/backoffice/news/update/",
      delete: "http://dev.apigw.pencarian.me/api/v1/backoffice/news/delete/",
    },
    activity: {
      get_no_limit: "http://dev.apigw.pencarian.me/api/v1/backoffice/activity/get/all",
      get_all: "http://dev.apigw.pencarian.me/api/v1/backoffice/activity/get_all",
      get: "http://dev.apigw.pencarian.me/api/v1/backoffice/activity/get/one/",
      create: "http://dev.apigw.pencarian.me/api/v1/backoffice/activity/create",
      update: "http://dev.apigw.pencarian.me/api/v1/backoffice/activity/update/",
      delete: "http://dev.apigw.pencarian.me/api/v1/backoffice/activity/delete/",
      delete_image: "http://dev.apigw.pencarian.me/api/v1/backoffice/activity/delete_image/",
    },
    user: {
      get_no_limit: "http://dev.apigw.pencarian.me/api/v1/backoffice/superuser/get/all",
      get_all: "http://dev.apigw.pencarian.me/api/v1/backoffice/superuser/get_all",
      get: "http://dev.apigw.pencarian.me/api/v1/backoffice/superuser/get/one/",
      create: "http://dev.apigw.pencarian.me/api/v1/backoffice/auth/register",
      update: "http://dev.apigw.pencarian.me/api/v1/backoffice/superuser/update/",
      delete: "http://dev.apigw.pencarian.me/api/v1/backoffice/superuser/delete/",
      change_avatar: 'http://dev.apigw.pencarian.me/api/v1/backoffice/superuser/change/avatar/',

    },
    keycloak: {
      get_no_limit: "http://dev.apigw.pencarian.me/api/v1/backoffice/users/get/all",
      get_all: "http://dev.apigw.pencarian.me/api/v1/backoffice/users/get_all",
      get: "http://dev.apigw.pencarian.me/api/v1/backoffice/users/get/",
      create: "http://dev.apigw.pencarian.me/api/v1/backoffice/auth_users/register",
      delete: "http://dev.apigw.pencarian.me/api/v1/backoffice/users/delete",
      update: "http://dev.apigw.pencarian.me/api/v1/backoffice/users/update/",
      change_avatar: 'http://dev.apigw.pencarian.me/api/v1/backoffice/superuser/change/avatar/users/',
      banned: "http://dev.apigw.pencarian.me/api/v1/backoffice/superuser/user_banned/",
      unbanned: "http://dev.apigw.pencarian.me/api/v1/backoffice/superuser/user_unbanned/",
    },
    dashboard : "http://dev.apigw.pencarian.me/api/v1/backoffice/dashboard",
    get_all : {
      user : "http://dev.apigw.pencarian.me/api/v1/backoffice/users/get/all",
      superuser: "http://dev.apigw.pencarian.me/api/v1/backoffice/superuser/get/all",
      activity: "http://dev.apigw.pencarian.me/api/v1/backoffice/activity/get/all",
      news: "http://dev.apigw.pencarian.me/api/v1/backoffice/news/get/all"
    },
    sigap_lapor: {
      jumlah_laporan: "https://sigaplapor.bawaslu.go.id/api/grafik/jml_laporan/2",
      jumlah_pelanggaran: "https://sigaplapor.bawaslu.go.id/api/grafik/jml_pelanggaran/2",
      jumlah_register: "https://sigaplapor.bawaslu.go.id/api/grafik/jml_register/2",
      jumlah_kode_etik: "https://sigaplapor.bawaslu.go.id/api/grafik/jml_kodeetik/2",
      jumlah_administrasi: "https://sigaplapor.bawaslu.go.id/api/grafik/jml_administrasi/2",
      jumlah_pidana: "https://sigaplapor.bawaslu.go.id/api/grafik/jml_pidana/2",
      jumlah_asn: "https://sigaplapor.bawaslu.go.id/api/grafik/jml_asn/2",
      jumlah_uulain: "https://sigaplapor.bawaslu.go.id/api/grafik/jml_uulain/2",
    },
    form_c: {
      dashboard: "https://formpencegahan.bawaslu.go.id/api/rekap",
    }
  }
};
