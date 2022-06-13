<template>
    <div v-if="showTable" class="borrow-table">
        <custom-table
            @is-finished="tableLoadingFinish"
            :rows="borrowStore.list"
            :columns="borrowStore.columns"
        />
    </div>
    <custom-modal
        @close-modal="showReturnBorrow = false"
        :visible="showReturnBorrow"
    >
        <template v-slot:title> Marcar carpeta como devuelta </template>
        <template v-slot:body>
            Asegúrese de recibir los documentos en buen estado.
        </template>
        <template v-slot:footer>
            <button type="button" class="btn btn-danger">Cancelar</button>
            <button @click="returnFolder" type="button" class="btn btn-success">Continuar</button>
        </template>
    </custom-modal>
    <router-view></router-view>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { useBorrowStore } from "@/stores/BorrowStore";
import { mapStores } from "pinia";

export default {
    components: {
        CustomTable: defineAsyncComponent(() =>
            import("@/components/Table.vue")
        ),
        CustomModal: defineAsyncComponent(() =>
            import("@/components/Modal.vue")
        ),
    },
    data() {
        return {
            showTable: true,
            showReturnBorrow: false,
            idBorrowSelected: 0,
        };
    },
    computed: {
        ...mapStores(useBorrowStore),
    },
    watch: {
        "$route.path"(newValue) {
            this.showTable = newValue !== "/prestamos" ? false : true;
        },
    },
    methods: {
        async tableLoadingFinish(elements) {
            for (let item of elements) {
                this.addEventButtons(item);
            }
        },
        async addEventButtons(element) {
            if (element.classList.contains("btn-ver")) {
                await element.addEventListener("click", async () => {
                    this.$router.push({
                        path: `/subsecciones/${element.dataset.subseccion}/grupos`,
                    });
                });
            }
            if (element.classList.contains("btn-devolver")) {
                await element.addEventListener("click", async () => {
                    this.idBorrowSelected = element.dataset.id;
                    this.showReturnBorrow = true;
                });
            }
            if (element.classList.contains("btn-prestar")) {
                // await element.addEventListener("click", async () => {
                //     this.returnFolder(element.dataset.id);
                // });
            }
        },
        async borrowFolder(borrowId) {},
        async returnFolder() {
            const response = await this.borrowStore.returnFolder(this.idBorrowSelected);
            console.log(response);
        },
    },
    async created() {
        this.showTable = true;
        await this.borrowStore.all();
        console.log(this.$route.path);
    },
};
</script>

<style scoped></style>
