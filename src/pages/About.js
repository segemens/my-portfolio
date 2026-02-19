import React from 'react'

import LaptopWithRocket from "../assets/laptop-with-rocket.png"
import Software from "../assets/software1.png"

function About() {
    return (
        <div>
            <h1>Hakkımda</h1>
            <p>
                Merhaba, ben Egemen Turudioğlu. <br />
                Web geliştirme alanına ilgi duyan ve bu alanda kendini sürekli geliştirmeye çalışan bir yazılım geliştiricisiyim. <br />

                Frontend tarafında özellikle React ile modern, kullanıcı dostu ve sürdürülebilir arayüzler geliştirmeye odaklanıyorum. Projelerimde temiz kod yazmaya, bileşen tabanlı mimari kullanmaya ve kullanıcı deneyimini ön planda tutmaya özen gösteriyorum. Bootstrap gibi UI kütüphaneleriyle hızlı ve tutarlı tasarımlar oluşturmayı seviyorum. <br />

                Yeni teknolojiler öğrenmek, öğrendiklerimi projelere dökmek ve gerçek problemler üzerinde çalışmak benim için oldukça motive edici. Yazılım geliştirme sürecini sadece kod yazmak olarak değil, aynı zamanda problem çözme ve sürekli öğrenme süreci olarak görüyorum. <br />

                Kariyer hedefim; kendimi frontend alanında daha da geliştirerek, kullanıcıya değer katan projelerde yer almak ve güçlü ekiplerle birlikte kaliteli ürünler ortaya koymak. <br />
            </p>
            <div className='row gap-5 d-flex'>
                <div className='col'><img src={Software} style={{width:"400px"}} alt="Software" /></div>
                <div className='col'><img src={LaptopWithRocket} style={{width:"400px"}} alt="Laptop" /></div>
            </div>
        </div>
    )
}

export default About