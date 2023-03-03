import { Link } from "react-router-dom";
import Image from "./Image";
export default function Home() {
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