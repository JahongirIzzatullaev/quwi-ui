export default function (context) {
  if (!context.$auth.loggedIn && context.route.path !== "/login") {
    return context.redirect("/login");
  }
}
