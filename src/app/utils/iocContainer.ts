import { Container } from 'inversify';
import { AdalService } from "../common/authn/adalSvc";

const DIcontainer = new Container();
DIcontainer.bind<AdalService>(AdalService).toSelf();

export default DIcontainer;
