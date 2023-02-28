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

const ListItem = ({ list }: { list: any[] }) => list.map((item: any) => <Item id={item} key={item} />)

const HocList = SliceHoc(Item)

const Index: React.FC<any> = (props) => {
    const [flag, setFlag] = useState<boolean>(false);
    const [list, setList] = useState<Array<number>>([]);

    return (
        <div>
            <Button
                onClick={async () => {
                    setFlag(true);
                    let arr: number[] = [];
                    console.time("all")
                    for (let i = 0; i < 5000; i++) {
                        arr.push(i);
                    }
                    await setList(arr);
                    console.timeEnd("all")
                }}
            >
                渲染
            </Button>
            {flag && <HocList list={list} />}
        </div>
    );
};

export default Index;
