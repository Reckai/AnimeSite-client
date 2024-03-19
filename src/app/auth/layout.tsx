import Header from "@/app/Components/Header/Header";

const  AnimePageLayout = ({
                              children, // will be a page or nested layout
                          }: {
    children: React.ReactNode
}) => {
    return (
        <section className={'flex flex-col h-screen items-center justify-center '} >
            {/* Include shared UI here e.g. a header or sidebar */}
            <Header />
            {children}
        </section>
    )
}
export default AnimePageLayout;
