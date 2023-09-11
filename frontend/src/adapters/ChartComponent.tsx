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
    const queryParams = quer