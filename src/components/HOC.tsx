import React, { useEffect, useState, useRef } from "react";

const pageSize = 50
let offset = 0

const SliceHOC = (Component: any) => (props: { list: any[] }) => {
    const [ data, setData ] = useState<any[]>([])
    const { list, ...extraProps } = props;

    useEffect(() => {
        sliceTime()
    }, []);

    const sliceTime = () => {
        if (data.length >= list.length) {
            return
        }
        const tempData = list.slice(offset * pageSize, (offset + 1) * pageSize)
        setTimeout(() => {
            setData((prevData: any[]) => [...prevData, ...tempData])
            offset += 1
            sliceTime()
        }, 1000)
    }

    if (list.length === 0) {
        return null
    }
    
    return (<>
    { data.map((item:any) =>  <Component id={item} {...extraProps} key={item} />)}
    </>)
};

export default SliceHOC;
