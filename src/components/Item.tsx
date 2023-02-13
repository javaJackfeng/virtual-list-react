import React, { useState, useCallback } from "react"

const Item = (props: { item: { title: string, id: number }}) => {
    const { item } = props;
    return <div style={{ height: 30, padding: 5, marginBottom: 10, borderBottom: "1px solid #333"}}>
        {item.title}
    </div>
}

export default Item