import { Bar } from 'react-chartjs-2';

export default function VisualizationContainer(props) {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 0]
            }
        ]
        };
    // Adjust this how you'd like. "em" is a unit of relativity. "100em" means 100% of the screen.
    // You can also use "px" for hard-coded pixels, but different devices have different pixel-counts so using
    // relative sizes is better.
    const lineStyle = {
        width: '80em'
    }
    return (
        <div style={lineStyle}>
            <Bar data={data}/>
        </div>
    );
}