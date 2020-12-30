import { components } from './openapi'
export * as openapi from './openapi'

export namespace Schemas { 
  export type Account = components['schemas']['Account']
  export type AccountAddress = components['schemas']['AccountAddress']
  export type AccountList = components['schemas']['AccountList']
  export type AuthorizationChannelType = components['schemas']['AuthorizationChannelType']
  export type AuthorizationResponseType = components['schemas']['AuthorizationResponseType']
  export type AuthorizationsPostRequest = components['schemas']['AuthorizationsPostRequest']
  export type BinaryString = components['schemas']['BinaryString']
  export type ConsentRequestChannelType = components['schemas']['ConsentRequestChannelType']
  export type ConsentRequestChannelTypeOTP = components['schemas']['ConsentRequestChannelTypeOTP']
  export type ConsentRequestChannelTypeWeb = components['schemas']['ConsentRequestChannelTypeWeb']
  export type ConsentRequestsIDPutResponseOTP = components['schemas']['ConsentRequestsIDPutResponseOTP']
  export type ConsentRequestsIDPutResponseOTPAuth = components['schemas']['ConsentRequestsIDPutResponseOTPAuth']
  export type ConsentRequestsIDPutResponseWeb = components['schemas']['ConsentRequestsIDPutResponseWeb']
  export type ConsentRequestsIDPutResponseWebAuth = components['schemas']['ConsentRequestsIDPutResponseWebAuth']
  export type ConsentRequestsPostRequest = components['schemas']['ConsentRequestsPostRequest']
  export type ConsentScopeType = components['schemas']['ConsentScopeType']
  export type ConsentsIDGenerateChallengePostRequest = components['schemas']['ConsentsIDGenerateChallengePostRequest']
  export type ConsentsIDPatchResponse = components['schemas']['ConsentsIDPatchResponse']
  export type ConsentsIDPutResponseSigned = components['schemas']['ConsentsIDPutResponseSigned']
  export type ConsentsIDPutResponseUnsigned = components['schemas']['ConsentsIDPutResponseUnsigned']
  export type ConsentsIDPutResponseVerified = components['schemas']['ConsentsIDPutResponseVerified']
  export type ConsentsPostRequest = components['schemas']['ConsentsPostRequest']
  export type ConsentStatusType = components['schemas']['ConsentStatusType']
  export type CorrelationId = components['schemas']['CorrelationId']
  export type Currency = components['schemas']['Currency']
  export type CredentialChallengeSigned = components['schemas']['CredentialChallengeSigned']
  export type CredentialChallengeUnsigned = components['schemas']['CredentialChallengeUnsigned']
  export type CredentialType = components['schemas']['CredentialType']
  export type DateTime = components['schemas']['DateTime']
  export type FspId = components['schemas']['FspId']
  export type Integer = components['schemas']['Integer']
  export type Money = components['schemas']['Money']
  export type Name = components['schemas']['Name']
  export type PartiesTypeIDPutResponse = components['schemas']['PartiesTypeIDPutResponse']
  export type Party = components['schemas']['Party']
  export type QuotesIDPutResponse = components['schemas']['QuotesIDPutResponse']
  export type Scope = components['schemas']['Scope']
  export type SignedCredential = components['schemas']['SignedCredential']
  export type ThirdpartyRequestsTransactionsIDAuthorizationsPostRequest = components['schemas']['ThirdpartyRequestsTransactionsIDAuthorizationsPostRequest']
  export type ThirdpartyRequestsTransactionsIDAuthorizationsPutResponse = components['schemas']['ThirdpartyRequestsTransactionsIDAuthorizationsPutResponse']
  export type ThirdpartyRequestsTransactionsIDPatchResponse = components['schemas']['ThirdpartyRequestsTransactionsIDPatchResponse']
  export type ThirdpartyRequestsTransactionsIDPutResponse = components['schemas']['ThirdpartyRequestsTransactionsIDPutResponse']
  export type ThirdpartyRequestsTransactionsPostRequest = components['schemas']['ThirdpartyRequestsTransactionsPostRequest']
  export type TransactionRequestState = components['schemas']['TransactionRequestState']
  export type TransactionState = components['schemas']['TransactionState']
  export type UnsignedCredential = components['schemas']['UnsignedCredential']
  export type VerifiedCredential = components['schemas']['VerifiedCredential']
}