import { Suporte } from "./Suporte.model";
import { User } from "./User.model";

export class Reqre {
    page?: number | undefined;
    per_page?: number | undefined;
    total?: number | undefined;
    total_pages?: number | undefined;
    data?: User[] | User | undefined;
    support?: Suporte | undefined;
}

