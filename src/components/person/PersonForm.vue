<template>
    <form>
        <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input
                :readonly="readonly"
                v-model="properties.nombre"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Apellido paterno</label>
            <input
                :readonly="readonly"
                v-model="properties.apellido_paterno"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Apellido materno</label>
            <input
                :readonly="readonly"
                v-model="properties.apellido_materno"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">ID interno</label>
            <input
                :readonly="readonly"
                v-model="properties.id_interno"
                type="number"
                class="form-control"
            />
        </div>
        <div class="container-buttons">
            <div v-if="isEmpty(object)" class="create-button">
                <button
                    @click="emitSaveEvent"
                    type="button"
                    class="btn btn-success"
                >
                    Registrar
                </button>
            </div>
            <div v-else class="update-buttons">
                <div v-if="readonly" class="information-buttons">
                    <button
                        style="margin-right: 4px"
                        @click="emitDeleteEvent"
                        type="button"
                        class="btn btn-danger"
                    >
                        Eliminar
                    </button>
                    <button
                        @click="readonly = false"
                        type="button"
                        class="btn btn-primary"
                    >
                        Editar
                    </button>
                </div>
                <div v-else>
                    <button
                        @click="emitUpdateEvent"
                        type="button"
                        class="btn btn-success"
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import { clone, isEmpty } from "@/helpers/Object";

export default {
    props: {
        object: {
            type: Object,
            default: {},
        },
        readonly: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            folderGroup: [],
        };
    },
    emits: ["save-clicked", "update-clicked", "delete-clicked"],
    computed: {
        properties() {
            return clone(this.object);
        },
    },
    methods: {
        emitSaveEvent() {
            this.$emit("save-clicked", this.properties);
        },
        emitUpdateEvent() {
            this.$emit("update-clicked", this.properties);
        },
        emitDeleteEvent() {
            this.$emit("delete-clicked", this.properties);
        },
        isEmpty(object) {
            return isEmpty(object);
        },
    },
};
</script>

<style></style>
