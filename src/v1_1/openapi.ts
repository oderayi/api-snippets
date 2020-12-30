/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/health": {
    /**
     * A valid OpenApi3 specification requires `paths` to be defined.
     */
    get: {
      responses: {
        "202": unknown;
        "400": unknown;
        "401": unknown;
        "403": unknown;
        "404": unknown;
        "405": unknown;
        "406": unknown;
        "501": unknown;
        "503": unknown;
      };
    };
  };
}

export interface operations {}

export interface components {
  parameters: {
    /**
     * The `Accept` header field indicates the version of the API the client
     * would like the server to use.
     */
    Accept: string;
    /**
     * The `Content-Length` header field indicates the anticipated size of the
     * payload body. Only sent if there is a body.
     * **Note:** The API supports a maximum size of 5242880 bytes (5 Megabytes).
     */
    "Content-Length": number;
    /**
     * The `Content-Type` header indicates the specific version of the API used
     * to send the payload body.
     */
    "Content-Type": string;
    /**
     * The `Date` header field indicates the date when the request was sent.
     */
    Date: string;
    /**
     * The `FSPIOP-Destination` header field is a non-HTTP standard field used by
     * the API for HTTP header based routing of requests and responses to the
     * destination. The field should be set by the original sender of the request
     * (if known), so that any entities between the client and the server do not
     * need to parse the payload for routing purposes.
     */
    "FSPIOP-Destination": string;
    /**
     * The `FSPIOP-Encryption` header field is a non-HTTP standard field used by
     * the API for applying end-to-end encryption of the request.
     */
    "FSPIOP-Encryption": string;
    /**
     * The `FSPIOP-HTTP-Method` header field is a non-HTTP standard field used by
     * the API for signature verification, should contain the service HTTP method.
     * Required if signature verification is used, for more information, see
     * [the API Signature document](https://github.com/mojaloop/docs/tree/master/Specification%20Document%20Set).
     */
    "FSPIOP-HTTP-Method": string;
    /**
     * The `FSPIOP-Signature` header field is a non-HTTP standard field used by the
     * API for applying an end-to-end request signature.
     */
    "FSPIOP-Signature": string;
    /**
     * The `FSPIOP-Source` header field is a non-HTTP standard field
     * used by the API for identifying the sender of the HTTP request.
     * The field should be set by the original sender of the request.
     * Required for routing and signature verification
     * (see header field `FSPIOP-Signature`).
     */
    "FSPIOP-Source": string;
    /**
     * The `FSPIOP-URI` header field is a non-HTTP standard field used by the API
     * for signature verification, should contain the service URI. Required if
     * signature verification is used, for more information, see
     * [the API Signature document](https://github.com/mojaloop/docs/tree/master/Specification%20Document%20Set).
     */
    "FSPIOP-URI": string;
    /**
     * The identifier value.
     */
    ID: string;
    /**
     * A sub-identifier of the party identifier, or a sub-type of the party
     * identifier's type. For example, `PASSPORT`, `DRIVING_LICENSE`.
     */
    SubId: string;
    /**
     * The type of the party identifier. For example, `MSISDN`, `PERSONAL_ID`.
     */
    Type: string;
    /**
     * The `X-Forwarded-For` header field is an unofficially accepted standard used
     * for informational purposes of the originating client IP address, as a
     * request might pass multiple proxies, firewalls, and so on. Multiple
     * `X-Forwarded-For` values should be expected and supported by implementers
     * of the API.
     * **Note:** An alternative to `X-Forwarded-For` is defined in
     * [RFC 7239](https://tools.ietf.org/html/rfc7239).
     * However, to this point RFC 7239 is less-used and supported than `X-Forwarded-For`.
     */
    "X-Forwarded-For": string;
  };
  schemas: {
    /**
     * The API data type Amount is a JSON String in a canonical format that is
     * restricted by a regular expression for interoperability reasons.
     * This pattern does not allow any trailing zeroes at all, but allows an amount
     * without a minor currency unit. It also only allows four digits in the minor
     * currency unit; a negative value is not allowed. Using more than 18 digits
     * in the major currency unit is not allowed.
     */
    Amount: string;
    /**
     * Below are the allowed values for the enumeration AmountType.
     * - SEND - Amount the Payer would like to send, that is, the amount that should
     * be withdrawn from the Payer account including any fees.
     * - RECEIVE - Amount the Payer would like the Payee to receive, that is,
     * the amount that should be sent to the receiver exclusive of any fees.
     */
    AmountType: "SEND" | "RECEIVE";
    /**
     * Data model for the complex type AuthenticationInfo.
     */
    AuthenticationInfo: {
      authentication: components["schemas"]["AuthenticationType"];
      authenticationValue: components["schemas"]["AuthenticationValue"];
    };
    /**
     * Below are the allowed values for the enumeration AuthenticationType.
     * - OTP - One-time password generated by the Payer FSP.
     * - QRCODE - QR code used as One Time Password.
     */
    AuthenticationType: "OTP" | "QRCODE";
    /**
     * Contains the authentication value. The format depends on the authentication
     * type used in the AuthenticationInfo complex type.
     */
    AuthenticationValue:
      | components["schemas"]["OtpValue"]
      | components["schemas"]["QRCODE"];
    /**
     * Below are the allowed values for the enumeration.
     * - ENTERED - Consumer entered the authentication value.
     * - REJECTED - Consumer rejected the transaction.
     * - RESEND - Consumer requested to resend the authentication value.
     */
    AuthorizationResponse: "ENTERED" | "REJECTED" | "RESEND";
    /**
     * The object sent in the PUT /authorizations/{ID} callback.
     */
    AuthorizationsIDPutResponse: {
      authenticationInfo?: components["schemas"]["AuthenticationInfo"];
      responseType: components["schemas"]["AuthorizationResponse"];
    };
    /**
     * (BopCode) The API data type [BopCode](https://www.imf.org/external/np/sta/bopcode/)
     * is a JSON String of 3 characters, consisting of digits only.
     * Negative numbers are not allowed. A leading zero is not allowed.
     */
    BalanceOfPayments: string;
    /**
     * The API data type BinaryString is a JSON String.
     * The string is a base64url  encoding of a string of raw bytes,
     * where padding (character ‘=’) is added at the end of the data if
     * needed to ensure that the string is a multiple of 4 characters.
     * The length restriction indicates the allowed number of characters.
     */
    BinaryString: string;
    /**
     * The API data type BinaryString32 is a fixed size version of the API data
     * type BinaryString, where the raw underlying data is always of 32 bytes.
     * The data type BinaryString32 should not use a padding character as the
     * size of the underlying data is fixed.
     */
    BinaryString32: string;
    /**
     * The object sent in the PUT /bulkQuotes/{ID} callback.
     */
    BulkQuotesIDPutResponse: {
      /**
       * Fees for each individual transaction, if any of them are charged per transaction.
       */
      individualQuoteResults?: components["schemas"]["IndividualQuoteResult"][];
      expiration: components["schemas"]["DateTime"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * The object sent in the POST /bulkQuotes request.
     */
    BulkQuotesPostRequest: {
      bulkQuoteId: components["schemas"]["CorrelationId"];
      payer: components["schemas"]["Party"];
      geoCode?: components["schemas"]["GeoCode"];
      expiration?: components["schemas"]["DateTime"];
      individualQuotes: components["schemas"]["IndividualQuote"][];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * The object sent in the PUT /bulkTransfers/{ID} callback.
     */
    BulkTransfersIDPutResponse: {
      completedTimestamp?: components["schemas"]["DateTime"];
      /**
       * List of IndividualTransferResult elements.
       */
      individualTransferResults?: components["schemas"]["IndividualTransferResult"][];
      bulkTransferState: components["schemas"]["BulkTransferState"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * The object sent in the POST /bulkTransfers request.
     */
    BulkTransfersPostRequest: {
      bulkTransferId: components["schemas"]["CorrelationId"];
      bulkQuoteId: components["schemas"]["CorrelationId"];
      payerFsp: components["schemas"]["FspId"];
      payeeFsp: components["schemas"]["FspId"];
      /**
       * List of IndividualTransfer elements.
       */
      individualTransfers: components["schemas"]["IndividualTransfer"][];
      expiration: components["schemas"]["DateTime"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * Below are the allowed values for the enumeration.
     * - RECEIVED - Payee FSP has received the bulk transfer from the Payer FSP.
     * - PENDING - Payee FSP has validated the bulk transfer.
     * - ACCEPTED - Payee FSP has accepted to process the bulk transfer.
     * - PROCESSING - Payee FSP has started to transfer fund to the Payees.
     * - COMPLETED - Payee FSP has completed transfer of funds to the Payees.
     * - REJECTED - Payee FSP has rejected to process the bulk transfer.
     */
    BulkTransferState:
      | "RECEIVED"
      | "PENDING"
      | "ACCEPTED"
      | "PROCESSING"
      | "COMPLETED"
      | "REJECTED";
    /**
     * Any code/token returned by the Payee FSP (TokenCode Type).
     */
    Code: string;
    /**
     * Identifier that correlates all messages of the same sequence.
     * The API data type UUID (Universally Unique Identifier) is a JSON String
     * in canonical format, conforming to [RFC 4122](https://tools.ietf.org/html/rfc4122),
     * that is restricted by a regular expression for interoperability reasons.
     * A UUID is always 36 characters long, 32 hexadecimal symbols and 4 dashes (‘-‘).
     */
    CorrelationId: string;
    /**
     * The currency codes defined in
     * [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)
     * as three-letter alphabetic codes are used as the standard naming representation for currencies.
     */
    Currency:
      | "AED"
      | "AFN"
      | "ALL"
      | "AMD"
      | "ANG"
      | "AOA"
      | "ARS"
      | "AUD"
      | "AWG"
      | "AZN"
      | "BAM"
      | "BBD"
      | "BDT"
      | "BGN"
      | "BHD"
      | "BIF"
      | "BMD"
      | "BND"
      | "BOB"
      | "BRL"
      | "BSD"
      | "BTN"
      | "BWP"
      | "BYN"
      | "BZD"
      | "CAD"
      | "CDF"
      | "CHF"
      | "CLP"
      | "CNY"
      | "COP"
      | "CRC"
      | "CUC"
      | "CUP"
      | "CVE"
      | "CZK"
      | "DJF"
      | "DKK"
      | "DOP"
      | "DZD"
      | "EGP"
      | "ERN"
      | "ETB"
      | "EUR"
      | "FJD"
      | "FKP"
      | "GBP"
      | "GEL"
      | "GGP"
      | "GHS"
      | "GIP"
      | "GMD"
      | "GNF"
      | "GTQ"
      | "GYD"
      | "HKD"
      | "HNL"
      | "HRK"
      | "HTG"
      | "HUF"
      | "IDR"
      | "ILS"
      | "IMP"
      | "INR"
      | "IQD"
      | "IRR"
      | "ISK"
      | "JEP"
      | "JMD"
      | "JOD"
      | "JPY"
      | "KES"
      | "KGS"
      | "KHR"
      | "KMF"
      | "KPW"
      | "KRW"
      | "KWD"
      | "KYD"
      | "KZT"
      | "LAK"
      | "LBP"
      | "LKR"
      | "LRD"
      | "LSL"
      | "LYD"
      | "MAD"
      | "MDL"
      | "MGA"
      | "MKD"
      | "MMK"
      | "MNT"
      | "MOP"
      | "MRO"
      | "MUR"
      | "MVR"
      | "MWK"
      | "MXN"
      | "MYR"
      | "MZN"
      | "NAD"
      | "NGN"
      | "NIO"
      | "NOK"
      | "NPR"
      | "NZD"
      | "OMR"
      | "PAB"
      | "PEN"
      | "PGK"
      | "PHP"
      | "PKR"
      | "PLN"
      | "PYG"
      | "QAR"
      | "RON"
      | "RSD"
      | "RUB"
      | "RWF"
      | "SAR"
      | "SBD"
      | "SCR"
      | "SDG"
      | "SEK"
      | "SGD"
      | "SHP"
      | "SLL"
      | "SOS"
      | "SPL"
      | "SRD"
      | "STD"
      | "SVC"
      | "SYP"
      | "SZL"
      | "THB"
      | "TJS"
      | "TMT"
      | "TND"
      | "TOP"
      | "TRY"
      | "TTD"
      | "TVD"
      | "TWD"
      | "TZS"
      | "UAH"
      | "UGX"
      | "USD"
      | "UYU"
      | "UZS"
      | "VEF"
      | "VND"
      | "VUV"
      | "WST"
      | "XAF"
      | "XCD"
      | "XDR"
      | "XOF"
      | "XPF"
      | "YER"
      | "ZAR"
      | "ZMW"
      | "ZWD";
    /**
     * The API data type Date is a JSON String in a lexical format that is
     * restricted by a regular expression for interoperability reasons.
     * This format, as specified in ISO 8601, contains a date only.
     * A more readable version of the format is yyyy-MM-dd.
     * Examples are \"1982-05-23\", \"1987-08-05”.
     */
    Date: string;
    /**
     * Date of Birth of the Party.
     */
    DateOfBirth: string;
    /**
     * The API data type DateTime is a JSON String in a lexical format that is
     * restricted by a regular expression for interoperability reasons.
     * The format is according to
     * [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html),
     * expressed in a combined date, time and time zone format.
     * A more readable version of the format is yyyy-MM-ddTHH:mm:ss.SSS[-HH:MM].
     * Examples are \"2016-05-24T08:38:08.699-04:00\", \"2016-05-24T08:38:08.699Z\"
     * (where Z indicates Zulu time zone, same as UTC).
     */
    DateTime: string;
    /**
     * The API data type ErrorCode is a JSON String of four characters,
     * consisting of digits only. Negative numbers are not allowed.
     * A leading zero is not allowed. Each error code in the API is a
     * four-digit number, for example, 1234, where the first number
     * (1 in the example) represents the high-level error category,
     * the second number (2 in the example) represents the low-level error category,
     * and the last two numbers (34 in the example) represent the specific error.
     */
    ErrorCode: string;
    /**
     * Error description string.
     */
    ErrorDescription: string;
    /**
     * Data model for the complex type ErrorInformation.
     */
    ErrorInformation: {
      errorCode: components["schemas"]["ErrorCode"];
      errorDescription: components["schemas"]["ErrorDescription"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * Data model for the complex type object that contains ErrorInformation.
     */
    ErrorInformationObject: {
      errorInformation: components["schemas"]["ErrorInformation"];
    };
    /**
     * Data model for the complex type object that contains an optional element ErrorInformation used along with 4xx and 5xx responses.
     */
    ErrorInformationResponse: {
      errorInformation?: components["schemas"]["ErrorInformation"];
    };
    /**
     * Data model for the complex type Extension.
     */
    Extension: {
      key: components["schemas"]["ExtensionKey"];
      value: components["schemas"]["ExtensionValue"];
    };
    /**
     * Extension key.
     */
    ExtensionKey: string;
    /**
     * Data model for the complex type ExtensionList.
     * An optional list of extensions, specific to deployment.
     */
    ExtensionList: {
      /**
       * Number of Extension elements.
       */
      extension: components["schemas"]["Extension"][];
    };
    /**
     * Extension value.
     */
    ExtensionValue: string;
    /**
     * First name of the Party (Name Type).
     */
    FirstName: string;
    /**
     * FSP identifier.
     */
    FspId: string;
    /**
     * Data model for the complex type GeoCode.
     * Indicates the geographic location from where the transaction was initiated.
     */
    GeoCode: {
      latitude: components["schemas"]["Latitude"];
      longitude: components["schemas"]["Longitude"];
    };
    /**
     * Condition that must be attached to the transfer by the Payer.
     */
    IlpCondition: string;
    /**
     * Fulfilment that must be attached to the transfer by the Payee.
     */
    IlpFulfilment: string;
    /**
     * Information for recipient (transport layer information).
     */
    IlpPacket: string;
    /**
     * Data model for the complex type IndividualQuote.
     */
    IndividualQuote: {
      quoteId: components["schemas"]["CorrelationId"];
      transactionId: components["schemas"]["CorrelationId"];
      payee: components["schemas"]["Party"];
      amountType: components["schemas"]["AmountType"];
      amount: components["schemas"]["Money"];
      fees?: components["schemas"]["Money"];
      transactionType: components["schemas"]["TransactionType"];
      note?: components["schemas"]["Note"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * Data model for the complex type IndividualQuoteResult.
     */
    IndividualQuoteResult: {
      quoteId: components["schemas"]["CorrelationId"];
      payee?: components["schemas"]["Party"];
      transferAmount?: components["schemas"]["Money"];
      payeeReceiveAmount?: components["schemas"]["Money"];
      payeeFspFee?: components["schemas"]["Money"];
      payeeFspCommission?: components["schemas"]["Money"];
      ilpPacket?: components["schemas"]["IlpPacket"];
      condition?: components["schemas"]["IlpCondition"];
      errorInformation?: components["schemas"]["ErrorInformation"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * Data model for the complex type IndividualTransfer.
     */
    IndividualTransfer: {
      transferId: components["schemas"]["CorrelationId"];
      transferAmount: components["schemas"]["Money"];
      ilpPacket: components["schemas"]["IlpPacket"];
      condition: components["schemas"]["IlpCondition"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * Data model for the complex type IndividualTransferResult.
     */
    IndividualTransferResult: {
      transferId: components["schemas"]["CorrelationId"];
      fulfilment?: components["schemas"]["IlpFulfilment"];
      errorInformation?: components["schemas"]["ErrorInformation"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * The API data type Integer is a JSON String consisting of digits only.
     * Negative numbers and leading zeroes are not allowed.
     * The data type is always limited to a specific number of digits.
     */
    Integer: string;
    /**
     * Last name of the Party (Name Type).
     */
    LastName: string;
    /**
     * The API data type Latitude is a JSON String in a lexical format that is
     * restricted by a regular expression for interoperability reasons.
     */
    Latitude: string;
    /**
     * The API data type Longitude is a JSON String in a lexical format that
     * is restricted by a regular expression for interoperability reasons.
     */
    Longitude: string;
    /**
     * A limited set of pre-defined numbers. This list would be a limited set of
     * numbers identifying a set of popular merchant types like School Fees,
     * Pubs and Restaurants, Groceries, etc.
     */
    MerchantClassificationCode: string;
    /**
     * Middle name of the Party (Name Type).
     */
    MiddleName: string;
    /**
     * Data model for the complex type Money.
     */
    Money: {
      currency: components["schemas"]["Currency"];
      amount: components["schemas"]["Amount"];
    };
    /**
     * The API data type Name is a JSON String, restricted by a regular expression
     * to avoid characters which are generally not used in a name.
     * Regular Expression - The regular expression for restricting the
     * Name type is \"^(?!\\s*$)[\\w .,'-]{1,128}$\". The restriction does not
     * allow a string consisting of whitespace only, all Unicode characters are
     * allowed, as well as the period (.) (apostrophe (‘), dash (-), comma (,)
     * and space characters ( ).
     * **Note:** In some programming languages,
     * Unicode support must be specifically enabled. For example, if Java is used,
     * the flag UNICODE_CHARACTER_CLASS must be enabled to allow Unicode characters.
     */
    Name: string;
    /**
     * Memo assigned to transaction.
     */
    Note: string;
    /**
     * The API data type OtpValue is a JSON String of 3 to 10 characters,
     * consisting of digits only. Negative numbers are not allowed.
     * One or more leading zeros are allowed.
     */
    OtpValue: string;
    /**
     * The object sent in the PUT /participants/{ID} callback.
     */
    ParticipantsIDPutResponse: {
      /**
       * List of PartyResult elements that were either created or failed to be created.
       */
      partyList: components["schemas"]["PartyResult"][];
      currency?: components["schemas"]["Currency"];
    };
    /**
     * The object sent in the POST /participants request.
     */
    ParticipantsPostRequest: {
      requestId: components["schemas"]["CorrelationId"];
      /**
       * List of PartyIdInfo elements that the client would like to update
       * or create FSP information about.
       */
      partyList: components["schemas"]["PartyIdInfo"][];
      currency?: components["schemas"]["Currency"];
    };
    /**
     * The object sent in the PUT /participants/{Type}/{ID}/{SubId} and
     * /participants/{Type}/{ID} callbacks.
     */
    ParticipantsTypeIDPutResponse: { fspId?: components["schemas"]["FspId"] };
    /**
     * The object sent in the POST /participants/{Type}/{ID}/{SubId} and
     * /participants/{Type}/{ID} requests.
     */
    ParticipantsTypeIDSubIDPostRequest: {
      fspId: components["schemas"]["FspId"];
      currency?: components["schemas"]["Currency"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * The object sent in the PUT /parties/{Type}/{ID} callback.
     */
    PartiesTypeIDPutResponse: { party: components["schemas"]["Party"] };
    /**
     * Data model for the complex type Party.
     */
    Party: {
      partyIdInfo: components["schemas"]["PartyIdInfo"];
      merchantClassificationCode?: components["schemas"]["MerchantClassificationCode"];
      name?: components["schemas"]["PartyName"];
      personalInfo?: components["schemas"]["PartyPersonalInfo"];
    };
    /**
     * Data model for the complex type PartyComplexName.
     */
    PartyComplexName: {
      firstName?: components["schemas"]["FirstName"];
      middleName?: components["schemas"]["MiddleName"];
      lastName?: components["schemas"]["LastName"];
    };
    /**
     * Identifier of the Party.
     */
    PartyIdentifier: string;
    /**
     * Data model for the complex type PartyIdInfo.
     */
    PartyIdInfo: {
      partyIdType: components["schemas"]["PartyIdType"];
      partyIdentifier: components["schemas"]["PartyIdentifier"];
      partySubIdOrType?: components["schemas"]["PartySubIdOrType"];
      fspId?: components["schemas"]["FspId"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * Below are the allowed values for the enumeration.
     * - MSISDN - An MSISDN (Mobile Station International Subscriber Directory
     * Number, that is, the phone number) is used as reference to a participant.
     * The MSISDN identifier should be in international format according to the
     * [ITU-T E.164 standard](https://www.itu.int/rec/T-REC-E.164/en).
     * Optionally, the MSISDN may be prefixed by a single plus sign, indicating the
     * international prefix.
     * - EMAIL - An email is used as reference to a
     * participant. The format of the email should be according to the informational
     * [RFC 3696](https://tools.ietf.org/html/rfc3696).
     * - PERSONAL_ID - A personal identifier is used as reference to a participant.
     * Examples of personal identification are passport number, birth certificate
     * number, and national registration number. The identifier number is added in
     * the PartyIdentifier element. The personal identifier type is added in the
     * PartySubIdOrType element.
     * - BUSINESS - A specific Business (for example, an organization or a company)
     * is used as reference to a participant. The BUSINESS identifier can be in any
     * format. To make a transaction connected to a specific username or bill number
     * in a Business, the PartySubIdOrType element should be used.
     * - DEVICE - A specific device (for example, a POS or ATM) ID connected to a
     * specific business or organization is used as reference to a Party.
     * For referencing a specific device under a specific business or organization,
     * use the PartySubIdOrType element.
     * - ACCOUNT_ID - A bank account number or FSP account ID should be used as
     * reference to a participant. The ACCOUNT_ID identifier can be in any format,
     * as formats can greatly differ depending on country and FSP.
     * - IBAN - A bank account number or FSP account ID is used as reference to a
     * participant. The IBAN identifier can consist of up to 34 alphanumeric
     * characters and should be entered without whitespace.
     * - ALIAS An alias is used as reference to a participant. The alias should be
     * created in the FSP as an alternative reference to an account owner.
     * Another example of an alias is a username in the FSP system.
     * The ALIAS identifier can be in any format. It is also possible to use the
     * PartySubIdOrType element for identifying an account under an Alias defined
     * by the PartyIdentifier.
     */
    PartyIdType:
      | "MSISDN"
      | "EMAIL"
      | "PERSONAL_ID"
      | "BUSINESS"
      | "DEVICE"
      | "ACCOUNT_ID"
      | "IBAN"
      | "ALIAS";
    /**
     * Name of the Party. Could be a real name or a nickname.
     */
    PartyName: string;
    /**
     * Data model for the complex type PartyPersonalInfo.
     */
    PartyPersonalInfo: {
      complexName?: components["schemas"]["PartyComplexName"];
      dateOfBirth?: components["schemas"]["DateOfBirth"];
    };
    /**
     * Data model for the complex type PartyResult.
     */
    PartyResult: {
      partyId: components["schemas"]["PartyIdInfo"];
      errorInformation?: components["schemas"]["ErrorInformation"];
    };
    /**
     * Either a sub-identifier of a PartyIdentifier, or a sub-type of the
     * PartyIdType, normally a PersonalIdentifierType.
     */
    PartySubIdOrType: string;
    /**
     * Below are the allowed values for the enumeration.
     * - PASSPORT - A passport number is used as reference to a Party.
     * - NATIONAL_REGISTRATION - A national registration number is used as reference to a Party.
     * - DRIVING_LICENSE - A driving license is used as reference to a Party.
     * - ALIEN_REGISTRATION - An alien registration number is used as reference to a Party.
     * - NATIONAL_ID_CARD - A national ID card number is used as reference to a Party.
     * - EMPLOYER_ID - A tax identification number is used as reference to a Party.
     * - TAX_ID_NUMBER - A tax identification number is used as reference to a Party.
     * - SENIOR_CITIZENS_CARD - A senior citizens card number is used as reference to a Party.
     * - MARRIAGE_CERTIFICATE - A marriage certificate number is used as reference to a Party.
     * - HEALTH_CARD - A health card number is used as reference to a Party.
     * - VOTERS_ID - A voter’s identification number is used as reference to a Party.
     * - UNITED_NATIONS - An UN (United Nations) number is used as reference to a Party.
     * - OTHER_ID - Any other type of identification type number is used as reference to a Party.
     */
    PersonalIdentifierType:
      | "PASSPORT"
      | "NATIONAL_REGISTRATION"
      | "DRIVING_LICENSE"
      | "ALIEN_REGISTRATION"
      | "NATIONAL_ID_CARD"
      | "EMPLOYER_ID"
      | "TAX_ID_NUMBER"
      | "SENIOR_CITIZENS_CARD"
      | "MARRIAGE_CERTIFICATE"
      | "HEALTH_CARD"
      | "VOTERS_ID"
      | "UNITED_NATIONS"
      | "OTHER_ID";
    /**
     * QR code used as a One Time Password.
     */
    QRCODE: string;
    /**
     * The object sent in the PUT /quotes/{ID} callback.
     */
    QuotesIDPutResponse: {
      transferAmount: components["schemas"]["Money"];
      payeeReceiveAmount?: components["schemas"]["Money"];
      payeeFspFee?: components["schemas"]["Money"];
      payeeFspCommission?: components["schemas"]["Money"];
      expiration: components["schemas"]["DateTime"];
      geoCode?: components["schemas"]["GeoCode"];
      ilpPacket: components["schemas"]["IlpPacket"];
      condition: components["schemas"]["IlpCondition"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * The object sent in the POST /quotes request.
     */
    QuotesPostRequest: {
      quoteId: components["schemas"]["CorrelationId"];
      transactionId: components["schemas"]["CorrelationId"];
      transactionRequestId?: components["schemas"]["CorrelationId"];
      payee: components["schemas"]["Party"];
      payer: components["schemas"]["Party"];
      amountType: components["schemas"]["AmountType"];
      amount: components["schemas"]["Money"];
      fees?: components["schemas"]["Money"];
      transactionType: components["schemas"]["TransactionType"];
      geoCode?: components["schemas"]["GeoCode"];
      note?: components["schemas"]["Note"];
      expiration?: components["schemas"]["DateTime"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * Data model for the complex type Refund.
     */
    Refund: {
      originalTransactionId: components["schemas"]["CorrelationId"];
      refundReason?: components["schemas"]["RefundReason"];
    };
    /**
     * Reason for the refund.
     */
    RefundReason: string;
    /**
     * The API data type TokenCode is a JSON String between 4 and 32 characters,
     * consisting of digits or upper- or lowercase characters from a to z.
     */
    TokenCode: string;
    /**
     * Data model for the complex type Transaction. The Transaction type is used to
     * carry end-to-end data between the Payer FSP and the Payee FSP in the ILP
     * Packet. Both the transactionId and the quoteId in the data model are decided
     * by the Payer FSP in the POST /quotes request.
     */
    Transaction: {
      transactionId: components["schemas"]["CorrelationId"];
      quoteId: components["schemas"]["CorrelationId"];
      payee: components["schemas"]["Party"];
      payer: components["schemas"]["Party"];
      amount: components["schemas"]["Money"];
      transactionType: components["schemas"]["TransactionType"];
      note?: components["schemas"]["Note"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * Below are the allowed values for the enumeration.
     * - PAYER - Sender of funds is initiating the transaction.
     * The account to send from is either owned by the Payer or is connected to the
     * Payer in some way.
     * - PAYEE - Recipient of the funds is initiating the transaction by sending a
     * transaction request. The Payer must approve the transaction, either
     * automatically by a pre-generated OTP or by pre-approval of the Payee,
     * or by manually approving in his or her own Device.
     */
    TransactionInitiator: "PAYER" | "PAYEE";
    /**
     * Below are the allowed values for the enumeration.
     * - CONSUMER - Consumer is the initiator of the transaction.
     * - AGENT - Agent is the initiator of the transaction.
     * - BUSINESS - Business is the initiator of the transaction.
     * - DEVICE - Device is the initiator of the transaction.
     */
    TransactionInitiatorType: "CONSUMER" | "AGENT" | "BUSINESS" | "DEVICE";
    /**
     * The object sent in the PUT /transactionRequests/{ID} callback.
     */
    TransactionRequestsIDPutResponse: {
      transactionId?: components["schemas"]["CorrelationId"];
      transactionRequestState: components["schemas"]["TransactionRequestState"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * The object sent in the POST /transactionRequests request.
     */
    TransactionRequestsPostRequest: {
      transactionRequestId: components["schemas"]["CorrelationId"];
      payee: components["schemas"]["Party"];
      payer: components["schemas"]["PartyIdInfo"];
      amount: components["schemas"]["Money"];
      transactionType: components["schemas"]["TransactionType"];
      note?: components["schemas"]["Note"];
      geoCode?: components["schemas"]["GeoCode"];
      authenticationType?: components["schemas"]["AuthenticationType"];
      expiration?: components["schemas"]["DateTime"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * Below are the allowed values for the enumeration.
     * - RECEIVED - Payer FSP has received the transaction from the Payee FSP.
     * - PENDING - Payer FSP has sent the transaction request to the Payer.
     * - ACCEPTED - Payer has approved the transaction.
     * - REJECTED - Payer has rejected the transaction.
     */
    TransactionRequestState: "RECEIVED" | "PENDING" | "ACCEPTED" | "REJECTED";
    /**
     * Below are the allowed values for the enumeration.
     * - DEPOSIT - Used for performing a Cash-In (deposit) transaction.
     * In a normal scenario, electronic funds are transferred from a
     * Business account to a Consumer account, and physical cash is given
     * from the Consumer to the Business User.
     * - WITHDRAWAL - Used for performing a Cash-Out (withdrawal) transaction.
     * In a normal scenario, electronic funds are transferred from a Consumer’s
     * account to a Business account, and physical cash is given from the Business
     * User to the Consumer.
     * - TRANSFER - Used for performing a P2P (Peer to Peer, or Consumer to Consumer)
     * transaction.
     * - PAYMENT - Usually used for performing a transaction from a Consumer to a
     * Merchant or Organization, but could also be for a B2B (Business to Business)
     * payment. The transaction could be online for a purchase in an Internet store,
     * in a physical store where both the Consumer and Business User are present, a
     * bill payment, a donation, and so on.
     * - REFUND - Used for performing a refund of transaction.
     */
    TransactionScenario:
      | "DEPOSIT"
      | "WITHDRAWAL"
      | "TRANSFER"
      | "PAYMENT"
      | "REFUND";
    /**
     * The object sent in the PUT /transactions/{ID} callback.
     */
    TransactionsIDPutResponse: {
      completedTimestamp?: components["schemas"]["DateTime"];
      transactionState: components["schemas"]["TransactionState"];
      code?: components["schemas"]["Code"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * Below are the allowed values for the enumeration.
     * - RECEIVED - Payee FSP has received the transaction from the Payer FSP.
     * - PENDING - Payee FSP has validated the transaction.
     * - COMPLETED - Payee FSP has successfully performed the transaction.
     * - REJECTED - Payee FSP has failed to perform the transaction.
     */
    TransactionState: "RECEIVED" | "PENDING" | "COMPLETED" | "REJECTED";
    /**
     * Possible sub-scenario, defined locally within the scheme (UndefinedEnum Type).
     */
    TransactionSubScenario: string;
    /**
     * Data model for the complex type TransactionType.
     */
    TransactionType: {
      scenario: components["schemas"]["TransactionScenario"];
      subScenario?: components["schemas"]["TransactionSubScenario"];
      initiator: components["schemas"]["TransactionInitiator"];
      initiatorType: components["schemas"]["TransactionInitiatorType"];
      refundInfo?: components["schemas"]["Refund"];
      balanceOfPayments?: components["schemas"]["BalanceOfPayments"];
    };
    /**
     * The object sent in the PUT /transfers/{ID} callback.
     */
    TransfersIDPutResponse: {
      fulfilment?: components["schemas"]["IlpFulfilment"];
      completedTimestamp?: components["schemas"]["DateTime"];
      transferState: components["schemas"]["TransferState"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * The object sent in the POST /transfers request.
     */
    TransfersPostRequest: {
      transferId: components["schemas"]["CorrelationId"];
      payeeFsp: components["schemas"]["FspId"];
      payerFsp: components["schemas"]["FspId"];
      amount: components["schemas"]["Money"];
      ilpPacket: components["schemas"]["IlpPacket"];
      condition: components["schemas"]["IlpCondition"];
      expiration: components["schemas"]["DateTime"];
      extensionList?: components["schemas"]["ExtensionList"];
    };
    /**
     * Below are the allowed values for the enumeration.
     * - RECEIVED - Next ledger has received the transfer.
     * - RESERVED - Next ledger has reserved the transfer.
     * - COMMITTED - Next ledger has successfully performed the transfer.
     * - ABORTED - Next ledger has aborted the transfer due to a rejection or
     * failure to perform the transfer.
     */
    TransferState: "RECEIVED" | "RESERVED" | "COMMITTED" | "ABORTED";
    /**
     * The API data type UndefinedEnum is a JSON String consisting of 1 to 32
     * uppercase characters including an underscore character (_).
     */
    UndefinedEnum: string;
  };
  responses: {
    /**
     * OK
     */
    "200": { [key: string]: any };
    /**
     * Accepted
     */
    "202": { [key: string]: any };
    /**
     * Bad Request
     */
    "400": { [key: string]: any };
    /**
     * Unauthorized
     */
    "401": { [key: string]: any };
    /**
     * Forbidden
     */
    "403": { [key: string]: any };
    /**
     * Not Found
     */
    "404": { [key: string]: any };
    /**
     * Method Not Allowed
     */
    "405": { [key: string]: any };
    /**
     * Not Acceptable
     */
    "406": { [key: string]: any };
    /**
     * Not Implemented
     */
    "501": { [key: string]: any };
    /**
     * Service Unavailable
     */
    "503": { [key: string]: any };
  };
}
