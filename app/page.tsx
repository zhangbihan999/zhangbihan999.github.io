import UrlLink from './components/UrlLink';
import Separator from './components/Separator';
import Paragraph from './components/Paragraph';
import Bold from './components/Bold';
import InlineIcon from './components/InlineIcon';
import Table from './components/table/Table';
import TableRow from './components/table/TableRow';
import List from './components/list/List';
import ListItem from './components/list/ListItem';

import './page.css';

export default function Home() {
  return (
    <div className={"font-serif flex justify-center items-center bg-zinc-50"}>
      <div className={"w-1/2"} id={'content-container'}>
        <div className={"h-24"}></div>

        <div>
          <div className={'text-center text-4xl'}>Chen Zhang</div>

          <div className={'h-4'}></div>

          <div className={'text-center text-slate-600 text-xs italic'}>Undergraduate @ Sichuan University</div>
        </div>

        <div className={'h-16'}></div>

        <div className={'flex flex-col items-center'}>
          <div>
            <UrlLink url={'#education'} native={true} underline={false} fontSize={'text-sm'}>Education</UrlLink>
            <Separator />
            {/* <UrlLink url={'#work experience'} native={true} underline={false} fontSize={'text-sm'}>Work Experience</UrlLink>
              <Separator /> */}
            {/* <UrlLink url={'#open-sources'} native={true} underline={false} fontSize={'text-sm'}>Open Sources</UrlLink>
              <Separator /> */}
            {/* <UrlLink url={'#researches'} native={true} underline={false} fontSize={'text-sm'}>Researches</UrlLink>
                <Separator /> */}
            <UrlLink url={'#work-experience'} native={true} underline={false} fontSize={'text-sm'}>Work Experience</UrlLink>
            <Separator />
            <UrlLink url={'#projects'} native={true} underline={false} fontSize={'text-sm'}>Projects</UrlLink>
            <Separator />
            <UrlLink url={'#blogs'} native={true} underline={false} fontSize={'text-sm'}>Blogs</UrlLink>

            {/* <UrlLink url={'#honors-awards'} native={true} underline={false} fontSize={'text-sm'}>Honors & awards</UrlLink>
                <Separator /> */}

          </div>
        </div>

        <div className={'h-16'}></div>

        <div>
          <Paragraph>Hey, I&apos;m <Bold>Chen Zhang. </Bold> I&apos;m currently studying
            at <UrlLink
              url={"https://sw.scu.edu.cn/"}>CSE</UrlLink> of <UrlLink
                url={"https://www.scu.edu.cn/index.htm"}>Sichuan University</UrlLink> for my B.S.
            I&apos;m interested in <Bold>Software Development</Bold> and enjoying coding via Python / TypeScript / Java.</Paragraph>

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
                    <UrlLink url={'https://sw.scu.edu.cn/'} bold={false}>College of Software
                      Engineering</UrlLink>&nbsp;(in Chinese: 四川大学软件学院)
                  </div>
                  <br />
                  2022.9 ~ now
                </div>
              } />
          </Table>
        </div>

        <div className={'h-14'}></div>

        <div id='work-experience'>
          <div className={'text-2xl'}>Work Experience</div>
          <br />
          <br />
          <Table>
            <TableRow
              left={
                <div>
                  <Bold>IDs Lab | SCU</Bold>
                </div>
              }
              right={
                <div>
                  <div>
                    <UrlLink url={'https://ids-lab-asia.github.io/'}>Ids Lab | SCU</UrlLink>,&nbsp;
                    <UrlLink url={'https://merlintang.github.io/'} bold={false}>Prof.Mingjie Tang</UrlLink>,&nbsp;Chengdu (China)
                  </div>
                  <br />
                  2023.11 ~ 2024.12
                </div>
              } />
          </Table>
        </div>

        <div className={'h-14'}></div>

        <div id='projects'>
          <div className={'text-2xl'}>Projects </div>
          <br />
          <br />
          <List>
            <ListItem
              left={'July 2024'}
              right={
                <div>
                  <text>Stream: A Steam-Like Game Recommendation Platform</text>
                  <Separator/>
                  <UrlLink url={'https://stream-game-app.vercel.app/'}>URL</UrlLink>
                  <Separator/>
                  <UrlLink url={'https://github.com/zhangbihan999/stream-game-app'}>Code</UrlLink>
                  <Separator/>
                  <UrlLink url={'https://www.youtube.com/watch?v=IxnQsugQXB4'}>Video</UrlLink>
                </div>
              }/>
          </List>
        </div>

        <div className={'h-14'}></div>

        <div id={'blogs'}>
          <div className={'text-2xl'}>Blogs <text className={'text-base'}>(selected)</text></div>
          <br />
          <br />
          <List>
            <ListItem left={'Jan 2025'} right={<UrlLink url={'https://blog.csdn.net/m0_73615873/article/details/144996936?spm=1001.2014.3001.5502'}
              bold={false}>Django 网页开发快速上手——实现一个博客应用</UrlLink>} />
            <ListItem left={'Jan 2024'} right={<UrlLink url={'https://blog.csdn.net/m0_73615873/article/details/135943523?spm=1001.2014.3001.5501'}
              bold={false}>mini 版语言模型，逐行精讲</UrlLink>} />
            <ListItem left={'Jan 2024'} right={<UrlLink url={'https://blog.csdn.net/m0_73615873/article/details/135905512?spm=1001.2014.3001.5502'}
              bold={false}>为什么现在的 LLM 都是 decoder-only 架构?</UrlLink>} />
          </List>
        </div>

      </div>
    </div>


  )

}