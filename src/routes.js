import Bighome from "./Bighome";
import Home from "./VayDay";
import HomeComponent from "./HomeComponent";
const routes = [
    { path: ["/"], component: HomeComponent, exact: true },
    { path: ["/trang-chu"], component: Bighome, exact: true },

   
];
export default routes

