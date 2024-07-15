import React, { useContext } from 'react'
import HomePageNav from '../Components/HomePageNav'
import HomePageFooter from '../Components/HomePageFooter'
import JsonContext from "../Context/JsonContext"
import HomePageCoffies from '../Components/HomePageCoffies'

const HomePage = () => {

  const {coffies,categories} = useContext(JsonContext)

  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./css/output.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <title>Coffie Site</title>
  <div className="container">
    {/* header section */}
    <HomePageNav/>
    {/* hero section */}
    <section className="lg:h-screen lg:flex lg:flex-row  items-center justify-center gap-6 mb-12">
      <div className="lg:basis-full lg:mb-0 mb-6">
        <div className="w-full relative text-white">
          <img src="img/jewelery.png" className="w-full" alt="jewelery" />
          <div className="absolute top-10 left-8">
            <h5 className="text-2xl font-thin mb-1">Cool Lime&amp;</h5>
            <h1 className="text-3xl font-normal tracking-wider opacity-90 mb-3">
              Soğuk İçecekler
            </h1>
            <p className="opacity-60 mb-10">
              Serinleten lezzetler
            </p>
            <a href='#coffies' className="border-2 border-white px-8 py-2 opacity-50 hover:bg-white hover:text-black duration-500">
              Şipariş Verin
            </a>
          </div>
        </div>
      </div>
      <div className="lg:basis-full flex flex-col gap-3 ">
        <div className="relative text-white">
          <img src="img/ring.png" className="w-full" alt="ring" />
          <div className="absolute top-10 left-8">
            <h5 className="text-2xl font-thin mb-1">Cappiciuno &amp;</h5>
            <h1 className="text-3xl font-normal tracking-wider opacity-90 mb-3">
              Sıcak İçecekler
            </h1>
            <p className="opacity-60 mb-10">
              Size özel Sıcak lezzetler
            </p>
            <a href='#coffies' className="border-2 border-white px-8 py-2 opacity-50 hover:bg-white hover:text-black duration-500">
              Şipariş Verin
            </a>
          </div>
        </div>
        <div className="relative text-white">
          <img src="img/bracelet.png" className="w-full" alt="bracelet" />
          <div className="absolute top-10 left-8">
            <h5 className="text-2xl font-thin mb-1">Çekirdek &amp;</h5>
            <h1 className="text-3xl font-normal tracking-wider opacity-90 mb-3">
              Kahveler
            </h1>
            <p className="opacity-60 mb-10">
              Çifte çekilmiş double Etiyopya 
            </p>
            <a href='#coffies' className="border-2 border-white px-8 py-2 opacity-50 hover:bg-white hover:text-black duration-500">
              Şipariş Verin
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* our collections section */}
    <section className="mb-20">
      <h1 className="text-center text-2xl  font-medium mb-8">
        Kategoriler
      </h1>
  <div className="flex flex-wrap justify-center items-center gap-20">
    <div className="flex flex-col justify-center items-center">
      <img src="img/coffee-cup.png" className="w-16 mb-2" alt="" />
      <p className="text-[12px]">Kahve</p>
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="img/tea-cup.png" className="w-16 mb-2" alt="" />
      <p className="text-[12px]">Çay</p>
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="img/bubble-tea.png" className="w-16 mb-2" alt="" />
      <p className="text-[12px]">Bubble Tea</p>
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="img/hot-chocolate.png" className="w-16 mb-2" alt="" />
      <p className="text-[12px]">Sıcak Çikolata</p>
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="img/ice-tea.png" className="w-16 mb-2" alt="" />
      <p className="text-[12px]">Soğuk Çay</p>
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="img/soda.png" className="w-16 mb-2" alt="" />
      <p className="text-[12px]">Soda</p>
    </div>
  </div>

    </section>
    {/* new collection section */}
    <section className="mb-20" id="coffies">
      <div className="text-center mb-10">
        <h1 className=" text-2xl  font-medium mb-2">Lezzetlerimiz</h1>
        <p className="opacity-50">
          Ailemize yeni katılan kahve çekirddekleri ile harmanlanmış lezzet
        </p>
      </div>
      {/* product area */}
      <div className=" justify-center items-center gap-10 flex flex-wrap  mb-6  ">
        
        {coffies.length>0? coffies.map((coffie)=>{
          return <HomePageCoffies key={coffie} coffie={coffie} categories={categories}/>
        }):<div className='w-full h-24 rounded bg-amber-100 p-5 flex justify-center items-center'>
            <p className='text-white text-[20px]'>Herhangi Bir Ürünümüz Bulunamamaktadır.</p>
          </div>}
        
        {/* <div className=" relative group">
          <img
            src="./img/necklaceSilver.png"
            className="w-60 mb-2 mx-auto group-hover:scale-110 group-hover:opacity-50 duration-500"
            alt=""
          />
          <div className="absolute top-0 right-0 px-5 py-2 group-hover:flex group-hover:flex-col  hidden duration-500">
            <i className="fa-regular fa-heart mb-3 border-1 p-1 bg-white rounded-full hover:text-red-500 duration-500" />
            <i className="fa-solid fa-basket-shopping  mb-3 border-1 p-1 bg-white rounded-full hover:text-gray-400 duration-500" />
          </div>
          <div>
            <h6 className="text-center text-[10px] opacity-60">Earings</h6>
            <p className="text-center text-[10px] tracking-wider">
              Circle of Light Heart Earings
            </p>
            <p className="text-center text-[10px] font-medium">150.00TL</p>
          </div>
        </div>
        <div className=" relative group">
          <img
            src="./img/bracelet1.png"
            className="w-60 mb-2 mx-auto group-hover:scale-110 group-hover:opacity-50 duration-500"
            alt=""
          />
          <div className="absolute top-0 right-0 px-5 py-2 group-hover:flex group-hover:flex-col  hidden duration-500">
            <i className="fa-regular fa-heart mb-3 border-1 p-1 bg-white rounded-full hover:text-red-500 duration-500" />
            <i className="fa-solid fa-basket-shopping  mb-3 border-1 p-1 bg-white rounded-full hover:text-gray-400 duration-500" />
          </div>
          <div>
            <span className="absolute top-0 left-0 mx-5 my-2 px-2 py-1 text-[10px] bg-orange-300 text-white rounded-full">
              -%31
            </span>
          </div>
          <div>
            <h6 className="text-center text-[10px] opacity-60">Earings</h6>
            <p className="text-center text-[10px] tracking-wider">
              Circle of Light Heart Earings
            </p>
            <p className="text-center text-[10px] font-medium">150.00TL</p>
          </div>
        </div>
        <div className=" relative group">
          <img
            src="./img/ringsGold.png"
            className="w-60 mb-2 mx-auto group-hover:scale-110 group-hover:opacity-50 duration-500"
            alt=""
          />
          <div className="absolute top-0 right-0 px-5 py-2 group-hover:flex group-hover:flex-col  hidden duration-500">
            <i className="fa-regular fa-heart mb-3 border-1 p-1 bg-white rounded-full hover:text-red-500 duration-500" />
            <i className="fa-solid fa-basket-shopping  mb-3 border-1 p-1 bg-white rounded-full hover:text-gray-400 duration-500" />
          </div>
          <div>
            <h6 className="text-center text-[10px] opacity-60">Earings</h6>
            <p className="text-center text-[10px] tracking-wider">
              Circle of Light Heart Earings
            </p>
            <p className="text-center text-[10px] font-medium">150.00TL</p>
          </div>
        </div>
        <div className=" relative group">
          <img
            src="./img/charm.png"
            className="w-60 mb-2 mx-auto group-hover:scale-110 group-hover:opacity-50 duration-500"
            alt=""
          />
          <div className="absolute top-0 right-0 px-5 py-2 group-hover:flex group-hover:flex-col  hidden duration-500">
            <i className="fa-regular fa-heart mb-3 border-1 p-1 bg-white rounded-full hover:text-red-500 duration-500" />
            <i className="fa-solid fa-basket-shopping  mb-3 border-1 p-1 bg-white rounded-full hover:text-gray-400 duration-500" />
          </div>
          <div>
            <span className="absolute top-0 left-0 mx-5 my-2 px-2 py-1 text-[10px] bg-orange-300 text-white rounded-full">
              -%15
            </span>
          </div>
          <div>
            <h6 className="text-center text-[10px] opacity-60">Earings</h6>
            <p className="text-center text-[10px] tracking-wider">
              Circle of Light Heart Earings
            </p>
            <p className="text-center text-[10px] font-medium">150.00TL</p>
          </div>
        </div> */}
      </div>
    </section>
    <HomePageFooter/>
    
  </div>
</>
 
  )
}

export default HomePage