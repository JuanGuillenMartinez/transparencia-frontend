<template>
    <div class="container-information">
        <office-form :readonly="true" :object="office" />
        <div class="container-relations">
            <div class="container-department-table">
                <custom-table
                    @row-selected="selectDepartment"
                    :columns="departmentHeaders"
                    :rows="departments"
                    :quantity-show="5"
                />
                <CButton @click="showDepartmentForm" color="success"
                    >Agregar</CButton
                >
            </div>
            <div class="container-subdepartment-table">
                <custom-table
                    @row-selected="goToDocuments"
                    :columns="subdepartmentHeaders"
                    :rows="subdepartments"
                    :quantity-show="5"
                />
                <CButton @click="showSubdepartmentForm" color="success"
                    >Agregar</CButton
                >
            </div>
        </div>
    </div>
    <custom-modal
        @close-form="visibleDepartmentForm = false"
        :visible="visibleDepartmentForm"
        title="Registrar Sección"
        titleClose="Cerrar"
    >
        <department-form
            @save-clicked="saveDepartment"
            :object="{}"
            :readonly="false"
        />
    </custom-modal>
    <custom-modal
        @close-form="visibleSubdepartmentForm = false"
        :visible="visibleSubdepartmentForm"
        title="Registrar Subsección"
        titleClose="Cerrar"
    >
        <subdepartment-form
            @save-clicked="saveSubdepartment"
            :object="{}"
            :readonly="false"
        />
    </custom-modal>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapStores } from "pinia";
import { useOfficeStore } from "@/stores/office/OfficeStore";
import { useToast } from "vue-toastification";
import { CButton } from "@coreui/vue";
import CustomModal from "@/components/CustomModal.vue";
import departmentColumns from "@/helpers/TableHeaders/Department";
import subdepartmentColumns from "@/helpers/TableHeaders/Subdepartment";

const toast = useToast();
export default {
    components: {
        OfficeForm: defineAsyncComponent(() =>
            import("@/components/office/OfficeForm.vue")
        ),
        CustomTable: defineAsyncComponent(() =>
            import("@/components/Table.vue")
        ),
        SubdepartmentForm: defineAsyncComponent(() =>
            import("@/components/subseccion/SubdepartmentForm.vue")
        ),
        DepartmentForm: defineAsyncComponent(() =>
            import("@/components/department/DepartmentForm.vue")
        ),
        CButton,
        CustomModal,
    },
    props: {
        id: Number,
    },
    data() {
        return {
            departmentId: 0,
            visibleDepartmentForm: false,
            visibleSubdepartmentForm: false,
            departmentSelected: {},
        };
    },
    computed: {
        ...mapStores(useOfficeStore),
        office() {
            return this.officeStore.finded;
        },
        departmentHeaders() {
            return departmentColumns;
        },
        subdepartmentHeaders() {
            return subdepartmentColumns;
        },
        departments() {
            return this.officeStore.finded.departments;
        },
        subdepartments() {
            return this.officeStore.subdepartmentsSelected;
        }
    },
    methods: {
        selectDepartment(department) {
            this.departmentId = department.id;
            this.officeStore.departmentSelectedId = department.id;
            this.officeStore.subdepartmentsSelected = department.subdepartments;
        },
        goToDocuments(subdepartment) {
            const id = subdepartment.id;
            console.log(subdepartment);
            this.$router.push({ name: "SubseccionListRoute", params: { id } });
        },
        showDepartmentForm() {
            this.visibleDepartmentForm = true;
        },
        showSubdepartmentForm() {
            this.visibleSubdepartmentForm = true;
        },
        async saveDepartment(properties) {
            this.visibleDepartmentForm = false;
            const response = await this.officeStore.addDepartment(this.id, properties);
        },
        async saveSubdepartment(properties) {
            this.visibleSubdepartmentForm = false;
            const response = await this.officeStore.addSubdepartment(this.departmentId, properties);
        },
    },
    async mounted() {
        await this.officeStore.find(this.id);
    },
};
</script>

<style scoped>
.container-information {
    display: grid;
    grid-template-columns: 4fr 6fr;
}
.container-relations {
    display: grid;
    grid-template-rows: 1fr 1fr;
}
</style>
