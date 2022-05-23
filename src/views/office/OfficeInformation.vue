<template>
    <div class="container-information">
        <office-form :readonly="true" :object="office" />
        <div class="container-relations">
            <custom-table
                @row-selected="selectDepartment"
                :columns="departmentHeaders"
                :rows="departments"
                :quantity-show="5"
            />
            <custom-table
                @row-selected="goToDocuments"
                :columns="subdepartmentHeaders"
                :rows="subdepartments"
                :quantity-show="5"
            />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapStores } from "pinia";
import { useOfficeStore } from "@/stores/office/OfficeStore";
import { useToast } from "vue-toastification";
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
    },
    props: {
        id: Number,
    },
    data() {
        return {
            subdepartments: [],
        }
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
    },
    methods: {
        selectDepartment(department) {
            this.subdepartments = department.subdepartments;
        },
        goToDocuments(subdepartment) {
            const id = subdepartment.id;
            console.log(subdepartment);
            this.$router.push({ name: 'SubseccionListRoute', params: { id } })
        }
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
