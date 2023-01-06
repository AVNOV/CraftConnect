type TabsProps = {
  tabNames: string[];
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
};

export default function Tabs(props: TabsProps) {
  const { tabNames, selectedTab, setSelectedTab } = props;

  return (
    <div className="flex justify-between">
      {tabNames.map(tabName => (
        <div
          key={tabName}
          className={`p-2 cursor-pointer font-bold text-sm ${
            tabName === selectedTab ? "bg-white-50% text-gray-800" : "bg-grey-light"
          } ${tabName === "Particulier" ? "rounded-tl-lg" : "rounded-tr-lg"}`}
          onClick={() => setSelectedTab(tabName)}
        >
          {tabName}
        </div>
      ))}
    </div>
  );
}
