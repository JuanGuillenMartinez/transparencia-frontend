<template>
    <div v-if="showTable" class="borrow-table">
        <custom-table
            @row-selected="setRowSelected"
            @is-finished="tableLoadingFinish"
            :rows="borrowStore.list"
            :columns="borrowStore.columns"
        />
        <float-button
            @button-clicked="showAddBorrowForm = true"
            icon="fa fa-plus"
            color-class="btn-primary"
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
            <button
                @click="showReturnBorrow = false"
                type="button"
                class="btn btn-danger"
            >
                Cancelar
            </button>
            <button @click="returnFolder" type="button" class="btn btn-success">
                Continuar
            </button>
        </template>
    </custom-modal>
    <custom-modal
        @close-modal="showBorrowModal = false"
        :visible="showBorrowModal"
    >
        <template v-slot:title> Volver a prestar </template>
        <template v-slot:body>
            La carpeta sera prestada de nuevo al mismo usuario.
        </template>
        <template v-slot:footer>
            <button
                @click="showBorrowModal = false"
                type="button"
                class="btn btn-danger"
            >
                Cancelar
            </button>
            <button @click="relendFolder" type="button" class="btn btn-success">
                Prestar de nuevo
            </button>
        </template>
    </custom-modal>
    <custom-modal
        :visible="showAddBorrowForm"
        @close-modal="showAddBorrowForm = false"
    >
        <template v-slot:title> Prestar carpeta </template>
        <template v-slot:body>
            <borrow-form @save-clicked="saveBorrow" />
        </template>
    </custom-modal>
    <custom-modal
        :visible="showUpdateBorrowForm"
        @close-modal="showUpdateBorrowForm = false"
    >
        <template v-slot:title> Actualizar información del préstamo </template>
        <template v-slot:body>
            <borrow-form :readonly="false" :object="borrowSelected" @save-clicked="updateBorrow" />
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
        FloatButton: defineAsyncComponent(() =>
            import("@/components/FloatButton.vue")
        ),
        BorrowForm: defineAsyncComponent(() =>
            import("@/components/borrow/BorrowForm.vue")
        ),
    },
    data() {
        return {
            showTable: true,
            showReturnBorrow: false,
            idBorrowSelected: 0,
            showBorrowModal: false,
            showAddBorrowForm: false,
            showUpdateBorrowForm: false,
            selected: {},
            borrowSelected: {},
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
                await element.addEventListener("click", async () => {
                    this.idBorrowSelected = element.dataset.id;
                    this.showBorrowModal = true;
                });
            }
            if (element.classList.contains("btn-update-borrow")) {
                await element.addEventListener("click", async () => {
                    // this.selected = element.dataset.id;
                    this.showUpdateBorrowForm = true;
                });
            }
        },
        async relendFolder() {
            const response = await this.borrowStore.relendFolder(
                this.idBorrowSelected
            );
            this.showBorrowModal = false;
        },
        async returnFolder() {
            const response = await this.borrowStore.returnFolder(
                this.idBorrowSelected
            );
            this.showReturnBorrow = false;
        },
        async saveBorrow(object) {
            console.log(object);
            const response = await this.borrowStore.add(object);
            this.showAddBorrowForm = false;
        },
        setRowSelected(row) {
            this.borrowSelected = row;
            this.borrowSelected.folderGroup = row.folder_group;
        },
        async updateBorrow(object) {
            const response = await this.borrowStore.update(this.borrowSelected.id, object);
            this.showUpdateBorrowForm = false;
        },
    },
    async created() {
        this.showTable = true;
        await this.borrowStore.all();
    },
};
</script>

<style scoped></style>
