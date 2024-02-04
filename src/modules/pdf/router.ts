import { RouteRecordRaw } from 'vue-router';

const PdfModule = () => import('@/modules/pdf/PdfModule.vue');
const PdfHome = () => import('@/modules/pdf/views/PdfHome.vue');

const moduleRoutes: Array<RouteRecordRaw> = [
    {
        name: 'pdfs',
        path: '/pdfs',
        component: PdfModule,
        children: [
            {
                name: 'pdfHome',
                path: '',
                component: PdfHome
            }
        ]
    }
];

export default moduleRoutes;
