import { Select, MenuItem } from '@mui/material'

function SMSelect(props) {

    const { label, val } = props

    return <>
        <label>{label}</label> <br />
        <Select value='1' displayEmpty>

            <MenuItem value={1} ></MenuItem>

        </Select>
    </>
}

export default SMSelect;