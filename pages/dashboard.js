import React, { useState, useEffect } from "react";
import LightNav from "@/components/dashboard/LightNav";

import {
  ResponsiveContainer,
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import moment from "moment";
import axios from "axios";
import ProfileSidebar from "@/components/dashboard/ProfileSidebar";
import LiveDataMetrics from "@/components/dashboard/LiveDataMetrics";

const Dashboard = () => {
  const [liveData, setLiveData] = useState(null);
  const [painData, setPainData] = useState(null);
  const [glucoseData, setGlucoseData] = useState(null);

  useEffect(() => {
    const fetchLiveReadings = async () => {
      try {
        const res = await axios.post("/api/proxy", { action: "getdata" });
        setLiveData(res.data);

        const { times, glucose, gsrDev } = res.data;
        const formattedGlucoseData = [];
        const formattedPainData = [];

        times.forEach((time, idx) => {
          formattedGlucoseData.push({
            name: parseInt(time),
            glucose_level: glucose[idx],
          });

          formattedPainData.push({
            name: parseInt(time),
            pain_level: gsrDev[idx],
          });
        });

        setGlucoseData(formattedGlucoseData);
        setPainData(formattedPainData);
      } catch (error) {
        console.log(`Failed to fetch live data readings with error ${error}`);
      }
    };

    fetchLiveReadings();
  }, []);

  return (
    <React.Fragment className='overflow-hidden'>
      <div className='py-3 md:py-4 xl:py-6 bg-header-dashboard'>
        <div className='mx-auto container px-4 xl:px-0'>
          <LightNav />
        </div>
      </div>
      <div className='max-w-screen-xl mx-auto pt-12 px-4 md:px-12 lg:px-12 mb-12'>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-12 md:col-span-9'>
            <div className='bg-white shadow rounded-sm p-4'>
              <div className='inline-flex flex-row space-x-1 items-center bg-red-100 py-1 px-2 rounded-full'>
                <div className='w-2 h-2 rounded-full bg-red-600 animate-pulse'></div>
                <span className='text-sm text-red-600 font-semibold'>
                  Live Data
                </span>
              </div>
              <div className='mt-8'>
                {liveData && <LiveDataMetrics data={liveData} />}
                <h5 className='font-extrabold text-red-600 text-center mb-2'>
                  Glucose Levels (mg/dL) vs. Time
                </h5>
                <ResponsiveContainer width='100%' height={400}>
                  <LineChart data={glucoseData}>
                    <XAxis
                      dataKey='name'
                      tickFormatter={(timestamp) =>
                        moment(timestamp).format("h:mm:ss a")
                      }
                      type='number'
                      domain={["auto", "auto"]}
                      scale='time'
                    />
                    <YAxis />
                    <Tooltip
                      labelFormatter={(name) => moment(name).format("h:mm a")}
                    />
                    <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                    <Line
                      type='monotone'
                      dataKey='glucose_level'
                      stroke='#D64545'
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className='mt-12'>
                <h5 className='font-extrabold text-red-600 text-center mb-2'>
                  Galvanic Skin Response Deviation (μV) vs. Time
                </h5>
                <ResponsiveContainer width='100%' height={400}>
                  <LineChart data={painData}>
                    <XAxis
                      dataKey='name'
                      // tickFormatter={(timestamp) =>
                      //   moment(timestamp).format("h:mm:ss a")
                      // }
                      type='number'
                      domain={["auto", "auto"]}
                      scale='time'
                    />
                    <YAxis />
                    <Tooltip
                      labelFormatter={(name) => moment(name).format("h:mm a")}
                    />
                    <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                    <Line
                      type='monotone'
                      dataKey='pain_level'
                      stroke='#D64545'
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className='col-span-12 md:col-span-3'>
            <ProfileSidebar />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
