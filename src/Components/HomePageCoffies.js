import React from 'react'

const HomePageCoffies = ({coffie,categories}) => {
  return (

    <div className=" relative group">
          <img
            src={`img/${coffie.img}`}
            className="w-60 mb-2 mx-auto group-hover:scale-110 group-hover:opacity-50 duration-500"
            alt=""
          />
          <div>
            <h6 className="text-center text-[10px] opacity-60">{coffie.name}</h6>
            <p className="text-center text-[12px] tracking-wider text-amber-800">
            {categories.length>0?categories.map((c) => {
                if (c.id === coffie.category_id) {
                  return c.name;
                }
              }):<p>Ulaşılamıyor</p>}
            </p>
          </div>
        </div>
  )
}

export default HomePageCoffies