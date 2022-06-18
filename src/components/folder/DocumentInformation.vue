<template>
    <form>
        <div class="mb-3">
            <label class="form-label">Legajo</label>
            <input
                :readonly="true"
                v-model="properties.legajo"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Subserie</label>
            <input
                :readonly="true"
                v-model="properties.subserie"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Area</label>
            <input
                :readonly="true"
                v-model="properties.area"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Asunto</label>
            <input
                :readonly="true"
                v-model="properties.asunto"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Fecha de inicio</label>
            <input
                :readonly="true"
                v-model="properties.fecha_inicio"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Fecha de terminación</label>
            <input
                :readonly="true"
                v-model="properties.fecha_terminacion"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Valor documental</label>
            <input
                :readonly="true"
                v-model="properties.valor_documental"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Conservación del tramite</label>
            <input
                :readonly="true"
                v-model="properties.conservacion_tramite"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Conservación de concentración</label>
            <input
                :readonly="true"
                v-model="properties.conservacion_concentracion"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Conservación de acceso</label>
            <input
                :readonly="true"
                v-model="properties.conservacion_acceso"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Conservación de desclasificación</label>
            <input
                :readonly="true"
                v-model="properties.conservacion_desclasificacion"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Clasificación de información</label>
            <v-select
                :disabled="true"
                placeholder="confidencial"
                v-model="properties.clasificacion_informacion"
                :options="['confidencial', 'reservado']"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Expediente</label>
            <input
                :readonly="true"
                v-model="properties.expediente"
                type="text"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Localización</label>
            <input
                :readonly="true"
                v-model="properties.localizacion"
                type="text"
                class="form-control"
            />
        </div>
        <!-- <button @click="$emit('save-clicked', properties)" type="button" class="btn btn-primary">Guardar</button> -->
    </form>
</template>

<script>
export default {
    props: {
        properties: Object,
    },
};
</script>

<style></style>
