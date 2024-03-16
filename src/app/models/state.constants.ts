export interface CardsData{
  cardName: string,
  linkName: string
}



export interface cdrInformation{
  crimeNo: number,
  aParty: string,
  bParty: string,
  dateTime: string
}


export interface ScreenPages {
  id: number;
  name: string;
  screen_link_name: string;
}


export interface Pager {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  startIndex: number;
  endIndex: number;
  pages: number[];
}

export interface CdrDataDTO{
  crimeNo: string;
  partyA: string;
  partyB: string;
  dateTime: string;
  duration: string;

  cellType: string;
  firstCellId: string;
  lastCellId: string;
  imeiA: string;
  imsiA: string;

  cellIdAddress: string;
  latitude: string;
  longitude: string;
  policeStation: string;
  selectValue: number;
}


