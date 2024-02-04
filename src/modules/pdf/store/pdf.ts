import { PdfService } from '../services/PdfService';
import { defineStore } from 'pinia';
import { IPdf, Pdf, PdfForm } from '../models/Pdf';
import { ApiService } from '@/services/ApiService';
import { ToastService } from '@/services/ToastService';

export interface PdfState {
    pdfs: Pdf[];
    loaded: boolean;
}

const apiService = ApiService.getInstance();
const toastService = ToastService.getInstance();
const pdfService = PdfService.getInstance();

export const usePdfStore = defineStore('pdf', {
    state: (): PdfState => ({
        pdfs: [],
        loaded: false
    }),
    actions: {
        async fetchPdfs(): Promise<void> {
            try {
                this.pdfs = await pdfService.retrieveAll();
            } catch (error) {
                this.loaded = false;
                console.error(error);
                toastService.error('error: ' + error);
            } finally {
                this.loaded = true;
            }
        },
        async createPdf(pdfForm: PdfForm) {
            try {
                // TODO : handle status in apiService + change pushed object
                const pdf = await pdfService.create(pdfForm);
                this.pdfs.push(pdf);
            } catch (error) {
                console.error(error);
                toastService.error('error: ' + error);
            }
        },
        async updatePdf(pdfForm: PdfForm) {
            try {
                const pdf = await pdfService.update(pdfForm);

                const index = this.pdfs.findIndex((t) => t.id === pdf.id);

                if (index !== -1) {
                    this.pdfs[index] = pdf;
                }
            } catch (error) {
                console.error(error);
                toastService.error('error: ' + error);
            }
        },
        async deletePdf(pdfId: string) {
            try {
                await pdfService.remove(pdfId);
                this.pdfs = this.pdfs.filter((w) => w.id !== pdfId);
            } catch (error) {
                console.error(error);
                toastService.error('error: ' + error);
            }
        }
    }
});
