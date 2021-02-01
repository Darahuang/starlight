<template>
  <div class="d-flex justify-content-center mt-3">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: !childPagination.has_pre }">
          <a
            class="page-link"
            href="#"
            @click.prevent="updatePage(childPagination.current_page - 1)"
            >Previous</a
          >
        </li>
        <li
          class="page-item"
          v-for="page in childPagination.total_pages"
          :key="page"
          :class="{ active: childPagination.current_page === page }"
        >
          <a class="page-link" href="#" @click.prevent="updatePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: !childPagination.has_next }">
          <a
            class="page-link"
            href="#"
            @click.prevent="updatePage(childPagination.current_page + 1)"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['childPagination'],
  methods: {
    updatePage(page) {
      this.$emit('emitPage', page);
    },
  },
};
</script>
