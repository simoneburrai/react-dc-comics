import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import comics from "./data/comics";
const links = {
  dcComicsList: ["Characters", "Comics", "Movies", "Tv", "Games", "Videos", "News"],
  shopList: ["Shop Dc", "Shop Dc Collectibles"],
  dcList: ["Terms of Use", "Privacy Policy (New)", "Ad Choices", "Advertising", "Jobs", "Subscription", "Talent Workshops", "CSPC Certificates", "Ratings", "Shop Help",
    "Contac Us"],
  sitesList: ["DC", "Mad Magazines", "DC Kids", "DC Universe", "DC Power Visa"],
  navLinks: ["Characters", "Comics", "Movies", "Tv", "Games", "Collectibles", "Videos", "Fans", "News", "Shop"]
}

function App() {
  return (
    <>
      <Header />
      <Main comics={comics} />
      <Footer />
    </>
  )
}

export default App
