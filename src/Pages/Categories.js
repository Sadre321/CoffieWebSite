import React, { useContext } from 'react'
import JsonContext from '../Context/JsonContext'
import CategoriesItems from '../Components/CategoriseItems'

const Categories = () => {

  const {categories} = useContext(JsonContext)

  return (
    <>
      <header className="px-5 py-4 border-b mb-5 border-gray-100">
        <h2 className="font-semibold text-gray-800">Categories </h2>
      </header>
      <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-100">
                <tr>
                  <th className="p-2 whitespace-nowrap"></th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Kategori</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Düzenle</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {
                  categories.map((category)=>{
                    return <CategoriesItems key={category.id} category={category}/>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
    </>
  )
}

export default Categories