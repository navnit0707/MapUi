import React, { useEffect, useState } from 'react';
import { Card, Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import  {databycountry}  from '../utlis/localdata';





const InfoCard = () => {
  // subscribing to the store to get country data
  const [name, setName] = useState("India");
  
  const countryNames = useSelector((state) => state.formdata.items);
  //console.log(countryNames[0]);
  //console.log(databycountry[countryNames[0]].country);
  useEffect(()=>{
   setName([databycountry[countryNames[0]].country, databycountry[countryNames[0]].position, databycountry[countryNames[0]].currency]);
  },[countryNames]);
  
  return (
    <Card title="Country Names">
      {name.map((val,index) => (
        <p key={index}>{val}</p>
      ))}
    </Card>
    
  );
};

export default InfoCard;
