import {ColumnDef} from '@tanstack/react-table';

export interface DataTableProps<Data extends object> {
  className?: string;
  data: Data[];
  columns: ColumnDef<Data, any>[];
}

export interface UnitConversion {
  serviceId: number;
  service: string;
  price: string;
  reviews: string;
}
