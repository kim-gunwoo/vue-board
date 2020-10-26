import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import BoardList from "../components/BoardList.vue";
import Board from "../components/Board.vue";
import NotFound from "../components/NotFound.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
      //beforeEnter: isAuth
    },
    {
      path: "/board",
      component: BoardList,
      children: [
        {
          path: ":bid",
          component: Board
        }
      ]
    },

    {
      path: "*",
      component: NotFound
    }
  ]
});

export default router;
