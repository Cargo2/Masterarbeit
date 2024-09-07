export class Order{
    id!: string;
    headerText!: string;
    description!: string;
    module?: string[];
    spro?: string[];
    stack?: string;
    conditions?: string;
    usecase?: string;
    orderType?: string;
    dueDate?: Date;
    communcation?: string[];
    remote?: number;
    contactdirect?: string;
    expense?: string;  
    startDate?: string; 
}