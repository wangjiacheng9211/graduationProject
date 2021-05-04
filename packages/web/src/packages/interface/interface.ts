export interface MenuInfo {
    key: React.Key;
    keyPath: React.Key[];
    item: React.ReactInstance;
    domEvent: React.MouseEvent<HTMLElement>;
}

export interface RerDataType {
    id: string,
    timeStamp: number,
    name: string,
    desc: string,
    primaryCategory: string,
    followers: number,
    secondaryCategories: string
    apiProvider: string,
    apiEndpoint: string,
    apiPortalHomePage: string,
    docsHomePageURL: string,
    termsOfServiceURL: string,
    supportedRequestFormats: string,
    isThisAnUnofficialAPI: string,
    istheAPIDesignDescriptionNonProprietary: string,
    restrictedAccess: string,
    isThisAHypermediaAPI: string,
    sslSupport: string,
    architecturalStyle: string,
    twitterURL: string,
    authenticationModel: string,
}
export type RenderData = {
    key: string,
    name: string,
    followers: number,
    desc: string,
    action: string
}

export type OptionType = {
    value:string
}
export type RurData = RerDataType[]