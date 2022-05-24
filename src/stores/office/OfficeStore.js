import { defineStore } from "pinia";
import { getAll, get, post } from "@/helpers/Request";
const baseUrl = "/offices";
export const useOfficeStore = defineStore("office", {
    state: () => {
        return {
            list: [],
            isLoading: true,
            finded: {},
            subdepartmentsSelected: [],
            departmentSelectedId: 0,
        };
    },
    actions: {
        async all() {
            this.isLoading = true;
            const response = await getAll(baseUrl);
            const { data } = response;
            this.list = data;
            this.isLoading = false;
            return response;
        },
        async find(id) {
            this.isLoading = true;
            const response = await get(baseUrl + "/" + id);
            const { data } = response;
            this.finded = data;
            this.isLoading = false;
            return response;
        },
        async add(object) {
            this.isLoading = true;
            const response = await post(baseUrl, object);
            await this.all();
            this.isLoading = false;
            return response;
        },
        async addDepartment(officeId, object) {
            object.office_id = officeId;
            this.isLoading = true;
            const response = await post(`/departments`, object);
            await this.find(this.finded.id);
            this.isLoading = false;
            return response;
        },
        async addSubdepartment(officeId, object) {
            object.department_id = officeId;
            this.isLoading = true;
            const response = await post(`/subdepartments`, object);
            await this.find(this.finded.id);
            const department = this.findDepartmentById(
                this.departmentSelectedId
            );
            this.subdepartmentsSelected = department.subdepartments;
            this.isLoading = false;
            return response;
        },
        findDepartmentById(id) {
            const found = this.finded.departments.find(
                (element) => element.id === id
            );
            return found;
        },
    },
});
