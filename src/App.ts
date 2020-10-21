import {AppBase, IServerPipeline} from '@type-server/typeserver';

export class App extends AppBase {
    
    configurePipeline(pipeline: IServerPipeline) {
        console.log('test');
    }

}