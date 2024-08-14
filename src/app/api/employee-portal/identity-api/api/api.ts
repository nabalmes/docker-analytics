export * from './externalIdentity.service';
import { ExternalIdentityService } from './externalIdentity.service';
export * from './identity.service';
import { IdentityService } from './identity.service';
export const APIS = [ExternalIdentityService, IdentityService];
