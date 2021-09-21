import {createRouter, createWebHistory} from "vue-router";
import Home from "../components/Home";
import CreateContact from "../components/CreateContact";
import EditContact from "../components/EditContact";


const routes = [
    {
        path: "/create-contact",
        name: "CreateContact",
        component: CreateContact
    },
    {
        //path: "/edit-contact-:suburl(.*)",
        path: "/edit-contact-:id",
        name: "EditContact",
        component: EditContact
    },
    {
        path: "",
        name: "Home",
        component: Home,
    },
    //{ path: '*', component: NotFound }
    /*  {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/create-contact",
        name: "CreateEditContact",
        component: CreateEditContact,
      },
      {
        path: "/:suburl(.*)",
        name: "CreateEditContact",
        component: CreateEditContact,
      },*/
    /*{
      path: "*",
      name: "notFound",
      component: Home,
    },*/
    /*  {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/!* webpackChunkName: "about" *!/ "/"),
      },*/
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
