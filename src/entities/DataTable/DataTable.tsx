import React, {FC} from 'react';
import classes from './DataTable.module.scss';
import {DataTableProps, UnitConversion} from './DataTable.types';
import {Table, Thead, Tbody, Tr, Th, Td, chakra} from '@chakra-ui/react';
import {TriangleDownIcon, TriangleUpIcon} from '@chakra-ui/icons';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  SortingState,
  getSortedRowModel,
} from '@tanstack/react-table';
import {useWindowWidth} from '~shared/hooks/useWindowWidth';
import cx from 'classnames';
import {
  setIsLoadingGetSelectedService,
  setSelectedService,
  storeSelectedService,
} from '~shared/store/SelectedService';
import {client} from '~shared/api/Client';
import {useStore} from 'effector-react';

export const DataTable: FC<DataTableProps<object>> = ({className, data, columns}) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  const {selectedService} = useStore(storeSelectedService);

  const handlerClick = (data: UnitConversion) => {
    setIsLoadingGetSelectedService(true);
    client.services
      .getStatsForService(data.serviceId)
      .then((response) => {
        setSelectedService(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoadingGetSelectedService(false);
      });
  };

  const {isPhone} = useWindowWidth();

  return (
    <Table size={isPhone ? 'sm' : 'md'}>
      <Thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
              const meta: any = header.column.columnDef.meta;
              return (
                <Th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  isNumeric={meta?.isNumeric}
                  className={classes.th}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}

                  <chakra.span className={classes.sortedIcon}>
                    {header.column.getIsSorted() ? (
                      header.column.getIsSorted() === 'desc' ? (
                        <TriangleDownIcon aria-label='sorted descending' />
                      ) : (
                        <TriangleUpIcon aria-label='sorted ascending' />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              );
            })}
          </Tr>
        ))}
      </Thead>
      <Tbody>
        {table.getRowModel().rows.map((row) => (
          <Tr
            key={row.id}
            onClick={() => handlerClick(row.original as UnitConversion)}
            className={cx(
              classes.row,
              selectedService?.id === (row.original as UnitConversion).serviceId &&
                classes['row--isActive'],
            )}
          >
            {row.getVisibleCells().map((cell) => {
              // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
              const meta: any = cell.column.columnDef.meta;
              if (cell.id.includes('reviews')) {
                const values = (cell.getValue() as string).split('/');
                const negativeReviewCount = values[0];
                const positiveReviewCount = values[1];
                return (
                  <Td key={cell.id} isNumeric={meta?.isNumeric}>
                    <div>
                      <span style={{color: '#c71616'}}>{negativeReviewCount}</span>/
                      <span style={{color: '#2dcb2d'}}>{positiveReviewCount}</span>
                    </div>
                  </Td>
                );
              } else {
                return (
                  <Td key={cell.id} isNumeric={meta?.isNumeric}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                );
              }
            })}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
