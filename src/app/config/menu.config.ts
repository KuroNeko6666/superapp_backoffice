export class MENU {
  public data = [
    {
      name: "Dashboard",
      path: "/home/dashboard",
      icon: "fa-solid fa-house",
      collapse: true,
      children: []
    },
    {
      name: "Sigap Lapor",
      path: "/home/sigap-lapor",
      icon: "fa-solid fa-chart-simple",
      collapse: true,
      children: [
        {
          name: "Dashboard",
          path: "/home/sigap-lapor",
          collapse: true,
        },
        {
          name: "Transaksi",
          path: "/home/sigap-lapor/transactions",
          collapse: true,
        },
      ]
    },

    {
      name: "SIPS",
      path: "/home/sips",
      icon: "fa-solid fa-chart-pie",
      collapse: true,
      children: [
        {
          name: "Dashboard",
          path: "/home/sips",
          collapse: true,
        },
        {
          name: "Transaksi",
          path: "/home/sips/transactions",
          collapse: true,
        },
      ]
    },
    {
      name: "Form A",
      path: "/home/form-a",
      icon: "fa-solid fa-file-invoice",
      collapse: true,
      children: [
        {
          name: "Dashboard",
          path: "/home/form-a",
          collapse: true,
        },
        {
          name: "Transaksi",
          path: "/home/form-a/transactions",
          collapse: true,
        },
      ]
    },
    {
      name: "Form C",
      path: "/home/form-c",
      icon: "fa-solid fa-file-invoice",
      collapse: true,
      children: [
        {
          name: "Dashboard",
          path: "/home/form-c",
          collapse: true,
        },
        {
          name: "Transaksi",
          path: "/home/form-c/transactions",
          collapse: true,
        },
      ]
    },
    {
      name: "Akun",
      path: "/home/account",
      icon: "fa-solid fa-users",
      collapse: true,
      children: [
        {
          name: "User",
          path: "/home/account/user",
          collapse: true,
        },
        {
          name: "Admin",
          path: "/home/account/admin",
          collapse: true,
        },
        {
          name: "Operator",
          path: "/home/account/operator",
          collapse: true,
        },
      ]
    },
    {
      name: "Berita",
      path: "/home/news",
      icon: "fa-solid fa-newspaper",
      collapse: true,
      children: []
    },
    {
      name: "Aktivitas",
      path: "/home/activity",
      icon: "fa-solid fa-calendar",
      collapse: true,
      children: []
    },
  ]
}
