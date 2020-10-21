import {TypeServer} from '@type-server/typeserver';
import {TypeServerExpress} from '@type-server/express';
import {App} from './App';

TypeServer
    .app(TypeServerExpress, App)
    .listen(5000)
    .start();
