import {useTranslation} from "next-i18next";

const Passport = () => {
    return (
        <section className="service-page">
            <div className="container">
                <div className="service-page-header">
                    <a href="./" className="btn _light service-page-btn"><span className="btn-back"></span>Повернутись</a>
                    <img className="service-page-logo" src="/img/Services/icon-3.png" alt="" />
                    <h2 className="service-page-title">Паспортний сервіс</h2>
                </div>
                <div className="dropdown">
                    <div className="dropdown-btn">Закордонний паспорт</div>
                    <ul className="dropdown-list">
                        <li className="dropdown-item _title">Що необхідно зробити, щоб отримати закордонний паспорт:</li>
                        <li className="dropdown-item">Узяти паспорт з реєстраційним номером облікової картки платника податків (ІПН) і прийти в "Паспортний сервіс"</li>
                        <li className="dropdown-item">Подати потрібні документи</li>
                        <li className="dropdown-item">Сплатити послугу (на місці)</li>
                        <li className="dropdown-item">Сфотографуватися (на місці)</li>
                        <li className="dropdown-item">Після отримання SMS, прийти і забрати свій закордонний паспорт</li>
                        <li className="dropdown-item _title">Перелік документів:</li>
                        <li className="dropdown-item">Паспорт громадянина України;</li>
                        <li className="dropdown-item">Індивідуальний податковий номер фізичної особи – платника податків (ідентифікаційний номер);</li>
                        <li className="dropdown-item">Заява-анкета (формується на місці);</li>
                        <li className="dropdown-item">За наявності, раніше видані закордонні паспорти або проїзні документи дитини (діючі, не діючі, на інше прізвище в тому числі);</li>
                        <li className="dropdown-item">Витяг з Єдиного реєстру досудових розслідувань (у разі викрадення попереднього паспорта для виїзду за кордон на території України).</li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div className="dropdown-btn">Закордонний паспорт дитини</div>
                    <ul className="dropdown-list">
                        <li className="dropdown-item _title">Що необхідно зробити, щоб отримати закордонний паспорт:</li>
                        <li className="dropdown-item">Зібрати необхідні документи і прийти в "Паспортний сервіс"</li>
                        <li className="dropdown-item">Подати потрібні документи</li>
                        <li className="dropdown-item">Сплатити послугу (на місці)</li>
                        <li className="dropdown-item">Сфотографуватися (на місці)</li>
                        <li className="dropdown-item">Після отримання SMS, прийти і забрати закордонний паспорт дитини</li>
                        <li className="dropdown-item">З 12 років обов'язкова присутність дитини, як при оформленні, так і при видачі документів</li>
                        <li className="dropdown-item _title">Перелік документів:</li>
                        <li className="dropdown-item">Оригінал свідоцтва про народження</li>
                        <li className="dropdown-item">Паспорт громадянина України у вигляді картки (для особи, яка досягла 14-річного віку)</li>
                        <li className="dropdown-item">Індивідуальний податковий номер фізичної особи – платника податків (за наявності)</li>
                        <li className="dropdown-item">Документ, що посвідчує особу законного представника та документ, що підтверджує повноваження законного представника (крім випадків, коли законним представником є один із батьків). Заява від одного з батьків (формується на місці). Обов'язкова наявність оригіналів паспорта громадянина України. У разі якщо ПІБ матері або батька не співпадають зі свідоцтвом про народження, додатково надаються документи, що підтверджують факт зміни ПІБ (свідоцтво про шлюб, про розлучення, про зміну прізвища тощо)</li>
                        <li className="dropdown-item">За наявності, раніше видані закордонні паспорти або проїзні документи дитини (діючі, не діючі, оформлені на інше прізвище)</li>
                        <li className="dropdown-item">Документи, що підтверджують сплату адміністративного збору, або оригінал документа про звільнення від його сплати; (оплата здійснюється на місці через термінали самообслуговування)</li>
                        <li className="dropdown-item">Документи, які є підставою для зміни транслітерації (раніше видані документи, що посвідчують особу та підтверджують громадянство України дитини або батьків; документ, що підтверджує факт народження, зміни імені, видані компетентними органами іноземної держави та легалізованих в установленому порядку; тощо)</li>                
                    </ul>
                </div>
                <div className="dropdown">
                    <div className="dropdown-btn">Виїзне оформлення</div>
                    <ul className="dropdown-list">
                        <li className="dropdown-item">Виїзне оформлення закордонного паспорта</li>
                        <li className="dropdown-item">Виїзне оформлення ID картки</li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div className="dropdown-btn">Послуги іноземцям</div>
                    <ul className="dropdown-list">
                        <li className="dropdown-item">Посвідка на тимчасове проживання</li>
                        <li className="dropdown-item">Посвідка на постійне проживання</li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div className="dropdown-btn">Довідка про несудимість</div>
                    <ul className="dropdown-list">
                        <li className="dropdown-item _title">Перелік необхідних документів для оформлення довідки для громадян України:</li>
                        <li className="dropdown-item">Паспорт громадянина України</li>
                        <li className="dropdown-item">Заява-доручення (формується на місці)</li>
                        <li className="dropdown-item _title">Перелік необхідних документів для оформлення довідки для нерезидентів України:</li>
                        <li className="dropdown-item">Закордонний паспорт та переклад паспорту на українську мову завірений в установленому порядку (посвідка на постійне проживання або посвідка на тимчасове проживання)</li>
                        <li className="dropdown-item">Заява-доручення (формується на місці)</li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div className="dropdown-btn">Лінгвістична експертиза</div>
                    <ul className="dropdown-list">
                        <li className="dropdown-item">Встановлює ідентичність прізвищ, імен та інших власних назв, що відрізняються орфографічними, граматичними або структурними особливостями</li>
                        <li className="dropdown-item">Встановлює  ідентичність прізвищ, імен та інших власних назв, записаних різними мовами тощо</li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div className="dropdown-btn">Страхові продукти</div>
                    <ul className="dropdown-list">
                        <li className="dropdown-item _title">Види страхових продуктів, що пропонуються клієнтам:</li>
                        <li className="dropdown-item">Медичне страхування подорожуючих за кордон</li>
                        <li className="dropdown-item">Добровільне страхування від ризиків втрати ІD-картки</li>
                        <li className="dropdown-item">Міжнародна система автомобільного страхування "Зелена картка"</li>
                        <li className="dropdown-item">Медичне страхування іноземців, які в'їжджають на територію України</li>
                        <li className="dropdown-item">Страхування відповідальності іноземців та осіб без громадянства, за відшкодування витрат, пов’язаних із примусовим видворенням іноземців та осіб без громадянства за межі України</li>
                        <li className="dropdown-item">Страхування відповідальності осіб, які запрошують та/або приймають іноземців та осіб без громадянства, за відшкодування витрат, пов’язаних із примусовим видворенням іноземців та осіб без громадянства за межі України</li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Passport;