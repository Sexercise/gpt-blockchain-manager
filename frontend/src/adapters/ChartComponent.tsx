// ChartComponent.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import 'chartjs-plugin-annotation';
import { ChartDataset } from 'chart.js/auto';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

// Register the scales and elements
Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

  
  interface ChartData {
    labels: string[];
    datasets: ChartDataset<"line", number[]>[];
 
  }

  
  const ChartComponent:React.FC = () => {

   
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const coinName = queryParams['coinName'] as string;
    const vsCurrency = queryParams['vsCurrency'] as string;
    const days = parseInt(queryParams['days'] as string);
    const [interval, setInterval] = useState<string>("daily");
    const [chartData, setChartData] = useState<ChartData>({
        labels: [],
        datasets: []
      });

      const handleCheckboxChange = (index: number) => {
        setChartData((prevState) => {
          return {
            ...prevState,
            datasets: prevState.datasets.map((dataset, i) => {
              if (i === index) {
                return {
                  ...dataset,
                  hidden: !dataset.hidden,
                };
              }
              return dataset;
            }),
          };
