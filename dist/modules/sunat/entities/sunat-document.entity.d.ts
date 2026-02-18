import { Sale } from "../../sales/entities/sale.entity";
export declare class SunatDocument {
    id: string;
    saleId: string;
    sunatStatus: string;
    xmlFilename: string;
    cdrFilename: string;
    digestValue: string;
    sunatDescription: string;
    sunatCode: string;
    sentAt: Date;
    responseAt: Date;
    createdAt: Date;
    sale: Sale;
}
//# sourceMappingURL=sunat-document.entity.d.ts.map