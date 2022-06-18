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
        <div v-if="readonly" class="buttons-update">
            <button
                style="margin-right: 4px"
                @click="readonly = false"
                type="button"
                class="btn btn-primary"
            >
                Editar
            </button>
            <button
                @click="showDeleteForm = true"
                type="button"
                class="btn btn-danger"
            >
                Eliminar
            </button>
        </div>
        <button
            v-else
            @click="
                $emit('update-clicked', properties);
                readonly = false;
            "
            type="button"
            class="btn btn-success"
        >
            Guardar
        </button>
        <custom-modal
            :visible="showDeleteForm"
            @close-modal="showDeleteForm = false"
        >
            <template v-slot:title> Eliminar Dependencia </template>
            <template v-slot:body>
                Al aceptar, se eliminaran todos los registros asociados a la
                dependencia (Secciones, Legajos, etc).
            </template>
            <template v-slot:footer>
                <button
                    @click="deleteClicked"
                    type="button"
                    class="btn btn-danger"
                >
                    Aceptar
                </button>
                <button
                    @click="showDeleteForm = false"
                    type="button"
                    class="btn btn-primary"
                >
                    Cancelar
                </button>
            </template>
        </custom-modal>
    </form>
</template>

<script>
import { clone } from "@/helpers/Object";
import { defineAsyncComponent } from "@vue/runtime-core";

export default {
    components: {
        CustomModal: defineAsyncComponent(() =>
            import("@/components/Modal.vue")
        ),
    },
    data() {
        return {
            showDeleteForm: false,
        };
    },
    props: {
        object: {
            type: Object,
            default: {},
        },
        readonly: Boolean,
    },
    emits: ["save-clicked", "update-clicked", "delete-clicked"],
    computed: {
        properties() {
            return clone(this.object);
        },
    },
    methods: {
        deleteClicked() {
            this.$emit("delete-clicked", this.properties);
        },
    },
};
</script>

<style></style>
