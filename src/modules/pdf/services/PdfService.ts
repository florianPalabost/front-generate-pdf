import { ApiService } from '@/services/ApiService';
import { Pdf, PdfForm, IPdf } from '../models/Pdf';
import { ToastService } from '@/services/ToastService';
import { ModelHelper } from '@/utils/ModelHelper';

export class PdfService {
    MODULE_PATH = 'pdfs';

    private static _instance: PdfService | null = null;
    private _toastService: ToastService;
    private _apiService: ApiService;

    private constructor() {
        this._apiService = ApiService.getInstance();
        this._toastService = ToastService.getInstance();
    }

    static getInstance(): PdfService {
        return this._instance ?? new this();
    }

    /**
     * Validates the given pdf form.
     *
     * @param { PdfForm } newPdf - The pdf form to validate.
     * @return {boolean} Returns true if pdf is validated, otherwise false.
     */
    static validate(newPdf: PdfForm): boolean {
        // TODO implements validate form
        return true;
    }

    async retrieveAll(): Promise<Pdf[]> {
        const rawPdfs = (await this._apiService.get<Pdf[]>(this.MODULE_PATH)) ?? [];

        return rawPdfs.map((rawPdf: IPdf, index: number) => {
            return ModelHelper.fromInterfaceToModel(rawPdf, Pdf);
        });
    }

    async retrieveOne(pdf: Pdf): Promise<Pdf | null> {
        const rawPdf = await this._apiService.get<IPdf>(this.MODULE_PATH + '/' + pdf.id);

        return rawPdf ? ModelHelper.fromInterfaceToModel(rawPdf, Pdf) : null;
    }

    async create(pdfForm: PdfForm): Promise<Pdf> {
        const pdfModel = new Pdf(...Object.values(pdfForm));

        const response = await this._apiService.post<IPdf>(this.MODULE_PATH, pdfModel);
        this._toastService.success('Pdf successfully recorded');

        return pdfModel;
    }

    async update(pdf: PdfForm) {
        const pdfDto = ModelHelper.toInterfaceFromModel<IPdf, PdfForm>(pdf);
        const returnPdf = ModelHelper.fromInterfaceToModel(pdfDto, Pdf);

        const response = await this._apiService.put<IPdf>(this.MODULE_PATH + '/' + pdfDto.id, pdfDto);
        this._toastService.success('Pdf successfully updated');

        return returnPdf;
    }

    async remove(pdfId: string) {
        await this._apiService.delete<IPdf>(this.MODULE_PATH + '/' + pdfId);

        this._toastService.success('Pdf deleted');
    }
}
