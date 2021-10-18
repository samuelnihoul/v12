import { AppService } from './app.service';
import { BuyDto } from './mint.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): Promise<{
        name: any;
        number: any;
        price: any;
        address: any;
        owner: any;
        image: any;
        description: any;
    }[]>;
    buyAndMint(dto: BuyDto): Promise<string>;
}
