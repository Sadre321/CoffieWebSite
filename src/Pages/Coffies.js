import React, { useContext } from 'react'
import JsonContext from '../Context/JsonContext'
import CoffiesItems from '../Components/CoffiesItems'

const Coffies = ({edit}) => {

    const {coffies} = useContext(JsonContext)

    
  return (
    <>
      <div className="flex flex-col h-full">
        <header className="px-5 py-4 border-b mb-5 border-gray-100">
          <h2 className="font-semibold text-gray-800">Coffies </h2>
        </header>
        {/* table area */}
        <div className="p-3">
          {
            edit?<></>:<div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-100">
                <tr>
                  <th className="p-2 whitespace-nowrap"></th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">ÜRÜN İSMİ</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">KATEGORİ</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-end">SEÇENEKLER</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {
                    coffies.map((coffie)=>{
                        return <CoffiesItems key={coffie.id} coffie={coffie}/>
                    })
                }
                
              </tbody>
            </table>
          </div>
          }
        </div>
      </div>
    </>
  )
}

export default Coffies