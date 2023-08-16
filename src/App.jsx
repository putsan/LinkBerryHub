import { useEffect, useState } from 'react';
import AddButton from './components/AddButton/AddButton';
import CirclesCanvas from "./components/CirclesCanvas/CirclesCanvas";
import { getXataClient } from './services/xata/xata.js';

function App() {
  const [circlesData, setCirclesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const xata = getXataClient();
        const records = await xata.db.links
          .select(["id", "url", "name"])
          .getAll();
        setCirclesData(records);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const handleAddBookmark = (bookmark) => {
    setCirclesData([...circlesData, bookmark]);
  };

  return (
    <div>
      <AddButton onAdd={handleAddBookmark} />
      <CirclesCanvas circlesData={circlesData} />
    </div>
  )
}

export default App;
