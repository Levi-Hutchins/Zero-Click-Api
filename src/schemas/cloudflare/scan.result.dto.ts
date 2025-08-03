export interface ConsoleMessage {
  level: string;
  source: string;
  text: string;
  url: string;
}

export interface Cookie {
  domain: string;
  expires: number;
  httpOnly: boolean;
  name: string;
  path: string;
  priority: string;
  sameParty: boolean;
  secure: boolean;
  session: boolean;
  size: number;
  sourcePort: number;
  sourceScheme: string;
  value: string;
}

export interface GlobalVar {
  prop: string;
  type: string;
}

export interface Link {
  href: string;
  text: string;
}

export interface PerformanceEntry {
  duration: number;
  entryType: string;
  name: string;
  startTime: number;
}

export interface RequestInitiator {
  host: string;
  type: string;
  url: string;
}

export interface RequestHeaders {
  [key: string]: string;
}

export interface Request {
  documentURL: string;
  hasUserGesture: boolean;
  initiator: RequestInitiator;
  redirectHasExtraInfo: boolean;
  request: {
    initialPriority: string;
    isSameSite: boolean;
    method: string;
    mixedContentType: string;
    referrerPolicy: string;
    url: string;
    headers: RequestHeaders;
  };
  requestId: string;
  type: string;
  wallTime: number;
  frameId: string;
  loaderId: string;
  primaryRequest: boolean;
  redirectResponse: ResponseDetails;
}

export interface ResponseDetails {
  charset: string;
  mimeType: string;
  protocol: string;
  remoteIPAddress: string;
  remotePort: number;
  securityHeaders: SecurityHeader[];
  securityState: string;
  status: number;
  statusText: string;
  url: string;
  headers: RequestHeaders;
}

export interface ASN {
  asn: string;
  country: string;
  description: string;
  ip: string;
  name: string;
  org: string;
}

export interface GeoIP {
  city: string;
  country: string;
  country_name: string;
  geonameId?: string;
  ll: number[];
  region: string;
}

export interface SecurityHeader {
  name: string;
  value: string;
}

export interface SecurityDetails {
  certificateId: number;
  certificateTransparencyCompliance: string;
  cipher: string;
  encryptedClientHello: boolean;
  issuer: string;
  keyExchange: string;
  keyExchangeGroup: string;
  protocol: string;
  sanList: string[];
  serverSignatureAlgorithm: number;
  subjectName: string;
  validFrom: number;
  validTo: number;
}

export interface FullResponse {
  charset: string;
  mimeType: string;
  protocol: string;
  remoteIPAddress: string;
  remotePort: number;
  securityDetails: SecurityDetails;
  securityHeaders: SecurityHeader[];
  securityState: string;
  status: number;
  statusText: string;
  url: string;
  headers: RequestHeaders;
}

export interface NetworkResponse {
  asn: ASN;
  dataLength: number;
  encodedDataLength: number;
  geoip: GeoIP;
  hasExtraInfo: boolean;
  requestId: string;
  response: FullResponse;
  size: number;
  type: string;
  contentAvailable: boolean;
  hash: string;
}

export interface RequestBlock {
  request: Request;
  response: NetworkResponse;
  requests: Request[];
}

export interface DataBlock {
  console: { message: ConsoleMessage }[];
  cookies: Cookie[];
  globals: GlobalVar[];
  links: Link[];
  performance: PerformanceEntry[];
  requests: RequestBlock[];
}

export interface MetaProcessors {
  asn: { data: ASN[] };
  dns: { data: DNSRecord[] };
  domainCategories: { data: DomainCategory[] };
  geoip: { data: { geoip: GeoIP; ip: string }[] };
  phishing: { data: string[] };
  radarRank: { data: RadarRank[] };
  wappa: { data: WappaApp[] };
  urlCategories: { data: URLCategory[] };
}

export interface DNSRecord {
  address: string;
  dnssec_valid: boolean;
  name: string;
  type: string;
}

