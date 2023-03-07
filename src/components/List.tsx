import React, { useEffect, useState } from "react";
import SliceHoc from "./HOC"
import { Button } from "antd-mobile";
const imgUrl =
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png";

// 子组件
const Item: React.FC<{ id: number }> = ({
    id,
}) => {
    return (
        <div style={{ display: "flex", alignItems: "center", marginBottom: 5 }}>
            <img src={`${imgUrl}`} width={80} height={60} alt="" />
            列表{id}
        </div>
    );
};



const HocList = SliceHoc(Item)

const Index: React.FC<any> = (props) => {
    const [list, setList] = useState<Array<number>>([])

    useEffect(() => {
      let arr:number[] = [] 
      for(let i = 0; i < 500; i++){
        arr.push(i)
      }
      setList(arr)
    }, [])

    if(list.length === 0) return <></>


    return (
        <div>
           <HocList list={list} />
        </div>
    );
};

export default Index;
