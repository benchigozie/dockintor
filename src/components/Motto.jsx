import stethoscopeIcon from '../assets/images/stethoscope.png';
import chat2Icon from '../assets/images/chat2.png';
import shellIcon from '../assets/images/shell.png';
import flowerIcon from '../assets/images/flower.png';

function Motto() {
    return (
        <section>
            <div className='max-w-[1330px] mx-auto text-center py-18 flex flex-col gap-18'>
                <h3 className='text-4xl font-bold font-Rozha'>Reliable. Responsive. Compassionate.</h3>
                <div className='grid grid-cols-4 gap-2 place-items-center w-full'>
                    <img src={stethoscopeIcon} alt="" />
                    <img src={shellIcon} alt="" />
                    <img src={chat2Icon} alt="" />
                    <img src={flowerIcon} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Motto