export class MENU {
  public data = [
    {
      name: "Dashboard",
      path: "/home/dashboard",
      icon: "fa-solid fa-house",
      collapse: true,
      children: [
        {
          name: "Dashboard",
          path: "/home/dashboard/all",
          collapse: true,
        },
        {
          name: "Sigap Lapor",
          path: "/home/dashboard/sigap-lapor",
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
