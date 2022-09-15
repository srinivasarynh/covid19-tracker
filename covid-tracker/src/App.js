import styles from './App.module.css';
import { Cards, Charts, CountryPicker} from './components';
import axios from 'axios';
import { useEffect, useState } from 'react';
 
function App() {
  const [country, setCountry] = useState('india');
  const [data, setData] = useState([]);
  const [countriesData, setCountryData] = useState([]);

  useEffect(() => {    
    const fetchData = async () => {
      try {   
          const {data} = await axios.get(`https://api.covid19api.com/summary`);

             let modifiedData = {
              date: data?.Global?.Date,
              newConfirmed: data?.Global?.NewConfirmed,
              newDeaths: data?.Global?.NewDeaths,
              newRecovered: data?.Global?.NewRecovered,
              totalConfirmed: data?.Global?.TotalConfirmed,
              totalDeaths: data?.Global?.TotalDeaths,
              totlaRecovered: data?.Global?.TotalRecovered,
            }

            const countryData = await axios.get(`https://api.covid19api.com/dayone/country/${country}`);

            let modifiedCountryData = countryData.data.map(res => ({
              active: res?.Active,
              confirmed: res?.Confirmed,
              country: res?.Country,
              date: res?.Date,
              deaths: res?.Deaths,
              id: res?.ID,
              province: res?.Province,
              recovered: res?.Recovered,
            }))

            
          setData(modifiedData);
          setCountryData(modifiedCountryData);
      } catch (err) {
        console.log(err);
      }
  }

  fetchData();
  }, [country]);

  const handleChange = async (countryy) => {
    setCountry(countryy);
  }

  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <CountryPicker handleChange={handleChange}/>
      <Charts data={countriesData} />
    </div>
  );
}

export default App;
