<template>
    <form>
        <div class="mb-3">
            <label class="form-label">Serie</label>
            <input
                :readonly="readonly"
                v-model="properties.serie"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Estatus</label>
            <input
                :readonly="readonly"
                v-model="properties.estatus"
                type="text"
                class="form-control"
            />
        </div>
        <button @click="$emit('save-clicked', properties)" type="button" class="btn btn-primary">Guardar</button>
    </form>
</template>

<script>
import { clone } from "@/helpers/Object";
export default {
    props: {
        object: {
            type: Object,
            default: {},
        },
        readonly: Boolean,
    },
    emits: ['save-clicked'],
    computed: {
        properties() {
            return clone(this.object);
        },
    },
};
</script>

<style></style>
