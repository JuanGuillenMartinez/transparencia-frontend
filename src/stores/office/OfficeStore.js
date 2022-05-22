import { defineStore } from "pinia";
import { getAll } from "@/helpers/Request";
const baseUrl = "/offices";
export const useOfficeStore = defineStore("office", {
    state: () => {
        return {
            list: [],
            isLoading: true,
        };
    },
    actions: {
        async all() {
            this.isLoading = true;
            const response = await getAll(baseUrl);
            const { data } = response;
            this.list = data;
            this.isLoading = false;
            console.log(response);
        },
    },
});
