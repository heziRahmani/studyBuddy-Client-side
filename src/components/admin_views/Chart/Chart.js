import React from "react";
import { query } from "firebase/firestore";
import { useCollection } from "../../../utilities/hooks/useCollection";
import { CollectionsDataRef } from "../../../utilities/fireBase_connection/FireBaseConnection";

import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
export default function Chart() {
  let _cahrtData = {};
  let header = "";
  const q = query(CollectionsDataRef);
  let { data } = useCollection(q);
  console.log(window.location.pathname);
  console.log(data);

  //filterind the data
  // if (window.location.pathname=="/js/dashboard") {
  //  _cahrtData=data.filter((item)=>{return item.Dashboard=="JS"})
  // header="JS"
  // }else if (window.location.pathname=="/html/dashboard")
  // {
  //     _cahrtData=data.filter((item)=>{return item.Dashboard=="HTML"})
  //     header="HTML"
  // }
  //populating the charts
  let _data = {
    labels: data.map((collection) => collection.collectionName),
    datasets: [
      {
        barPercentage: 0.5,
        label: data.map((collection) => collection.collectionName),

        data: data.map((collection) => collection.NumOfDocs),
        backgroundColor: [
          "#93385FFF",
          "#9F6B99FF",
          "#4F3466FF",
          "#881b4c",
          "#8a307f",
        ],

        options: {
          scales: {
            y: {
              offset: true,
              // stacked: true,
              beginAtZero: true,
            },
            x: { beginAtZero: true },
          },

          Response: true,

          plugins: {
            title: {
              display: true,
              padding: {
                top: 10,
                bottom: 30,
              },
            },
          },
        },
      },
    ],
    color: ["Red", "Blue", "Purple", "Yellow"],
  };

  return (
    <div>
      {/* <div className='doughnutChart'><Doughnut data={_data} /></div> */}
      <div className='barChart' style={{ maxHeight: "30em", maxWidth: "30em" }}>
        <Pie data={_data} width={100} height={50} />
      </div>
    </div>
  );
}

/*

  <div className='admin_graph_Container'>
              <div className='admin_graph'>
                <Chart />
              </div>
            </div>
            */
