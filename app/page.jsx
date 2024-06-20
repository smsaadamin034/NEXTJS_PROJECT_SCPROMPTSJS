import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Supply Chain Prompts</span>
    </h1>
    <p className='desc text-center'>
    SCPrompts is a place where you can create, discover, and share AI prompts to optimize your end-to-end supply chain operations.
    </p>

    <Feed />
  </section>
);

export default Home;
