import Carroussel from "../components/Carroussel/Carroussel";
import Featured from "../components/Featured";
import NavBar from "../components/Navbar/NavBar";

function HomePage() {
    return (<div className="h-screen w-screen">
        <header><NavBar></NavBar></header>
        <main className="h-full bg-neutral-900">
            <div className="bg-neutral-800 h-fit relative">
                <Carroussel></Carroussel>
            </div>
            <div className="py-6">
                <Featured></Featured>
            </div>
        </main>
    </div>)
}

export default HomePage;