export default [
    {
        label: "ID",
        field: "id",
        width: "3%",
        sortable: true,
        isKey: true,
    },
    {
        label: "Serie",
        field: "serie",
        width: "10%",
        sortable: true,
    },
    {
        label: "Estatus",
        field: "estatus",
        width: "10%",
        sortable: true,
    },
    {
        label: "Acciones",
        field: "quick",
        width: "5%",
        sortable: true,
        display: function (row) {
            return `
                <button type="button" class="is-rows-el btn btn-secondary btn-update-folder-group"><i class="fa-solid fa-eye"></i></button>`;
        },
    },
];