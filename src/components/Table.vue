<template>
    <table-lite
        :is-static-mode="true"
        :columns="columns"
        :rows="rows"
        :total="totalCount"
        :sortable="sortable"
        :page-options="quantity"
        @row-clicked="show"
        @is-finished="emitFinishEvent"
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
        quantityShow: {
            type: Number,
            default: 10,
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
        quantity() {
            return [
                {
                    value: this.quantityShow,
                    text: this.quantityShow,
                },
            ];
        },
    },
    methods: {
        show(selected) {
            this.$emit("row-selected", selected);
        },
        emitFinishEvent(element) {
            this.$emit('is-finished', element);
        }
    },
    emits: ['is-finished', 'row-selected']
};
</script>

<style scoped>
* {
    text-align: center;
}
</style>
