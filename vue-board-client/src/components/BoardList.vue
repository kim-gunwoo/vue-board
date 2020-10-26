<template>
  <div>
    <div class="home-title">{{ msg }}</div>
    <div class="board-item">
      <a href="" @click.prevent="SET_IS_ADD_BOARD(true)">
        Create new board...
      </a>
    </div>
    <div ref="boardList">
      <div class="board-item" v-for="b in boardList" :key="b.bsid">
        <router-link :to="`/board/${b.bsid}`">
          <div class="board-item-title">{{ b.title }}</div>
        </router-link>
      </div>
    </div>
    <AddBoard v-if="isAddBoardStatus" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import AddBoard from "./AddBoard";
import Board from "./Board";

export default {
  components: {
    AddBoard,
    Board
  },
  data() {
    return {
      msg: "Board List",
      sample: "sample borad ..."
    };
  },
  created() {},
  mounted() {
    this.FETCH_BOARDS();
  },
  computed: {
    ...mapState({
      isAddBoardStatus: "isAddBoard",
      boardList: "boards"
    })
  },
  methods: {
    ...mapMutations(["SET_IS_ADD_BOARD"]),
    ...mapActions(["FETCH_BOARDS"])
  }
};
</script>

<style scoped>
.home-title {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}
.board-item a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}
.board-item a:hover,
.board-item a:focus {
  background-color: rgba(0, 0, 0, 0.1);
  color: #666;
}
.board-item-title {
  color: red;
  font-size: 10px;
  font-weight: 100%;
}

.board-list {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}

.board-item a {
  vertical-align: middle;
  text-align: center;
  width: inherit;
  font-weight: 700;
  padding: 5px;
  margin: 5px;
  border-width: 1px;
  border-style: solid;
}
</style>
