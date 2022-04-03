import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [chart, setChart] = useState([])
    useEffect(() => {
        fetch('chart.json')
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])
    return (
        <div className='grid grid-cols-2 mt-20'>
            <div>
                <LineChart
                    width={500}
                    height={400}
                    data={chart}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                </LineChart>

            </div>

            <div>
                <AreaChart
                    width={500}
                    height={400}
                    data={chart}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment" />
                    <Tooltip />
                    <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </div>
            

        </div>
    );
};

export default Dashboard;