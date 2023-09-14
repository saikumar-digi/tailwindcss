import Nav from './components/Nav';
import {CustomerReviews ,
  Footer,Hero, PopularProduct ,
  Services,SpecialOffer,SuperQuality, Subscribe
} from './sections'


const App = () => (
  <main className="relative">
      <Nav/>
    <section className="xl:padding-1 
    wide:padding-r padding-b">
     <Hero/>
    </section>
    <section className="padding">
      <PopularProduct/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
     <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x 
    sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding-x  bg-gradient-to-r from-green-200 to-green-700
    padding-t pb-8">
      <Footer/>
    </section>
  </main>
)

export default App;