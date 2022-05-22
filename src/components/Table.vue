<template>
    <table-lite
        :is-static-mode="true"
        :columns="columns"
        :rows="rows"
        :total="totalCount"
        :sortable="sortable"
        @row-clicked="show"
    ></table-lite>
</template>

<script>
export default {
    props: {
        columns: Array,
        rows: {
            type: Array,
            default: [],
        },
    },
    computed: {
        sortable() {
            return {
                order: "id",
                sort: "asc",
            };
        },
        totalCount() {
            return this.rows.length;
        },
    },
    methods: {
        show(selected) {
            console.log(selected);
        },
    },
};
</script>

<style></style>
