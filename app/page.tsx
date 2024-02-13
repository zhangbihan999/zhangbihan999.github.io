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
            <Paragraph>Hey, I&apos;m <Bold>Zhang Chen. </Bold> I&apos;m currently doing research
              at <UrlLink
                url={"https://ics.nju.edu.cn/"}>ICS</UrlLink> of <UrlLink
                  url={"https://www.nju.edu.cn/index.htm"}>Sichuan University</UrlLink> for my master degree.
              I&apos;m interested in <Bold>Software Engineering</Bold> and enjoying coding via
              C++/Java/Go/Rust.</Paragraph>

            <br />

            <Paragraph>Mail me at <UrlLink url={"zhaoqi.tong@outlook.com"}
              bold={false}>zhangbihan999@gmail.com</UrlLink> or <UrlLink
                url={"tzq0301@gmail.com"} bold={false}>2577915811@qq.com</UrlLink></Paragraph>

            <div className={'h-3'}></div>

            <Paragraph>
              <UrlLink url={'https://github.com/zhangbihan999'} bold={false}>
                <InlineIcon src={"/icon/github.svg"} text={"GitHub"} />
              </UrlLink>
              &nbsp;&nbsp;
              {/* 这个地址要改 */}
              <UrlLink url={'https://blog.csdn.net/m0_46261993'} bold={false}>
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
                    <Bold>Master</Bold>
                  </div>
                }
                right={
                  <div>
                    <div>
                      <UrlLink url={'https://www.nju.edu.cn/index.htm'}>Sichuan
                        University</UrlLink>,&nbsp;
                      <UrlLink url={'https://cs.nju.edu.cn/main.htm'} bold={false}>Computer Science
                        Department</UrlLink>,&nbsp;
                      <UrlLink url={'https://ics.nju.edu.cn/'} bold={false}>Institute of Computer
                        Software</UrlLink>&nbsp;(in Chinese: 南京大学计算机系软件研究所)
                    </div>
                    <br />
                    <div>Advisor: <UrlLink url={'https://yiqinnju.github.io/'} bold={false}>Prof. Yi
                      Qin</UrlLink>,&nbsp;<UrlLink
                        url={'https://ics.nju.edu.cn/people/xiaoxingma/index.html'} bold={false}>Prof.
                        Xiaoxing Ma</UrlLink></div>
                    <br />
                    2023.9 ~ now
                  </div>
                } />
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
                    2019.9 ~ 2023.6
                  </div>
                } />
            </Table>
          </div>

          <div className={'h-14'}></div>

        
      </div>
    </div>


  )

}