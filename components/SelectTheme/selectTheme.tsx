import { UseTheme } from "@/theme/useTheme";
import themes from '@/theme/schema.json';

const SelectTheme = ({setSelectedTheme}) => {

    const {setTheme} = UseTheme();

    const DefTheme = (name) => {
        setTheme(name)
        setSelectedTheme(themes.data[name])
    }

    return(
        <div>
            <h1 style={{color:'black'}}>READDD</h1>
            <button onClick={() => DefTheme('default')}>Tema default</button>
            <button onClick={() => DefTheme('light')}>Outro Tema </button>
        </div>
    )
}

export default SelectTheme
