import {
    ApiController,
    Route,
    HttpGet,
    ControllerBase
} from '@type-server/typeserver';

@ApiController
@Route('api/v1/[controller]')
export default class NorthwindController extends ControllerBase {

    @HttpGet()
    async getData(): Promise<string[]> {
        return ['test', 'test2'];
    }

}