<template>
    <form>
        <div class="mb-3">
            <label class="form-label">Solicitante</label>
            <v-select
                v-model="properties.person"
                label="nombre"
                :options="personStore.list"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Serie</label>
            <v-select
                v-model="properties.folderGroup"
                label="serie"
                :options="folderGroup"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Estatus</label>
            <v-select
                placeholder="prestado"
                :disabled="readonly"
                v-model="properties.estatus"
                :options="['prestado', 'disponible']"
            />
        </div>
        <button @click="emitSaveEvent" type="button" class="btn btn-primary">
            Guardar
        </button>
    </form>
</template>

<script>
import { clone } from "@/helpers/Object";
import { mapStores } from "pinia";
import { usePersonStore } from "@/stores/PersonStore";
import { useFolderGroupStore } from "@/stores/folderGroup/FolderGroupStore";

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
        }
    },
    emits: ["save-clicked"],
    computed: {
        ...mapStores(usePersonStore, useFolderGroupStore),
        properties() {
            this.object.estatus = "disponible";
            return clone(this.object);
        },
    },
    methods: {
        emitSaveEvent() {
            this.properties.folder_group_id = this.properties.folderGroup.id;
            this.properties.person_id = this.properties.person.id;
            this.$emit("save-clicked", this.properties);
        },
    },
    async created() {
        await this.personStore.all();
        const response = await this.folderGroupStore.availables();
        this.folderGroup = response.data;
    },
};
</script>

<style></style>
