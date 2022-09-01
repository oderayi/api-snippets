/* eslint-disable @typescript-eslint/no-namespace */

/** This file is generated by json-schema-generator.js program **/

import { components } from './openapi'

export namespace Types {
  export type TransactionInitiatorType = components['schemas']['TransactionInitiatorType']
  export type PartyIdType = components['schemas']['PartyIdType']
  export type PartyIdentifier = components['schemas']['PartyIdentifier']
  export type PartySubIdOrType = components['schemas']['PartySubIdOrType']
  export type Name = components['schemas']['Name']
  export type FirstName = components['schemas']['FirstName']
  export type MiddleName = components['schemas']['MiddleName']
  export type LastName = components['schemas']['LastName']
  export type DateOfBirth = components['schemas']['DateOfBirth']
  export type MerchantClassificationCode = components['schemas']['MerchantClassificationCode']
  export type FspId = components['schemas']['FspId']
  export type ExtensionKey = components['schemas']['ExtensionKey']
  export type ExtensionValue = components['schemas']['ExtensionValue']
  export type Extension = components['schemas']['Extension']
  export type extensionListEmptiable = components['schemas']['extensionListEmptiable']
  export type transferParty = components['schemas']['transferParty']
  export type AmountType = components['schemas']['AmountType']
  export type Currency = components['schemas']['Currency']
  export type Amount = components['schemas']['Amount']
  export type transferTransactionType = components['schemas']['transferTransactionType']
  export type Note = components['schemas']['Note']
  export type transferRequest = components['schemas']['transferRequest']
  export type CorrelationId = components['schemas']['CorrelationId']
  export type transferStatus = components['schemas']['transferStatus']
  export type Money = components['schemas']['Money']
  export type DateTime = components['schemas']['DateTime']
  export type Latitude = components['schemas']['Latitude']
  export type Longitude = components['schemas']['Longitude']
  export type GeoCode = components['schemas']['GeoCode']
  export type IlpPacket = components['schemas']['IlpPacket']
  export type IlpCondition = components['schemas']['IlpCondition']
  export type ExtensionList = components['schemas']['ExtensionList']
  export type QuotesIDPutResponse = components['schemas']['QuotesIDPutResponse']
  export type IlpFulfilment = components['schemas']['IlpFulfilment']
  export type TransferState = components['schemas']['TransferState']
  export type TransfersIDPutResponse = components['schemas']['TransfersIDPutResponse']
  export type ErrorCode = components['schemas']['ErrorCode']
  export type ErrorDescription = components['schemas']['ErrorDescription']
  export type ErrorInformation = components['schemas']['ErrorInformation']
  export type mojaloopError = components['schemas']['mojaloopError']
  export type transferError = components['schemas']['transferError']
  export type transferResponse = components['schemas']['transferResponse']
  export type errorResponse = components['schemas']['errorResponse']
  export type errorTransferResponse = components['schemas']['errorTransferResponse']
  export type transferStatusResponse = components['schemas']['transferStatusResponse']
  export type transferContinuationAcceptParty = components['schemas']['transferContinuationAcceptParty']
  export type transferContinuationAcceptQuote = components['schemas']['transferContinuationAcceptQuote']
  export type autoAcceptPartyOption = components['schemas']['autoAcceptPartyOption']
  export type bulkPerTransferFeeLimit = components['schemas']['bulkPerTransferFeeLimit']
  export type autoAcceptQuote = components['schemas']['autoAcceptQuote']
  export type bulkTransactionOptions = components['schemas']['bulkTransactionOptions']
  export type PartyIdInfo = components['schemas']['PartyIdInfo']
  export type PartyName = components['schemas']['PartyName']
  export type PartyComplexName = components['schemas']['PartyComplexName']
  export type PartyPersonalInfo = components['schemas']['PartyPersonalInfo']
  export type Party = components['schemas']['Party']
  export type individualTransaction = components['schemas']['individualTransaction']
  export type bulkTransactionRequest = components['schemas']['bulkTransactionRequest']
  export type bulkTransferStatus = components['schemas']['bulkTransferStatus']
  export type individualTransferResult = components['schemas']['individualTransferResult']
  export type bulkTransferResponse = components['schemas']['bulkTransferResponse']
  export type bulkTransferErrorResponse = components['schemas']['bulkTransferErrorResponse']
  export type individualTransactionAccept = components['schemas']['individualTransactionAccept']
  export type bulkTransactionContinuationAcceptParty = components['schemas']['bulkTransactionContinuationAcceptParty']
  export type bulkTransactionContinuationAcceptQuote = components['schemas']['bulkTransactionContinuationAcceptQuote']
  export type partyError = components['schemas']['partyError']
  export type bulkTransactionAcceptPartyErrorResponse = components['schemas']['bulkTransactionAcceptPartyErrorResponse']
  export type quoteError = components['schemas']['quoteError']
  export type bulkTransactionAcceptQuoteErrorResponse = components['schemas']['bulkTransactionAcceptQuoteErrorResponse']
  export type individualTransfer = components['schemas']['individualTransfer']
  export type bulkTransferRequest = components['schemas']['bulkTransferRequest']
  export type individualTransferFulfilment = components['schemas']['individualTransferFulfilment']
  export type bulkTransferStatusResponse = components['schemas']['bulkTransferStatusResponse']
  export type individualQuote = components['schemas']['individualQuote']
  export type bulkQuoteRequest = components['schemas']['bulkQuoteRequest']
  export type individualQuoteResult = components['schemas']['individualQuoteResult']
  export type bulkQuoteResponse = components['schemas']['bulkQuoteResponse']
  export type bulkQuoteErrorResponse = components['schemas']['bulkQuoteErrorResponse']
  export type bulkQuoteStatus = components['schemas']['bulkQuoteStatus']
  export type bulkQuoteStatusResponse = components['schemas']['bulkQuoteStatusResponse']
  export type TransactionScenario = components['schemas']['TransactionScenario']
  export type TransactionSubScenario = components['schemas']['TransactionSubScenario']
  export type TransactionInitiator = components['schemas']['TransactionInitiator']
  export type RefundReason = components['schemas']['RefundReason']
  export type Refund = components['schemas']['Refund']
  export type BalanceOfPayments = components['schemas']['BalanceOfPayments']
  export type TransactionType = components['schemas']['TransactionType']
  export type requestToPayRequest = components['schemas']['requestToPayRequest']
  export type AuthenticationType = components['schemas']['AuthenticationType']
  export type TransactionRequestState = components['schemas']['TransactionRequestState']
  export type requestToPayResponse = components['schemas']['requestToPayResponse']
  export type requestToPayTransferRequest = components['schemas']['requestToPayTransferRequest']
  export type requestToPayTransferResponse = components['schemas']['requestToPayTransferResponse']
  export type transferContinuationAcceptOTP = components['schemas']['transferContinuationAcceptOTP']
  export type accountsRequest = components['schemas']['accountsRequest']
  export type accountCreationStatus = components['schemas']['accountCreationStatus']
  export type accountsCreationState = components['schemas']['accountsCreationState']
  export type accountsResponse = components['schemas']['accountsResponse']
  export type errorAccountsResponse = components['schemas']['errorAccountsResponse']
  export type async2SyncCurrentState = components['schemas']['async2SyncCurrentState']
  export type partiesByIdResponse = components['schemas']['partiesByIdResponse']
  export type QuotesPostRequest = components['schemas']['QuotesPostRequest']
  export type simpleQuotesPostRequest = components['schemas']['simpleQuotesPostRequest']
  export type quotesPostResponse = components['schemas']['quotesPostResponse']
  export type errorQuotesResponse = components['schemas']['errorQuotesResponse']
  export type TransfersPostRequest = components['schemas']['TransfersPostRequest']
  export type simpleTransfersPostRequest = components['schemas']['simpleTransfersPostRequest']
  export type simpleTransfersPostResponse = components['schemas']['simpleTransfersPostResponse']
  export type errorSimpleTransfersResponse = components['schemas']['errorSimpleTransfersResponse']
}
