import React from "react";

/* 定义一个react函数组件创建一个带有下划线的文本组件 */
export default function Underline({ children }: { children: React.ReactNode }) {
    return (
        <text className={'underline underline-offset-[5px] decoration-black/60 decoration-1'}>{children}</text>
    )
}