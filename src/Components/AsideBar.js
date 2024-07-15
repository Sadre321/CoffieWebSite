import ExpandablePanel from "./ExpandablePanel";

const AsideBar = () => {
  return (
      <div className="flex flex-col basis-2/12 relative h-screen">
          {/* Admin İnfo */}
          <div className="border-b-2 flex flex-col items-center pt-11 px-2">
            {/* admin photo area */}
            <div className="border border-gray-300 p-1  rounded-full mb-2">
              <div className="rounded-full bg-gray-200 w-24 h-24"></div>
            </div>
            {/* admin content */}
            <span className="text-gray-400">User</span>
            <span className="text-amber-800">Admin</span>
            <div className="w-2 h-1 mb-5"></div>
          </div>
          {/* menu items */}
          <div className="border-gray-500 flex flex-col">
            <ExpandablePanel MenuTitle="Kahveler" MenuItems={["Ekle", "Liste"]} />
            <ExpandablePanel
              MenuTitle="Kategoriler"
              MenuItems={["Ekle", "Liste"]}
            /> 
          </div>
        </div>
  );
};

export default AsideBar;
