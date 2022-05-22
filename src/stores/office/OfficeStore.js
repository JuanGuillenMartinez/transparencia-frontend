import { defineStore } from "pinia";
import { getAll } from "@/helpers/Request"
const baseUrl = "/offices"
export const useOfficeStore = defineStore("office", {
    state: () => {
        return {
            list: []
        };
    },
    actions: {
        async all() {
            const response = await getAll(baseUrl);
            console.log(response);
        }
    }
});
