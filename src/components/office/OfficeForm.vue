<template>
    <form>
        <div class="mb-3">
            <label class="form-label">Dependencia</label>
            <input
                :readonly="readonly"
                v-model="object.nombre"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Fecha de alta</label>
            <input
                :readonly="readonly"
                v-model="object.created_at"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Ultima actualización</label>
            <input
                :readonly="readonly"
                v-model="object.updated_at"
                type="text"
                class="form-control"
            />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
export default {
    props: {
        object: {
            type: Object,
            default: {},
        },
        readonly: Boolean,
    },
};
</script>

<style></style>
