
import { X } from 'lucide-react';
import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = 
 [
  {
    "id": 1,
    "name": "Ariana Rahman",
    "math": 85,
    "english": 78,
    "science": 90,
    "computer": 88
  },
  {
    "id": 2,
    "name": "Hasan Ali",
    "math": 72,
    "english": 81,
    "science": 76,
    "computer": 80
  },
  {
    "id": 3,
    "name": "Nadia Karim",
    "math": 95,
    "english": 89,
    "science": 92,
    "computer": 94
  },
  {
    "id": 4,
    "name": "Rafiul Islam",
    "math": 68,
    "english": 74,
    "science": 70,
    "computer": 72
  },
  {
    "id": 5,
    "name": "Mim Akter",
    "math": 88,
    "english": 82,
    "science": 85,
    "computer": 90
  },
  {
    "id": 6,
    "name": "Samiul Hossain",
    "math": 91,
    "english": 87,
    "science": 93,
    "computer": 95
  },
  {
    "id": 7,
    "name": "Tania Chowdhury",
    "math": 77,
    "english": 79,
    "science": 80,
    "computer": 83
  },
  {
    "id": 8,
    "name": "Rakib Hasan",
    "math": 64,
    "english": 70,
    "science": 68,
    "computer": 72
  },
  {
    "id": 9,
    "name": "Joya Sultana",
    "math": 90,
    "english": 85,
    "science": 88,
    "computer": 92
  },
  {
    "id": 10,
    "name": "Adnan Chowdhury",
    "math": 82,
    "english": 80,
    "science": 79,
    "computer": 85
  }
]


const ResultChart = () => {
    return (
        <div>
            <LineChart   width={800} height={300} data={resultData}>
                   <XAxis dataKey="name"></XAxis>
                   <YAxis></YAxis>   

                <Line dataKey="math"></Line>
                <Line dataKey="english" stroke='red'></Line>
                <Line dataKey={"science"} stroke='yellow'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;