import { Provider } from '@project-serum/anchor';
import { BuyDto } from './mint.dto';
export declare class AppService {
    private programID;
    private programID2;
    private candyMachineUuid;
    private wallet;
    private mint;
    private config;
    private opts;
    constructor();
    getProvider(wallet?: any): Promise<Provider>;
    getAllProjects(): Promise<{
        name: any;
        number: any;
        price: any;
        address: any;
        owner: any;
        image: any;
        description: any;
    }[]>;
    buyAndMint({ buyerPk, offsets, wallet }: BuyDto): Promise<string>;
}
