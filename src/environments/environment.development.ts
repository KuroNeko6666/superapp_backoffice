export const environment = {
  production: false,
  rest_api: {
    login: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/auth/login",
    check: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/token/validation/su",
    register: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/auth/register",
    news: {
      get_no_limit: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/news/get/all",
      get_all: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/news/get_all",
      get: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/news/get/one/",
      create: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/news/create",
      update: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/news/update/",
      delete: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/news/delete/",
    },
    activity: {
      get_no_limit: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/activity/get/all",
      get_all: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/activity/get_all",
      get: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/activity/get/one/",
      create: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/activity/create",
      update: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/activity/update/",
      delete: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/activity/delete/",
      delete_image: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/activity/delete_image/",
    },
    user: {
      get_no_limit: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/superuser/get/all",
      get_all: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/superuser/get_all",
      get: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/superuser/get/one/",
      create: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/auth/register",
      update: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/superuser/update/",
      delete: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/superuser/delete/",
      change_avatar: 'https://api-gateway.bawaslu.go.id/api/v1/backoffice/superuser/change/avatar/',

    },
    keycloak: {
      get_no_limit: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/users/get/all",
      get_all: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/users/get_all",
      get: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/users/get/",
      create: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/auth_users/register",
      delete: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/users/delete",
      update: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/users/update/",
      change_avatar: 'https://api-gateway.bawaslu.go.id/api/v1/backoffice/superuser/change/avatar/users/',
      banned: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/superuser/user_banned/",
      unbanned: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/superuser/user_unbanned/",
    },
    dashboard : "https://api-gateway.bawaslu.go.id/api/v1/backoffice/dashboard",
    get_all : {
      user : "https://api-gateway.bawaslu.go.id/api/v1/backoffice/users/get/all",
      superuser: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/superuser/get/all",
      activity: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/activity/get/all",
      news: "https://api-gateway.bawaslu.go.id/api/v1/backoffice/news/get/all"
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
