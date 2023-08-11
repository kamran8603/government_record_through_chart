"use client";
import React, { useState } from "react";
import Plotlyy from "./Plotlyy";
// import Select from "react-select";

const fetchData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};


const urls = [
  {
    type: "crime",
    layout: {
      barmode: "stack",
      title: "Crime Chart",
      xaxis: {
        title: "Crime Chart",
      },
    },
    getData: (data) => {
      const x = data?.records?.map((item) => item.crime_head);
      const mapItemProperty = (property) =>
        data?.records?.map((item) => item[property]);
      const against_foreign = mapItemProperty(
        "cases_of_crimes_committed_against___foreign_tourists"
      );
      const other_foreign = mapItemProperty(
        "cases_of_crimes_committed_against___other__foreigners"
      );
      const total = mapItemProperty(
        "cases_of_crimes_committed_against___total_foreigners__col_3___col_4_"
      );
      return [
        {
          type: "bar",
          name: "against foreign",
          x: x,
          y: against_foreign,
          
        },
        {
          type: "bar",
          name: "other_foreign",
          x: x,
          y: other_foreign,
        },
        {
          type: "bar",
          name: "against foreign",
          x: x,
          y: total,
        },
      ];
    },
    url: "https://api.data.gov.in/resource/b6a43056-ea8e-48dc-b5f8-10ca22ed3c9b?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
    story: "The chart provides an overview of various types of crimes targeting foreigners in 2019.  It illustrates the frequency of incidents involving theft, assault, fraud, sexual offenses, property damage, homicide, drug-related offenses, kidnapping, cybercrimes, and instances of harassment and discrimination. The chart offers insights into the range of challenges faced by foreigners in terms of personal safety and security during that year.",
    img : "https://rdp.in/web/image/1405651/Latest-news-on-fitment-factor-for-central-government-employees.jpg"
   
     
  },

  {
    type: "Rajyasabha",
    layout: {
      title: "Attendance of the Members of Lok Sabha 15 for Monsoon Session 5",
      xaxis: {
        title:
          " Attendance of the Members of Lok Sabha 15 for Monsoon Session 5",
      },
      yaxis: {
        title: "Total Seat ",
      },
    },
    getData: (data) => {
      const x = data?.records?.map(
        (item) => item.state + "(" + item.constituency + ")"
      );
      const mapItemProperty = (property) =>
        data?.records?.map((item) => item[property]);

      const div = mapItemProperty("division_seat_no_");
      const total_sittings = mapItemProperty("total_sittings");
      const session = mapItemProperty("session");
      const present = mapItemProperty("no_of_days_member_signed_the_register");

      return [
        {
          type: "bar",
          name: "Total seat ",
          x: x,
          y: total_sittings,
        },
        {
          type: "bar",
          name: "Session that happen in lokshaba",
          x: x,
          y: session,
        },
        {
          type: "bar",
          name: "MLA Present in a session",
          x: x,
          y: present,
        },
      ];
    },
    url: "https://api.data.gov.in/resource/60a68cec-7d1a-4e0e-a7eb-73ee1c7f29b7?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
    story: "The chart visually presents attendance data for Rajya Sabha sessions over a certain timeframe. It likely illustrates the presence and absence of members during these sessions, potentially highlighting trends, patterns, or variations in their participation.",
  },

  {
    type: "population",
    layout: {
      title:
        "State-wise Population, Decadal Population Growth Rate and Population Density",
      xaxis: {
        title: " Population",
      },
      yaxis: {
        title:
          "Ministry of Health and Family Welfare Department of Health and Family Welfare",
      },
    },
    getData: (data) => {
      return [
        {
          type: "bar",
          x: data?.records.map((item) => item.india___state__union_territory),
          y: data?.records.map((item) => item.population___2011),
        },
      ];
    },
    url: "https://api.data.gov.in/resource/ea7705e8-feed-440e-86a9-1b51afaa738c?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
    story: "The chart provides a concise overview of population-related metrics for different states. It likely displays the population count, the rate at which the population has grown over ten-year periods, and the population density (people per unit area) for each state. This allows for a quick understanding of how populations have changed, expanded, or concentrated across various regions."
  },

  {
    type: " price of wheat",
    layout: {
      title: "Price Increase per month in 2022",
      xaxis: {
        title: "By the central Government Price Increase per month in 2022 ",
      },
      yaxis: {
        title: "District wise  list of price",
      },
    },
    getData: (data) => {
      const x = data?.records?.map((item) => item.arrival_date);
      const mapItemProperty = (property) =>
        data?.records?.map((item) => item[property]);

      const max = mapItemProperty("modal_price");

      return [
        {
          type: "line",
          name: "wheat",
          x: x,
          y: max,
        },
      ];
    },
    url: "https://api.data.gov.in/resource/73140461-fda6-4e1b-9b6f-8026067a0077?api-key=579b464db66ec23bdd0000010992a578e338408c621e74ae49571688&format=json&limit=500&filters[state]=Punjab&filters[market]=Majitha",
  },

  {
    type: "city list wellness",
    layout: {
      title:
        "Ministry of Health and Family Welfare Department of <br /> Health and Family Welfare Central Government Health Scheme",
      xaxis: {
        title: "City-wise list of Doctar and Wellness Centres ",
      },
      yaxis: {
        title: "City-wise list of doctar and Wellness Centres",
      },
    },
    getData: (data) => {
      const x = data?.records?.map(
        (item) => item.wellnesscentrecode + "(" + item.wellnesscentrename + ")"
      );
      const mapItemProperty = (property) =>
        data?.records?.map((item) => item[property]);
      const doctor_count = mapItemProperty("doctorcount");
      const center_name = mapItemProperty("wellnesscentrename");
      const category = mapItemProperty("category");
      return [
        {
          type: "bar",
          name: "doctor",
          x: x,
          y: doctor_count,
          text: category,
        },
      ];
    },
    url: "https://api.data.gov.in/resource/8eede3a2-1652-49eb-bd7f-48ae3ea7a11e?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
    story: "The chart offers a snapshot of healthcare resources in different cities. It likely lists the number of doctors and wellness centers available in each city, providing a quick comparison of medical services. This information helps assess the healthcare infrastructure and accessibility for residents across various urban areas.",
  },
  {
    type: "sugar",
    title:
      "Year-wise Details of Hike in the Price of Sugarcane Fair and Remunerative Price (FRP) Sugar Seasons Fixed by the Government since Sugar Season from 2018-19 to 2022-23",
    getData: (data) => {
      return [
        {
          type: "line",
          x: data?.records?.map((record) => record.sugar_season),
          y: data?.records?.map((record) => record.frp_fixed_by_government),
        },
      ];
    },
    url: "https://api.data.gov.in/resource/6546457d-a621-4a61-b114-8b3ad0888142?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
    story: "The chart presents a chronological breakdown of changes in the Fair and Remunerative Price (FRP) of sugarcane, established by the government, for the sugar seasons spanning from 2018-19 to 2022-23. This visualization helps track the year-wise fluctuations in sugarcane pricing, which is significant for both farmers and the sugar industry. It provides insights into how government policies have influenced the pricing of sugarcane over these years."
  },

  {
    type: "List_save_list",
    title: "List of Life Saving Drugs",

    getData: (data) => {
      return [
        {
          type: "line",
          x: data?.records?.map((item) => item._medicinename_),
          name: data?.records?.map((item) => item.typename),
        },
      ];
    },
    url: "https://api.data.gov.in/resource/26a686fb-eff5-4b33-b5e9-7dd6f41fb870?api-key=579b464db66ec23bdd0000010992a578e338408c621e74ae49571688&format=json",
    story: "The chart compiles a list of essential life-saving drugs. It likely showcases medications that are crucial for treating critical medical conditions and saving lives. This visual representation provides insight into the availability, accessibility, and importance of these drugs in healthcare systems, highlighting their role in addressing various health emergencies and improving patient outcomes.",




    
  },
  {
    type: "Atmanirbhar_Bharat",
    getData: (data) => {
      return [
        {
          type: "bar",
          x: data?.records?.map((record) => record.state_name),
          y: data?.records?.map(
            (record) => record.number_of_beneficiary_establishments
          ),
        },
      ];
    },
    url: "https://api.data.gov.in/resource/22ba977a-77ee-416a-9b04-e22e9964fff5?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
    story: "The chart illustrates the regional distribution of facilities provided under the "+"Atmanirbhar Bharat" +" initiative. Each state is represented, showcasing the number of facilities it has received. This visual representation helps to comprehend how the initiative's benefits have been extended across different parts of the country, fostering self-reliance and development on a state-wise basis."
  },
  {
    type: "petrolium",
    layout: {
      barmode: "stack",
    },
    getData: (data) => {
      const x = data?.records?.map((item) => item.month);
      const mapItemProperty = (property) =>
        data?.records?.map((item) => item[property]);
      const petrol_rate_map = mapItemProperty("petrol____bbl_");
      const diesel_rate_map = mapItemProperty("diesel____bbl_");
      const kirosin_rate_map = mapItemProperty("kerosene____bbl_");
      const lpg_rate_map = mapItemProperty("lpg____mt_");
      return [
        {
          type: "bar",
          name: "Petrol",
          x: x,
          y: petrol_rate_map,
        },
        {
          type: "bar",
          name: "Diesel",
          x: x,
          y: diesel_rate_map,
        },
        {
          type: "bar",
          name: "Kerosine",
          x: x,
          y: kirosin_rate_map,
        },
        {
          type: "bar",
          name: "LPG",
          x: x,
          y: lpg_rate_map,
        },
      ];
    },
    url: "https://api.data.gov.in/resource/b47a1c7c-2261-49ac-bcda-7dc325b2e30c?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json",
    story: "The chart presents a concise depiction of the price fluctuations for petroleum gas, kerosene, and diesel over a specific period. This visual representation offers insight into the changing costs of these essential fuels, enabling viewers to quickly grasp the trends and patterns in their pricing dynamics."
  },
];
function Chart() {
  const [plotData, setPlotData] = useState({});
  const [layout, setLayout] = useState({}); 
  const [story, setStory]= useState();
  const [image, setImage]= useState()
  

  const handleClick = (item) => {
    fetchData(item.url).then((data) => {
      const plotObj = item.getData(data);
      setPlotData(plotObj);
      setLayout(item.layout);
      setStory(item.story)
      setImage(item.image)
      
    });
  };
  return (
    <div className=" flex  pl-4	  h-screen gap-2 	  ">
      <div className="flex justify-center flex-col     ">
        {urls.map((item) => (

          // button design 
          <a href="#_" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <button
                className="relative  "
                key={item.type}
                onClick={() => {handleClick(item);
                  setStory(true)
                }}
                
              >
                {item.type}
              </button>
                
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>

        ))}
      </div>
      <div className="">
      
        <Plotlyy data={plotData} layout={layout} />
      </div>
      <div className="bg-white">
      {story && <div className="bg-slate-red-300 h-6 w-22">
         <img src={image} />
        <h1 className="justify-center">Description about the chart</h1>
        <h1 className="text-blue-600 text-4xl text-justify pt-4 pl-8 px-8">{story}</h1>
        
        </div>}
        
      </div>
    </div>
  );
}

export default Chart;