export interface DomainCategory {
  inherited: object;
  isPrimary: boolean;
  name: string;
}

export interface RadarRank {
  bucket: string;
  hostname: string;
  rank: number;
}

export interface WappaApp {
  app: string;
  categories: { name: string; priority: number }[];
  confidence: { confidence: number; name: string; pattern: string; patternType: string }[];
  confidenceTotal: number;
  icon: string;
  website: string;
}

export interface URLCategory {
  content: { id: number; name: string; super_category_id: number }[];
  inherited: {
    content: { id: number; name: string; super_category_id: number }[];
    from: string;
    risks: { id: number; name: string; super_category_id: number }[];
  };
  name: string;
  risks: { id: number; name: string; super_category_id: number }[];
}

export interface ListsBlock {
  asns: string[];
  certificates: Certificate[];
  continents: string[];
  countries: string[];
  domains: string[];
  hashes: string[];
  ips: string[];
  linkDomains: string[];
  servers: string[];
  urls: string[];
}

export interface Certificate {
  issuer: string;
  subjectName: string;
  validFrom: number;
  validTo: number;
}

export interface PageBlock {
  apexDomain: string;
  asn: string;
  asnname: string;
  city: string;
  country: string;
  domain: string;
  ip: string;
  mimeType: string;
  server: string;
  status: string;
  title: string;
  tlsAgeDays: number;
  tlsIssuer: string;
  tlsValidDays: number;
  tlsValidFrom: string;
  url: string;
  screenshot: {
    dhash: string;
    mm3Hash: number;
    name: string;
    phash: string;
  };
}

export interface Scanner {
  colo: string;
  country: string;
}

export interface Stats {
  domainStats: DomainStats[];
  ipStats: IPStats[];
  IPv6Percentage: number;
  malicious: number;
  protocolStats: ProtocolStats[];
  resourceStats: ResourceStats[];
  securePercentage: number;
  secureRequests: number;
  serverStats: ServerStats[];
  tlsStats: TLSStats[];
  totalLinks: number;
  uniqASNs: number;
  uniqCountries: number;
}

export interface DomainStats {
  count: number;
  countries: string[];
  domain: string;
  encodedSize: number;
  index: number;
  initiators: string[];
  ips: string[];
  redirects: number;
  size: number;
}

export interface IPStats {
  asn: ASN;
  countries: string[];
  domains: string[];
  encodedSize: number;
  geoip: GeoIP;
  index: number;
  ip: string;
  ipv6: boolean;
  redirects: number;
  requests: number;
  size: number;
  count: number;
}

export interface ProtocolStats {
  count: number;
  countries: string[];
  encodedSize: number;
  ips: string[];
  protocol: string;
  size: number;
}

export interface ResourceStats {
  compression: number;
  count: number;
  countries: string[];
  encodedSize: number;
  ips: string[];
  percentage: number;
  size: number;
  type: string;
}

export interface ServerStats {
  count: number;
  countries: string[];
  encodedSize: number;
  ips: string[];
  server: string;
  size: number;
}

export interface TLSStats {
  count: number;
  countries: string[];
  encodedSize: number;
  ips: string[];
  protocols: Record<string, number>;
  securityState: string;
  size: number;
}

export interface Task {
  apexDomain: string;
  domain: string;
  domURL: string;
  method: string;
  options: {
    customHeaders: Record<string, string>;
    screenshotsResolutions: string[];
  };
  reportURL: string;
  screenshotURL: string;
  source: string;
  success: boolean;
  time: string;
  url: string;
  uuid: string;
  visibility: string;
}

export interface Verdicts {
  overall: {
    categories: string[];
    hasVerdicts: boolean;
    malicious: boolean;
    tags: string[];
  };
}

export interface ClourflareScanResult {
  data: DataBlock;
  lists: ListsBlock;
  meta: { processors: MetaProcessors };
  page: PageBlock;
  scanner: Scanner;
  stats: Stats;
  task: Task;
  verdicts: Verdicts;
}
