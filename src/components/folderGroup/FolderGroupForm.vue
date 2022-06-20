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
            <v-select
                placeholder="disponible"
                :disabled="readonly"
                v-model="properties.estatus"
                :options="['prestado', 'disponible']"
            />
        </div>
        <button
            @click="$emit('save-clicked', properties)"
            type="button"
            class="btn btn-primary"
        >
            Guardar
        </button>
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
    emits: ["save-clicked"],
    computed: {
        properties() {
            this.object.estatus = "disponible";
            return clone(this.object);
        },
    },
};
</script>

<style></style>
