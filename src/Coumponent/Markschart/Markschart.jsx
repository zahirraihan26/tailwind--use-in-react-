import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const Markschart = ({markspromise}) => {
    const marksdataRes= use(markspromise)
    // console.log(marksdataRes)
    const marksdata = marksdataRes.data;

    const marksChartdata = marksdata.map(studentdata =>{
        const student = {
            id:studentdata.id,
            name:studentdata .name,
            math:studentdata.math,
            english:studentdata.english,
            science:studentdata.science
        }

        return student;

    })

    console.log(marksChartdata)
    
    return (
        <div>
            <BarChart width={500} height={300} data={marksChartdata}>
                <XAxis dataKey={"name"}></XAxis>

                <YAxis></YAxis>
                <Bar dataKey={"math"} fill="blue" ></Bar>
                <Bar dataKey={"english"} fill="red" ></Bar>
                <Bar dataKey={"science"} fill="green" ></Bar>   
                

            </BarChart>
        </div>
    );
};

export default Markschart;