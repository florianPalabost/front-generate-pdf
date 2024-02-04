import { useToast } from 'vue-toastification';

export class ToastService {
    toast = useToast();
    private static _instance: ToastService | null = null;

    private constructor() {
        // This constructor is intentionally left empty for singleton implementation.
    }

    public static getInstance(): ToastService {
        return this._instance ?? new this();
    }

    success(message: string) {
        this.toast.success(message);
    }
    error(errorMessage: string) {
        this.toast.error(errorMessage);
    }
    warn(warnMessage: string) {
        this.toast.warning(warnMessage);
    }
    info(infoMessage: string) {
        this.toast.info(infoMessage);
    }
}
