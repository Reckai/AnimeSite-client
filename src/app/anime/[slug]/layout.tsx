import Header from "../../Components/Header/Header";
import Image from "next/image";
import AnimeBG  from "../../../../public/no-bg.GtEBCO-Z.jpg";
const  AnimePageLayout = ({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) => {
    return (
      <section className={'flex flex-col min-h-screen'} >
        {/* Include shared UI here e.g. a header or sidebar */}
       <Header />
       <div className= "top-0 left-0 absolute h-[512px] w-full after:w-full after:top-0 after:left-0 after:absolute after:bg-bg-color/80  after:h-[512px] after:content-[' '] ">
      <Image className="object-cover  h-full w-full"
       alt={'Background Img'} src={AnimeBG}></Image>
      <div
    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-b from-transparent to-bg-color  "></div>
      </div>
        {children}
      </section>
    )
    }
export default AnimePageLayout;
