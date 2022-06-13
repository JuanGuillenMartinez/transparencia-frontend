import { defineStore } from "pinia";
import { getAll, get, post, put } from "../helpers/Request";

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
        async returnFolder(borrowId) {
            this.isLoading = true;
            const response = await get(`${baseUrl}/${borrowId}/return`);
            await this.all();
            this.isLoading = false;
            return response;
        },
        async relendFolder(borrowId) {
            this.isLoading = true;
            const response = await get(`${baseUrl}/${borrowId}/relend`);
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
        label: "Solicitante",
        field: "person",
        width: "10%",
        sortable: true,
        display: function (row) {
            const person = row.person;
            return `${person.nombre} ${person.apellido_paterno} ${person.apellido_materno}`;
        },
    },
    {
        label: "Serie",
        field: "folder_group",
        width: "10%",
        sortable: true,
        display: function (row) {
            return row.folder_group.serie;
        },
    },
    {
        label: "Estatus",
        field: "estatus",
        width: "10%",
        sortable: true,
    },
    {
        label: "Prestado el",
        field: "prestado_el",
        width: "10%",
        sortable: true,
    },
    {
        label: "Devuelto el",
        field: "fecha_devolucion",
        width: "10%",
        sortable: true,
    },
    {
        label: "Acciones",
        field: "quick",
        width: "5%",
        sortable: true,
        display: function (row) {
            const borrowId = row.id;
            const btnDevolver = `<button type="button" class="btn btn-primary is-rows-el btn-devolver" data-id="${borrowId}">Devolver</button>`;
            const btnPrestar = `<button type="button" class="btn btn-success is-rows-el btn-prestar" data-id="${borrowId}">Prestar</button>`;
            return `
            <div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 4px;">
                <button title="Mas información" type="button" data-subseccion="${
                    row.folder_group.subdepartment.id
                }" data-id="${
                row.id
            }" class="is-rows-el btn-ver btn btn-secondary">Ver</button>
                ${row.estatus === "prestado" ? btnDevolver : btnPrestar}
            </div>
            `;
        },
    },
];
