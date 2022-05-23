<template>
    <CModal
        :visible="visible"
        @close="
            () => {
                visible = false;
            }
        "
    >
        <CModalHeader>
            <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>Woohoo, you're reading this text in a modal!</CModalBody>
        <CModalFooter>
            <CButton
                color="secondary"
                @click="
                    () => {
                        visible = false;
                    }
                "
            >
                Close
            </CButton>
            <CButton color="primary">Save changes</CButton>
        </CModalFooter>
    </CModal>
</template>

<script>
import { CModal } from "@coreui/vue";
import { CModalHeader } from "@coreui/vue";
import { CModalTitle } from "@coreui/vue";
import { CModalFooter } from "@coreui/vue";
import { CButton } from "@coreui/vue";
import { CModalBody } from "@coreui/vue";
export default {
    components: {
        CModal,
        CModalHeader,
        CModalTitle,
        CModalFooter,
        CModalBody,
        CButton,
    },
    props: {
        visible: false,
    },
};
</script>

<style></style>
