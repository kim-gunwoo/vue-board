<template>
  <Modal class="modal">
    <div slot="header" class="modal-header">
      <h2>
        {{ msg }}
        <input type="text" v-bind:value="board.title" ref="title" />
        <a href="" class="modal-default-button" @click.prevent="onClose"
          >&times;</a
        >
      </h2>
    </div>

    <div slot="body" class="modal-body">
      <textarea :value="board.description" ref="description" />
    </div>

    <div slot="footer">
      <button class="btn" type="button" form="add-board-form" @click="onUpdate">
        UPDATE
      </button>
      <button class="btn" type="button" form="add-board-form" @click="onDelete">
        DELETE
      </button>
    </div>
  </Modal>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Modal from "./Modal";

export default {
  components: {
    Modal
  },
  data() {
    return {
      msg: "Board"
    };
  },
  computed: {
    ...mapState({
      board: "board"
    })
  },
  mounted() {
    this.FETCH_BOARD({ id: this.$route.params.bid });
  },

  methods: {
    ...mapActions([
      "FETCH_BOARD",
      "UPDATE_BOARD",
      "DELETE_BOARD",
      "FETCH_BOARDS"
    ]),
    ...mapMutations(["SET_BOARD"]),
    onClose() {
      this.$router.push(`/board`);
    },
    onUpdate() {
      this.board.title = this.$refs.title.value.trim();
      this.board.description = this.$refs.description.value.trim();
      this.UPDATE_BOARD({ id: this.board.bsid, board: this.board }).then(
        data => {
          this.FETCH_BOARDS();
        }
      );
    },
    onDelete() {
      this.DELETE_BOARD({ id: this.board.bsid }).then(this.onClose());
    }
  }
};
</script>

<style scoped>
.modal {
  width: 100%;
}
.modal-header {
  position: relative;
}
.modal-body {
  width: 100%;
}
</style>
