import React from "react";

/* 创建一个带有粗体样式的文本组件 */
export default function Bold({children}: { children: React.ReactNode }) {
    return (
        /* 颜色纯黑，字体加粗 */
        <text className={'font-bold text-black'}>{children}</text>
    )
}