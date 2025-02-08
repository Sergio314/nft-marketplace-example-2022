interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = ({children, value, index}: TabPanelProps): JSX.Element => {

  return (
    <div hidden={value !== index}>
      {value === index && (
        <>{children}</>
      )}
    </div>
  );
};

export default TabPanel;
