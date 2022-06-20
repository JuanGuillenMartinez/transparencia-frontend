<template>
    <form>
        <div class="mb-3">
            <label class="form-label">Legajo</label>
            <input
                :readonly="readonly"
                v-model="properties.legajo"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Subserie</label>
            <input
                :readonly="readonly"
                v-model="properties.subserie"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Area</label>
            <input
                :readonly="readonly"
                v-model="properties.area"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Asunto</label>
            <input
                :readonly="readonly"
                v-model="properties.asunto"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Fecha de inicio</label>
            <input
                :readonly="readonly"
                v-model="properties.fecha_inicio"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Fecha de terminación</label>
            <input
                :readonly="readonly"
                v-model="properties.fecha_terminacion"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Valor documental</label>
            <input
                :readonly="readonly"
                v-model="properties.valor_documental"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Conservación del tramite</label>
            <input
                :readonly="readonly"
                v-model="properties.conservacion_tramite"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Conservación de concentración</label>
            <input
                :readonly="readonly"
                v-model="properties.conservacion_concentracion"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Conservación de acceso</label>
            <input
                :readonly="readonly"
                v-model="properties.conservacion_acceso"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Conservación de desclasificación</label>
            <input
                :readonly="readonly"
                v-model="properties.conservacion_desclasificacion"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Clasificación de información</label>
            <v-select
                placeholder="confidencial"
                v-model="properties.clasificacion_informacion"
                :options="['confidencial', 'reservado']"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Expediente</label>
            <input
                :readonly="readonly"
                v-model="properties.expediente"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Localización</label>
            <input
                :readonly="readonly"
                v-model="properties.localizacion"
                type="text"
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
            this.object.clasificacion_informacion = "confidencial";
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
