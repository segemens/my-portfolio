import React from 'react'

import ProfilePhoto from "../assets/egemennoborder.png"

function Home() {
    return (
        <div className='mx-5'>
            <h1>Anasayfa</h1>
            <div className='row gap-5 justify-content-center align-items-center'>
                <p className='col'>
                    Merhaba ben Egemen Turudioğlu.Blog sayfama hoş geldiniz.Bu blog sayfası kendimi geliştirmem, kendime motive kazandırması ve kendimi sizlere tanıtmak için kurdum.Selçuk Üniversitesinde 1.Sınıf öğrencisiyim.İlk yazılımla ilgilenmeye liseye başlarken başladım ve bu ilgim şuan universiteden devam ediyor.Liseden beri ufak çaplı projeler deniyodum fakat hiçbirinin sonunu getirmedim nedeni ise basitti her projeye plansız başlıyodum.Universiteye geçtikten sonra artık bu plansızlıklara yavaş yavaş son vermeye başladım.Bu 4 yılı kendimi geliştirmeye ve çokça kendimi eğitmeye bakıcam.Ve kendim geliştirdiğim projeleri burada paylaşacağım.
                </p>
                <div className='col'>
                    <img src={ProfilePhoto} style={{width:"20rem", borderRadius:"3rem", boxShadow: "0 0 50px #1a192c"}} alt="Egemen Profile Photo" />
                </div>
            </div>
        </div>
    )
}

export default Home