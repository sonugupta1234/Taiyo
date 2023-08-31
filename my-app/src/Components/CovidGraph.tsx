
import { CovidData } from '../coviddata';
import { Line } from 'react-chartjs-2';



interface Data {
    data: CovidData;
  }

 

export const CovidGraph = ({data}: Data) => {
    const date = Object.keys(data);
    const cases = Object.values(data);


    const formattedDates = date.map(date => {
        const [month, day, year] = date.split('/');
        return `${day}-${month}-${year.slice(-2)}`; 
      });
  
    const covidchartData = {
      labels: formattedDates,
      datasets: [
        {
          label: 'COVID-19 Cases',
          data: cases,
          fill: false,
          borderColor: 'blue',
          backgroundColor: 'transparent',
          pointBorderColor: 'blue',
          pointRadius: 5,
          pointHoverRadius: 10,
        },
      ],
    };
  
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            
          y: {
            title: {
              display: true,
              text: 'COVID-19 Cases',
            },
          },
        },
      } as const;
  
    return (
        <div style={{ width: '100%', height: "400px" ,margin: '0 auto' }}>
        <Line data={covidchartData} options={options} />
      </div>
    );
  };

