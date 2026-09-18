import Typography from '@mui/material/Typography'
import React from 'react'

function Click() {
    return (
        <>
            <section>
                <div className='flex flex-wrap gap-[100px]' style={{alignItems:"center"}}>
                    <img src="../../public/gif.png" alt="" />

                    <div className='w-[400px]'>
                        <Typography sx={{ fontWeight: "bold",fontSize:"30px" }}>Запись экрана</Typography>
                        <Typography sx={{ color: "gray" , marginTop:"15px" }}>Недостаточно снимков? Запишите происходящее на экране со своим голосом или звуком системы. </Typography>
                        <Typography sx={{ color: "gray" , marginTop:"15px" }}>Достаточно нажать две кнопки мыши, выделить необходимую область и начнется запись видео</Typography>
                    </div>
                </div>


                 <div className='flex flex-wrap gap-[100px]' style={{alignItems:"center"}}>
                   

                    <div className='w-[400px] lg:ml-[200px]'>
                        <Typography sx={{ fontWeight: "bold",fontSize:"30px" }}>Мгновенная ссылка</Typography>
                        <Typography sx={{ color: "gray" , marginTop:"15px" }}>Недостаточно снимков? Запишите происходящее на экране со своим голосом или звуком системы. </Typography>
                        <Typography sx={{ color: "gray" , marginTop:"15px" }}>Достаточно нажать две кнопки мыши, выделить необходимую область и начнется запись видео</Typography>
                    </div>

                     <img src="../../public/gif.png" alt="" />
                </div>


                 <div className='flex flex-wrap gap-[100px]' style={{alignItems:"center"}}>
                    <img src="../../public/gif.png" alt="" />

                    <div className='w-[400px]'>
                        <Typography sx={{ fontWeight: "bold",fontSize:"30px" }}>В один клик</Typography>
                        <Typography sx={{ color: "gray" , marginTop:"15px" }}>Мгновенное получение ссылки на снимок
или видео. Вы только нажали Enter, а ссылка уже
в буфере обмена. Перейдя по ссылке, можно будет посмотреть ваш снимок или записанное видео</Typography>
                        <Typography sx={{ color: "gray" , marginTop:"15px" }}>Достаточно нажать две кнопки мыши, выделить необходимую область и начнется запись видео</Typography>
                    </div>
                </div>


                 <div className='flex flex-wrap gap-[100px] lg:ml-[200px]' style={{alignItems:"center"}}>

                    <div className='w-[400px]'>
                        <Typography sx={{ fontWeight: "bold",fontSize:"30px" }}>И редактор снимков</Typography>
                        <Typography sx={{ color: "gray" , marginTop:"15px" }}>Более 5 инструментов для редактирования. Выделяете область и редактируете. </Typography>
                        <Typography sx={{ color: "gray" , marginTop:"15px" }}>Если неверно выбрали область — не беда, можно без проблем её передвинуть и/или изменить размер</Typography>
                    </div>

                     <img src="../../public/gif.png" alt="" />
                </div>


            </section>

        </>
    )
}

export default Click