import { defineStore } from "pinia";
import { getAll, get, post, put, deleteRequest } from "../helpers/Request";

const baseUrl = "/persons";

export const usePersonStore = defineStore("person", {
    state: () => {
        return {
            list: [],
            listFinded: [],
            isLoading: true,
            finded: {},
            selected: {},
            searchParam: "",
            columns: headers,
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
        async updateRow(object) {
            this.isLoading = true;
            const response = await put(`${baseUrl}/${object.id}`, object);
            await this.all();
            this.isLoading = false;
            return response;
        },
        async deleteRow(id) {
            this.isLoading = true;
            const response = await deleteRequest(`${baseUrl}/${id}`);
            await this.all();
            this.isLoading = false;
            return response;
        },
    },
    getters: {
        listFormatted() {
            this.list.map((log) => {
                log.created_at = new Date(log.created_at).toLocaleString();
                return log;
            });
            return this.list;
        },
        filter: (state) => {
            return (attribute, searchParam) => {
                if (searchParam === "") {
                    return state.list;
                } else {
                    return state.list.filter((x) =>
                        x[attribute].toString().includes(searchParam)
                    );
                }
            };
        },
    },
});

const headers = [
    {
        label: "ID",
        field: "id",
        width: "3%",
        sortable: true,
        isKey: true,
    },
    {
        label: "Empleado",
        field: "person",
        width: "10%",
        sortable: true,
        display: function (person) {
            return `${person.nombre} ${person.apellido_paterno} ${person.apellido_materno}`;
        },
    },
    {
        label: "ID interno",
        field: "id_interno",
        width: "10%",
        sortable: true,
    },
];
