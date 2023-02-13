import React, { useState, useCallback, useEffect } from "react"
import Item from "./Item"
import axios from "axios"
import '../mock/index'

const List = () => {
    const [list, setList] = useState([])
    const [renderList, setRenderList] = useState([])

    const handleObserve = () => {
        var intersectionObserver = new IntersectionObserver(function(entries) {
            // If intersectionRatio is 0, the target is out of view
            // and we do not need to do anything.
            if (entries[0].intersectionRatio <= 0) return;
            loadNextItems();
            console.log('Loaded new items');
          });
          // start observing
          intersectionObserver.observe(document.querySelector('.listWrapper'));   
    }
    // const [startIndex, setStartIndex] = useState(0)
    useEffect(() => {
        axios.get('/list').then(res => {
            const tList = res.data.data.list
            setList(tList)
            setRenderList(tList.slice(0, 10))
        })
        handleObserve()
    }, [])

    const loadNextItems = () => {
        const index = renderList.length - 1
        let newList = renderList
        if (index < list.length - 1) {
            newList = list.slice(0, index + 10)
        }
        console.log("newList", list, newList)
        setRenderList(newList)
    }

    return <div style={{ overflow: "auto", width: "100%", height: "100%" }} className="listWrapper">
        {renderList.map((item: { title: string, id: number }) => {
            return <Item item={item} key={item.id} />
        })}
    </div>
}

export default List