import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider
  } from 'angular5-social-login';
  import {environment} from '../environments/environment'
  
  export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(environment.IdAppGoogle)
      }
    ]);
  
    return config;
  }