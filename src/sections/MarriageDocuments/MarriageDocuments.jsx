import {useTranslation} from "next-i18next";

const MarriageDocuments = () => {
    return (
        <section className="marriage-documents">
            <div className="container">
                <h2 className="title">Необхідні документи</h2>
                <div className="marriage-documents-content">
                    <ol>
                        <li className="marriage-documents-tab selected underline">Державна реєстрація шлюбу між громадянами України</li>
                        <li className="marriage-documents-tab">Державна реєстрація шлюбу між чоловіком та жінкою, які не є громадянами України (або один із них)</li>
                        <li className="marriage-documents-tab">Проставлення апостиля</li>
                    </ol>
                    <ul>
                        <li className="marriage-documents-item">Паспорт громадянина України (при наданні id-картки додатково подається додаток №13 «Довідка про реєстрацію місця проживання особи»)</li>
                        <li className="marriage-documents-item">Ідентифікаційний код</li>
                        <li className="marriage-documents-item">Особи, в яких було вилучено паспорт громадянина України, у зв'язку з взяттям на консульський облік в іншій державі, надають паспорт громадянина України для виїзду за кордон з відповідною відміткою про це в паспорті</li>
                        <li className="marriage-documents-item">Якщо особа раніше перебувала в шлюбі, то додатково надається документ, що підтверджує припинення попереднього шлюбу або визнання шлюбу недійсним (свідоцтво про розірвання шлюбу, видане на ім’я замовника; рішення суду про розірвання шлюбу, про визнання шлюбу недійсним, яке набрало законної сили з відміткою; свідоцтво про смерть одного з подружжя; висновок відділу державної реєстрації актів цивільного стану про анулювання актового запису про шлюб, який є недійсним тощо).»
                            Деталі за телефоном: +38 096 056 44 44 (Viber, WhatsApp, Telegram)</li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default MarriageDocuments;