import React, {useEffect, useState} from "react";
import styles from './countryPicker.module.css';
import FromControl from "@mui/material/FormControl";
import { NativeSelect } from "@mui/material";
import axios from "axios";

const CountryPicker = ({handleChange}) => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const fetchCountry = async () => {
            const countries = await axios.get(`https://api.covid19api.com/countries`);

            setCountry(countries.data);
        }

        fetchCountry();
    }, []);
    return (
        <FromControl className={styles.fromControl}>
            <NativeSelect defaultValue='' onChange={e => handleChange(e.target.value)}>
                <option value="global">Global</option>
                {
                    country.map((name) => (<option key={name.ISO2} value={name?.Country}>{name?.Country}</option>))
                }
            </NativeSelect>
        </FromControl>
    )
}

export default CountryPicker;