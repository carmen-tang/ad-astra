import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

export default function ChartVisualization() {
	return (
		<div>
      <Bar
        data={{
          labels: ["January", "February", "March", "April", "May"],
          datasets: [
            {
              label: "Number of Genomes Sequenced",
              data: [150, 88, 60, 270, 42],
              backgroundColor: ["#faf78e", "#fba7b6", "#b4d8c4", "#e1c5dd", "#6cb8f4"],
            },
          ]
        }}
        height={300}
        width={500}
        options={{
          maintainAspectRatio: true,
          responsive: true
        }}
      />
    </div>
	);
}
