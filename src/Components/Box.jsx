import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import React from 'react'

function Box() {
    return (
        <>
            <div className='flex flex-wrap lg:ml-[160px] gap-[50px] mt-[50px] ml-[70px] '>
                <Card sx={{ border: "1px solid gray", width: "250px", padding: "20px", borderRadius: "10px", backgroundColor: "#7421B0", color: "white" }}>
                    <img src="../../public/chat 1.png" alt="" />
                    <Typography sx={{ marginTop: "20px" }}>Снимок и запись экрана в 1 клик</Typography>
                </Card>
                <Card sx={{ border: "1px solid gray", width: "250px", padding: "20px", borderRadius: "10px" }}>
                    <img src="../../public/003-save.png" alt="" />
                    <Typography sx={{ marginTop: "20px" }}>Моментальная
                        ссылка на файл</Typography>
                </Card>

                <Card sx={{ border: "1px solid gray", width: "250px", padding: "20px", borderRadius: "10px" }}>
                    <img src="../../public/001-cursor.png" alt="" />
                    <Typography sx={{ marginTop: "20px" }}>Удобный
                        редактор снимков</Typography>
                </Card>

                <Card sx={{ border: "1px solid gray", width: "250px", padding: "20px", borderRadius: "10px" }}>
                    <img src="../../public/crayon 1.png" alt="" />
                    <Typography sx={{ marginTop: "20px" }}>Бесплатно
                        и без регистрации</Typography>
                </Card>

            </div>

        </>
    )
}

export default Box