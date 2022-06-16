<template>
    <form>
        <div class="mb-3">
            <label class="form-label">Dependencia</label>
            <input
                :readonly="readonly"
                v-model="properties.nombre"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Fecha de alta</label>
            <input
                :readonly="true"
                v-model="properties.created_at"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Ultima actualización</label>
            <input
                :readonly="true"
                v-model="properties.updated_at"
                type="text"
                class="form-control"
            />
        </div>
        <button v-if="readonly" @click="readonly=false" type="button" class="btn btn-primary">Editar</button>
        <button v-else @click="$emit('update-clicked', properties); readonly=false" type="button" class="btn btn-success">Guardar</button>
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
