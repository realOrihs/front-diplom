'use client';
import React, {FC, useMemo} from 'react';
import classes from './ChartForDealToday.module.scss';
import {ChartForDealTodayProps} from './ChartForDealToday.types';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {useStore} from 'effector-react';
import {storeSelectedService} from '~shared/store/SelectedService';
import moment from 'moment';
import {IService} from '~shared/types/IService';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

export const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Кол-во сделок за последние 24ч',
    },
  },
};

export const ChartForDealToday: FC<ChartForDealTodayProps> = ({className}) => {
  const {selectedService} = useStore(storeSelectedService);

  const [labels, values] = useMemo(() => {
    if (selectedService && selectedService.attributes.stats?.data) {
      const tempLabels: string[] = [];
      const tempData: string[] = [];
      selectedService.attributes.stats.data.forEach((stat, index) => {
        if (stat.attributes.count_transaction !== '0') {
          const currentValue = +stat.attributes.count_transaction;
          let indexNextStat = index + 1;
          if (indexNextStat <= selectedService.attributes.stats!.data.length - 1) {
            while (
              indexNextStat <= selectedService.attributes.stats!.data.length - 1 &&
              selectedService.attributes.stats!.data[indexNextStat].attributes.count_transaction ===
                '0'
            ) {
              indexNextStat += 1;
            }
            if (indexNextStat <= selectedService.attributes.stats!.data.length - 1) {
              const nextValue =
                +selectedService.attributes.stats!.data[indexNextStat].attributes.count_transaction;
              tempLabels.push(
                moment(
                  selectedService.attributes.stats!.data[indexNextStat].attributes.createdAt,
                ).format('DD.MM hh:mm'),
              );
              tempData.push((nextValue - currentValue).toString());
            }
          }
        }
      });
      return [tempLabels, tempData];
    }
    return [[], []];
  }, [selectedService]);

  const data: ChartData<string[], string[]> = {
    labels,
    datasets: [
      {
        fill: true,
        lineTension: 0.4,
        radius: 4,
        hoverRadius: 6,
        label: 'Сделок',
        data: values,
        borderColor: '#A6CEE3',
        backgroundColor: 'rgba(166,206,227,0.5)',
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};
