import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/olexandria" element={<Olexandria />} />
                <Route path="/sights" element={<Sights />} />
                <Route path="/photos" element={<Photos />} />
            </Routes>
        </div>
    );
}

function NavBar() {
    return (
        <div className="navbar">
            <Link to="/">Головна</Link>
            <Link to="/olexandria">Олександрія</Link>
            <Link to="/sights">Визначні місця</Link>
            <Link to="/photos">Галерея</Link>
        </div>
    );
}

function Home() {
    return (
        <div className="home">
            <h1 className="title">Біла Церква</h1>
            <div className="signs">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Bila_Cerkva_polk.svg/90px-Bila_Cerkva_polk.svg.png"
                    alt="Герб Білої Церкви"
                />
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Bila_Cerkva.svg/160px-Flag_of_Bila_Cerkva.svg.png"
                    alt="Прапор Білої Церкви"
                />
            </div>
            <p className="description">
                Біла Церква - місто в Україні, адміністративний центр Білоцерківського району Київської області,
                розташоване на річці Рось у 70 км на південь від Києва. Місто було засноване 1032 року Ярославом Мудрим
                як один із оборонних пунктів на кордоні зі степними кочовиками. Зараз Біла Церква є одним із найбільших
                міст та економічних центрів України та Київської області. Головно пам'яткою міста є прекрасний парк{" "}
                <Link to="/olexandria">"Олександрія"</Link>, що є одним із найбільших в Україні.
            </p>
        </div>
    );
}

function Olexandria() {
    return (
        <div className="olexandria">
            <h1 className="title">Олександрія</h1>
            <p className="description">
                Дендропарк "Олександрія" - це один із найбільших в Україні парків, що знаходиться в Білій Церкві. Його
                площа становить 400 га, а площа його декоративних вод - 13 га. Парк був заснований 1788 року графом
                Ксаверієм Браницьким та названий на честь його дружини Олександри Енгельгардт. На території парку
                розташовано безліч пам'яток архітектури: літній палац графів Браницьких, колонада "Луна", Китайський
                місток та багато інших.
            </p>
            <h1>Галерея парку</h1>
            <div className="images">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/%D0%A0%D1%83%D1%97%D0%BD%D0%B8_%D1%96_%D1%81%D1%82%D0%B0%D0%B2_%D0%9B%D0%B0%D0%B7%D0%BD%D0%B5%D0%B2%D0%B8%D0%B9%2C_%D0%B4%D0%B5%D0%BD%D0%B4%D1%80%D0%BE%D0%BF%D0%B0%D1%80%D0%BA_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D1%96%D1%8F%2C_%D0%91%D1%96%D0%BB%D0%B0_%D0%A6%D0%B5%D1%80%D0%BA%D0%B2%D0%B0.jpg/280px-%D0%A0%D1%83%D1%97%D0%BD%D0%B8_%D1%96_%D1%81%D1%82%D0%B0%D0%B2_%D0%9B%D0%B0%D0%B7%D0%BD%D0%B5%D0%B2%D0%B8%D0%B9%2C_%D0%B4%D0%B5%D0%BD%D0%B4%D1%80%D0%BE%D0%BF%D0%B0%D1%80%D0%BA_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D1%96%D1%8F%2C_%D0%91%D1%96%D0%BB%D0%B0_%D0%A6%D0%B5%D1%80%D0%BA%D0%B2%D0%B0.jpg"
                    alt="Руїни і став Лазневій"
                />
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Oleksandriia_Park_2496.jpg/250px-Oleksandriia_Park_2496.jpg"
                    alt="Руїни"
                />
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/%D0%94%D0%B5%D0%BD%D0%B4%D1%80%D0%BE%D0%BF%D0%B0%D1%80%D0%BA_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D1%96%D1%8F%2C_%D0%B2%D0%BD%D1%83%D1%82%D1%80%D1%96%D1%88%D0%BD%D1%8F_%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0_%D0%92%D1%96%D0%B4%D0%BB%D1%83%D0%BD%D0%BD%D1%8F.jpg/250px-%D0%94%D0%B5%D0%BD%D0%B4%D1%80%D0%BE%D0%BF%D0%B0%D1%80%D0%BA_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D1%96%D1%8F%2C_%D0%B2%D0%BD%D1%83%D1%82%D1%80%D1%96%D1%88%D0%BD%D1%8F_%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0_%D0%92%D1%96%D0%B4%D0%BB%D1%83%D0%BD%D0%BD%D1%8F.jpg"
                    alt="Внутрішня панорама колонади 'Луна'"
                />
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Oleksandriia_Park_2506.jpg/250px-Oleksandriia_Park_2506.jpg"
                    alt="Китайський місток"
                />
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/7._%D0%91%D1%96%D0%BB%D0%B0_%D0%A6%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%28%D0%9F%D0%B0%D0%BB%D1%96%D1%94%D0%B2%D0%B0_%D0%B3%D0%BE%D1%80%D0%B0_%29.jpg/200px-7._%D0%91%D1%96%D0%BB%D0%B0_%D0%A6%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%28%D0%9F%D0%B0%D0%BB%D1%96%D1%94%D0%B2%D0%B0_%D0%B3%D0%BE%D1%80%D0%B0_%29.jpg"
                    alt="Палієва гора"
                />
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/%D0%94%D0%B5%D0%BD%D0%B4%D1%80%D0%BE%D0%BF%D0%B0%D1%80%D0%BA_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D1%96%D1%8F%2C_%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0.jpg/937px-%D0%94%D0%B5%D0%BD%D0%B4%D1%80%D0%BE%D0%BF%D0%B0%D1%80%D0%BA_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D1%96%D1%8F%2C_%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0.jpg"
                    alt="Панорама великої галявини парку"
                />
            </div>
        </div>
    );
}

