import UrlLink from './components/UrlLink';
import Separator from './components/Separator';
import Paragraph from './components/Paragraph';
import Bold from './components/Bold';
import InlineIcon from './components/InlineIcon';
import Table from './components/table/Table';
import TableRow from './components/table/TableRow';

import './page.css';

export default function Home() {
  return (
    <div className={"font-serif flex justify-center items-center bg-zinc-50"}>
      <div className={"w-1/2"} id={'content-container'}>
        <div className={"h-24"}></div>

          <div>
            <div className={'text-center text-4xl'}>Zhang Chen</div>

            <div className={'h-4'}></div>

            <div className={'text-center text-slate-600 text-xs italic'}>Undergraduate @ Sichuan University</div>
          </div>

          <div className={'h-16'}></div>

          <div className={'flex flex-col items-center'}>
            <div>
              <UrlLink url={'#education'} native={true} underline={false} fontSize={'text-sm'}>Education</UrlLink>
              <Separator />
              <UrlLink url={'#work experience'} native={true} underline={false} fontSize={'text-sm'}>Work Experience</UrlLink>
              <Separator />
              <UrlLink url={'#open-sources'} native={true} underline={false} fontSize={'text-sm'}>Open Sources</UrlLink>
              <Separator />
              <br />
              <div>
                <UrlLink url={'#researches'} native={true} underline={false} fontSize={'text-sm'}>Researches</UrlLink>
                <Separator />
                <UrlLink url={'#blogs'} native={true} underline={false} fontSize={'text-sm'}>Blogs</UrlLink>
                <Separator />
                <UrlLink url={'#projects'} native={true} underline={false} fontSize={'text-sm'}>Projects</UrlLink>
                <Separator />
                <UrlLink url={'#honors-awards'} native={true} underline={false} fontSize={'text-sm'}>Honors & awards</UrlLink>
                <Separator />
              </div>
            </div>
          </div>

          <div className={'h-16'}></div>

          <div>
            <Paragraph>Hey, I&apos;m <Bold>Zhang Chen. </Bold> I&apos;m currently studying
              at <UrlLink
                url={"https://sw.scu.edu.cn/"}>CSE</UrlLink> of <UrlLink
                  url={"https://www.scu.edu.cn/index.htm"}>Sichuan University</UrlLink> for my bachelor&nbsp;s degree.
              I&apos;m interested in <Bold>AI Syetem</Bold> and enjoying coding.</Paragraph>

            <br />

            <Paragraph>Mail me at <UrlLink url={"zhangbihan999@gmail.com"}
              bold={false}>zhangbihan999@gmail.com</UrlLink> or <UrlLink
                url={"2577915811@qq.com"} bold={false}>2577915811@qq.com</UrlLink></Paragraph>

            <div className={'h-3'}></div>

            <Paragraph>
              <UrlLink url={'https://github.com/zhangbihan999'} bold={false}>
                <InlineIcon src={"/icon/github.svg"} text={"GitHub"} />
              </UrlLink>
              &nbsp;&nbsp;
              <UrlLink url={'https://blog.csdn.net/m0_73615873'} bold={false}>
                <InlineIcon src={"/icon/csdn.svg"} text={"CSDN"} />
              </UrlLink>
            </Paragraph>
          </div>

          <div className={'h-14'}></div>

          <div id={'education'}>
            <div className={'text-2xl'}>Education</div>
            <br />
            <br />

            <Table>
              <TableRow
                left={
                  <div>
                    <Bold>B.S.</Bold>
                  </div>
                }
                right={
                  <div>
                    <div>
                      <UrlLink url={'https://scu.edu.cn/'}>Sichuan University</UrlLink>,&nbsp;
                      <UrlLink url={'https://sw.scu.edu.cn/'} bold={false}>Collage of Software
                        Engineering</UrlLink>&nbsp;(in Chinese: 四川大学软件学院)
                    </div>
                    <br />
                    2022.9 ~ now
                  </div>
                } />
            </Table>
          </div>

          <div className={'h-14'}></div>

        
      </div>
    </div>


  )

}