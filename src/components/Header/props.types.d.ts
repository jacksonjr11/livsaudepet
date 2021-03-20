export interface IHeaderProps {}

export interface IHeaderItem {
  name: string;
}

interface INAVHistory {
  push: (path: string) => void;
}