function Sights() {
    return (
        <div className="images">
            <Image
                src="https://lh3.googleusercontent.com/p/AF1QipNPUVK5PDI8vPqAyRbCLpn1PgvpJJgvSMfDdngq=s680-w680-h510"
                alt="Зимовий палац Браницьких"
            />
            <Image
                src="https://www.alatyr-history.club/wp-content/uploads/2018/02/c-users-admin-desktop-11-jpg.jpeg"
                alt="Микільська церква"
            />
            <Image src="https://vid.in.ua/vendor/bootstrap/css/img/slider/pentagon_1.jpeg" alt="Пам'ятник білці" />
            <Image
                src="https://ua.igotoworld.com/frontend/webcontent/websites/1/images/gallery/2769314_800x600_Alejasuchasnihskulptur.jpg"
                alt="Скульптура на Алеї сучасних скульптур"
            />
            <Image
                src="https://jewishnews.com.ua/img2020/September/119456539_3461198133931439_5214857206265002694_n.jpg"
                alt="Пам'ятник Шолом-Алейхему"
            />
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/3/39/%D0%A2%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D1%96_%D1%80%D1%8F%D0%B4%D0%B8_%28%D0%91%D0%A0%D0%A3%D0%9C%29.jpg"
                alt="Торгові ряди (БРУМ)"
            />
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/3/35/%D0%A2%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D1%96_%D1%80%D0%B5%D0%B7%D0%B5%D1%80%D0%B2%D0%B8%2C_%D0%91%D1%96%D0%BB%D0%B0_%D0%A6%D0%B5%D1%80%D0%BA%D0%B2%D0%B0.jpg"
                alt="Стадіон 'Трудові резерви'"
            />
        </div>
    );
}

function Photos() {
    return (
        <>
            <div className="images">
                {getImages(17)}
            </div>
            <p><a href="https://www.instagram.com/_bc_beautiful_/" target="_blank">First 13 photos credit</a></p>
        </>
    );
}

function getImages(max) {
    let images = [];
    for (let i = 1; i <= max; i++) {
        images.push(
            <Image
                src={"/img/" + i + ".png"}
            />
        );
    }
    return images;
}

function Image(props) {
    return (
        <div className="image">
            <img src={props.src} alt={props.alt} />
            {props.alt ? <p>{props.alt}</p> : null}
        </div>
    );
}

export default App;

