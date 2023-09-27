export interface IStrapiResponseWrapper<T> {
  data: T;
  meta: IMeta;
}

export interface IMeta {
  pagination: IPagination;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
