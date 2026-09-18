import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React from 'react'

function Video() {
  return (
    <>
    <section>
<div className='flex gap-[100px] mt-[100px]  flex-wrap lg:ml-[200px]' style={{textAlign:"center"}}>
    <Typography sx={{ fontSize: "40px", width:"550px",fontWeight:"bold" }}>Встречайте — скриншоты и запись экрана  <span className="text-[#7421B0] font-bold">2 B 1</span></Typography>

   <Typography sx={{ color: "gray", width: "400px",lineHeight:"2" }}>Больше не нужно искать две отдельные программы для скриншотов и записи экрана. Screenshoter поможет сделать снимок экрана, записать видео и поделиться им с кем угодно. Можно выделить весь экран, определенную область или активное окно</Typography>
</div>



<div className='flex flex-wrap lg:ml-[160px] gap-[50px] mt-[50px] ml-[70px] '>
<Card  sx={{border:"1px solid gray", width:"250px",padding:"20px", borderRadius:"10px", backgroundColor:"#7421B0",color:"white"}}>
    <img src="../../public/001-cursor.png" alt="" />
    <Typography sx={{marginTop:"20px"}}>Снимок и запись экрана в 1 клик</Typography>
</Card>
<Card sx={{border:"1px solid gray", width:"250px",padding:"20px", borderRadius:"10px"}}>
    <img src="../../public/003-save.png" alt="" />
    <Typography sx={{marginTop:"20px"}}>Моментальная
ссылка на файл</Typography>
</Card>

<Card sx={{border:"1px solid gray", width:"250px",padding:"20px", borderRadius:"10px"}}>
    <img src="../../public/001-cursor.png" alt="" />
    <Typography sx={{marginTop:"20px"}}>Удобный
редактор снимков</Typography>
</Card>

<Card sx={{border:"1px solid gray", width:"250px",padding:"20px", borderRadius:"10px"}}>
    <img src="../../public/002-heart.png" alt="" />
    <Typography sx={{marginTop:"20px"}}>Бесплатно
и без регистрации</Typography>
</Card>

</div>


    </section>
    
    </>
  )
}

export default Video