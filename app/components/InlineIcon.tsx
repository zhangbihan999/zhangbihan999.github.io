'use client';

import Image from "next/image";
import Underline from "@/app/components/Underline";

/* 定义了一个名为 InlineIcon 的 React 函数组件，创建一个包含图标和文本的行内元素。 */
export default function InlineIcon({src, text}: {src: string, text: string}) {
    return (
        <span className={'inline-flex flex-nowrap hover:text-orange-400'}>
            <Image src={src} alt={text} className={'inline'} width={18} height={18} />&#8198;<Underline>{text}</Underline>
        </span>
    )
}