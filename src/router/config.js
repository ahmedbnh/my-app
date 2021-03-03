const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["login", "/login"],
    exact : true,
    component: "loginPage"
  },
  {
    path: ["signup", "/signup"],
    exact : true,
    component: "signup"
  },

];

export default routes;
