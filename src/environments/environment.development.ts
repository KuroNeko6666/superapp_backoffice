export const environment = {
  production: false,
  rest_api: {
    login: "http://localhost:8000/api/v1/backoffice/auth/login",
    check: "http://localhost:8000/api/v1/backoffice/token/validation/su",
    register: "http://localhost:8000/api/v1/backoffice/auth/register",
    news: {
      get_no_limit: "http://localhost:8000/api/v1/backoffice/news/get/all",
      get_all: "http://localhost:8000/api/v1/backoffice/news/get_all",
      get: "http://localhost:8000/api/v1/backoffice/news/get/one/",
      create: "http://localhost:8000/api/v1/backoffice/news/create",
      update: "http://localhost:8000/api/v1/backoffice/news/update/",
      delete: "http://localhost:8000/api/v1/backoffice/news/delete/",
    },
    activity: {
      get_no_limit: "http://localhost:8000/api/v1/backoffice/activity/get/all",
      get_all: "http://localhost:8000/api/v1/backoffice/activity/get_all",
      get: "http://localhost:8000/api/v1/backoffice/activity/get/one/",
      create: "http://localhost:8000/api/v1/backoffice/activity/create",
      update: "http://localhost:8000/api/v1/backoffice/activity/update/",
      delete: "http://localhost:8000/api/v1/backoffice/activity/delete/",
      delete_image: "http://localhost:8000/api/v1/backoffice/activity/delete_image/",
    },
    user: {
      get_no_limit: "http://localhost:8000/api/v1/backoffice/superuser/get/all",
      get_all: "http://localhost:8000/api/v1/backoffice/superuser/get_all",
      get: "http://localhost:8000/api/v1/backoffice/superuser/get/one/",
      create: "http://localhost:8000/api/v1/backoffice/auth/register",
      update: "http://localhost:8000/api/v1/backoffice/superuser/update/",
      delete: "http://localhost:8000/api/v1/backoffice/superuser/delete/",
      change_avatar: 'http://localhost:8000/api/v1/backoffice/superuser/change/avatar/',

    },
    keycloak: {
      get_no_limit: "http://localhost:8000/api/v1/backoffice/users/get/all",
      get_all: "http://localhost:8000/api/v1/backoffice/users/get_all",
      get: "http://localhost:8000/api/v1/backoffice/users/get/",
      create: "http://localhost:8000/api/v1/backoffice/auth_users/register",
      delete: "http://localhost:8000/api/v1/backoffice/users/delete",
      update: "http://localhost:8000/api/v1/backoffice/users/update/",
      change_avatar: 'http://localhost:8000/api/v1/backoffice/superuser/change/avatar/users/',
      banned: "http://localhost:8000/api/v1/backoffice/superuser/user_banned/",
      unbanned: "http://localhost:8000/api/v1/backoffice/superuser/user_unbanned/",
    },
    dashboard : "http://localhost:8000/api/v1/backoffice/dashboard",
    get_all : {
      user : "http://localhost:8000/api/v1/backoffice/users/get/all",
      superuser: "http://localhost:8000/api/v1/backoffice/superuser/get/all",
      activity: "http://localhost:8000/api/v1/backoffice/activity/get/all",
      news: "http://localhost:8000/api/v1/backoffice/news/get/all"
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
