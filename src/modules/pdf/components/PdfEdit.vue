<script setup lang="ts">
    import { ToastService } from '@/services/ToastService';
    import { Pdf, PdfForm } from '../models/Pdf';
    import { usePdfStore } from '../store/pdf';
    import { PdfService } from '../services/PdfService';

    const props = defineProps({
        pdf: {
            type: Pdf,
            required: true
        },
        toggleDialog: {
            type: Function,
            required: false,
            default: () => {
                // empty because return void
            }
        }
    });
    const pdfForm = new PdfForm(
        ...Object.values(props.pdf)
    );
    const store = usePdfStore();

    const validate = () => {
        return PdfService.validate(pdfForm);
    };

    const handleSave = async () => {
        if (!validate()) {
            ToastService.getInstance().error('Please fill correctly all the fields');
            return;
        }

        props.toggleDialog();
        await store.updatePdf(pdfForm);
    };
</script>
<template>
    <div class="bg-white p-8">
        <h1 class="text-2xl mb-4">Edit</h1>

        <v-text-field
            v-model="pdfForm.id"
            label="id*"
            required
            type="string"
        ></v-text-field>
        <v-text-field
            v-model="pdfForm.name"
            label="name*"
            required
            type="string"
        ></v-text-field>
        <v-text-field
            v-model="pdfForm.description"
            label="description*"
            required
            type="string"
        ></v-text-field>
        <v-text-field
            v-model="pdfForm.createdAt"
            label="createdAt*"
            required
            type="Date"
        ></v-text-field>

        <div class="flex flex-row gap-x-8 justify-center">
            <div class="">
                <v-btn color="primary" block @click="props.toggleDialog">Close Dialog</v-btn>
            </div>
            <div class="">
                <v-btn color="primary" block @click="handleSave">Save</v-btn>
            </div>
        </div>
    </div>
</template>
