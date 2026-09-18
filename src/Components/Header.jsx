import React from 'react'
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';




function Header() {
    return (
        <>
            <div style={{ alignItems: "center" }} className="flex align-middle gap-[50px] p-[50px]">
                <img src="../../public/logo 1.png" alt="" />
                <Typography className="text-[#565656] font-bold " style={{ marginLeft: "300px" }}>Функции</Typography>
                <Typography className="text-[#565656] font-bold">Преимущества</Typography>
                <Typography className="text-[#565656] font-bold">Преимущества</Typography>
                <Typography className="text-[#565656] font-bold">Преимущества</Typography>


                <FormControl>
                    <InputLabel>Age</InputLabel>
                    <Select style={{ width: "100px" }}>
                        <MenuItem>RU</MenuItem>
                        <MenuItem>ENG</MenuItem>
                    </Select>

                </FormControl>
            </div>

            <img src="../../public/Color=White-Glossy.png" alt="" />


            <section className="flex " style={{alignItems:"center",padding:"50px",marginTop:"-200px"}} >
                <div className="flex flex-col gap-y-[50px]">
                    <Typography sx={{ fontSize: "40px", width:"550px",fontWeight:"bold" }}>Делайте снимки и записывайте экран <span className="text-[#7421B0] font-bold">в 1 клик</span></Typography>

                    <Typography sx={{ color: "gray", width: "400px",lineHeight:"2" }}>Вместе со Screenshoter можно в один клик сделать снимок или записать происходящее на экране ПК,  чтобы поделиться с кем угодно</Typography>

                    <Button sx={{ backgroundColor: "#7421B0", color: "white",width:"200px",padding:"15px", fontWeight:"bold"}}>Скачать бесплатно</Button>
                </div>


                <div>
                    <img style={{position:'absolute',marginTop:"100px",marginLeft:"20px"}} src="../../public/example 1.png" alt="" />
                    <img className="ml-[265px] mt-[-0px]" src="../../public/Rectangle 1 (1).png" alt="" />
                </div>

            </section>

        </>

    )
}

export default Header